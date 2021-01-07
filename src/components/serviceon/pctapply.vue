<template>
    <div class="pctapply_all" >
        <div class="pctapply_root" v-for="(item,index) in arrlist" :key="index">
            <h3>{{item.title}}</h3>
            <div class="pctapply_line"></div>
            <p>{{item.con}}</p>
        </div>
    </div>
</template>

<script>
export default {
    data(){
        return{

        }
    },
    props:{
        arrlist:''
    }
}
</script>

<style  scoped>
.pctapply_all{
    width: 100%;
    padding: 0 8px;
}
.pctapply_root{
    border: 2px solid #eef5fb;
    box-shadow: 1px 1px 3px #eef5fb;
    padding: 20px;
    margin-bottom: 20px;
}
h3{
    color: #187fc1;
    font-size: 20px;
    padding-bottom: 15px;
}
.pctapply_line{
    width: 30px;
    border-top: 2px solid #187fc4;
    padding-bottom: 20px;
}
p{
    color: #3389c4;
    font-size: 14px;
    line-height: 25px;
}
</style>
