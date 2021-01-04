<template>
    <div class="serviceon_all">
    <el-table
    :data="tableData"
    border
    style="width: 100%"
    :header-cell-style="{'background-color': '#1a7fc3','color': '#ffffff'}">
    <el-table-column
      prop="date"
      label="服务清单"
      width="400">
    </el-table-column>
    <el-table-column
      prop="name"
      label="一级">
    </el-table-column>
    <el-table-column
      prop="nameon"
      label="标准">
    </el-table-column>
    <el-table-column
      prop="nametw"
      label="高级">
    </el-table-column>
  </el-table>
    </div>
</template>

<script>
    export default {
        data(){
            return {
                tableData: [{
                date: '企业规模(组织机构个数)',
                name: '8个',
                nameon: '12个',
                nametw: '15及以上'
                },{
                date: '贯标服务费(元)',
                name: '50000',
                nameon: '70000',
                nametw:'100000'
                },{
                date: '贯标服务费(元)',
                name: '50000',
                nameon: '70000',
                nametw:'100000'
                },{
                date: '贯标服务费(元)',
                name: '50000',
                nameon: '70000',
                nametw:'100000'
                },{
                date: '贯标服务费(元)',
                name: '50000',
                nameon: '70000',
                nametw:'100000'
                },{
                date: '贯标服务费(元)',
                name: '50000',
                nameon: '70000',
                nametw:'100000'
                },{
                date: '贯标服务费(元)',
                name: '50000',
                nameon: '70000',
                nametw:'100000'
                },{
                date: '贯标服务费(元)',
                name: '50000',
                nameon: '70000',
                nametw:'100000'
                }]
            }
        }
    }
</script>

<style>
.serviceon_all{width: 100%;}
.el-table td,.el-table th {text-align: center !important;color:#1a7fc3;}
</style>