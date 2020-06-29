<template>
    <div class="Realname">
        <!-- 导航 start -->
        <div class="navlink">
            <p :class="{'show' : isshow == 1}" @click="isshow = 1">个人实名认证</p>
            <p :class="{'show' : isshow == 2}" @click="isshow = 2">企业实名认证</p>
        </div>
        <!-- 导航 end -->

        <!-- 审核认证流程 start -->
        <div class="process">
            <!-- 个人认证 start -->
            <div class="geren" v-show="isshow == 1">
                <!-- 流程进度 start -->
                <div class="processSon">
                    <div :class=progress[0][0]>
                        <i class="iconfont" :class="{'icon-queren' : phase[0][0] , 'icon-kongxinyuan' : !phase[0][0]}"></i>1 填写资料 ></div>
                    <div :class=progress[0][1]>
                        <i class="iconfont" :class="{'icon-queren' : phase[0][1] , 'icon-kongxinyuan' : !phase[0][1]}"></i>2 审核中 ></div>
                    <div :class=progress[0][2] style="border-right:none">
                        <i class="iconfont" :class="{'icon-queren' : phase[0][2] , 'icon-kongxinyuan' : !phase[0][2]}"></i>3 审核结果</div>
                </div>
                <!-- 流程进度 end -->

                <!-- 内容显示区域 start -->
                <div class="gerenMain">
                    <div class="son two">
                        <p><i class="iconfont icon-bitian red"></i> 认证区域:</p>
                        <el-cascader
                            size="large"
                            :options="options"
                            v-model="selectedOptions"
                            @change="handleChange"
                        >
                        </el-cascader>
                    </div>
                    <div class="son">
                        <p><i class="iconfont icon-bitian red"></i> 真实姓名:</p>
                        <input type="text" v-model="grusername" placeholder="请输入您的真实姓名, 认证后不可更改">
                    </div>
                    <div class="son">
                        <p><i class="iconfont icon-bitian red"></i> 证件号码:</p>
                        <input type="text" maxlength="18" v-model="grid" placeholder="请输入您的证件号码, 认证后不可更改">
                    </div>
                    <div class="son one">
                        <p><i class="iconfont icon-bitian red"></i> 绑定手机:</p>
                        <input type="text" v-model="grphone">
                        <span @click="grgetcode">{{getyzm}}</span>
                    </div>
                    <div class="son">
                        <p><i class="iconfont icon-bitian red"></i> 手机校验码:</p>
                        <input type="text" v-model="gryzm" placeholder="请输入您收到的手机校验码">
                    </div>
                    <div class="button" @click="grsend()">提交</div>
                </div>
                <!-- 内容显示区域 end -->
            </div>
            <!-- 个人认证 end -->

            <!-- 企业认证 start -->
            <div class="enterprise" v-show="isshow == 2">
                <!-- 流程进度 start -->
                <div class="processSon">
                    <div :class=progress[0][0]>
                        <i class="iconfont" :class="{'icon-queren' : phase[1][0] , 'icon-kongxinyuan' : !phase[1][0]}"></i>1 填写资料 ></div>
                    <div :class=progress[0][1]>
                        <i class="iconfont" :class="{'icon-queren' : phase[1][1] , 'icon-kongxinyuan' : !phase[1][1]}"></i>2 审核中 ></div>
                    <div :class=progress[0][2] style="border-right:none">
                        <i class="iconfont" :class="{'icon-queren' : phase[1][2] , 'icon-kongxinyuan' : !phase[1][2]}"></i>3 审核结果</div>
                </div>
                <!-- 流程进度 end -->

                 <!-- 内容显示区域 start -->
                <div class="gerenMain">
                    <div class="son two">
                        <p><i class="iconfont icon-bitian red"></i> 认证区域:</p>
                        <el-cascader
                            size="large"
                            :options="options1"
                            v-model="selectedOptions1"
                            @change="handleChange1"
                        >
                        </el-cascader>
                    </div>
                    <div class="son">
                        <p><i class="iconfont icon-bitian red"></i> 企业名称:</p>
                        <input type="text" v-model="qyname" placeholder="请输入您的企业名称, 认证后不可更改">
                    </div>
                    <div class="son">
                        <p><i class="iconfont icon-bitian red"></i> 信用机构代码:</p>
                        <input type="text" v-model="qyjgdm" placeholder="请输入您的信用机构代码, 认证后不可更改">
                    </div>
                    <!-- 营业执照 start -->
                    <div class="headerimg son">
                        <p><i class="iconfont icon-bitian red"></i> 营业执照:</p>
                        <el-upload
                        :class="{hide:hideUpload}"
                        action="lalala"
                        list-type="picture-card"
                        :http-request="yyzzUpload"
                        :limit=1
                        :on-preview="handlePictureCardPreview"
                        :on-change="change"
                        :on-remove="handleRemove">
                            <i class="el-icon-plus"></i>
                            </el-upload>
                            <el-dialog :visible.sync="dialogVisible">
                            <img width="100%" :src="dialogImageUrl" alt="">
                        </el-dialog>
                    </div>
                    <!-- 营业执照 end -->
                    <div class="son">
                        <p><i class="iconfont icon-bitian red"></i> 联系人:</p>
                        <input type="text" v-model="qyuser" placeholder="请输入联系人">
                    </div>
                    <div class="son one">
                        <p><i class="iconfont icon-bitian red"></i> 绑定手机:</p>
                        <input type="text" v-model="qyphone">
                        <span @click="qygetcode">{{getqyyzm}}</span>
                    </div>
                    <div class="son">
                        <p><i class="iconfont icon-bitian red"></i> 手机校验码:</p>
                        <input type="text" v-model="qyyzm" placeholder="请输入您收到的手机校验码">
                    </div>
                    <div class="button" @click="qysend">提交</div>
                </div>
                <!-- 内容显示区域 end -->
            </div>
            <!-- 企业认证 end -->
        </div>
        <!-- 审核流程 end -->

        <!-- 消息提示 start -->
        <div class="message" :class='{"show" : ismessage , "hidemsg" : !ismessage}'>{{message}}</div>
        <!-- 消息提示 end -->

    </div>
