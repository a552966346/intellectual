<template>
<div class="all">
  <!-- 业务流程 -->
  <v-businessintroduction :bus="bus"></v-businessintroduction>
  <!-- 认定条件 -->
  <v-identifyconditions :iden="iden"></v-identifyconditions>
  <!-- 申请流程 2个图 -->
  <v-applyprocess :app="app"></v-applyprocess>
  <!-- 申请流程 0个图 -->
  <v-applyprocesszero :app="app"></v-applyprocesszero>
  <!-- 申请流程 3个图 -->
  <v-applyprocessthree :appthree="appthree"></v-applyprocessthree>
  <!-- 公共问题 -->
  <v-publicproblems :pub="pub"></v-publicproblems>
  <!-- 服务保障  表格样式 -->
  <v-serviceassurancetable :sert="sert"></v-serviceassurancetable>
  <!-- 服务保障  123样式 -->
  <v-serviceassurance :ser="ser"></v-serviceassurance>
  <!-- 安全保障 -->
  <v-safetyguarantee :safe="safe"></v-safetyguarantee>

</div>
</template>
<script>

import businessintroduction from '../../components/copyright/businessintroduction.vue'//业务流程
import applicationprocess from '../../components/copyright/applicationprocess.vue'//申请流程 2个图
import applicationprocesszero from '../../components/copyright/applicationprocesszero.vue'//申请流程 0个图
import applicationprocessthree from '../../components/copyright/applicationprocessthree.vue'//申请流程 3个图
import publicproblems from '../../components/copyright/publicproblems.vue'//公共问题
import serviceassurancetable from '../../components/copyright/serviceassurancetable.vue'//服务保障  表格样式
import serviceassurance from '../../components/copyright/serviceassurance.vue'//服务保障  123样式
import safetyguarantee from '../../components/copyright/safetyguarantee.vue'//安全保障
import identifyconditions from '../../components/copyright/identifyconditions.vue'//认定条件


  export default {
    data() {
      return {
        bus:{//业务流程
            arr:[
                    {top:'01',
                    text: '申请书（伊甸城代准备）发明专利申请流程严格把控时间节点，熟练对接各个流程准备）发明专利申请流程严格把控'},
                    {top:'01',
                    text: '申请书（伊甸城代准备）发明专利申请流程严格把控时间节点，熟练对接各个流程准备）发明专利申请流程严格把控'},
                    {top:'01',
                    text: '申请书（伊甸城代准备）发明专利申请流程严格把控时间节点，熟练对接各个流程准备）发明专利申请流程严格把控'},
                    {top:'01',
                    text: '申请书（伊甸城代准备）发明专利申请流程严格把控时间节点，熟练对接各个流程准备）发明专利申请流程严格把控'},
                    {top:'01',
                    text: '申请书（伊甸城代准备）发明专利申请流程严格把控时间节点，熟练对接各个流程准备）发明专利申请流程严格把控'},
                  
            ]
        },
        app:{//申请流程 2个图   //申请流程 0个图
            src:"../../../static/img/copyright/process.png" ,
            top_text:"著作权变更所需资料",
            top_r:"资深顾问审核资料，减少返回率，商业信息、公司信息严格保密",
            arrl:[
                    {text: '申请书（伊甸城代准备）'},
                    {text: '委托书（伊甸城代准备）'},
                    {text: '作品创造说明 法人作品声明'},
                    {text: '作品图样'},
                    {text: '申请人身份证正反面复印件'}
            ],
            arrr:[
                    {text: '申请书（伊甸城代准备）'},
                    {text: '委托书（伊甸城代准备）'},
                    {text: '作品创造说明 法人作品声明'},
                    {text: '作品图样'},
                    {text: '公司营业执照副本复印件'}
            ],  
        },
        iden:{//认定条件
            arr:[
                    {src:"../../../static/img/copyright/ser01.png" ,
                    text: '申请书（伊甸城代准备）'},
                    {src:"../../../static/img/copyright/ser02.png" ,
                    text: '委托书（伊甸城代准备）'}
            ],
        },
        appthree:{//申请流程 3个图
            src:"../../../static/img/copyright/process.png" ,
            top_text:"著作权变更所需资料",
            top_r:"资深顾问审核资料，减少返回率，商业信息、公司信息严格保密",
            arr:[
                    {src:"../../../static/img/copyright/company_manage.png" ,
                    title:'企业高企',
                    children:[
                        {text: '申请书（伊甸城代准备）'},
                        {text: '申请书（伊甸城代准备）'},
                        {text: '申请书（伊甸城代准备）'}
                    ]}
                  
            ]
        },
        pub:{//公共问题
            arrq:[
                    {q: '变更成功后，会下发新的版权证书吗？',
                     a: '商标局会下发《版权变更核准证明》，此文件须同原商标证书一并使用，不在下发新的证书'},
                    {q: '委托书（伊甸城代准备）',
                     a: '委托书（伊甸城代准备）'},
                    {q: '作品创造说明 法人作品声明',
                     a: '作品创造说明 法人作品声明'},
                    {q: '作品图样',
                     a:'作品图样'},
                    {q: '申请人身份证正反面复印件',
                     a: '申请人身份证正反面复印件'}
            ]
        
        },
        sert:{//服务保障  表格样式
            ltitle: '伊甸（推荐）',
            rtitle:'伊甸（推荐）',
            arrl:[
                    {text:'1'},
                    {text:'2'},
                    {text:'3'},
                    {text:'4'}      
            ],
            arrr:[
                    {text:'1'},
                    {text:'2'},
                    {text:'3'},
                    {text:'4'}      
            ]       
        },
        ser:{//服务保障  123样式
            arr:[
              {
                    src:'../../../static/img/copyright/ser01.png',
                    title:'信息安全',
                    text:'请您放心，您提供的资料我们都会对外保密，并且在您提供材料前，我们的专利顾问会与您签订一份保密协议，作为伊甸城的一种负责任的书面承诺，让您安心！当然，不管您是否与我们签有保密协议，我们都会对您提供过来的材料进行严格的保密处理，绝不例外！'
              },
              {
                    src:'../../../static/img/copyright/ser02.png',
                    title:'专属顾问',
                    text:'请您放心，您提供的资料我们都会对外保密，并且在您提供材料前，我们的专利顾问会与您签订一份保密协议，作为伊甸城的一种负责任的书面承诺，让您安心！当然，不管您是否与我们签有保密协议，我们都会对您提供过来的材料进行严格的保密处理，绝不例外！'
              }
            ]
        } ,
        safe:{//安全保障
          arr:[
              {
                    src:'../../../static/img/copyright/safe_contract.png',
                    title:'信息安全',
                    text:'请您放心，您提供的资料我们都会对外保'
              },
              {
                    src:'../../../static/img/copyright/safe_confirm.png',
                    title:'专属顾问',
                    text:'请您放心，您提供的资料我们都会对外保'
              }
          ]

        }
        
      }
    },
    components: {
      'v-applyprocess':applicationprocess,//申请流程 2个图
      'v-applyprocesszero':applicationprocesszero,//申请流程 0个图
      'v-applyprocessthree':applicationprocessthree,//申请流程 3个图
      'v-publicproblems':publicproblems,//公共问题
      'v-serviceassurancetable':serviceassurancetable,//服务保障  表格样式
      'v-serviceassurance':serviceassurance,//服务保障  123样式
      'v-safetyguarantee':safetyguarantee ,//安全保障
      'v-identifyconditions':identifyconditions,//认定条件
      'v-businessintroduction':businessintroduction//业务流程
    }
    
  }
</script>
<style scoped>
.all{
  width: 975px;
}

</style>
