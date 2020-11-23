import requestAll from './request.js'
// 本地后台地址
const baseUrl = '/dev-api';
// 第三方地址 如：高德 腾讯 天气api等接口
const webUrl = '/dsf-api';
// 存放所有请求
const api={
  /*
    请求实例: 
    参数根据接口需要定义
      getBanner(test_one,test_two){
          // 参数
          let data = {
              status:test_one,
              option:test_two
          }
          return requestAll.requset(baseUrl + '/index/index/volunteerlist', data);
      }, 
  */

  // 测试请求
  getBanner(status){
    // 参数
    let data = {
        status:status
    }
    return requestAll.requset(baseUrl + '/index/index/volunteerlist', data);
  },
  
}

export default api;
