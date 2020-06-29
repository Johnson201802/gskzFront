<template>
    <div class="Personaldata">
        <!-- 导航 start -->
        <div class="change">
            <p>修改个人资料</p>
        </div>
        <!-- 导航 end -->

        <!-- 头像 start -->
        <div class="headerimg">
            <p>用户头像:</p>
            <el-upload
            :class="{hide:hideUpload}"
            action="lalala"
            :http-request="headerUpload"
            list-type="picture-card"
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
        <!-- 头像 end -->

        <!-- 昵称 start -->
        <div class="one">
            <p>昵称：</p>
            <input type="text" v-model="username">
        </div>
        <!-- 昵称 start -->

        <!-- 手机号 start -->
        <div class="phone one">
            <p>手机号：</p>
            <el-input
            placeholder="请输入内容"
            v-model="phonenumber"
            :disabled="true">
            </el-input>
            <p class="p" @click="isxiugai = true">修改</p>
        </div>
        <!-- 手机号 end -->

        <!-- qq start -->
        <div class="one">
            <p>QQ：</p>
            <input type="text" v-model="qq">
        </div>
        <!-- qq end -->

        <!-- 微信 start -->
        <div class="one">
            <p>微信号：</p>
            <input type="text" v-model="wechat">
        </div>
        <!-- 微信 end -->

        <!-- 二维码 start -->
        <div class="headerimg1">
            <p>二维码:</p>
            <el-upload
            :class="{hide:hideUpload1}"
            action="lalala"
            list-type="picture-card"
            :http-request="wechatUpload"
            :limit=1
            :on-preview="handlePictureCardPreview1"
            :on-change="change1"
            :on-remove="handleRemove1">
                <i class="el-icon-plus"></i>
                </el-upload>
                <el-dialog :visible.sync="dialogVisible1">
                <img width="100%" :src="dialogImageUrl1" alt="">
            </el-dialog>
        </div>
        <!-- 二维码 end -->

        <!-- 修改手机号 start -->
        <div class="changephone" v-if="isxiugai">
            <div class="son">
                <div class="cone">
                    <i  @click="changephoneShow()" class="iconfont icon-chahao"></i>
                </div>
                <div class="ctwo">
                    手机号: <input type="text" v-model="changephonenumber">
                </div>
                <div class="cthree">
                    验证码: <input type="text" v-model="myyzm"> <p @click="getcode">{{yanzhengma}}</p>
                </div>
                <div class="button" @click="changeok">确定</div>
            </div>
        </div>
        <!-- 修改手机号 start -->

        <!-- 消息提示 start -->
        <div class="message" :class='{"show" : ismessage , "hide1" : !ismessage}'>{{message}}</div>
        <!-- 消息提示 end -->

        <div class="button" @click="send">保存</div>
    </div>
</template>

