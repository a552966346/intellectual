<template>
    <div class="all">
        <v-serviceon :met="met"></v-serviceon>
        <v-guarantee :nut="nut"></v-guarantee>
        <v-serviceni :mt="mt"></v-serviceni>
        <hr>
        <v-servicetw></v-servicetw>
        <v-servicetr></v-servicetr>

        <v-servicefh></v-servicefh>
        <v-servicefv></v-servicefv>
        <v-servicesx></v-servicesx>
        <v-servicesv></v-servicesv>
        <v-serviceeh></v-serviceeh>
        <v-servicetn></v-servicetn>
    </div>
</template>

<script>
import serviceon from '../../components/serviceon/serviceon.vue'//常见问题
import guarantee from '../../components/serviceon/guarantee.vue'//服务保障
import serviceni from '../../components/serviceon/serviceni.vue'//业务介绍
import servicetw from '../../components/serviceon/servicetw.vue'//业务介绍
import servicetr from '../../components/serviceon/servicetr.vue'//
import servicefh from '../../components/serviceon/servicefh.vue'//
import servicefv from '../../components/serviceon/servicefv.vue'//表格
import servicesx from '../../components/serviceon/servicesx.vue'//业务介绍
import servicesv from '../../components/serviceon/servicesv.vue'//业务介绍
import serviceeh from '../../components/serviceon/serviceeh.vue'//业务介绍
import servicetn from '../../components/serviceon/servicetn.vue'//选择伊甸城
    export default {
        data(){
            return{
                //常见问题
                met:{
                    mess:[require('../../../static/img/service/serviceright_jiantou.png'),'常见问题'],
                    feli:[
                        {id:1,ming:require('../../../static/img/service/service_icon.png'),mitt:'实用新型和发明专利的区别在哪里？',mitim:require('../../../static/img/service/service_ictw.png'),felida:[
                            {text:'第一，实用新型只限于具有一定形状的产品，不能是一种方法，也不能是没有固定形状的产品；而发明是方法，也可以是产品；'},
                            {text:'第二，实用新型对技术的要求低，授权时间短；发明对技术的创造性要求高，授权时间长。'}
                        ]},
                        {id:2,ming:require('../../../static/img/service/service_icon.png'),mitt:'实用新型的授权条件',mitim:require('../../../static/img/service/service_ictw.png'),felida:[
                            {text:'第一，实用新型只限于具有一定形状的产品，不能是一种方法，也不能是没有固定形状的产品；而发明是方法，也可以是产品；'},
                            {text:'第二，实用新型对技术的要求低，授权时间短；发明对技术的创造性要求高，授权时间长。'},
                            {text:'第三，实用新型对技术的要求低，授权时间短；发明对技术的创造性要求高，授权时间长。'}
                        ]}
                    ],
                },
                //服务保障
                nut:{
                    nutimg:require('../../../static/img/service/guarantee_one.png'),
                    data:[
                        {tit:'信息安全',cet:'请您放心，您提供的资料我们都会对外保密。'},
                        {tit:'专属顾问',cet:'在案件服务过程中，有任何疑问。'}
                    ]
                },
                //业务介绍
                mt:{

                }
            }
        },
        components:{
            'v-serviceon':serviceon,
            'v-guarantee':guarantee,
            'v-serviceni':serviceni,
            'v-servicetw':servicetw,
            'v-servicetr':servicetr,
            'v-servicefh':servicefh,
            'v-servicefv':servicefv,
            'v-servicesx':servicesx, //商标变更
            'v-servicesv':servicesv,
            'v-serviceeh':serviceeh,
            'v-servicetn':servicetn,
        }
    }
</script>

<style>
.all{
  width: 1000px;
  height: 1000px;
}
</style>
