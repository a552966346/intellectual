import requestAll from './request.js'
// console.log(requestAll)
// 本地后台地址
const baseUrl = '/dev-api';
// 第三方地址 如：高德 腾讯 天气api等接口
const webUrl = '/dsf-api';
// 存放所有请求
const api = {
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
    userlogin(account, password) {
        let data = {
            account: account,
            password: password
        }
        return requestAll.requset(baseUrl + '/api/user/login', data);
    },
    // 会员注册
    userregister(mobile, password, code) {
        let data = {
            mobile: mobile,
            password: password,
            code: code
        }
        return requestAll.requset(baseUrl + '/api/user/register', data);
    },
    // 会员手机号登陆
    usermobilelogin(mobile, captcha) {
        let data = {
            mobile: mobile,
            captcha: captcha
        }
        return requestAll.requset(baseUrl + '/api/user/mobilelogin', data);
    },
    //验证码获取
    userverification(nub) {
        let data = {
            id: nub
        }
        return requestAll.requset(baseUrl + '/api/user/captcha_src', data);
    },
    //登录广告
    uservertisement() {
        return requestAll.requset(baseUrl + '/api/banner/userlogon');
    },
    //注册广告
    userregistervertisement() {
        return requestAll.requset(baseUrl + '/api/banner/userregister');
    },
    /*
     * 首页
     */
    // 首页顶部三级分类数据
    getindextop() {
        return requestAll.requset(baseUrl + '/api/index/category_three');
    },
    // 首页商标转让数据
    getindexbrand() {
        return requestAll.requset(baseUrl + '/api/index/transaction60');
    },
    // 首页专利交易数据
    getidnexdeal() {
        return requestAll.requset(baseUrl + '/api/index/transaction61');
    },
    // 首页软著交易数据
    getidnexsoft() {
        return requestAll.requset(baseUrl + '/api/index/transaction62');
    },
    // 首页新闻中心
    getindexnew() {
        return requestAll.requset(baseUrl + '/api/index/news');
    },
    //首页合伙人
    getindexpart(name,mobile){
            let data = {
                    name:name,
                    mobile:mobile
            }
             return requestAll.requset(baseUrl + '/api/index/partnerdata',data);
    },
    /*
     * 金融中心
     */
    // 金融中心详情
    getfinancialdetiles(id) {
        let data = {
            id: id
        }
        return requestAll.requset(baseUrl + '/api/financial/details', data);
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
    gettrademarklist(id) {
	    let data
            console.log(id)
	    if(id){
		 data = {
			 category_one:id[0],
			 category_id:id[1],
                         hot:id[2],
                         fee:id[3],
                         is_exclusive:id[4],
                         combination:id[5],
                         strlenlength:id[6],
                         keyword:id[7]
		 }
	    }
        return requestAll.requset(baseUrl + '/api/trademark/trademark_list', data);
    },
    // 交易中心商标转让筛选数据
    gettrademarkcondition() {
        return requestAll.requset(baseUrl + '/api/trademark/trademark_condition');
    },
    // 商标详情
    gettrademarkdetiles(id) {
        let data = {
            id: id
        }
        return requestAll.requset(baseUrl + '/api/Trademark/details', data);
    },
    //商标广告banner
    gettrademarkadvertisement() {
        return requestAll.requset(baseUrl + '/api/banner/trademark');
    },
    /*
     * 知识产权交易(专利交易)
     */
    // 中心专利数据列表
    getPatentslist(id) {
                var data
                if(id){
                      data={
                                      category_id:id[0],
                                      patenttype:id[1],
                                      fee:id[2],
                                      condition:id[3],
                                      strlenlength:id[4],
                                      sell:id[5],
                                      creatime:id[6],
                                      feeorder:id[7],
                                        keyword:id[11],
                                        page:id[12]
                      }
                }
        return requestAll.requset(baseUrl + '/api/Patents/patents_list', data);
    },
    // 专利筛选列表
    getPatentsconditions() {
        return requestAll.requset(baseUrl + '/api/patents/patents_condition');
    },
    // 专利详情
    getPatentscondition(id) {
        let data = {
            id: id
        }
        return requestAll.requset(baseUrl + '/api/Patents/details', data);
    },
    getPatentsadvertisement() {
        return requestAll.requset(baseUrl + '/api/banner/patents');
    },
    //专利广告
    /*
     * 知识产权交易(版权交易)
     */
    // 版权列表
    getCopyrightlist(id) {
            var data
            if(id){
                  data={
                                  category_id:id[0],
                                  meanstype:id[1],
                                  is_exclusive:id[2],
                                  region:id[3],
                                  affiliating:id[4],
                                  chronology:id[5],
                                  scope:id[6],
                                  condition:id[7],
                                  sell:id[8],
                                  creatime:id[9],
                                  feeorder:id[10],
                                  keyword:id[11],
                                  page:id[12]
                  }
            }
        return requestAll.requset(baseUrl + '/api/Copyright/copyright_list', data);
    },
    // 版权列筛选数据
    getCopyrightcondition() {
        return requestAll.requset(baseUrl + '/api/Copyright/copyright_condition');
    },
    //版权广告
    getCopyrightvertisement() {
        return requestAll.requset(baseUrl + '/api/banner/copyright');
    },
    // 版权详情
    getCopyrightconditions(id) {
        let data = {
            id: id
        }
        return requestAll.requset(baseUrl + '/api/Copyright/details',data);
    },
    /*
     * 技术转让
     */
    // 技术转移列表
    gettechnologylist(id) {
            var data
            if(id){
                  data={
                                  category_id:id[0],
                                  territory:id[1],
                                  type:id[2],
                                  maturity:id[3],
                                  means:id[4],
                                  fee:id[5],
                                  clicks:id[6],
                                  feeorder:id[7],
                                  keyword:id[8],
                                  page:id[9]
                  }
            }
        return requestAll.requset(baseUrl + '/api/technology/lists', data);
    },
    // 技术转移筛选条件
    gettechnologycondition() {
                return requestAll.requset(baseUrl + '/api/technology/condition');
    },
    // 技术详细
    gettechnologydetiles(id) {
        let data = {
            id: id
        }
        return requestAll.requset(baseUrl + '/api/technology/details', data);
    },
    /*
     * 个人中心
     */
    // 首页
    getuserIndex() {
        return requestAll.requset(baseUrl + '/api/user/index');
    },
    // 卖家   商标订单
    getuserTrademarkOrder(uid,status) {
           let data={
                    uid:uid,
                    status:status
           }
        return requestAll.requset(baseUrl + '/api/Userorder/trademark_order',data);
    },
    // 卖家   专利订单
    getuserPatentsOrder(uid,status) {
            let data={
                     uid:uid,
                     status:status
            }
        return requestAll.requset(baseUrl + '/api/Userorder/patents_order',data);
    },
    // 卖家   版权订单
    getuserCopyrightOrder(uid,status) {
            let data={
                     uid:uid,
                     status:status
            }
        return requestAll.requset(baseUrl + '/api/Userorder/copyright_order',data);
    },
    //技术转移
    getusertechnology(uid,status) {
            let data={
                     uid:uid,
                     status:status
            }
        return requestAll.requset(baseUrl + '/api/Userorder/technology_order',data);
    },
    // 服务中心
    getuserservicecenter(uid,status) {
            let data={
                     uid:uid,
                     status:status
            }
        return requestAll.requset(baseUrl + '/api/Userorder/service_order',data);
    },
    // 账号设置  收货地址


    /*
     * 页面底部数据
     */
    getbottom() {
        return requestAll.requset(baseUrl + '/api/index/footerdata');
    },
    /*
     * 伊甸园简介
     */
    getydbrief() {
        return requestAll.requset(baseUrl + '/api/index/ydbrief');
    },
    /*
     * 页面导航数据
     */
    getnavbar() {
        return requestAll.requset(baseUrl + '/api/index/navigation');
    },
    /*
     * 服务中心
     */
    // 服务首页数据
    severindex() {
        return requestAll.requset(baseUrl + '/api/service/index');
    },
     // 服务列表筛选
    severcondition() {
        return requestAll.requset(baseUrl + '/api/Service/service_condition');
    },
    // 服务列表筛选列表
    severlist(id,page) {
        let data
        console.log(id)
        if(id){
              // 服务分类。。行业分页。。。服务价格。。。关键字搜索。。。时间排序。。。价格排序
              data = {
               category_one:id[0],//服务分类
               category_id:id[1],//行业分类
                // hot:id[2],
                fee:id[2],//服务价格
                keyword:id[3],//关键字搜索
                creatime :id[4],//时间排序
                feeorder :id[5],//价格排序
                page:id[6]
              }
        }
        return requestAll.requset(baseUrl + '/api/Service/service_list',data);
    },
    // 服务中心极速商标处理
    seversellcategory(){
             return requestAll.requset(baseUrl + '/api/service/fastcategory');
    },
    severfastdatas(id,fee,mobile,code){
            let data = {
                    category_id:id,
                    fee:fee,
                    mobile:mobile,
                    code:code
            }
            return requestAll.requset(baseUrl + '/api/service/fastdata',data);
    },
    // 服务中心分类数据
    severcategory() {
        return requestAll.requset(baseUrl + '/api/service/category');
    },
    // 服务中心详情
    severdetiles(id) {
        let data = {
            id: id
        }
        return requestAll.requset(baseUrl + '/api/service/details', data);
    },
    severproblem() {
        return requestAll.requset(baseUrl + '/api/index/advantage');
    },
    /*
     * 关于我们
     */
    // 关于我们分类数据 】
    getaboutcat() {
        return requestAll.requset(baseUrl + '/api/aboutus/category');
    },
    // 关于我们详情
    getaboutdetiles(id) {
        let data = {
            id: id
        }
        return requestAll.requset(baseUrl + '/api/aboutus/details', data);
    },
    //我要出售  商标  版权  专利
    getsellpost(category_id,fee,mobile,name,number,type,code) {
        let data = {
                category_id:category_id,
                fee:fee,
                mobile:mobile,
                name:name,
                number:number,
                type:type,
                code:code
        }
        return requestAll.requset(baseUrl + '/api/Trademark/selldata',data);
    },
    //商标分类数据
    getselldata() {

        return requestAll.requset(baseUrl + '/api/Trademark/sellcategory');
    },
    //专利分类数据
    getrankingdata() {

        return requestAll.requset(baseUrl + '/api/Patents/sellcategory');
    },
    getrankingpost(name,category_id,number,fee,mobile,code,type) {
        let data = {
                 // 名称,类别,专利号,低价,联系方式,验证码，类型
                 name:name,
                 category_id:category_id,
                 number:number,
                 fee:fee,
                 mobile:mobile,
                 code:code,
                 type:type,
        }
        return requestAll.requset(baseUrl + '/api/Trademark/selldata',data);
    },

    // 测试请求
    getBanner(status) {
        // 参数
        let data = {
            status: status
        }
        return requestAll.requset(baseUrl + '/index/index/volunteerlist', data);
    },
    // 技术转移首页的技术转让
    gettransfer() {
        // 参数
        let data = {
            status: status
        }
        return requestAll.requset(baseUrl + '/api/Technology/indexmake', data);
    },
    // 技术转移首页的最新足球
    getnewneed() {
        // 参数
        let data = {
            status: status
        }
        return requestAll.requset(baseUrl + '/api/Technology/newneed', data);
    },
    // 导航搜索
    getsearch(keyword,type){
            let data = {
                keyword: keyword,
                type:type,
                // page:page
            }
            return requestAll.requset(baseUrl + '/api/index/search', data);
    },
     // 添加购物车
     getshop(product_id,type,number,uid){
        let data = {
            product_id: product_id,
            type:type,
            number:number,
            uid:uid
        }
        return requestAll.requset(baseUrl + '/api/order/addcart', data);
    },
     // 购物车数据
     shopdata(uid){
        let data = {
            uid:uid
        }
        return requestAll.requset(baseUrl + '/api/order/datacart', data);
    },
    // 删除购物车数据
    deletecart(ids,uid){
        let data = {
            ids:ids,
            uid:uid
        }
        return requestAll.requset(baseUrl + '/api/order/deletecart', data);
    },
    // 创建订单
    createorder(ids,type,number,uid){
        let data = {
            ids:ids,
            type:type,
            number:number,
            uid:uid,
            // total_fee:total_fee
        }
        return requestAll.requset(baseUrl + '/api/order/createorder', data);
    },
    //新聞聯係
    getnews(id){
        let data = {
            id:id
        }
        return requestAll.requset(baseUrl +'/api/index/newsdetails',data);
    },
    // 技术转移推荐
    hotnews(){
        return requestAll.requset(baseUrl + '/api/Technology/hotdata');
    },
    getnewsnew(){
        return requestAll.requset(baseUrl + '/api/index/randomnews');
    },
    //热门推荐
    hottui(){
        return requestAll.requset(baseUrl + '/api/Technology/hotrecommend');
    },
    //版权分类
    getbanquan(){
             return requestAll.requset(baseUrl + '/api/Copyright/sellcategory');
    },
    //收藏
    getCollection(product_id,type,uid){
            let data={
                    uid:uid,
                    product_id:product_id,
                    type:type
            }
             return requestAll.requset(baseUrl + '/api/Userorder/add_collect',data);
    },
    //取消收藏
    getdelCollection(id,uid){
            let data={
                    id:id,
                    uid:uid
            }
             return requestAll.requset(baseUrl + '/api/Userorder/uncollect',data);
    },
    //产品收藏
    getallCollection(uid){
            let data={
                    uid:uid
            }
            return requestAll.requset(baseUrl + '/api/Userorder/collect',data);
    },
    getuseindex(uid){
            let data={
                    uid:uid
            }
            return requestAll.requset(baseUrl + '/api/userorder/allorder',data);
   },
    //投诉建议
    complaint(opinions,appellation,mobile,status){
            let data={
                opinions:opinions,
                appellation:appellation,
                mobile:mobile,
                status:status
            }
            return requestAll.requset(baseUrl + '/api/opinion/opinion',data);
    },
    //站内消息
    usermessage(uid){
            let data={
                    uid:uid
            }
            return requestAll.requset(baseUrl + '/api/message/getlist',data);
    },
    //消息已读
    usermessageread(uid,id){
            let data={
                    uid:uid,
                    rec_id:id
            }
            return requestAll.requset(baseUrl + '/api/message/setMessageForRead',data);
    },
    //消息删除
    userdelemsg(uid,id){
            let data={
                    uid:uid,
                    rec_id:id
            }
            return requestAll.requset(baseUrl + '/api/message/deletedMessage',data);
    },
    // 卖家商标分类
    shopsbclass(){
             return requestAll.requset(baseUrl + '/api/seller/category');
    },
    //商标信息添加
    shiosbadd(category_id,number,name,fee,summarize,images){
            let data={
                    category_id:category_id  ,//商标大类
                    number:number ,//商标注册号
                    name:name,//专利注册号
                    fee:fee,//价格
                    summarize:summarize,//创意说明
                    images:images,//图片

            }
             return requestAll.requset(baseUrl + '/api/seller/add_patents',data);
    },
    userauthentication(uid,realname,idnumber,idfront,idrear,idhand,bank,subbranch,province,city,cardnumber,type,email,mobile,captcha){
            let data={
                    uid:uid,
                    realname:realname,//真实姓名
                    idnumber:idnumber,//身份证/营业执照
                    idfront:idfront,//身份证人面像
                    idrear:idrear,//身份证国徽
                    idhand:idhand,//身份证手持
                    bank:bank,//开户银行
                    subbranch:subbranch,//支行名称
                    province:province,//省
                    city:city,//市
                    cardnumber:cardnumber,//卡号
                    type:type,//类型
                    email:email,
                    mobile:mobile,
                    captcha:captcha
            }
            return requestAll.requset(baseUrl + '/api/account/attestation',data);
    },
    areadata(){
            return requestAll.requset(baseUrl + '/api/account/areadata');
    },
    citydata(id){
            let data={
                    pid:id
            }
          return requestAll.requset(baseUrl + '/api/account/citydata',data);
    }
}


export default api;
