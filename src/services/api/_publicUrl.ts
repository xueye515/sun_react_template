import { base } from './_base';
const { HOST, PublicPath, apiPrefix } = base;

const HOSTPro = `http://127.0.0.1:3000`;
// const HOSTPro = `${HOST}/api`;
export const publicUrl = {

  //跨域测试
  getList: `${HOSTPro}/sun/list`,
  getUsersInfo: `${HOSTPro}/users/info`,

  //退出登录
  UsersLogOut: `${HOSTPro}/users/logout`,

};
