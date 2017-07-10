let config = {};
//__DEV__为React Native全局变量，用于指示当前运行环境是否是开发环境,
if(__DEV__){
  config = {
    version: 1.0,
    urlPath: 'http://192.168.0.117:8080/fishsea/',
    pagePath: 'http://192.168.0.117/seatourpage/',
    wechatAppID: 'wx6ce431662d339a23'
  }
}else{
  config = {
    version: 1.0,
    urlPath: 'http://www.gotosea.com.cn/fishsea/',
    pagePath: 'http://www.gotosea.com.cn/seatourpage/',
    wechatAppID: 'wx6ce431662d339a23'
  }
}
global.config = config;
export default config;
