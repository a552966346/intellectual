<template>
<div>
    <div class="sborder_all">
        <div class="s_t_sea">
                    <input type="s_text" placeholder="请输入您要查找的商品编号或注册号">
                    <div class="s_search">搜索</div>
        </div>
        <el-tabs v-model="activeName" type="card" @tab-click="handleClick">
            
            <el-tab-pane label="全部商标" name="first">
                <div class="allbq" v-if="sblist.length!= 0">
                    <ul class="s_con_b" >
                        <li class="s_con_b_item">商品</li>
                        <li class="s_con_b_item">出售信息</li>
                        <li class="s_con_b_item">价格</li>
                        <li class="s_con_b_item">发布时间</li>
                        <li class="s_con_b_item">当前状态</li>
                        <li class="s_con_b_item">商品操作</li>
                    </ul>
                    <ul class="s_con_b">
                        <li class="s_con_b_item">1</li>
                        <li class="s_con_b_item">2</li>
                        <li class="s_con_b_item">3</li>
                        <li class="s_con_b_item">2</li>
                        <li class="s_con_b_item">1</li>
                        <li class="s_con_b_item">2</li>
                    </ul>
                </div>
                <div class="none" v-else>
                    <div class="s_content">
                      <div class="s_content_c">
                        <img src="../../../static/img/usercenter/nomessage.png" alt="">
                        <p>没有看到您的商品信息。</p>
                        <p>如果您有商品，您可以去<a href="#">登记出售信息</a></p>
                      </div>    
                    </div>
                </div>
            </el-tab-pane>
            <el-tab-pane label="审核中的商标" name="second">
                <div class="shbq" v-if="sblist.length!= 0">
                    <ul class="s_con_b">
                        <li class="s_con_b_item">商品</li>
                        <li class="s_con_b_item">出售信息</li>
                        <li class="s_con_b_item">价格</li>
                        <li class="s_con_b_item">发布时间</li>
                        <li class="s_con_b_item">当前状态</li>
                        <li class="s_con_b_item">商品操作</li>
                    </ul>
                    <ul class="s_con_b">
                        <li class="s_con_b_item">1</li>
                        <li class="s_con_b_item">2</li>
                        <li class="s_con_b_item">3</li>
                        <li class="s_con_b_item">2</li>
                        <li class="s_con_b_item">1</li>
                        <li class="s_con_b_item">2</li>
                    </ul>
                </div>
                <div class="none" v-else>
                    <div class="s_content">
                      <div class="s_content_c">
                        <img src="../../../static/img/usercenter/nomessage.png" alt="">
                        <p>没有看到您的商品信息。</p>
                        <p>如果您有商品，您可以去<a href="#">登记出售信息</a></p>
                      </div>    
                    </div>
                </div>
            </el-tab-pane>
            <el-tab-pane label="在售中的商标" name="third">
                <div class="zsbq" v-if="sblist.length!= 0">
                    <ul class="s_con_b">
                        <li class="s_con_b_item">商品</li>
                        <li class="s_con_b_item">出售信息</li>
                        <li class="s_con_b_item">价格</li>
                        <li class="s_con_b_item">发布时间</li>
                        <li class="s_con_b_item">当前状态</li>
                        <li class="s_con_b_item">商品操作</li>
                    </ul>
                    <ul class="s_con_b">
                        <li class="s_con_b_item">1</li>
                        <li class="s_con_b_item">2</li>
                        <li class="s_con_b_item">3</li>
                        <li class="s_con_b_item">2</li>
                        <li class="s_con_b_item">1</li>
                        <li class="s_con_b_item">2</li>
                    </ul>
                </div>
                <div class="none" v-else>
                    <div class="s_content">
                      <div class="s_content_c">
                        <img src="../../../static/img/usercenter/nomessage.png" alt="">
                        <p>没有看到您的商品信息。</p>
                        <p>如果您有商品，您可以去<a href="#">登记出售信息</a></p>
                      </div>    
                    </div>
                </div>
            </el-tab-pane>
            <el-tab-pane label="交接中的商标" name="fourth">
                <div class="jjbq" v-if="sblist.length!= 0">
                    <ul class="s_con_b">
                        <li class="s_con_b_item">商品</li>
                        <li class="s_con_b_item">出售信息</li>
                        <li class="s_con_b_item">价格</li>
                        <li class="s_con_b_item">发布时间</li>
                        <li class="s_con_b_item">当前状态</li>
                        <li class="s_con_b_item">商品操作</li>
                    </ul>
                    <ul class="s_con_b">
                        <li class="s_con_b_item">1</li>
                        <li class="s_con_b_item">2</li>
                        <li class="s_con_b_item">3</li>
                        <li class="s_con_b_item">2</li>
                        <li class="s_con_b_item">1</li>
                        <li class="s_con_b_item">2</li>
                    </ul>
                </div>
                <div class="none" v-else>
                    <div class="s_content">
                      <div class="s_content_c">
                        <img src="../../../static/img/usercenter/nomessage.png" alt="">
                        <p>没有看到您的商品信息。</p>
                        <p>如果您有商品，您可以去<a href="#">登记出售信息</a></p>
                      </div>    
                    </div>
                </div>
            </el-tab-pane>
            <el-tab-pane label="已完成的商标" name="fifth">
                <div class="overbq" v-if="sblist.length!= 0">
                    <ul class="s_con_b">
                        <li class="s_con_b_item">商品</li>
                        <li class="s_con_b_item">出售信息</li>
                        <li class="s_con_b_item">价格</li>
                        <li class="s_con_b_item">发布时间</li>
                        <li class="s_con_b_item">当前状态</li>
                        <li class="s_con_b_item">商品操作</li>
                    </ul>
                    <ul class="s_con_b">
                        <li class="s_con_b_item">1</li>
                        <li class="s_con_b_item">2</li>
                        <li class="s_con_b_item">3</li>
                        <li class="s_con_b_item">2</li>
                        <li class="s_con_b_item">1</li>
                        <li class="s_con_b_item">2</li>
                    </ul>
                </div>
                <div class="none" v-else>
                    <div class="s_content">
                      <div class="s_content_c">
                        <img src="../../../static/img/usercenter/nomessage.png" alt="">
                        <p>没有看到您的商品信息。</p>
                        <p>如果您有商品，您可以去<a href="#">登记出售信息</a></p>
                      </div>    
                    </div>
                </div>
            </el-tab-pane>
        </el-tabs>
    </div>
