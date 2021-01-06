<template>
        <div class="id">
                <div class="id_top">
                        <div class="top_text">账号设置/实名认证</div>
                </div>
                <ul class="id_con">
                        <button class="con_t_item" :class="{back:isshow==1}" @click="isshow1">个人实名认证</button>
                        <button class="con_t_item" :class="{back:isshow==2}" @click="isshow2">企业实名认证</button>
                        <li class="t_right">
                                <button @click="kefu">联系认证客服</button>
                        </li>
                </ul>
                <div class="id_center" v-show="isshow==1">
                        <div class="center_t">
                                <span>实名认证</span>
                                <img src="../../../static/img/usercenter/exclamationpoint.png" alt="">
                                <span style="color: red;padding-right: 5px;" v-if="status !=1">{{msg}}</span>
                                <span style="color: green;" v-else>{{msg}}</span>
                                <span>实名认证后，可提升账号安全等级，资金提现，绑定银行卡等操作</span>
                        </div>
                        <div class="center_b">
                                <el-form :model="ruleForm" :rules="rules" ref="ruleForm" label-width="130px" class="demo-ruleForm">
                                        <el-form-item label="真实姓名" prop="name">
                                                <el-input v-model="ruleForm.name"></el-input>
                                        </el-form-item>
                                        <el-form-item label="证件号码" prop="number">
                                                <el-input v-model="ruleForm.number"></el-input>
                                        </el-form-item>
                                        <p>温馨提示：证件必须是清洗彩色原件版本。可以是扫描件或者数码拍摄照片。仅支持jpg、png、jpeg的图片格式。2M以内。</p>
                                        <el-form-item label="身份证人像面:" prop="imageUrl">
                                                <el-col :span="11">
                                                        <div class="ids_11">
                                                                <el-upload class="avatar-uploader" action="aaaa"
                                                                        :show-file-list="false" :on-success="handleAvatarSuccess"
                                                                        :on-change="fileChange" :auto-upload="false"
                                                                        :before-upload="beforeAvatarUpload">
                                                                        <img v-if="ruleForm.imageUrl" :src="ruleForm.imageUrl"
                                                                                class="avatar">
                                                                        <i v-else class="el-icon-plus avatar-uploader-icon"></i>
                                                                </el-upload>
                                                        </div>
                                                </el-col>
                                                <el-col :span="11">
                                                        <div style="display: flex;">
                                                                <p>示例:</p>
                                                                <div class="ids_12">
                                                                        <div class="img"><img src="../../../static/img/usercenter/example-1.png"
                                                                                        alt=""></div>
                                                                        <p>请提供清晰照片，漏出证件四角</p>
                                                                </div>
                                                        </div>
                                                </el-col>
                                        </el-form-item>
                                        <el-form-item label="身份证国徽面:" prop="imageUrl">
                                                <el-col :span="11">
                                                        <div class="ids_11">
                                                                <el-upload class="avatar-uploader" action="aaaa"
                                                                        :show-file-list="false" :on-success="handleAvatarSuccess"
                                                                        :on-change="fileChange2" :auto-upload="false"
                                                                        :before-upload="beforeAvatarUpload">
                                                                        <img v-if="ruleForm.imageUrl2" :src="ruleForm.imageUrl2"
                                                                                class="avatar">
                                                                        <i v-else class="el-icon-plus avatar-uploader-icon"></i>
                                                                </el-upload>
                                                        </div>
                                                </el-col>
                                                <el-col :span="11">
                                                        <div style="display: flex;">
                                                                <p>示例:</p>
                                                                <div class="ids_12">
                                                                        <div class="img"><img src="../../../static/img/usercenter/example-1.png"
                                                                                        alt=""></div>
                                                                        <p>请提供清晰照片，漏出证件四角</p>
                                                                </div>
                                                        </div>
                                                </el-col>
                                        </el-form-item>
                                        <el-form-item label="手持身份证照片:" prop="imageUrl">
                                                <el-col :span="11">
                                                        <div class="ids_11">
                                                                <el-upload class="avatar-uploader" action="aaaa"
                                                                        :show-file-list="false" :on-success="handleAvatarSuccess"
                                                                        :on-change="fileChange3" :auto-upload="false"
                                                                        :before-upload="beforeAvatarUpload">
                                                                        <img v-if="ruleForm.imageUrl3" :src="ruleForm.imageUrl3"
                                                                                class="avatar">
                                                                        <i v-else class="el-icon-plus avatar-uploader-icon"></i>
                                                                </el-upload>
                                                        </div>
                                                </el-col>
                                                <el-col :span="11">
                                                        <div style="display: flex;">
                                                                <p>示例:</p>
                                                                <div class="ids_12">
                                                                        <div class="img"><img src="../../../static/img/usercenter/example-1.png"
                                                                                        alt=""></div>
                                                                        <p>请提供清晰照片，漏出证件四角</p>
                                                                </div>
                                                        </div>
                                                </el-col>
                                        </el-form-item>
                                        <el-form-item label="开户银行" prop="bank">
                                                <el-select v-model="ruleForm.bank" placeholder="请选择开户银行">
                                                        <el-option label="中国工商银行" value="1"></el-option>
                                                        <el-option label="中国建设银行" value="2"></el-option>
                                                        <el-option label="中国银行" value="3"></el-option>
                                                        <el-option label="交通银行" value="4"></el-option>
                                                        <el-option label="中国农业银行" value="5"></el-option>
                                                        <el-option label="招商银行" value="6"></el-option>
                                                        <el-option label="邮政储蓄银行" value="7"></el-option>
                                                        <el-option label="广大银行" value="8"></el-option>
                                                        <el-option label="民生银行" value="9"></el-option>
                                                        <el-option label="平安银行" value="10"></el-option>
                                                        <el-option label="浦发银行" value="11"></el-option>
                                                        <el-option label="中信银行" value="12"></el-option>
                                                        <el-option label="兴业银行" value="13"></el-option>
                                                        <el-option label="华夏银行" value="14"></el-option>
                                                        <el-option label="晋中银行" value="15"></el-option>
                                                </el-select>
                                        </el-form-item>
                                        <el-form-item label="支行名称" prop="bankname">
                                                <el-input v-model="ruleForm.bankname" placeholder="请输入支行名称"></el-input>
                                        </el-form-item>

                                        <el-form-item label="开户地区" required>
                                                <el-col :span="11">
                                                        <el-form-item prop="select1">
                                                                <el-select v-model="ruleForm.select1" placeholder="省"
                                                                        @change="select">
                                                                        <el-option :label="item.name" :value="item.id"
                                                                                v-for="item in province" :key="item.id"></el-option>
                                                                </el-select>
                                                        </el-form-item>
                                                </el-col>
                                                <el-col :span="11">
                                                        <el-form-item prop="select2">
                                                                <el-select v-model="ruleForm.select2" placeholder="市">
                                                                        <el-option :label="item.name" :value="item.id"
                                                                                v-for="item in city" :key="item.id"></el-option>

                                                                </el-select>
                                                        </el-form-item>
                                                </el-col>
                                        </el-form-item>
                                        <el-form-item label="银行卡号" prop="idcard">
                                                <el-input v-model="ruleForm.idcard" placeholder="请输入开户银行卡号"></el-input>
                                        </el-form-item>
                                        <el-form-item label="绑定邮箱" prop="emil">
                                                <el-input v-model="ruleForm.emil"></el-input>
                                        </el-form-item>
                                      <el-form-item label="手机号" prop="phone">
                                              <el-input v-model="ruleForm.phone"></el-input>
                                      </el-form-item>
                                      <el-form-item label="验证码" prop="code">
                                              <el-col :span="11">
                                              <el-input v-model="ruleForm.code"></el-input>
                                              </el-col>
                                              <el-col :span="3">
                                                      <div class="grid-content">
                                                              <div><img :src="'http://intellectual.jzhxwl.com/captcha.html?r='+html"
                                                                              alt="" @click="getVerification"></div>
                                                      </div>
                                              </el-col>
                                      </el-form-item>
                                        <el-form-item>
                                                <el-col :span="5">
                                                        <el-button type="primary" @click="submitForm('ruleForm')">资料上传</el-button>
                                                </el-col>
                                                <el-col :span="15">
                                                        <div class="sub_text" style="float: right;">
                                                                <img src="../../../static/img/usercenter/exclamationpoint.png"
                                                                        alt="">
                                                                <span>请填写真实信息，一旦填写，不可更改！</span>
                                                        </div>
                                                </el-col>
                                        </el-form-item>
                                </el-form>
                        </div>
                </div>
                <div class="id_center" v-show="isshow==2">
                        <div class="center_t">
                                <span>企业认证</span>
                                <img src="../../../static/img/usercenter/exclamationpoint.png" alt="">
                                <span style="color: red;padding-right: 5px;" v-if="status != 1">{{msg2}}</span>
                                <span style="color: green;" v-else>{{msg2}}</span>
                                <span>企业认证后，可提升账号安全等级，资金提现，绑定银行卡等操作</span>
                        </div>
                        <div class="center_b">
                                <el-form :model="ruleForm2" :rules="rules" ref="ruleForm2" label-width="130px" class="demo-ruleForm">
                                        <el-form-item label="公司名称" prop="name">
                                                <el-input v-model="ruleForm2.name2"></el-input>
                                        </el-form-item>
                                        <el-form-item label="营业执照号" prop="number2">
                                                <el-input v-model="ruleForm2.number2"></el-input>
                                        </el-form-item>
                                        <p>温馨提示：证件必须是清洗彩色原件版本。可以是扫描件或者数码拍摄照片。仅支持jpg、png、jpeg的图片格式。2M以内。</p>
                                        <el-form-item label="营业执照:" prop="imageUrl">
                                                <el-col :span="11">
                                                        <div class="ids_11">
                                                                <el-upload class="avatar-uploader" action="aaaa"
                                                                        :show-file-list="false" :on-success="handleAvatarSuccess"
                                                                        :on-change="fileChange" :auto-upload="false"
                                                                        :before-upload="beforeAvatarUpload">
                                                                        <img v-if="ruleForm2.imageUrl2" :src="ruleForm2.imageUrl2"
                                                                                class="avatar">
                                                                        <i v-else class="el-icon-plus avatar-uploader-icon"></i>
                                                                </el-upload>
                                                        </div>
                                                </el-col>
                                                <el-col :span="11">
                                                        <div style="display: flex;">
                                                                <p>示例:</p>
                                                                <div class="ids_12">
                                                                        <div class="img"><img src="../../../static/img/usercenter/example-1.png"
                                                                                        alt=""></div>
                                                                        <p>请提供清晰照片，漏出证件四角</p>
                                                                </div>
                                                        </div>
                                                </el-col>
                                        </el-form-item>
                                        <el-form-item label="身份证国徽面:" prop="imageUrl">
                                                <el-col :span="11">
                                                        <div class="ids_11">
                                                                <el-upload class="avatar-uploader" action="aaaa"
                                                                        :show-file-list="false" :on-success="handleAvatarSuccess"
                                                                        :on-change="fileChange2" :auto-upload="false"
                                                                        :before-upload="beforeAvatarUpload">
                                                                        <img v-if="ruleForm2.imageUrl22" :src="ruleForm2.imageUrl22s"
                                                                                class="avatar">
                                                                        <i v-else class="el-icon-plus avatar-uploader-icon"></i>
                                                                </el-upload>
                                                        </div>
                                                </el-col>
                                                <el-col :span="11">
                                                        <div style="display: flex;">
                                                                <p>示例:</p>
                                                                <div class="ids_12">
                                                                        <div class="img"><img src="../../../static/img/usercenter/example-1.png"
                                                                                        alt=""></div>
                                                                        <p>请提供清晰照片，漏出证件四角</p>
                                                                </div>
                                                        </div>
                                                </el-col>
                                        </el-form-item>
                                        <el-form-item label="手持身份证照片:" prop="imageUrl">
                                                <el-col :span="11">
                                                        <div class="ids_11">
                                                                <el-upload class="avatar-uploader" action="aaaa"
                                                                        :show-file-list="false" :on-success="handleAvatarSuccess"
                                                                        :on-change="fileChange3" :auto-upload="false"
                                                                        :before-upload="beforeAvatarUpload">
                                                                        <img v-if="ruleForm2.imageUrl32" :src="ruleForm2.imageUrl32"
                                                                                class="avatar">
                                                                        <i v-else class="el-icon-plus avatar-uploader-icon"></i>
                                                                </el-upload>
                                                        </div>
                                                </el-col>
                                                <el-col :span="11">
                                                        <div style="display: flex;">
                                                                <p>示例:</p>
                                                                <div class="ids_12">
                                                                        <div class="img"><img src="../../../static/img/usercenter/example-1.png"
                                                                                        alt=""></div>
                                                                        <p>请提供清晰照片，漏出证件四角</p>
                                                                </div>
                                                        </div>
                                                </el-col>
                                        </el-form-item>
                                        <el-form-item label="开户银行" prop="bank">
                                                <el-select v-model="ruleForm2.bank2" placeholder="请选择开户银行">
                                                        <el-option label="中国工商银行" value="1"></el-option>
                                                        <el-option label="中国建设银行" value="2"></el-option>
                                                        <el-option label="中国银行" value="3"></el-option>
                                                        <el-option label="交通银行" value="4"></el-option>
                                                        <el-option label="中国农业银行" value="5"></el-option>
                                                        <el-option label="招商银行" value="6"></el-option>
                                                        <el-option label="邮政储蓄银行" value="7"></el-option>
                                                        <el-option label="广大银行" value="8"></el-option>
                                                        <el-option label="民生银行" value="9"></el-option>
                                                        <el-option label="平安银行" value="10"></el-option>
                                                        <el-option label="浦发银行" value="11"></el-option>
                                                        <el-option label="中信银行" value="12"></el-option>
                                                        <el-option label="兴业银行" value="13"></el-option>
                                                        <el-option label="华夏银行" value="14"></el-option>
                                                        <el-option label="晋中银行" value="15"></el-option>
                                                </el-select>
                                        </el-form-item>
                                        <el-form-item label="支行名称" prop="bankname">
                                                <el-input v-model="ruleForm2.bankname2" placeholder="请输入支行名称"></el-input>
                                        </el-form-item>

                                        <el-form-item label="开户地区" required>
                                                <el-col :span="11">
                                                        <el-form-item prop="select1">
                                                                <el-select v-model="ruleForm2.select12" placeholder="省"
                                                                        @change="select">
                                                                        <el-option :label="item.name" :value="item.id"
                                                                                v-for="item in province" :key="item.id"></el-option>
                                                                </el-select>
                                                        </el-form-item>
                                                </el-col>
                                                <el-col :span="11">
                                                        <el-form-item prop="select2">
                                                                <el-select v-model="ruleForm2.select22" placeholder="市">
                                                                        <el-option :label="item.name" :value="item.id"
                                                                                v-for="item in city" :key="item.id"></el-option>

                                                                </el-select>
                                                        </el-form-item>
                                                </el-col>
                                        </el-form-item>
                                        <el-form-item label="银行卡号" prop="idcard">
                                                <el-input v-model="ruleForm2.idcard2" placeholder="请输入开户银行卡号"></el-input>
                                        </el-form-item>
                                        <el-form-item label="绑定邮箱" prop="emil">
                                                <el-input v-model="ruleForm2.emil2"></el-input>
                                        </el-form-item>
                                        <el-form-item label="手机号" prop="phone">
                                                <el-input v-model="ruleForm2.phone2"></el-input>
                                        </el-form-item>
                                        <el-form-item label="验证码" prop="code">
                                                <el-col :span="11">
                                                <el-input v-model="ruleForm2.code2"></el-input>
                                                </el-col>
                                                <el-col :span="3">
                                                        <div class="grid-content">
                                                                <div><img :src="'http://intellectual.jzhxwl.com/captcha.html?r='+html"
                                                                                alt="" @click="getVerification"></div>
                                                        </div>
                                                </el-col>
                                        </el-form-item>
                                        <el-form-item>
                                                <el-col :span="5">
                                                        <el-button type="primary" @click="submitForm('ruleForm2')">资料上传</el-button>
                                                </el-col>
                                                <el-col :span="15">
                                                        <div class="sub_text" style="float: right;">
                                                                <img src="../../../static/img/usercenter/exclamationpoint.png"
                                                                        alt="">
                                                                <span>请填写真实信息，一旦填写，不可更改！</span>
                                                        </div>
                                                </el-col>
                                        </el-form-item>
                                </el-form>
                        </div>
                </div>
                <div class="tanchuang" v-show="isshowtwo" @click.self="showstwo">
                        <v-customer @shows="showstwo"></v-customer>
                </div>
        </div>
