<template>
  <div class="copyright_page">
        <span>共14页</span>
        <button class="copyright_prev">首页</button>
        <button class="copyright_prev">上一页</button>
        <button class="copyright_btn">1</button>
        <button class="copyright_btn">2</button>
        <button class="copyright_btn">3</button>
        <button class="copyright_btn">4</button>
        <button class="copyright_btn">5</button>
        <span>....</span>
        <button class="copyright_btn">14</button>
        <button class="next">下一页</button>
        <button class="last">尾页</button>
        <span>
            到第
            <input type="text">
            页
        </span>
        <button>确定</button>
  </div>
</template>

<script>
export default {
    data(){
        return {

        }
    }
}
</script>

<style scoped>
.copyright_page{
    background: #fff;
    padding: 20px 30px;
    text-align: left;
    width: 1200px;
    margin:10px auto 30px;
    line-height: 29px;
    font-size: 14px;
    color: #999;
}
.copyright_page span{
    color: #666;
    font-size: 14px;
    padding-right: 8px;
    height: 31px;
    line-height: 31px;
}
.copyright_page button{
    color: #666;
    font-size: 14px;
    padding: 5px 10px;
    margin-right: 8px;
    background: #fff;
    border: 1px solid #f0f0f0; 
    outline: none;
}
.copyright_page input{
    color: #666;
    font-size: 14px;
    width: 40px;
    height: 31px;
    line-height: 31px;
    border: 1px solid #f0f0f0;
    outline: none;
    padding: 0 5px;
    outline: none;
}
button:hover{
    background-color:#3b5791 ;
    color: #fff;
    outline: none;
}
</style>