<template>
    <div class="login">
        <!-- loginTop start -->
        <div class="loginTop">
            <div class="topSon">
                <div class="topSonOne">
                    <div class="topleft">
                        <p>Hi~,  您好,  欢迎来到公司快转网, 综合企业服务信息分类平台</p>
                        <p class="p">登录</p>
                        <router-link to="/Egistered" tag="p" style="color:#F3A54D">免费注册</router-link>
                    </div>
                    <div class="topright">
                        <router-link to="/" class="p" exact>平台首页</router-link>
                        <router-link to="/" class="p" exact>帮助中心</router-link>
                        <router-link to="/" class="p" exact>关注我们</router-link>
                        <router-link to="/" class="p" exact>在线客服</router-link>
                        <a class="p" style="border-right: none;" href="javascript:void(0);">免费咨询热线 : 176-2150-2150</a>
                    </div>
                </div>
            </div>
            <div class="topSonTwo">
                <div class="topSonTwos">
                    <div class="one">
                        <h1>
                            <router-link to="/">
                                <img src="../../assets/images/Logo.png" alt="">
                            </router-link>
                        </h1>
                        <p>一站式公司交易平台</p>
                    </div>
                    <div class="two">
                        <router-link to="/" style="text-decoration: none;"><i class="iconfont icon-shouye1"></i>返回首页</router-link>
                    </div>
                </div>
            </div>
        </div>
        <!-- loginTop end -->

        <!-- loginMain start -->
        <div class="loginMain">
            <div class="loginnow">
                <div class="nowTop">账号登陆</div>
                <div class="loginxx">
                    <div class="phone">
                        <i class="iconfont icon-icon-user"></i>
                        <input type="text" v-model="phoneNumber" placeholder="请输入手机号">
                    </div>
                    <div class="pass">
                        <i class="iconfont icon-suo"></i>
                        <input type="password" v-model="password" :placeholder="phorps">
                        <p v-if="isphone" @click="getCode">{{code}}</p>
                    </div>
                    <div class="details">
                        <div class="auto">
                            <!-- <el-checkbox v-model="checked"></el-checkbox>
                            <p>自动登录</p> -->
                            <p @click="isreset = true" class="hred">忘记密码</p>
                        </div>
                        <div class="mianfei">
                            <router-link to="/Egistered" tag="p">免费注册></router-link>
                            <!-- <p @click="cisphone">{{cphorps}}></p> -->
                        </div>
                    </div>
                    <button @click="login">登录</button>
                </div>
                <div class="quick">
                    <p>使用快捷登录</p>
                    <img src="../../assets/images/timg.png" alt="">
                </div>
            </div>
            
        </div>
        <!-- loginMain end -->

        <!-- loginFooter start -->
        <div class="loginFooter">
            <p>公司快转网 · 公司转让买卖平台 版权所有 沪ICP备26515025456号-1  服务热线：<strong>176-2150-2150</strong></p>
        </div>
        <!-- loginFooter end -->

        <!-- 重置密码 start -->
        <div class="reset" v-if="isreset">
            <div class="son" :class="{'sonshow' : isreset}">
                <div class="resetTop">
                    <p>重置密码</p>
                    <i class="iconfont icon-chahao" @click="resetshow()"></i>
                </div>
                <div class="resetmain">
                    <div>
                        <p>手机号:</p>
                        <input type="text" v-model="rphoneNumber" placeholder="手机号">
                    </div>
                    <div>
                        <p>验证码:</p>
                        <input type="text" v-model="ryzm" placeholder="验证码">
                        <span @click="getResetCode">{{rcode}}</span>
                    </div>
                    <div>
                        <p>新密码:</p>
                        <input type="password" maxlength="20" v-model="rpassword" placeholder="新密码">
                    </div>
                </div>
                <button @click="changephone">确认</button>
            </div>
        </div>
        <!-- 重置密码 end -->

        <!-- 消息提示 start -->
        <div class="message" :class='{"show" : ismessage , "hide" : !ismessage}'>{{message}}</div>
        <!-- 消息提示 end -->
    </div>
</template>

