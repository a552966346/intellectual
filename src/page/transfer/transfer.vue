<template>
       <div>
                <v-topsearch></v-topsearch>
               <div id="transfer">
                        <v-navigation></v-navigation>
                        <img src="../../../static/img/transfer/transfer_banner.png" alt="">
                        <div class="transfer_all">
                                <v-transfertop :top_data="top_data" :iscolor ='iscolor' @xuanze="xuanze" @qinchu="qinchu" @delet="delet" @sousuo="sousuo"></v-transfertop>
                                <div class="transfer_cen">
                                        <!-- 列表内容 -->
                                        <div class="transfer_cen_left" id="liebiao">
                                                <!-- 列表内容 -->
                                                <div>
                                                        <v-transferleft :left_data="left_data"  @shaixuan ="shaixuan" ></v-transferleft>
                                                </div>
                                                <!-- 分页 -->
                                                <div style="display: flex;justify-content: center;padding: 10px 0px;">
                                                        <el-pagination @current-change="handleCurrentChange" :current-page.sync="currentPage" :page-size="pagesize" layout="prev, pager, next, jumper" :total="total">
                                                        </el-pagination>
                                                </div>
                                        </div>
                                        <div class="transfer_cen_right">
                                                <v-transferrig></v-transferrig>
                                        </div>
                                </div>
                                <v-transferbottom :botm_data="botm_data"></v-transferbottom>
                        </div>
               </div>
               <v-combotttom></v-combotttom>
       </div>
</template>

<script>
        import transfer_top from  '../../components/transfer/transfer_top.vue'
        import transfer_left from  '../../components/transfer/transfer_left.vue'
        import transfer_right from  '../../components/transfer/transfer_right.vue'
        import transfer_bottom from  '../../components/transfer/transfer_bottom.vue'
        export default{
                data(){
                        return{
                                top_data:[],
                                iscolor:[],
                                left_data:[],
                                botm_data:[],
                                nub:0,
                                id:[],
                                // 分页
                                currentPage: 1,
                                pagesize: 0,
                                total:0,
                        }
                },
                mounted() {
                        this.id[0] = this.$route.query.id
                         this.id[8] = this.$route.query.name
                        this.$api.gettechnologycondition()
                        .then(res=>{
                                this.top_data = res.data
                        })
			.catch(res=>{
			})
                         this.ispost(this.id)
                },
                methods:{
                        shaixuan(index){
                                if(index == 1){
                                        this.$set(this.id,6,"desc")
                                        this.$set(this.id,7,"")
                                        this.ispost(this.id)
                                }else if(index == 2){
                                        this.$set(this.id,7,"desc")
                                        this.$set(this.id,6,"")
                                        this.ispost(this.id)
                                }else{
                                         this.ispost()
                                }
                        },
                        xuanze(id){
                                this.id = id
                                this.ispost(this.id)
                        },
                        //搜索
                        sousuo(id){
                                this.id = id
                                this.ispost(id)
                        },
                        ispost(id){
                                this.$api.gettechnologylist(id)
                                .then(res=>{
                                        this.left_data = res.data.lists.data
                                        this.botm_data = res.data.youlike
                                        this.nub = res.data.lists.data.length
                                        // 分页
                                        this.total=res.data.lists.total;
                                        this.currentPage=res.data.lists.current_page;
                                        this.pagesize=res.data.lists.per_page;
                                })
                                .catch(res=>{
                                })
                        },
                        qinchu(){
                                this.iscolor = []
                              this.ispost()
                        },
                        delet(id){
                                this.id = id
                                this.ispost(this.id)
                        },
                        handleCurrentChange(val) {
                            // 输入页数
                            this.id[9] = val
                            this.ispost(this.id)
                             document.getElementById("transfer").scrollIntoView()
                        }
                },
                components:{
                       'v-transfertop': transfer_top,
                       'v-transferleft': transfer_left,
                       'v-transferrig': transfer_right,
                       'v-transferbottom': transfer_bottom,
                }
        }
</script>

<style>
       
        #transfer{width: 100%;display: flex;flex-direction: column;align-items: center;background-color: #F5F5F5;}
        .transfer_all{width: 1200px;background-color: #fff;}
        .transfer_cen{width: 100%;display: flex;border-top: 20px solid #f5f5f5;border-bottom: 20px solid #f5f5f5;}
        .transfer_cen_left{flex: 8;border-right: 10px solid #EBEFF3;}
        .transfer_cen_right{flex: 2;}
</style>
