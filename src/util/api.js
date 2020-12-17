import requestAll from './request.js'
console.log(requestAll)
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
    /*
    * 会员登录注册
    */
    // 会员用户名登陆
    userlogin(account,password){
      let data = {
        account:account,
        password:password
      }
      return requestAll.requset(baseUrl + '/api/user/login', data);
    },
    // 会员注册
    userregister(mobile,password,code){
      let data = {
        mobile:mobile,
        password:password,
        code:code
      }
      return requestAll.requset(baseUrl + '/api/user/register', data);
    },
    // 会员手机号登陆
    usermobilelogin(mobile,captcha){
      let data = {
        mobile:mobile,
        captcha:captcha
      }
      return requestAll.requset(baseUrl + '/api/user/mobilelogin', data);
    },
    //验证码获取
    userverification(nub){
            let data = {
                    id : nub
            }
             return requestAll.requset(baseUrl + '/api/user/captcha_src',data);
    },
    //登录广告
    uservertisement(){
            return requestAll.requset(baseUrl + '/api/banner/userlogon');
    },
    //注册广告
    userregistervertisement(){
            return requestAll.requset(baseUrl + '/api/banner/userregister');
    },
    /*
    * 首页
    */
    // 首页顶部三级分类数据
    getindextop(){
      return requestAll.requset(baseUrl + '/api/index/category_three');
    },
    // 首页商标转让数据
    getindexbrand(){
      return requestAll.requset(baseUrl + '/api/index/transaction60');
    },
    // 首页专利交易数据
    getidnexdeal(){
      return requestAll.requset(baseUrl + '/api/index/transaction61');
    },
    // 首页软著交易数据
    getidnexsoft(){
      return requestAll.requset(baseUrl + '/api/index/transaction62');
    },
    // 首页新闻中心
    getindexnew(){
      return requestAll.requset(baseUrl + '/api/index/news');
    },
    /*
    * 金融中心
    */
    // 金融中心详情
    getfinancialdetiles(id){
      return requestAll.requset(baseUrl + '/api/financial/details');
    },
    /*
    * 知识产权交易(商标交易)
    */
    // 商标列表数据
    /**
     * category_id 行业选择
     * hot 热门分类
     * fee 价格
     * is_exclusive 独家
     * combination 组合
     * strlenlength 字符长度
     */
    gettrademarklist(data){
      return requestAll.requset(baseUrl + '/api/trademark/trademark_list', data);
    },
    // 商标筛选数据
    gettrademarkcondition(){
      return requestAll.requset(baseUrl + '/api/trademark/trademark_condition');
    },
    // 商标详情
    gettrademarkdetiles(id){
      let data ={
        id:id
      }
      return requestAll.requset(baseUrl + '/api/Trademark/details',data);
    },
    //商标广告
    gettrademarkadvertisement(){
      return requestAll.requset(baseUrl + '/api/banner/trademark');
    },
    /*
    * 知识产权交易(专利交易)
    */
    // 中心专利数据列表
    getPatentslist(data){

      return requestAll.requset(baseUrl + '/api/Patents/patents_list',data);
    },
    // 专利筛选列表
    getPatentsconditions(){
      return requestAll.requset(baseUrl + '/api/patents/patents_condition');
    },
    // 专利详情
    getPatentscondition(id){
      let data ={
        id:id
      }
      return requestAll.requset(baseUrl + '/api/Patents/details',data);
    },
    getPatentsadvertisement(){
            return requestAll.requset(baseUrl + '/api/banner/patents');
    },
    //专利广告
    /*
    * 知识产权交易(版权交易)
    */
    // 版权列表
    getCopyrightlist(data){
      return requestAll.requset(baseUrl + '/api/Copyright/copyright_list',data);
    },
    // 版权列筛选数据
    getCopyrightcondition(){
      return requestAll.requset(baseUrl + '/api/Copyright/copyright_condition');
    },
    //版权广告
    getCopyrightvertisement(){
            return requestAll.requset(baseUrl + '/api/banner/copyright');
    },
    /*
    * 技术转让
    */
    // 技术转移列表
    gettechnologylist(data){
      return requestAll.requset(baseUrl + '/api/technology/lists',data);
    },
    // 技术转移筛选条件
    gettechnologycondition(){
      return requestAll.requset(baseUrl + '/api/technology/condition');
    },
    // 技术详细
    gettechnologydetiles(id){
      let data ={
        id:id
      }
      return requestAll.requset(baseUrl + '/api/technology/details',data);
    },
    /*
    * 页面底部数据
    */
    getbottom(){
      return requestAll.requset(baseUrl + '/api/index/footerdata');
    },
    /*
    * 伊甸园简介
    */
    getydbrief(){
      return requestAll.requset(baseUrl + '/api/index/ydbrief');
    },
    /*
    * 页面导航数据
    */
    getnavbar(){
      return requestAll.requset(baseUrl + '/api/index/navigation');
    },
    /*
    * 服务中心
    */
    // 服务首页数据
    severindex(){
      return requestAll.requset(baseUrl + '/api/service/index');
    },
    // 服务中心分类数据
    severcategory(){
      return requestAll.requset(baseUrl + '/api/service/category');
    },
    // 服务中心详情
    severdetiles(id){
      let data = {
        id:id
      }
      return requestAll.requset(baseUrl + '/api/service/details', data);
    },
        severproblem(){
                return requestAll.requset(baseUrl + '/api/index/advantage');
        },
    /*
    * 关于我们
    */
    // 关于我们分类数据 】
    getaboutcat(){
      return requestAll.requset(baseUrl + '/api/aboutus/category');
    },
    // 关于我们详情
    getaboutdetiles(id){
     let data={
        id:id
      }
      return requestAll.requset(baseUrl + '/api/aboutus/details', data);
    },


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
