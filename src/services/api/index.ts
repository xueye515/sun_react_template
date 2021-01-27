/* 约定默认get请求，空格前面是其他请求方式
 : '/', get请求
 createUser: 'POST /createUser', post请求
*/

import { base } from './_base';
import { publicUrl } from './_publicUrl';

export const api = {
  base,
  publicUrl,
};