</template>
<script>
        import customer from '@/components/customers/customer_services.vue'
        import {
                validatePhone,
                validateIdNo,
                validateEMail
        } from '@/util/rules.js'
        export default {
                data() {
                        return {
                                dialogVisible: false,
                                ruleForm: {
                                        name: '',
                                        number: '',
                                        bank: '',
                                        bankname: '',
                                        select1: '',
                                        select2: '请先选择省级单位',
                                        idcard: '',
                                        imageUrl: '',
                                        imageUrl3: '',
                                        imageUrl2: '',
                                        phone: '',
                                        code: '',
                                        file: '',
                                        emil: ''
                                },
                                ruleForm2:{
                                        name2: '',
                                        number2: '',
                                        bank2: '',
                                        bankname2: '',
                                        select12: '',
                                        select22: '请先选择省级单位',
                                        idcard2: '',
                                        imageUrl2: '',
                                        imageUrl32: '',
                                        imageUrl22: '',
                                        phone2: '',
                                        code2: '',
                                        file2: '',
                                        emil2: ''
                                },
                                isshow:1,
                                isshowtwo:false,
                                rules: {
                                        name: [{
                                                required: true,
                                                message: '请输入真实姓名',
                                                trigger: 'blur'
                                        }, ],
                                        number: [{
                                                required: true,
                                                message: '请输入身份证号',
                                                trigger: 'blur'
                                        }, {
                                                validator: validateIdNo,
                                                trigger: 'blur'
                                        }],
                                        number2: [{
                                                required: true,
                                                message: '请输入营业执照号',
                                                trigger: 'blur'
                                        }, {
                                                validator: validateIdNo,
                                                trigger: 'blur'
                                        }],
                                        bank: [{
                                                required: true,
                                                message: '请选择开户银行',
                                                trigger: 'change'
                                        }],
                                        select1: [{
                                                required: true,
                                                message: '请选择开户身份',
                                                trigger: 'change'
                                        }],
                                        select2: [{
                                                required: true,
                                                message: '请选择开户市级',
                                                trigger: 'change'
                                        }],
                                        idcard: [{
                                                required: true,
                                                message: '请输入对应真实身份开户的银行卡号',
                                                trigger: 'blur'
                                        },{
                                                min: 13, max: 19,
                                                message: "长度为 13 到 19 个字符",
                                                trigger: "blur"
                                        }],
                                        desc: [{
                                                required: true,
                                                message: '请填写活动形式',
                                                trigger: 'blur'
                                        }],
                                        code: [{
                                                required: true,
                                                message: '请输入验证码',
                                                trigger: 'blur'
                                        }],
                                        phone: [{
                                                required: true,
                                                trigger: 'blur',
                                                message: '请输入手机号'
                                        }, {
                                                validator: validatePhone,
                                                trigger: 'blur'
                                        }],
                                        imageUrl: [{
                                                required: true,
                                                message: '请上传图片'
                                        }],
                                        emil: [{
                                                required: true,
                                                message: '请输入您的邮箱',
                                                trigger: 'blur'
                                        }, {
                                                validator: validateEMail,
                                                trigger: 'blur'
                                        }],
                                        bankname: [{
                                                required: true,
                                                message: '请输入支行名称',
                                                trigger: 'blur'
                                        }],
                                },
                                province: [],
                                city: [],
                                html: 0,
                                msg:'',
                                msg2:'',
                                status:0
                        };
                },
                mounted() {
                        this.$api.attestation_data(this.$store.state.user.id)
                        .then(res=>{
                                
                                if(res.code==0){
                                         this.msg = "未实名认证"
                                }else{
                                        this.status = res.data.status
                                        if(res.data.type==1){
                                                 this.msg2 = "未实名认证"
                                                if(res.data.status==0){
                                                        this.msg = "资料审核中"
                                                }
                                                else if(res.data.status==1){
                                                        this.msg = "认证成功"
                                                }else{
                                                         this.msg = "认证失败,请重新认证"
                                                }
                                                this.ruleForm.name = res.data.realname
                                                this.ruleForm.number =res.data.idnumber
                                                this.ruleForm.imageUrl =res.data.idfront
                                                this.ruleForm.imageUrl2 = res.data.idrear
                                                this.ruleForm.imageUrl3 = res.data.idhand
                                                this.ruleForm.bank =res.data.subbranch
                                                this.ruleForm.bankname = res.data.subbranch
                                                this.ruleForm.select1 =res.data.province
                                                this.ruleForm.select2 =res.data.city_text
                                                this.ruleForm.idcard = res.data.cardnumber
                                                this.isshow =res.data.type
                                                this.ruleForm.emil =res.data.email
                                                this.ruleForm.phone =res.data.mobile
                                        }else{
                                                this.msg = "未实名认证"
                                                if(res.data.status==0){
                                                        this.msg2 = "资料审核中"
                                                }
                                                else if(res.data.status==1){
                                                        this.msg2 = "认证成功"
                                                }else{
                                                         this.msg2 = "认证失败,请重新认证"
                                                }
                                                this.ruleForm2.name2 = res.data.realname
                                                this.ruleForm2.number2=res.data.idnumber
                                                this.ruleForm2.imageUrl2 =res.data.idfront
                                                this.ruleForm2.imageUrl22 = res.data.idrear
                                                this.ruleForm2.imageUrl32 = res.data.idhand
                                                this.ruleForm2.bank2 =res.data.subbranch
                                                this.ruleForm2.bankname2 = res.data.subbranch
                                                this.ruleForm2.select12 =res.data.province
                                                this.ruleForm2.select22 =res.data.city_text
                                                this.ruleForm2.idcard2 = res.data.cardnumber
                                                this.isshow =res.data.type
                                                this.ruleForm2.emil2 =res.data.email
                                                 this.ruleForm2.phone2 =res.data.mobile
                                        }
                                }
                        })
			.catch(res=>{
			})
                        this.getVerification()
                        //省分类
                        this.$api.areadata()
                                .then(res => {

                                        this.province = res.data
                                })

                },
                methods: {
                        //切换
                        isshow1(){
                                this.isshow=1
                        },
                        isshow2(){
                                this.isshow=2
                        },
                        handleAvatarSuccess(res, file) {
                                this.ruleForm.imageUrl = URL.createObjectURL(file.raw);
                        },
                        beforeAvatarUpload(file) {
                                const isJPG = file.type === 'image/jpeg';
                                const isLt2M = file.size / 1024 / 1024 < 2;
                                if (!isJPG) {
                                        this.$message.error('上传头像图片只能是 JPG 格式!');
                                }
                                if (!isLt2M) {
                                        this.$message.error('上传头像图片大小不能超过 2MB!');
                                }
                                return isJPG && isLt2M;
                        },
                        fileChange(file, fileList) {
                                this.image2Base64(file.raw).then(res => {

                                        this.ruleForm.imageUrl = res
                                })
                                .catch(res=>{

                                })
                        },
                        fileChange2(file, fileList) {
                                this.image2Base64(file.raw).then(res => {

                                        this.ruleForm.imageUrl2 = res
                                })
                                .catch(res=>{

                                })
                        },
                        fileChange3(file, fileList) {
                                this.image2Base64(file.raw).then(res => {
                                        this.ruleForm.imageUrl3 = res
                                })
                                .catch(res=>{

                                })
                        },
                        submitForm(form) {
                                 this.$refs[form].validate((valid) => {
                                         if(valid){
                                                 if(isshow==1){
                                                         this.$api.userauthentication(this.$store.state.user.id, this.ruleForm.name, this.ruleForm
                                                                 .number, this.ruleForm.imageUrl, this.ruleForm.imageUrl2, this.ruleForm.imageUrl3,
                                                                 this.ruleForm.bank, this.ruleForm.bankname,this.ruleForm.select1,this.ruleForm.select2,this.ruleForm.idcard,
                                                                 this.isshow,this.ruleForm.emil,
                                                                  this.ruleForm.phone,this.ruleForm.code
                                                                  )
                                                         .then(res => {
                                                                 this.$message({
                                                                           message:res.msg,
                                                                           type: 'success'
                                                                         });
                                                         })
                                                         .catch(res=>{
                                
                                                         })
                                                 }else{
                                                         this.$api.userauthentication(this.$store.state.user.id, this.ruleForm2.name2, this.ruleForm2
                                                                 .number2, this.ruleForm2.imageUrl2, this.ruleForm2.imageUrl22, this.ruleForm2.imageUrl32,
                                                                 this.ruleForm2.bank2, this.ruleForm2.bankname2,this.ruleForm2.select12,this.ruleForm2.select22,this.ruleForm2.idcard2,
                                                                 this.isshow,this.ruleForm2.emil2,
                                                                  this.ruleForm2.phone2,this.ruleForm2.code2
                                                                  )
                                                         .then(res => {
                                                                 this.$message({
                                                                           message:res.msg,
                                                                           type: 'success'
                                                                         });
                                                         })
                                                         .catch(res=>{
                                
                                                         })
                                                 }

                                         }
                                 })

                        },
                        getVerification() {
                                this.html = Math.random();
                        },
                        image2Base64(file) {
                                return new Promise(function(resolve, reject) {
                                        let reader = new FileReader();
                                        let imgResult = "";
                                        reader.readAsDataURL(file);
                                        reader.onload = function() {
                                                imgResult = reader.result;
                                        };
                                        reader.onerror = function(error) {
                                                reject(error);
                                        };
                                        reader.onloadend = function() {
                                                resolve(imgResult);
                                        };
                                });
                        },
                        //市级获取
                        select() {
                                this.ruleForm.select2 = '请选择市级单位'
                                this.$api.citydata(this.ruleForm.select1)
                                        .then(res => {
        
                                                this.city = res.data
                                })
                                .catch(res=>{

                                })
                        },
                        kefu(){
                             this.isshowtwo = true
                        },
                        //客服弹框隐藏
                        showstwo(){
                             this.isshowtwo =false
                        },
                },
                components:{
                        'v-customer':customer
                }

        }
