<template>
        <div class="worksscree_all">
                <div class="worksscree_left" v-if="type">
                        <div class="worksscree_leftrow" v-for="(item,index) in worksscree" :key="index">
                                <div class="worksscree_lefthead">{{item[0]}}</div>
                                <div class="worksscree_leftcontent">
                                        <span  :class="{color:iscolor[index] == null}" @click="choosecon(index,null,item[1],null)">不限</span>
                                        <span  :class="{color:iscolor[index] == nubs}" v-for="(second, nubs) in item[2]" @click="choosecon(index,nubs,item[1],second)" :key="nubs" v-if="second !=''">{{second}}</span>
                                </div>
                        </div>
                        <!-- <div class="worksscree_leftrow">
                                <div class="worksscree_lefthead">其他条件</div>
                                <div class="worksscree_leftother">
                                        <div class="worksscree_leftdrop" v-for="(item,index) in  data_two">
                                                 <el-select v-model="value[index]" :placeholder="item[0]" @change="ischange(item[1],index)">
                                                        <el-option
                                                        v-for="(isitem,nubs) in item[2]"
                                                        :key="nubs"
                                                        v-if="isitem != 0"
                                                        :label="isitem"
                                                        :value="nubs"
                                                        style="padding-left:10px;">
                                                        </el-option>
                                                    </el-select>
                                        </div>
                                        <div class="worksscree_leftdrop">
                                            <input type="text" value="输入名称搜索商标" v-model="text" >
                                            <span class="workstscreen_search"  @click="search">搜索</span>
                                        </div>
                                </div>
                        </div> -->
                        <div class="worksscree_leftrow">
                                <div class="worksscree_lefthead">筛选条件</div>
                                <div class="worksscree_leftcontent">
                                        <p @click="choosenull">清空筛选条件</p>
                                        <span v-for="(item,index) in screetext" :key="index"  v-if="item != null || item != undefined" @click="delet(index)">{{item}}</span>

                                </div>
                        </div>
                </div>

                <div class="worksscree_left" v-if="!type">
                        <div class="worksscree_leftrow" v-for="(item,index) in servicelist" :key="index">
                                <div class="worksscree_lefthead">{{item[0]}}</div>
                                <div class="worksscree_leftcontent">
                                        <span  :class="{color:iscolor[index] == null}" @click="choosecon(index,null,item[1],null)">不限</span>
                                        <span  :class="{color:iscolor[index] == nubs}" v-for="(second, nubs) in item[2]" @click="choosecon(index,nubs,item[1],second)" :key="nubs" v-if="second !=''">{{second}}</span>
                                </div>
                        </div>
                        <!-- 其他条件 -->
                        <!-- <div class="worksscree_leftrow">
                                <div class="worksscree_lefthead">其他条件</div>
                                <div class="worksscree_leftother">
                                        <div class="worksscree_leftdrop">
                                            <input type="text" value="输入名称搜索商标" v-model="text" >
                                            <span class="workstscreen_search"  @click="search">搜索</span>
                                        </div>
                                </div>
                        </div> -->
                        <!-- 筛选条件 -->
                        <div class="worksscree_leftrow">
                                <div class="worksscree_lefthead">筛选条件</div>
                                <div class="worksscree_leftcontent">
                                        <p @click="choosenull">清空筛选条件</p>
                                        <span v-for="(item,index) in screetext" :key="index"  v-if="item != null || item != undefined" @click="delet(index)">{{item}}</span>

                                </div>
                        </div>
                </div>
                
        </div>
</template>

<script>
export default {
        data() {
                return {
                screetext: [],          //筛选条件
                animate: false,
                
                        value:[],       //下拉框值
                        id:{},           //筛选参数
                        text:''
                }
        },
        props:{
                iscolor:'',
                worksscree: '',
                servicelist: '',
                type:Boolean
        },
        created: function() {
                setInterval(this.showMarquee, 2000)
        },
        
        methods: {
                
                //选择条件
                choosecon(index,nubs,item,name) {
                        this.iscolor[index] = nubs
                        if(name =="不限" ){
                             this.$set(this.screetext,index,null)
                        }else{
                       this.$set(this.screetext,index,name)
                        }
                        this.$set(this.id,index,nubs)
                        this.$emit('choosecon',this.id)
                },
                // 下拉框筛选
                ischange(item,index){
			let i = index+4
                         this.$set(this.id,i,this.value[index])
                         this.$emit('ischange',this.id)
                },
                //文本框搜索
                search(){
                        if(this.type){
                            this.$set(this.id,7,this.text)
                        }else{
                            this.$set(this.id,3,this.text)
                        }
                         this.$emit('search',this.id)
                },
                // 清空筛选条件
                choosenull() {
                        this.id = {}
                       this.value=[]
                         this.screetext = []
                        this.$emit('choosenull')
                },
                //删除条件
                delet(index){
                        this.id[index] = null
                        this.$set(this.screetext,index,null)
                        this.$set(this.iscolor,index,undefined)
                        this.$emit('delet',this.id)
                }
        }
}
</script>

