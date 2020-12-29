<template>
    <div class="message">
        <div class="message_top">
            <div class="top_text">我的消息</div>
        </div>
        <div class="message_con">
            <ul class="con_t">
                <li class="con_t_item" v-for="(item,i) in titles" :key="i"
                v-bind:class="{active:i == num}"
                @click="tab(i)">{{item}}</li>
                <li class="con_t_del">
                    <div class="t_del" @click="delet" v-show="!chex">
                        <img src="../../../static/img/usercenter/del.png" alt="">
                        <div class="del">批量删除</div>
                    </div>
                    <div class="t_del" @click="chexdel" v-show="chex">
                        <el-button type="primary">确认删除</el-button>
                    </div>
                </li>
            </ul>

            <div class="content" v-show="isnew.length==0">
                <div class="content_c" >
                    <img src="../../../static/img/usercenter/nomessage.png" alt="">
                    <p>您现在还没有收到信息哦~</p>
                    <button class="top_shopcar">去首页看看</button>
                </div>
            </div>
            <div class="content_two" id="buy_con">
                        <div class="message_text" v-for="(item,index) in isnew" >
                                <el-checkbox v-model="checked[index]" @change="chexabout(item.message_id)" v-show="chex"></el-checkbox>
                                <div @click="read(item.message_id)">
                                        <div class="title">
                                                <p></p>
                                                <h3>{{item.messagenotice.message_title}}</h3>
                                                <span v-if="item.is_see==1" style="color: green;">已读</span>
                                                <span v-if="item.is_see==0" style="color: red;">未读</span>
                                        </div>
                                        <p v-html="item.messagenotice.message_content"></p>
                                        <div class="bottom">
                                                <p v-if="item.messagenotice.message_type=='user'">类型：个人</p>
                                                <p>时间：{{getLocalTime(item.createtime)}}</p>
                                        </div>
                                </div>

                        </div>
             </div>
        </div>
    </div>
</template>
<script>
        import { Loading } from 'element-ui';