<script>
import axios from "../../api/axios"
import ajax from 'axios'
import Cookies from "js-cookie"
    export default {
        data() {
            return {
                dialogImageUrl:"",
                hideUpload: false,
                limitCount:1,
                dialogVisible: false,
                dialogImageUrl1:"",
                hideUpload1: false,
                limitCount1:1,
                dialogVisible1: false,
                //------------------------------ 自定义数据分割线
                message:"",
                ismessage:false,
                showhidetime:true,
                yanzhengma:"获取验证码",
                isxiugai:false,
                headerurl:"",
                username:"",
                phonenumber:"",
                changephonenumber:"",
                myyzm:"",
                qq:"",
                wechat:"",
                wechaturl:"",
                statementlist:[],
                isgetyzm:false,
                rsecond:true
            };
        },
        created(){
            this.init()
        },
        methods: {
            //初始化页面数据
            init:async function(){
                let result = await axios('index/user/getinfo',{user_id:Cookies.get('user_id')})
                // console.log(result)
                // this.dialogImageUrl = result.data.avater
                // this.qq = result.data.qq
                // this.wechat = result.data.wechat
                // this.username = result.data.user_name
                // this.phonenumber = result.data.user_tel
                // this.changephonenumber = result.data.user_tel
                // console.log(this.dialogImageUrl)
            },
            //上传用户头像
            headerUpload:async function(param){
                const formData = new FormData()
                formData.append('file', param.file)
                let result = await ajax({
                    url: 'http://api.qimingxiaoer.com/admin/uploads/ads_img_uploads',
                    method: 'post',
                    data: formData
                })
                if(result.code == 200){
                    this.headerurl = result.photo
                }
            },
            //上传微信二维码图片
            wechatUpload:async function(param){
                const formData = new FormData()
                formData.append('file', param.file)
                let result = await ajax({
                    url: 'http://api.qimingxiaoer.com/admin/uploads/ads_img_uploads',
                    method: 'post',
                    data: formData
                })
                if(result.code == 200){
                    this.wechaturl = result.photo
                }
            },
            //向后台发送信息
            send:async function(){
                const {headerurl,wechaturl,username,phonenumber,qq,wechat} = this
                let user_id = Cookies.get('user_id')
                let data = {
                    user_id,
                    avater:headerurl,
                    user_name:username,
                    user_tel:phonenumber,
                    qq,
                    wechat,
                    wechat_qrcode:wechaturl
                }
                let result = await axios('index/user/updateUserInfo',data)
                if(result.code == 200){
                    this.showHide('个人资料保存成功')
                    setTimeout(()=>{
                        this.$router.push('/PersonalCenter/Personal')
                    },2500)
                }else{
                    this.showHide('个人资料保存失败')
                }
            },
            //获取验证码
            getcode:async function(){
                const {changephonenumber} = this
                if(!this.reg(changephonenumber)) return
                if(!this.rsecond) return
                let result = await axios('index/login/sendMsg',{tel:this.changephonenumber})
                if(result.status == 1025){
                    this.showHide('该手机号短信条数受限，请明日在试!',3000)
                    return 
                }else if(result.status != 0){
                    this.showHide('未知的错误',3000)
                    return
                }
                this.yanzhengma = "60秒后重发" 
                result.yzm = this.statement(result.yzm)
                Cookies.set('htczyzm',result.yzm,{ expires: 1 / 288 })
                Cookies.set('htczphone',this.changephonenumber)
                this.showHide('验证码已发送,有效期5分钟')
                this.isgetyzm = true
                this.myrsetInterval()
            },
            //确定修改手机号
            changeok:async function(){
                if(!this.CZvalidation()) return
                this.changephonenumber = Cookies.get('htczphone')
                this.phonenumber = Cookies.get('htczphone')
                this.showHide('手机号修改成功')
                setTimeout(()=>{
                    this.isxiugai = false
                    this.yanzhengma = "获取验证码"
                    this.changephonenumber = ""
                    this.myyzm = ""
                    this.rsecond = true
                    this.isgetyzm = false
                },2500)
            },
            //重置手机号验证
            CZvalidation:function(){
                const {myyzm} = this
                if(this.isewm(myyzm) != Cookies.get('htczyzm')){
                    if(this.isgetyzm == true && myyzm == ""){ 
                        this.showHide('请输入验证码!')
                        return false
                    }else if(this.isgetyzm == false){
                        this.showHide('请先获取验证码!')
                        return false
                    }else if(this.isgetyzm == true && Cookies.get('htczyzm') == undefined){
                        this.showHide('验证码已过期,请重新获取!')
                        return false
                    }else if(this.isewm(myyzm) != Cookies.get('htczyzm')){
                        this.showHide('验证码不正确,请重新输入!')
                        return false
                    }else{
                        return true
                    }
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
            //重置密码发送信息读秒
            myrsetInterval:function(){
                this.rsecond = false
                let num = 60
                let time = setInterval(()=>{
                    if(num == 0){
                        this.yanzhengma = "重新发送"
                        this.rsecond = true
                        clearInterval(time)
                        return
                    }
                    num --
                    this.yanzhengma = `${num}秒后重发`
                },1000)
            },
             //正则验证手机号码
            reg:function(phone){
                if(!(/^1[3456789]\d{9}$/.test(phone))){
                    this.showHide('手机号码格式不正确!')
                    return false
                }else{
                    return true
                }
            },
            //显示消失 对话框
            showHide:function(message,time = 2000){
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
            //修改手机号框消失
            changephoneShow:function(){
                this.isxiugai = false
                this.yanzhengma = "获取验证码"
                this.changephonenumber = ""
                this.myyzm = ""
                this.rsecond = true
                this.isgetyzm = false
            },

            //------------------------------ 自定义方法分割线

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
            change1:function(file, fileList){
                this.hideUpload1 = fileList.length >= this.limitCount1
            },
            handleRemove1(file, fileList) {
                this.hideUpload1 = fileList.length >= this.limitCount1;
            },
            handlePictureCardPreview1(file) {
                this.dialogImageUrl1 = file.url;
                this.dialogVisible1 = false;
            },
        }
    }
</script>

<style lang="less">
    .Personaldata{
        flex: 1;
        color:#606266;
        .change{
            line-height: 40px;
            height:40px;
            border-bottom: 1px solid #ddd;
            p{
                width:124px;
                height:41px;
                text-align: center;
                border: 1px solid #ddd;
                border-bottom: 1px solid #fff;
                border-left: none;
                border-radius: 4px 4px 0 0;
                box-sizing: border-box;  
                color:#409EFF;
            }
        }
        .headerimg,.headerimg1{
            width:640px;
            margin:50px auto 0;
            display: flex;
            .el-upload--picture-card{
                border-radius: 50%;
            }
            .hide .el-upload--picture-card {
                display: none;
            }
            p{
                margin-right:20px
            }
        }
        .headerimg1{
            .el-upload--picture-card{
                border-radius: 0;
            }
        }
        .one{
            width:730px;
            margin:20px auto 0;
            display: flex;
            line-height: 40px;
            p{
                width:100px;
                text-align: right;
                margin-right: 10px;
            }
            input{
                width:500px;
                line-height: 40px;
                border-radius: 4px;
                border:1px solid #ddd;
            }
        }
        .phone{
            position: relative;
            .p{
                top: 0;
                right: 110px;
                background-color: #F5F7FA;
                width:70px;
                text-align: center;
                height:38px;
                position: absolute;
                color: #909399;
                border: 1px solid #dcdfe6;
                border-radius: 4px;
            }
        }
        .el-input{
            width:auto;
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
        .changephone{
            position: fixed;
            top: 0;
            bottom: 0;
            left: 0;
            right: 0;
            background-color: rgba(0, 0, 0, .5);
            .son{
                position: absolute;
                top: 0;
                bottom: 0;
                left: 0;
                right: 0;
                margin: auto;
                width:550px;
                height:300px;
                border-radius:4px;
                background-color: #fff;
                .cone{
                    margin-top:10px;
                    width:550px;
                    display: flex;
                    justify-content: flex-end;
                    box-sizing: border-box;
                    padding:0 20px;
                    i{
                        font-size: 30px;
                    }
                }
                .ctwo{
                    padding-left:30px;
                    display: flex;
                    width:500px;
                    margin:20px auto;
                    line-height: 40px;
                    input{
                        width:400px;
                        border-radius: 4px;
                        line-height: 40px;
                        border:1px solid #ddd;
                        margin-left:20px;
                        text-indent: 20px;
                    }

                }
                .cthree{
                    padding-left:30px;
                    display: flex;
                    width:500px;
                    margin:20px auto;
                    line-height: 40px;
                    input{
                        width:300px;
                        border-radius: 4px 0 0 4px;
                        line-height: 40px;
                        border:1px solid #ddd;
                        border-right:none;
                        margin-left:20px;
                        text-indent: 20px;
                    }
                    p{
                        border-radius: 0 4px 4px 0;
                        border:1px solid #ddd;
                        width:100px;
                        text-align: center;
                        background: #F5F7FA;
                        color:red;
                    }
                }
            }
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
        .hide1{
            transform: rotateX(90deg);
            top:10px;
        }
    }
</style>