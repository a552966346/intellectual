import axios from 'axios'

/* 请求封装 
* url : 请求地址
* data : 请求附带参数
* method : 请求方式 默认为post方式 如果需要使用get方式传入method 参数
*/
function requset(url, data = {}, method = 'post'){
  return new Promise((resolve, reject)=>{
    axios({
      method: method,
      url: url,
      data:data,
      headers: {
        'Content-Type': 'application/json'
      }
    })
    .then(res =>{
      // 请求成功
      resolve(res.data)
    })
    .catch(err =>{
      // 请求失败
      reject(err)
    })
  })
}