</template>

<script>
    //引入全国城市列表
    import {CodeToText ,provinceAndCityData} from "element-china-area-data";
    import ajax from 'axios'
    import axios from "../../api/axios"
    import Cookies from "js-cookie"
    export default {
        data(){
            return{
                options: provinceAndCityData,
                options1: provinceAndCityData,
                selectedOptions: [],
                selectedOptions1: [],
                isshow:1,
                phase:[[true,false,false],[false,false,false]],
                progress:[["green","hei","hui"],["green","hei","hui"]],
                dialogImageUrl:"",
                hideUpload: false,
                message:"",
                ismessage:false,
                showhidetime:true,
                limitCount:1,
                statementlist:[],
                dialogVisible:false,


                rsecond:true,
                grprovince:"",
                grcity:"",
                grusername:"",
                grid:"",
                grphone:"",
                gryzm:"",
                grisgetyzm:false,
                getyzm:"免费获取验证码",

                qyprovince:"",
                yyzzurl:"",
                qycity:"",
                qyname:"",
                qyjgdm:"",
                qyuser:"",
                qyphone:"",
                qyyzm:"",
                qyisgetyzm:false,
                qyrsecond:true,
                getqyyzm:"免费获取验证码",
            }
        },
        created(){
        },
        methods: {
            //上传营业执照
            yyzzUpload:async function(param){
                const formData = new FormData()
                formData.append('file', param.file)
                let result = await ajax({
                    url: 'http://api.qimingxiaoer.com/admin/uploads/ads_img_uploads',
                    method: 'post',
                    data: formData
                })
                if(result.code == 200){
                    this.yyzzurl = result.photo
                }
            },
            //企业认证选定市时触发
            handleChange1:function(city){
                this.qyprovince = city[0]
                this.qycity = city[1]
            },
            //企业获取验证码
            qygetcode:async function(){
                const {qyphone,qyrsecond} = this
                if(!this.reg(qyphone)) return
                if(!qyrsecond) return
                let result = await axios('index/login/sendMsg',{tel:qyphone})
                if(result.status == 1025){
                    this.showHide('该手机号短信条数受限，请明日在试!',3000)
                    return 
                }else if(result.status != 0){
                    this.showHide('未知的错误',3000)
                    return
                }
                this.getqyyzm = "60秒后重发" 
                result.yzm = this.statement(result.yzm)
                Cookies.set('qyyzm',result.yzm,{ expires: 1 / 288 })
                Cookies.set('qyphone',this.qyphone)
                this.showHide('验证码已发送,有效期5分钟')
                this.qyisgetyzm = true
                this.qymyrsetInterval()
            },
            //企业发送信息读秒
            qymyrsetInterval:function(){
                this.qyrsecond = false
                let num = 60
                let time = setInterval(()=>{
                    if(num == 0){
                        this.getqyyzm = "重新发送"
                        this.qyrsecond = true
                        clearInterval(time)
                        return
                    }
                    num --
                    this.getqyyzm = `${num}秒后重发`
                },1000)
            },
            //企业上传
            qysend:async function(){
                if(!this.qyyanz()) return
                const {qyprovince,qycity,qyuser,qyjgdm} = this
                let data = {
                    type:1,
                    user_id:Cookies.get('user_id'),
                    provinceid:qyprovince,
                    cityid:qycity,
                    true_name:qyuser,
                    business_license_num:qyjgdm,
                    business_license_img:yyzzurl,
                    user_tel:Cookies.get('qyphone'),
                }
                let result = await axios('index/user/identify',data)
                console.log(result)
            },
            //企业上传验证
            qyyanz:function(){
                const {qyprovince,qycity,qyname,qyuser,qyjgdm,yyzzurl,qyyzm} = this
                var idcardReg = /^[1-9]\d{7}((0\d)|(1[0-2]))(([0|1|2]\d)|3[0-1])\d{3}$|^[1-9]\d{5}[1-9]\d{3}((0\d)|(1[0-2]))(([0|1|2]\d)|3[0-1])\d{3}([0-9]|X)$/;
                if(qyprovince == "" || qycity == ""){
                    this.showHide('请选择认证区域')
                    return false
                }else if(qyname.match(/^[ ]*$/)){
                    this.showHide('请输入企业名称')
                    return false
                }else if(qyjgdm.match(/^[ ]*$/)){
                    this.showHide('请输入企业信用机构代码')
                    return false
                }else if(yyzzurl == ""){
                    this.showHide('请上传营业执照')
                    return false
                }else if(qyuser.match(/^[ ]*$/)){
                    this.showHide('请输入联系人')
                    return false
                }else if(this.isewm(qyyzm) != Cookies.get('qyyzm')){
                    if(this.qyisgetyzm == true && qyyzm == ""){ 
                        this.showHide('请输入验证码!')
                        return false
                    }else if(this.qyisgetyzm == false){
                        this.showHide('请获取验证码!')
                        return false
                    }else if(this.qyisgetyzm == true && Cookies.get('qyyzm') == undefined){
                        this.showHide('验证码已过期,请重新获取!')
                        return false
                    }else if(this.isewm(qyyzm) != Cookies.get('qyyzm')){
                        this.showHide('验证码不正确,请重新输入!')
                        return false
                    }else{
                        return true
                    }
                }else{
                    return true
                }
            },




            //个人认证选定市时触发
            handleChange:function(city){
                this.grprovince = city[0]
                this.grcity = city[1]
            },
            //个人上传
            grsend:async function(){
                if(!this.gryanz()) return
                const {grprovince,grcity,grusername,grid} = this
                let data = {
                    type:0,
                    user_id:Cookies.get('user_id'),
                    provinceid:grprovince,
                    cityid:grcity,
                    true_name:grusername,
                    id_card_num:grid,
                    user_tel:Cookies.get('grrzphone')
                }
                let result = await axios('index/user/identify',data)
                console.log(result)
            },
            //个人上传验证
            gryanz:function(){
                const {grprovince,grcity,grusername,grid,gryzm} = this
                var idcardReg = /^[1-9]\d{7}((0\d)|(1[0-2]))(([0|1|2]\d)|3[0-1])\d{3}$|^[1-9]\d{5}[1-9]\d{3}((0\d)|(1[0-2]))(([0|1|2]\d)|3[0-1])\d{3}([0-9]|X)$/;
                if(grprovince == "" || grcity == ""){
                    this.showHide('请选择认证区域')
                    return false
                }else if(grusername.match(/^[ ]*$/)){
                    this.showHide('请输入您的真实姓名')
                    return false
                }else if(!idcardReg.test(grid)){
                    this.showHide('您的证件号码有误')
                    return false
                }else if(this.isewm(gryzm) != Cookies.get('grrzyzm')){
                    if(this.grisgetyzm == true && gryzm == ""){ 
                        this.showHide('请输入验证码!')
                        return false
                    }else if(this.grisgetyzm == false){
                        this.showHide('请获取验证码!')
                        return false
                    }else if(this.grisgetyzm == true && Cookies.get('grrzyzm') == undefined){
                        this.showHide('验证码已过期,请重新获取!')
                        return false
                    }else if(this.isewm(gryzm) != Cookies.get('grrzyzm')){
                        this.showHide('验证码不正确,请重新输入!')
                        return false
                    }else{
                        return true
                    }
                }else{
                    return true
                }
            },
            //个人获取验证码
            grgetcode:async function(){
                const {grphone,rsecond} = this
                if(!this.reg(grphone)) return
                if(!rsecond) return
                let result = await axios('index/login/sendMsg',{tel:grphone})
                console.log(result)
                // if(result.status == 1025){
                //     this.showHide('该手机号短信条数受限，请明日在试!',3000)
                //     return 
                // }else if(result.status != 0){
                //     this.showHide('未知的错误',3000)
                //     return
                // }
                this.getyzm = "60秒后重发" 
                result.yzm = this.statement(result.yzm)
                Cookies.set('grrzyzm',result.yzm,{ expires: 1 / 288 })
                Cookies.set('grrzphone',this.grphone)
                this.showHide('验证码已发送,有效期5分钟')
                this.grisgetyzm = true
                this.myrsetInterval()
            },
            //个人发送信息读秒
            myrsetInterval:function(){
                this.rsecond = false
                let num = 60
                let time = setInterval(()=>{
                    if(num == 0){
                        this.getyzm = "重新发送"
                        this.rsecond = true
                        clearInterval(time)
                        return
                    }
                    num --
                    this.getyzm = `${num}秒后重发`
                },1000)
            },

            //正则验证手机号码
            reg:function(phone){
                if(!(/^1[3456789]\d{9}$/.test(phone))){
                    this.showHide('手机号码格式不正确')
                    return false
                }else{
                    return true
                }
            },
            //验证二维码
            isewm:function(yzm){
                yzm = (yzm + "").split('')
                this.statementlist.map((item,index)=>{
                    yzm.splice(index,1,yzm[index] * item)
                })
                return yzm.join("")
            },
            //二维码变成乱码
            statement:function(yzm){
                yzm = (yzm + "").split('')
                this.statementlist = []
                for(let i = 0;i < 6; i++){
                    this.statementlist.push(Math.floor((Math.random() * 10) + (Math.random() * 10)))
                }
                this.statementlist.map((item,index)=>{
                    yzm.splice(index,1,yzm[index] * item)
                })
                return yzm.join("")
            },
            
            //显示消失 对话框
            showHide:function(message,time=2000){
                if(!this.showhidetime) return
                this.showhidetime = false
                this.ismessage = true
                this.message = message
                setTimeout(()=>{
                    this.ismessage = false
                    setTimeout(()=>{
                        this.showhidetime = true
                    },400)
                },time)
            },
            change:function(file, fileList){
                this.hideUpload = fileList.length >= this.limitCount
            },
            handleRemove(file, fileList) {
                this.hideUpload = fileList.length >= this.limitCount;
            },
            handlePictureCardPreview(file) {
                this.dialogImageUrl = file.url;
                this.dialogVisible = false;
            },
        }
    }