<style scoped>
        .worksscree_all {
                max-width: 1200px;
                margin: 20px auto;
                background-color: #f6f6f6;
                display: flex;
                justify-content: space-between;
        }

        .worksscree_left {
                width: 100%;
                background-color: #fff;
                font-size: 15px;
                display: flex;
                flex-direction: column;
        }

        .worksscree_leftrow {
                flex: 1;
                display: flex;
                border-bottom: 1px dashed #e9e7f2;
        }

        .worksscree_lefthead {
                width: 160px;
                background-color: #f9fafe;
                border-right: 1px solid #eeedf5;
                text-align: center;
                padding: 15px;
                font-weight: bold;
                color: #333;
        }

        .worksscree_leftcontent {
                flex: 1;
                display: flex;
                flex-wrap: wrap;
                padding: 15px;
                padding-bottom: 5px;
                position: relative;
        }
        .worksscree_leftcontent span {
                color: #666;
                padding: 5px 15px;
                cursor: pointer;
                font-size: 12px;
        }

        .addclass{color: #1881c5 !important;}
        .worksscree_leftprice {
                position: absolute;
                right: 15px;
                color: #999;
        }

        .worksscree_leftprice>input {
                width: 50px;
                border: 1px solid #e0e0e0;
                height: 25px;
                padding: 0 3px;
        }

        .worksscree_leftprice>input:focus {
                outline: none;
        }

        .worksscree_leftprice>button {
                background-color: #177ec1;
                border: none;
                color: #fff;
                padding: 0 5px;
                height: 25px;
                margin-left: 5px;
        }

        .worksscree_leftother {
                flex: 1;
                display: flex;
                align-items: center;
        }
        .worksscree_leftother input,button{
                height: 40px;
        }
        .worksscree_leftdrop {
                cursor: pointer;
                padding: 0 10px;
                display: flex;
                flex: 1;
        }


        .worksscree_leftcontent p {
                height: 25px;
                padding: 0 10px;
                border: 1px solid #dfe2e7;
                color: #666;
                font-size: 14px;
                margin-right: 20px;
                cursor: pointer;
        }

        

        .copyright_active>img {
                width: 240px;
        }

        .copyright_bg {
                background: url(../../../static/img/paycenter/copyright_bg.png) no-repeat center;
                background-size: 100% 100%;
                text-align: center;
                position: relative;
        }

        .copyright_bg h2 {
                color: #2385c7;
                font-size: 20px;
                padding: 9px 0 5px;
        }

        .copyright_bg p {
                padding: 10px 0;
                color: #2385c7;
                font-size: 13px;
        }

        .copyright_line,
        .copyright_lines {
                border-top: 1px solid #2385c7;
                width: 20px;
        }

        .copyright_line {
                position: absolute;
                left: 45px;
                bottom: 15px;
        }

        .copyright_lines {
                position: absolute;
                right: 45px;
                bottom: 15px;
        }

        .copyright_gd {
                width: 100%;
                padding: 10px;
                background: #fff;
        }

        * {
                margin: 0;
                padding: 0;
        }

        .marquee_box {
                display: block;
                position: relative;
                width: 100%;
                height: 120px;
                overflow: hidden;
        }

        .marquee_list {
                width: 100%;
                display: block;
                position: absolute;
                top: 0;
                left: 0;
        }

        .marquee_top {
                transition: all 0.5s;
                margin-top: -60px;
        }

        .marquee_list li {
                height: 60px;
                line-height: 30px;
                font-size: 12px;
                padding-left: 20px;
                display: flex;
                box-sizing: border-box;
        }

        .marquee_list li span {
                padding: 0 2px;
                display: flex;
                box-sizing: border-box;
        }

        .red {
                color: #FF0101;
        }

        .marquee_item {
                background-color: #f6f6f6;
                display: flex;
                flex-direction: column;
        }

        .marquee_itemtop,
        .marquee_itembottom {
                display: flex;
                align-items: center;
        }
        .marquee_itemtop span{
                overflow: hidden;
                text-overflow:ellipsis;
                white-space: nowrap;
        }
        .marquee_itemtop span:nth-child(1) {
                background-color: #187fc2;
                border-radius: 15px;
                line-height: 20px;
                height: 20px;
                padding: 0 5px;
                color: #fff;
                margin-right: 5px;
        }
        .color{
                color: #2385c7!important;
        }
        .el-icon-arrow-down:before {
            content: "\E6DF";
            margin-left: 10px;
        }
        input{
            border: 2px solid #187fc4;
            color: #ccc;
            line-height: 25px;
            padding-left: 9px;
            font-size: 15px;
            outline: none;
        }
        .workstscreen_search{
            color: #fff;
            background-color: #187fc4;
            width: 50px;
            display: flex;
            justify-content: center;
            letter-spacing: 4px;
            align-items: center;
        }
        ul{
            padding:0 5px;
        }
</style>