export default{
    data(){
        return{
            msg:'这是测试内容',
            tabPosition: 'left',
            titles:["全部消息","未读消息","已读消息"],
            num:0,
            isnew:[],
            chex:false,
            checked:[],
            ischex:''
            // Unread:[],
            // Read:[],
              }
   },
   watch:{
           $route(to, from){
           	this.num=this.$route.query.type
                console.log(this.num)
                   this.news(this.num)
           }
   },
   mounted(){
           console.log(this.num)
           this.$nextTick(function(){
                    this.news(this.num)
           })
          
   },
   methods:{
       tab(i){
           this.num=i;
           this.news(i)
       },
       news(type){
               let loadingInstance = Loading.service(document.querySelector("#buy_con"));
                       this.$api.usermessage(this.$store.state.user.id)
                       .then(res=>{
                               console.log(res)
                               if(type==0){
                                        this.isnew = res.data.data
                               }
                               else if(type==1){
                                       this.isnew=[]
                                       for(let i=0; i<res.data.data.length;i++){
                                               if(res.data.data[i].is_see==0){
                                                     this.isnew.push(res.data.data[i])
                                               }
                                       }
                               }
                               else if(type==2){
                                       this.isnew=[]
                                       for(let i=0; i<res.data.data.length;i++){
                                               if(res.data.data[i].is_see==1){
                                                     this.isnew.push(res.data.data[i])
                                               }
                                       }
                               }
                       })
                       this.$nextTick(() => { // 以服务的方式调用的 Loading 需要异步关闭
                         loadingInstance.close();
                       });
       },
       read(id){
               console.log(id)
               this.$api.usermessageread(this.$store.state.user.id,id)
               .then(res=>{
                       console.log(res)
               })
               this.news(this.num)
       },
       chexabout(id){
               this.ischex +=id+','
               console.log(this.ischex)
       },
       delet(){
               this.chex = true

       },
       chexdel(){
               let str = ''
               if(this.ischex==''){
                        str = "未选择将删除全部消息, 是否继续?"
               }else{
                       str = "此操作将永久删除该文件, 是否继续?"
               }
                this.$confirm(str, '提示', {
                         confirmButtonText: '确定',
                         cancelButtonText: '取消',
                         type: 'warning'
                       }).then(() => {
                               this.$api.userdelemsg(this.$store.state.user.id,this.ischex)
                               .then(res=>{
                                      this.$message({
                                        type: 'success',
                                        message: res.msg
                                      });
                               })
                                this.chex = false
                               this.news(this.num)
                       }).catch(() => {
                         this.$message({
                           type: 'info',
                           message: '已取消删除'
                         });
                         this.chex = false
                       });
       },
      getLocalTime(nS) {
          return new Date(parseInt(nS) * 1000).toLocaleString().replace(/:\d{1,2}$/,' ');
       }
   }
}
</script>
<style scoped>
.message{
    width: 100%;
    height: 100%;
    padding: 10px 30px ;
}
.message_top{
    color: #919191;
    background-color: #fff;
    border: 1px solid #efefef;
    border-radius: 5px;
    display: flex;
    justify-content: space-between;
}
.top_text{
    font-size: 14px;
    padding: 15px;
}
.message_con{
    background-color: #fff;
    font-size: 14px;
    padding: 10px;
    margin-top: 20px;
    border: 1px solid #efefef;
    border-radius: 5px;
}
.con_t{
    display: flex;
    border-bottom: 1px solid #efefef;
    color: #949494;
}
.con_t_item {
    background-color: #f9f9f9;
    width: 145px;
    height: 35px;
    display: flex;
    justify-content: center;
    align-items: center;
    border: 1px solid #efefef;

}
.active{
    background-color: #fff;
    color: #696969;
    border-top: 2px solid #1b7fc3;
}
.con_t_del{
    flex: 1;
    display: flex;
    align-items: center;
    justify-content: flex-end;
}
.t_del{
    display: flex;
    align-items: center;
    cursor: pointer;
}
.t_del img{
    width: 16px;
}

.del{
    margin:0  10px;
    font-size: 14px;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 0 5px  5px 0;
}




.content{
    height: 300px;
    margin-top: 15px;
    display: flex;
    align-items: center;
    text-align: center;
    vertical-align:middle;
    justify-content: center;
}

.content_c{
    font-size: 16px;
    color: #5f5f5f;
    line-height: 1.5;
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
    vertical-align:middle;
    justify-content: center;
}
.content_c p:nth-of-type(2){
    font-size: 12px;
}
.content_c  img{
    vertical-align:middle;
    margin-bottom: 10px;
}

.top_shopcar{
    display: flex;
    justify-content: center;
    align-items: center;
    width: 84px;
    padding: 4px;
    margin-top: 10px;
    background-color:#1b7fc3;
    color: #fff;
    font-size: 13px;
    border-radius: 5px;
    line-height: 2;
    border: none;
}
.content_two{
        padding: 20px;
        display: flex;
        flex-wrap: wrap;
        /* justify-content: space-around; */
}
.message_text{
        display: flex;
        flex-direction: column;
        width: 32%;
        align-items: flex-start;
        justify-content: space-around;
        padding: 10px;
        border: 1px solid #ccc;
        border-radius: 5px;
        box-shadow: 1px 1px 5px #ccc;
        cursor: pointer;
        margin-left: 15px;
        margin-bottom: 15px;
}
.message_text>h3{
        text-align: center;
        /* width: 100%; */
}
.message_text>div{
        width: 100%;
}
.message_text>div>p{
        text-indent: 2em;
        padding: 10px;
        font-size: 15px;
        color: #555;
        width: 100%;
        /* display: flex;
        flex-wrap: wrap; */
        word-break:break-all
}
.title{
        display: flex;
        width: 100%;
        justify-content: space-between;
}
.bottom{
        display: flex;
        width: 100%;
        justify-content: space-between;
        color: #ccc;
        font-size: 13px;
}
/* .message_text */
</style>
