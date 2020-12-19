<template>
    <div class="servicetn_all">
    <el-table
    :data="tableData"
    border
    style="width: 100%"
    :header-cell-style="{'background-color': '#1a7fc3','color': '#ffffff'}">
    <el-table-column
      prop="date"
      label="服务清单"
    >
    </el-table-column>
    <el-table-column
      prop="name"
      label="服务内容"
      width="400"
      >
    </el-table-column>
  </el-table>
    </div>
</template>

<script>
    export default {
        data(){
            return {
                tableData: [{
                date: '授权保险',
                name: '8个',
                },{
                date: '技术交底指导',
                name: '50000',
                },{
                date: '专利检索',
                name: '50000',
                },{
                date: '费减指导',
                name: '50000',
                },{
                date: '专利文件撰写',
                name: '50000',
                },{
                date: '平面画图（修图）',
                name: '50000',
                },{
                date: '专利质量审查',
                name: '50000',
                },{
                date: '客户一票否决权',
                name: '50000',
                }]
            }
        }
    }
</script>

<style>
.servicetn_all{width: 100%;height: 100%;}
.el-table td,.el-table th {text-align: center !important;color:#1a7fc3;}
</style>