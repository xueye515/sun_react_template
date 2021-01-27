// 根据环境做不同的域名
const ENV = process.env.NODE_ENV === 'development';
// const HOST = ENV ? '//49.232.167.138' : '//49.232.167.138';
const HOST = ENV ? '' : '';

const moduleUrl = 'smartRD';

// 公共地址  通过权限获取表单信息等
const PublicPath = `${HOST}/login`;

//  excel 下载接口
const DownExcel = `${HOST}/downexcel/downexcel?uuid=`;
const specialDownExcel = `${HOST}/downexcel/downSpecialExcel?uuid=`;

// server
const apiPrefix = `${HOST}/${moduleUrl}`;

export const base = {
  HOST,
  PublicPath,
  DownExcel,
  specialDownExcel,
  apiPrefix,
  moduleUrl,
  ENV,
};
