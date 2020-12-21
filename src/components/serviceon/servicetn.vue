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
                
            }  
        },
        props:{
            tableData:'' 
        }
    }
</script>

<style>
.servicetn_all{width: 100%;height: 100%;}
.el-table td,.el-table th {text-align: center !important;color:#1a7fc3;}
</style>