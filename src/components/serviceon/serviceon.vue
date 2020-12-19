<template>
    <div class="serviceon_all">
        <div class="serviceon_first">
            <img :src="mess[0]">
            <div class="serviceon_firstdv">{{mess[1]}}</div>
        </div>
        <div class="serviceon_secrt">
            <div class="serviceon_secon">
                <img src="../../../static/img/service/service_icon.png">
                <div>实用新型和发明专利的区别在哪里？</div>
            </div>
            <div class="serviceon_sectr">
                <div class="serviceon_sectric">
                    <img src="../../../static/img/service/service_ictw.png">
                </div>
                <div class="serviceon_sectw">
                    <div>第一，实用新型只限于具有一定形状的产品，不能是一种方法，也不能是没有固定形状的产品；而发明是方法，也可以是产品；</div>
                    <div>第二，实用新型对技术的要求低，授权时间短；发明对技术的创造性要求高，授权时间长。</div>
                </div>
            </div>
        </div>
        <div class="serviceon_secrt">
            <div class="serviceon_secon">
               <img src="../../../static/img/service/service_icon.png">
                <div>实用新型的授权条件</div>
            </div>
            <div class="serviceon_sectr">
                <div class="serviceon_sectric">
                    <img src="../../../static/img/service/service_ictw.png">
                </div>
                <div class="serviceon_sectw">
                    <div>第一，实用新型只限于具有一定形状的产品，不能是一种方法，也不能是没有固定形状的产品；而发明是方法，也可以是产品；</div>
                    <div>第二，实用新型对技术的要求低，授权时间短；发明对技术的创造性要求高，授权时间长。</div>
                    <div>第三，实用新型对技术的要求低，授权时间短；发明对技术的创造性要求高，授权时间长。</div>
                </div>
            </div>
        </div>    
    </div>
</template>

<script>
    export default {
        data(){
            return{
                mess:['../../../static/img/service/serviceright_jiantou.png','常见问题'] 
            }
        }
    }
</script>

<style>
    .serviceon_all{width: 100%;height: 100%;display: flex;justify-content: center;align-items: center;flex-direction: column;padding: 20px;}
    .serviceon_first{width: 100%;height: 65px;display: flex;justify-content: flex-start;align-items: center;flex-direction: row;}
    .serviceon_secrt{width: 100%;height: 204px;display: flex;justify-content: center;align-items: center;flex-direction:column;margin-top: 15px;border-radius: 5px; border: 1px solid #9abded;}
    .serviceon_secon{width: 100%;height: 50px;display: flex; align-items: center;flex-direction: row;padding: 0 15px; border-bottom:1px dashed #9abded;}
    .serviceon_sectr{width: 100%;flex: 1;display: flex;justify-content: center;align-items: center;flex-direction: row;padding: 15px;}
    .serviceon_sectw{width: 100%;height: 100%;display: flex;justify-content: space-between;align-items: flex-start;flex-direction:column;padding: 15px;}
    .serviceon_sectric{height: 100%;display: flex;justify-content: center;align-content: flex-start;padding: 15px 0;}
    .serviceon_firstdv{margin-left: 10px;}
    .serviceon_sectric img{width: 100%; height: 25px;}
    .serviceon_secon>div{margin-left: 10px;}
</style>