</div>   
</template>
<script>
export default {
    data(){
        return{
            activeName: 'first',
            sblist:[]
        }
    },
    methods: {
      handleClick(tab, event) {
        console.log(tab, event);
      }
    }
}
</script>
<style scoped>
.sborder_all{
    position: relative;
}
.s_t_sea{
    display: flex;
    align-items: center;
    width: 280px;
    position: absolute;
    top: 6px;
    right: 0;
}
.s_t_sea input{
    width: 220px;
    display: flex;
    font-size: 10px;
    border: 1px solid #efefef;
    border-radius: 5px 0 0 5px;
    padding: 5px 10px ;
}
.s_search{
    width: 50px;
    height: 25px;
    font-size: 14px;
    background-color: #eee;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 0 5px  5px 0;
}

.s_con_b{
    margin-top: 20px;
    height: 35px;
    display: flex;
    justify-content: space-around;
    color: #b7b7b7;
}


.s_con_b_item{
    display: flex;
    justify-content: center;
    align-items: center;
}

.s_content{
    height: 300px;
    margin-top: 15px;
    display: flex;
    text-align: center;
    vertical-align:middle;
    justify-content: center;
}


.s_content_c{
   text-align: center;
   vertical-align:middle;
    align-items: center;
    display: flex;
    flex-direction: column;
    justify-content: center;
   font-size: 16px;
   color: #5f5f5f;
   line-height: 1.5;
   
}
.s_content_c p:nth-of-type(2){
    font-size: 12px;
}
.s_content_c  img{
    vertical-align:middle;
    margin-bottom: 10px;
}
.s_content_c a{
    color: #1c7fc3;
    text-decoration: none;
}
</style>