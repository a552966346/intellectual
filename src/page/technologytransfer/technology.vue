<template>
    <div>
        <v-topsearch></v-topsearch>
        <v-navigation></v-navigation>
        <div class="transfer_pay">
            <!-- 分类 -->
            <transfertext></transfertext>
            <!-- 排序-->
            <transfercon></transfercon>
            <!-- 猜你喜欢 -->
            <div>
                    <!-- <transferBottom :arr='arr'></transferBottom> -->
            </div>

    </div>
        <v-combotttom></v-combotttom>
        </div>
</template>

<script>
import transfertext from '@/components/technology/transfertext.vue'; 
import transfercon from '@/components/technology/transfercon.vue';
        export default {
                data() {
                        return {
                                sortnumber:1,           //左侧边排序切换
                                listsortnum:1,             //右侧 列表形式排序
                        }
                },
                methods: {
                        comsort(index){
                                this.sortnumber=index
                        },
                        listsort(index){
                                this.listsortnum=index
                        }
                },
                components: {
                        transfertext,
                        transfercon
                }
        }
</script>

<style scoped>
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    text-decoration: none;
}

.transfer_pay {
    background: #f6f6f6;
    padding-bottom: 20px;
}
</style>
