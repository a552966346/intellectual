<template>
        <div class="navigation_all">
               <ul class="menu cf">
               	<li><router-link to="/">网站首页</router-link></li>
               	<li v-for="item in this.$store.state.navbarlist" :key="item.id">
               		<router-link to="#" v-if="item.name !='服务中心'&&item.name!='技术转移'&&item.name!='跳蚤市场'">{{item.name}}</router-link>
                        <router-link :to="item.type" v-else>{{item.name}}</router-link>
               		<ul class="submenu" v-if="item.name !='服务中心'&&item.name!='技术转移'&&item.name!='跳蚤市场'">
               			<li v-for="item1 in item.children" :key="item1.id"><router-link :to="item1.keywords">{{item1.name}}</router-link></li>
               		</ul>
               	</li>
               </ul>
        </div>
</template>
<script>
        export default {
                data() {
                        return {
                                data: '' // 导航栏
                        };
                },
                created(){
                        this.$api.getnavbar()
                                .then(res => {
                                        this.$store.state.navbarlist = res.data
                                })
                                .catch(err => {
                                })
                        },
                methods: {

                         handleSelect(key,keyPath){
                          }

                }
        }
</script>
<style>
     *{list-style-type:none;}
     a,img{border:0;}
     /* Clearing floats */
     .navigation_all{
             width: 100%;
             background-color: #1495E7;
             position: relative;
             z-index: 999;
     }
     .cf:before,.cf:after{content:" ";display:table;}
     .cf:after{clear:both;}
     .cf{*zoom:1;}
     /* Main level */
     .menu{
     	margin:0 auto;
     	width:1200px;
        display: flex;
     }
     .menu > li:last-child{
             border: none;
     }
     .menu > li{
             flex: 1;
     	background:#1495E7;
     	float:left;
     	position:relative;
     	transform:skewX(25deg);
        border-right: 1px solid #aaa;
     }
     .menu a{
     	display:block;
     	text-align:center;
     	color:#fff;
     	text-transform:uppercase;
     	text-decoration:none;
     	font-family:Arial, Helvetica;
     	font-size:14px;
     }
     .menu li:hover{
     	background:#e74c3c;
     }
     .menu > li > a{
     	transform:skewX(-25deg);
     	padding:1em 2em;
     }
     /* Dropdown */
     .submenu{
     	position:absolute;
     	width:200px;
     	left:50%;
     	margin-left:-100px;
     	transform:skewX(-25deg);
     	transform-origin:left top;
     }
     .submenu li{
     	background-color:#1495E7;
     	position:relative;
     	overflow:hidden;
     }
     .submenu > li > a{
     	padding:1em 2em;
     }
     .submenu > li::after{
     	content:'';
     	position:absolute;
     	top:-125%;
     	height:100%;
     	width:100%;
     	box-shadow:0 0 50px rgba(0, 0, 0, .9);
     }
     /* Odd stuff */
     .submenu > li:nth-child(odd){
     	transform:skewX(-25deg) translateX(0);
     }
     .submenu > li:nth-child(odd) > a{
     	transform:skewX(25deg);
     }
     .submenu > li:nth-child(odd)::after{
     	right:-50%;
     	transform:skewX(-25deg) rotate(3deg);
     }
     /* Even stuff */
     .submenu > li:nth-child(even){
     	transform:skewX(25deg) translateX(0);
     }
     .submenu > li:nth-child(even) > a{
     	transform:skewX(-25deg);
     }
     .submenu > li:nth-child(even)::after{
     	left:-50%;
     	transform:skewX(25deg) rotate(3deg);
     }
     /* Show dropdown */
     .submenu,  .submenu li{
     	opacity:0;
     	visibility:hidden;
     }
     .submenu li{
     	transition:.2s ease transform;
     }
     .menu > li:hover .submenu,  .menu > li:hover .submenu li{
     	opacity:1;
     	visibility:visible;
     }
     .menu > li:hover .submenu li:nth-child(even){
     	transform:skewX(25deg) translateX(15px);
     }
     .menu > li:hover .submenu li:nth-child(odd){
     	transform:skewX(-25deg) translateX(-15px);
     }
</style>