</script>
<style scoped>
        .id {
                width: 100%;
                height: 100%;
                padding: 10px 30px;
        }

        .id_top {
                color: #919191;
                background-color: #fff;
                border: 1px solid #efefef;
                border-radius: 5px;
                display: flex;
                justify-content: space-between;
        }

        .top_text {
                font-size: 14px;
                padding: 15px;
        }

        .id_con {
                background-color: #fff;
                font-size: 14px;
                padding: 3px;
                margin-top: 20px;
                border: 1px solid #efefef;
                border-radius: 5px;
                display: flex;
        }

        .id_con .con_t_item {
                display: flex;
                justify-content: center;
                align-items: center;
                color: #949494;
        }

        .id_con button {
                margin-left: 10px;
                color: #fff;
                border: none;
                padding: 2px 10px;
                border-radius: 3px;
                font-size: 14px;
        }

        .back{
                background-color: #1a7fc3!important;
                color: #fff!important;
        }
        .con_t_item {
                background-color: #eeeeee;
                color: #878787;
                cursor: pointer;
        }

        .t_right {
                flex: 1;
                display: flex;
                align-items: center;
                justify-content: flex-end;
        }

        .t_right button {
                background-color: #e4404b;
                cursor: pointer;
                outline: none;
        }

        .id_center {
                background-color: #fff;
                font-size: 14px;
                padding: 3px;
                margin-top: 20px;
                border: 1px solid #efefef;
                border-radius: 5px;

        }

        .center_t {
                padding: 5px 10px;
                color: #d5d5d5;
                font-size: 12px;
        }

        .center_t span:nth-of-type(1) {
                font-size: 14px;
                color: #ef545e;
        }

        .center_t img {
                margin: 0 5px;
        }

        .center_b {
                margin: 20px 10%;
                color: #606060;
                display: flex;
                flex-direction: column;
                justify-content: center;
                align-items: center;
                font-size: 15px;
        }

        .center_b>div {
                margin-top: 15px;
                display: flex;
        }

        .center_b>div>p {
                height: 30px;
                font-size: 15px;
                line-height: 30px;
                padding: 0 10px;
        }

        .center_b el-input {
                margin-left: 20px;
                height: 32px;
                padding: 5px;
                border: none;
                font-size: 14px;
                color: #bbb;
                border: 1px solid #f2f2f2;
                border-radius: 5px;
        }

        p {
                font-size: 12px;
                line-height: 3;
        }

        .ids_1 {
                display: flex;

        }

        .ids_11 {
                width: 167px;
                height: 137px;
                background-color: #fafafa;
                margin: 0 20px;
                display: flex;
                flex-direction: column;
                justify-content: center;
                align-items: center;
        }


        .ids_11 button {
                background-color: #1a7fc3;
                border: none;
                border-radius: 7px;
                color: #fff;
                padding: 5px 10px;
                margin-top: 15px;
                font-size: 10px;
        }

        .ids_12 {
                width: 170px;
                height: 101px;
                background-color: #fafafa;
                margin: 0 20px;
                padding: auto;

        }

        .ids_12 .img {
                display: flex;
                flex-direction: column;
                align-items: center;
                justify-content: center;
        }

        .ids_12 img {
                width: 94%;

        }

        .ids_12 p {
                font-size: 10px;
                color: #c1bfc0;
        }

        .photo {
                text-indent: -1em;
        }

        .bank {
                position: relative;
        }

        .bank img {
                position: absolute;
                top: 15px;
                right: 11px;
        }

        .openingaccount {
                position: relative;
                text-indent: 8em;
        }

        .openingaccount el-input {
                width: 21%;
                padding-left: 6px;
        }

        .openingaccount .arrow1 {
                position: absolute;
                top: 15px;
                right: 277px;
        }

        .openingaccount .arrow2 {
                position: absolute;
                top: 15px;
                right: 125px;
        }

        .phone {
                display: flex;
        }

        .phone el-input {
                width: 35%;
        }

        .phone button {
                background-color: #f3f3f3;
                color: #636363;
                font-size: 14px;
                line-height: 1.5;
                border: none;
                padding: 5px;
                border-radius: 5px;
                margin-left: 10px;
        }

        .phonenumber {
                text-indent: -1em;
        }

        .submit {
                display: flex;
        }

        .submit button {
                background-color: #1a7fc3;
                border: none;
                color: #fff;
                padding: 5px 35px;
                border-radius: 5px;
                margin-right: 10px;

        }

        .sub_text {
                display: flex;
                align-items: center;
                margin: 3px;
                padding: 5px;
                color: #fc8c8d;
                border: 1px solid #fc8c8d;
                background-color: #f9edef;
                font-size: 10px;
                line-height: 2;
        }

        .sub_text img {
                height: 15px;
                margin: 0 5px;
        }

        .avatar-uploader .el-upload {
                border: 1px dashed #d9d9d9;
                border-radius: 6px;
                cursor: pointer;
                position: relative;
                overflow: hidden;
        }

        .avatar-uploader .el-upload:hover {
                border-color: #409EFF;
        }

        .avatar-uploader-icon {
                font-size: 28px;
                color: #8c939d;
                width: 178px;
                height: 178px;
                line-height: 178px;
                text-align: center;
        }

        .avatar {
                width: 100%;
                height: 100%;
                display: block;
        }
</style>