<script>
import axios from "../../api/axios"
import Cookies from "js-cookie"
export default {
    data(){
        return{
            phorps:"登陆密码",
            cphorps:"账号密码登录",
            isphone:false,
            checked:true,
            // code:"获取验证码",
            // second:true,
            rsecond:true,
            rcode:"获取验证码",
            rphoneNumber:"",
            rpassword:"",
            ryzm:"",
            phoneNumber:"",
            password:"",
            isreset:false,
            message:"",
            ismessage:false,
            showhidetime:true,
            isgetyzm:false,
            statementlist:[]
        }
    },
    methods:{
        //切换登陆方式
        // cisphone:function(){
        //     this.phoneNumber = ""
        //     this.password = ""
        //     this.phorps = this.isphone? "登陆密码" : "输入验证码"
        //     this.cphorps = this.isphone? "验证码登录" : "账号密码登录"
        //     this.isphone = !this.isphone
        // },
        //获取验证码
        // getCode:function(){
        //     const {phoneNumber} = this
        //     if(!this.reg(phoneNumber)) return
        //     if(!this.second) return
        //     this.code = "60秒后重发" 
        //     this.mysetInterval()
        // },
        //正则验证手机号码
        reg:function(phone){
            if(!(/^1[3456789]\d{9}$/.test(phone))){
                this.showHide('手机号码格式不正确')
                return false
            }else{
                return true
            }
        },
        //发送信息读秒
        mysetInterval:function(){
            this.second = false
            let num = 60
            let time = setInterval(()=>{
                if(num == 0){
                    this.code = "重新发送"
                    this.second = true
                    clearInterval(time)
                    return
                }
                num --
                this.code = `${num}秒后重发`
            },1000)
        },
        //获取重置密码的验证码
        getResetCode:async function(){
            const {rphoneNumber} = this
            if(!this.reg(rphoneNumber)) return
            if(!this.rsecond) return
            let result = await axios('index/login/sendMsg',{tel:rphoneNumber})
            if(result.status == 1025){
                this.showHide('该手机号短信条数受限，请明日在试',3000)
                return 
            }else if(result.status != 0){
                this.showHide('未知的错误',3000)
                return
            }
            this.rcode = "60秒后重发" 
            result.yzm = this.statement(result.yzm)
            Cookies.set('czyzm',result.yzm,{ expires: 1 / 288 })
            Cookies.set('czphone',rphoneNumber)
            this.showHide('验证码已发送,有效期5分钟')
            this.isgetyzm = true
            this.myrsetInterval()
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
                    this.rcode = "重新发送"
                    this.rsecond = true
                    clearInterval(time)
                    return
                }
                num --
                this.rcode = `${num}秒后重发`
            },1000)
        },
        //登录
        login:async function(){
            if(!this.validation()) return
            let data = {
                user_tel : this.phoneNumber,
                user_pwd : this.password
            }
            let result = await axios('index/login/login',data)
            if(result.code == 200){
                // Cookies.set('token',result.token,{expires : 1})
                // Cookies.set('user_name',result.user_name,{expires : 1})
                // Cookies.set('user_id',result.user_id,{expires : 1})
                Cookies.set('token',result.token)
                Cookies.set('user_name',result.user_name)
                Cookies.set('user_id',result.user_id)
                this.$store.commit('changelogin',true)
                this.showHide('登陆成功,稍后将自动跳转至首页...',2000)
                setTimeout(()=>{
                    this.$router.push('/')
                },2500)
            }else{
                this.showHide('手机号或密码不正确')
            }
            
        },
        //登录验证
        validation:function(){
            const {phoneNumber,password,isphone} = this
            if(phoneNumber.match(/^[ ]*$/)){
                this.showHide('请输入手机号码!')
                return false
            }
            if(!isphone){
                if(password.match(/^[ ]*$/)){
                    this.showHide('请输入账户密码!')
                    return false
                }else{
                    return true
                }
            }else{
                if(password != 1111){
                    this.showHide('验证码不正确,请重新输入!')
                    return false
                }else{
                    return true
                }
            }
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
        //确认修改密码
        changephone:async function(){
            if(!this.CZvalidation()) return
            let data = {
                user_tel : Cookies.get('czphone'),
                user_pwd : this.rpassword,
            }
            let result = await axios('index/user/login_change_pwd',data)
            if(result.code == 200){
                this.showHide('密码修改成功')
                setTimeout(()=>{
                    this.isreset = false
                    this.isgetyzm = false
                    this.rsecond = true
                    this.rphoneNumber = ""
                    this.ryzm = ""
                    this.rpassword = ""
                    this.rcode = '获取验证码'
                },2500)
            }else{
                this.showHide('密码修改失败')
            }
        },
        //重置密码验证
        CZvalidation:function(){
            const {rpassword,ryzm} = this
            if(rpassword.match(/^[ ]*$/)){
                this.showHide('请输入您的账户密码!')
                return false
            }else if(rpassword.length < 6){
                this.showHide('账户密码最少设置6位!')
                return false
            }else if(this.isewm(ryzm) != Cookies.get('czyzm')){
                if(this.isgetyzm == true && ryzm == ""){ 
                    this.showHide('请输入验证码!')
                    return false
                }else if(this.isgetyzm == false){
                    this.showHide('请先获取验证码!')
                    return false
                }else if(this.isgetyzm == true && Cookies.get('czyzm') == undefined){
                    this.showHide('验证码已过期,请重新获取!')
                    return false
                }else if(this.isewm(ryzm) != Cookies.get('czyzm')){
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
        //修改密码消失
        resetshow:function(){
            this.isreset = false
            this.isgetyzm = false
            this.rsecond = true
            this.rphoneNumber = ""
            this.ryzm = ""
            this.rpassword = ""
            this.rcode = '获取验证码'
        }
    }
}
</script>

<style lang="less">
    .login{
        font-size: 14px;
        .loginTop{
			min-width: 1200px;
			margin-bottom: 30px;
            .topSon{
                height:40px;
                background-color: #F9F9F9;
                .topSonOne{
                    width:1200px;
                    margin:auto;
                    display: flex;
                    font-size: 12px;
                    justify-content: space-between;
                    .topleft{
                        display: flex;
                        line-height: 40px;
                        color:gray;
                        .p{
                            padding:0 10px;
                            line-height:40px;
                            margin:0 10px;
                            color:gray;
                        }
                    }
                    .topright{
                        display: flex;
                        color:gray;
                        line-height: 40px;
                        a,p{
                            margin-left:10px;
                            color:gray;
                            &:hover{
								text-decoration: none;
							}
                        }
                        .p{
                            padding:0 10px;
                            line-height:10px;
                            border-right:1px solid #ccc;
                            margin:auto ;
                            margin-left:0;
                        }

                    }
                }
            }
            .topSonTwo{
                background-color: #fff;
                height:91px;
                .topSonTwos{
                    width:1200px;
                    height:91px;
                    margin:30px auto auto auto;
                    display: flex;
                    justify-content: space-between;
                    .one{
                        display: flex;
                        h1{
                            margin-top:0;
                            img{
                                margin:auto 0;
                                max-width:239px;
                            }
                        }
                        p{
                            margin: 35px 0 0 0px;
                            float: left;
                            color: #cacaca;
                            font-size: 13px;
                        }
                    }
                    .two{
                        margin-right: 40px;
                        line-height: 80px;
                        a{
                            font-size: 17px;
                            line-height: 22px;
                            margin-right: 15px;
                            color: #6f6d6e;
                            i{
                                color:rgb(243, 165, 77);
                                margin-right: 6px;
                                font-size: 22px;
                            }
                        }
                    }
                }
            }
        }
        .loginMain{
            position: relative;
            height:600px;
			min-width: 1200px;
            background: url(../../assets/images/gg.png) center top no-repeat;
            .loginnow{
                position: absolute;
                top: 0;
                bottom: 0;
                width: 400px;
                height: 422px;
                margin: auto;
                right: 365px;
                background-color: #fff;
                border-radius: 10px;
                .nowTop{
                        background: #fff;
                        line-height: 70px;
                        border-radius: 8px 8px 0 0;
                        height: 70px;
                        text-align: center;
						font-size: 20px;
                }
                .loginxx{
                    height:260px;
                    box-sizing: border-box;
                    padding:30px 40px;
                    div{
                        line-height: 40px;
                        border:1px solid #eee;
                        margin-bottom: 20px;
                        display: flex;
                        i{
                            display: block;
                            font-size: 24px;
                            width:20%;
                            color:#777;
                            text-align: center;
                        }
                        input{
                            width:80%;
                            line-height: 40px;
                            border:none;
                            outline: none;
                            font-size: 12px;
                            overflow: hidden;
                        }
                    }
                    .pass{
                        overflow: hidden;
                        height:40px;
                        input{
                            width:80%;
                            padding-top:4px;
                            overflow: hidden;
                        }
                        p{
                            width:20%;
                            line-height: 40px;
                            text-align: center;
                            color:red;
                            font-size: 12px;
                        }
                    }
                    .details{
                        display: flex;
                        justify-content: space-between;
                        border:none;
                        margin-bottom: 0;
                        p{
                            font-size: 12px;
                            transition: .3s;
                        }
                        div{
                            border:none;
                            margin-bottom: 0;
                        }
                        .auto{
                            p{
                                margin-left:6px;
								cursor: pointer;
                            }
                            .hred:hover{
                                color:#f3a54d
                            }
                        }
                        .mianfei{
                            p{
                                margin-left: 6px;
								cursor: pointer;
                                &:hover{
                                    color:#f3a54d
                                }
                            }
                        }
                    }
                    button{
                        text-align: center;
                        line-height: 40px;
                        margin-top: 22px;
                        height: 40px;
                        border-radius: 5px;
                        background:rgb(243, 165, 77);
                        color: #fff;
                        width: 100%;
                        margin: 12px 0 27px;
                        font-size: 16px;
                        outline: none;
                        border:none;
                        letter-spacing: 6px;
                    }
                }
                .quick{
                    margin-top:6px;
                    p{
                        text-align: center;
                        font-size: 12px;
                        line-height: 18px;
                        color: #282828;
                        margin-bottom: 4px;
                    }
                    img{
                        display: block;
                        margin:auto;
                    }
                }
            }
        }
        .loginFooter{
            p{
                width:1200px;
                line-height: 106px;
                margin:auto;
                text-align: center;
            }
        }
        .reset{
            position: fixed;
            top: 0;
            left: 0;
            z-index: 9;
            width:100%;
            height:100%;
            background-color: rgba(0, 0, 0, 0.3);
			    /* 
			      turn : 定义的动画名称
			      1s : 动画时间
			      linear : 动画以何种运行轨迹完成一个周期
			      infinite :规定动画应该无限次播放
			     */
			    @keyframes turn{
			      0%{-webkit-transform:rotate(0deg);}
			      25%{-webkit-transform:rotate(90deg);}
			      50%{-webkit-transform:rotate(180deg);}
			      75%{-webkit-transform:rotate(270deg);}
			      100%{-webkit-transform:rotate(360deg);}
			    }
            .son{
                position: absolute;
                top: 0;
                left: 0;
                right: 0;
                bottom: 0;
                margin: auto;
                width: 450px;
                height: 461px;
                border-radius: 5px;
                opacity: 0;
                background-color: #fff;
                .resetTop{
					border-radius: 5px 5px 0 0;
                    position: relative;
                    background-color: #fff;
					padding:30px 0 0 0;
                    p{
                        color:#5D5B5C;
                        font-size: 20px;
                        line-height:40px;
                        text-align: center;
                    }
                    i{
                        position: absolute;
                        top: 8px;
                        right: 17px;
                        font-size: 30px;
						&:hover{
							color:rgb(243, 165, 77);
							cursor: pointer;
							animation:turn 0.3s linear infinite;
							-webkit-animation:turn 0.5s linear infinite; /* Safari 和 Chrome */
							animation-iteration-count:1;
						}
                    }
                }
                .resetmain{
                    box-sizing: border-box;
                    padding:0 15px;
                    div{
                        display: flex;
                        margin-top:20px;
                        border:1px solid #eee;
                        p{
							min-height: 60px;
                            width:14%;
                            text-indent: 10px;
                            font-size: 12px;
                            color: #282828;
                            line-height: 62px;
							margin:0;
                        }
                        input{
                            width:54%;
                            line-height: 62px;
                            border:none;
                            outline: none;
                            overflow: hidden;
                        }
                        span{
                            display: block;
                            margin-top: 18px;
							cursor: pointer;
                            width: 110px;
                            background-color: #F3A54D;
                            border-radius: 6px;
                            height: 33px;
                            font-size: 12px;
                            line-height: 32px;
                            color: #fff;
                            text-align: center;
                        }
                    }
                }
                button{
                    display: block;
                    text-align: center;
                    line-height: 40px;
                    height: 40px;
                    border-radius: 5px;
                    background: #F3A54D;
                    color: #fff;
                    width: 315px;
                    margin: auto;
                    margin-top: 30px;
                    font-size: 16px;
                    outline: none;
                    border: none;
                    letter-spacing: 6px;
                }
            }
            .sonshow{
                animation: showbig .3s linear;
                animation-fill-mode:forwards
            }
            @keyframes showbig {
                to{
                    opacity: 1;
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
        .hide{
            transform: rotateX(90deg);
            top:10px;
        }
    }
</style>