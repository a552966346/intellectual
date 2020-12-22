<template>
    <div class="servicemtaw_all" >
            <img :src="mtaw.src" alt="">
            <div class="servicemtaw_fz" v-for="(item,index) in stlie" :key="index">
                <div class="servicemtaw_top">
                    {{item.top}}
                </div>
                <div class="servicemtaw_cet">
                    {{item.cet}}
                </div>
            </div>
    </div>
</template>

<script>
    export default {
        data(){
            return{
                stli:{
                    stlie:[{
                        top:'什么是PCT途径？',cet:'专利合作条约（PCT）是专利领域的一项国际合作条约，允许申请人根据该条约提交一份专利申请，即可同时在该条约148个成员国中要求对其发明进行保护。'
                    },
                    {top:'什么是PCT体系？',cet:["1.PCT体系是专利“申请”体系而非专利“授予”体系。不存在“国际专利”,只有国际申请。","2.PCT体系包括国际阶段和国家阶段。国家阶段包括国际申请的提出、国际检索、国际公布和国际初步审查。","3.授予专利的决定任由国家或地区专利局在国家阶段作出。","4.只有发明或实用新型才可以通过PCT申请得到保护，外观设计不能通过PCT得到保护。"]}
                    ]
                }
            }
        },
        props: {
            mtaw: Object,
        }
    }
</script>

<style>
.servicemtaw_all{width: 100%;height: auto;display: flex;justify-content: center;align-items: center;}
.servicemtaw_fz{width: 100%; height: 70%;display: flex;justify-content: center;align-items: center;flex-direction: column;}
</style>