</script>

<style lang="less">
    .Realname{
        flex: 1;
        .navlink{
            height:40px;
            display: flex;
            background-color: #F5F7FA;
            border-top:1px solid #ddd;
            p{
                line-height: 40px;
                width:120px;
                text-align: center;
                color:#909399;
            }
            .show{
                background-color: #fff;
                color:#409eff;
            }
        }
        .process{
            background-color: #fff;
            height:300px;
            .geren,.enterprise{
                .processSon{
                    display: flex;
                    justify-content: space-between;
                    background-color: #F5F7FA;
                    line-height: 46px;
                    height:46px;
                    width:96%;
                    margin:auto;
                    margin-top:40px;
                    border-radius: 4px;
                    div{
                        flex: 1;
                        text-align: center;
                        color: #67c23a;
                        border-right:1px solid #ddd;
                        height:20px;
                        margin-top:14px;
                        line-height: 16px;
                        i{
                            margin-right:10px;
                            border-radius: 50%;
                            border:1px solid;
                        }
                    }
                    .green{
                        color:#67c23a;
                    }
                    .hui{
                        color:#c0c4cc;
                    }
                    .hei{
                        color:#000;
                    }
                }
                .gerenMain{
                    width:730px;
                    margin:auto;
                    margin-top:20px;
                    color: #606266;
                    .son{
                        display: flex;
                        line-height: 40px;
                        margin-bottom:30px;
                        p{
                            width:120px;
                            text-align: right;
                            margin-right:20px
                        }
                        input{
                            width:500px;
                            border:1px solid #ddd;
                            border-radius: 6px;
                            text-indent: 10px;
                            outline:none;
                            transition: .3s;
                            &:focus{
                                border:1px solid #409EFF;
                            }
                        }
                    }
                    .one{
                        input{
                            width:358px;
                            border-radius: 6px 0 0 6px;
                        }
                        span{
                            width:140px;
                            text-align: center;
                            background-color: #F5F7FA;
                            border:1px solid #ddd;
                            border-left: none;
                            border-radius:0 6px 6px 0;
                        }
                    }
                    .two{
                        input{
                            width:auto;
                        }
                    }
                    .button{
                        width:300px;
                        text-align: center;
                        line-height: 40px;
                        color: #fff;
                        background-color: #409eff;
                        border-color: #409eff;
                        border-radius: 6px;
                        margin:50px auto;
                    }
                    .headerimg{
                        .el-upload--picture-card{
                            border-radius: 0;
                        }
                        .hide .el-upload--picture-card {
                            display: none;
                        }
                        p{
                            margin-right:20px
                        }
                    }
                }
            }
        }
        .red{
            color:red;
        }
        .message{
            position: fixed;
            z-index: 999;
            top:20px;
            left: 0;
            right: 0;
            margin: auto;
            width:300px;
            line-height: 50px;
            background-color: #7AC23C;
            text-align: center;
            border-radius: 4px;
            color:#fff;
            transition: .4s;
        }
        .show{
            top:40px;
            transform: rotateX(0);
        }
        .hidemsg{
            transform: rotateX(90deg);
            top:10px;
        }
    }
</style>