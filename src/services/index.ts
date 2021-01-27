import request from './request';
import { api } from './api/index';
const { base, ..._api } = api;
const { apiPrefix } = base;

const gen = (params: string) => {
  let url = params;
  let method = 'GET';

  const paramsArray = params.split(' ');
  if (paramsArray.length === 2) {
    method = paramsArray[0];
    url = paramsArray[1];
  }

  return function(body: any) {
    return request(url, {
      body,
      method,
    });
  };
};
const APIFunction = {} as any;
for (const key in _api) {
  // 防止遍历原型链
  if (_api.hasOwnProperty(key)) {
    let _key = _api[key as keyof typeof _api];
    const value: any = {};
    const value2: any = {};
    for (const i in _key) {
      // 防止遍历原型链
      if (_key.hasOwnProperty(i)) {
        value[i as keyof typeof _key] = gen(_key[i as keyof typeof _key]);
      }
    }
    APIFunction[key] = value;
  }
}

export default APIFunction;
