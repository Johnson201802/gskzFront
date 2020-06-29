<template>
    <div class="pageLogin">
        <!-- loginnow start -->
        <div class="loginnow">
            <i @click="hide()" class="iconfont icon-chahao chahao"></i>
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
                        <el-checkbox v-model="checked"></el-checkbox>
                        <p>自动登录</p>
                        <p @click="isreset = true" class="hred">忘记密码</p>
                    </div>
                    <div class="mianfei">
                        <router-link to="/Egistered" tag="p">免费注册></router-link>
                        <p @click="cisphone">{{cphorps}}></p>
                    </div>
                </div>
                <button>登录</button>
            </div>
            <div class="quick">
                <p>使用快捷登录</p>
                <img src="../../assets/images/timg.png" alt="">
            </div>
        </div>
        <!-- loginnow end -->

        <!-- 重置密码 start -->
        <div class="reset" v-if="isreset">
            <div class="son" :class="{'sonshow' : isreset}">
                <div class="resetTop">
                    <p>重置密码</p>
                    <i class="iconfont icon-chahao" @click="isreset = false"></i>
                </div>
                <div class="resetmain">
                    <div>
                        <p>手机号:</p>
                        <input type="text" v-model="rphoneNumber" placeholder="手机号">
                    </div>
                    <div>
                        <p>验证码:</p>
                        <input type="text" placeholder="验证码">
                        <span @click="getResetCode">{{rcode}}</span>
                    </div>
                    <div>
                        <p>新密码:</p>
                        <input type="password" v-model="rpassword" placeholder="新密码">
                    </div>
                </div>
                <button>确认</button>
            </div>
        </div>
        <!-- 重置密码 end -->

        <!-- 错误提示 start -->
        <div v-show="iserror" class="error">
            <p>{{errormsg}}</p>
        </div>
        <!-- 错误提示 end -->
    </div>
</template>

<script>
export default {
    data(){
        return{
            phorps:"登陆密码",
            cphorps:"账号密码登录",
            isphone:false,
            checked:true,
            code:"获取验证码",
            rcode:"获取验证码",
            second:true,
            rsecond:true,
            phoneNumber:"",
            password:"",
            rphoneNumber:"",
            rpassword:"",
            isreset:false,
            errormsg:"",
            iserror:false,
        }
    },
    methods:{
        //切换登陆方式
        cisphone:function(){
            this.phoneNumber = ""
            this.password = ""
            this.phorps = this.isphone? "登陆密码" : "输入验证码"
            this.cphorps = this.isphone? "验证码登录" : "账号密码登录"
            this.isphone = !this.isphone
        },
        //获取验证码
        getCode:function(){
            const {phoneNumber} = this
            if(!this.reg(phoneNumber)) return
            if(!this.second) return
            this.code = "60秒后重发" 
            this.mysetInterval()
        },

        //正则验证手机号码
        reg:function(phone){
            return /^1[3456789]\d{9}$/.test(phone)? true : false
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
        getResetCode:function(){
            const {rphoneNumber} = this
            if(!this.reg(rphoneNumber)){
                this.errormsg = "手机号有误"
                this.iserror = true
                setTimeout(()=>{
                    this.iserror = false
                },3000)
                return
            }
            if(!this.rsecond) return
            this.rcode = "60秒后重发" 
            this.myrsetInterval()
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

        //向父组件发送数据
        hide:function(){
            this.$emit('isShowLogin')
        }
    }
}
</script>

<style lang="less">
    .pageLogin{
        font-size: 14px;
        .loginnow{
            position: fixed;
            top: 0;
            right: 0;
            left: 0;
            bottom: 0;
            width:400px;
            height:422px;
            margin:auto;
            right:160px;
            background-color: #fff;
            border-radius: 10px;
            .chahao{
                position: absolute;
                top: 4px;
                right: 10px;
                font-size: 30px;;
            }
            .nowTop{
                background: #5d5b5c;
                font-style: normal;
                color: #fff;
                font-size: 18px;
                line-height: 70px;
                border-radius: 8px 8px 0 0;
                height: 70px;
                text-align: center;
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
                        width:56%;
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
                        }
                        .hred:hover{
                            color:red
                        }
                    }
                    .mianfei{
                        p{
                            margin-left: 6px;
                            &:hover{
                                color:red
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
                    background: #fe3636;
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
        .reset{
            position: fixed;
            top: 0;
            left: 0;
            z-index: 9;
            width:100%;
            height:100%;
            background-color: rgba(0, 0, 0, 0.3);
            .son{
                position: absolute;
                top:0;
                left: 0;
                right: 0;
                bottom: 0;
                margin: auto;
                width:450px;
                height:355px;
                opacity: 0;
                background-color: #fff;
                .resetTop{
                    position: relative;
                    background-color: #5D5B5C;
                    p{
                        color:#fff;
                        font-size: 20px;
                        line-height:40px;
                        text-align: center;
                    }
                    i{
                        position: absolute;
                        top: 4px;
                        right: 8px;
                        font-size: 30px;
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
                            width:14%;
                            text-indent: 10px;
                            font-size: 12px;
                            color: #282828;
                            line-height: 50px;
                        }
                        input{
                            width:54%;
                            line-height: 50px;
                            border:none;
                            outline: none;
                            overflow: hidden;
                        }
                        span{
                            display: block;
                            margin-top:14px;
                            width:110px;
                            background-color: #FE3636;
                            border-radius: 6px;
                            height:24px;
                            font-size: 12px;
                            line-height: 24px;
                            color:#fff;
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
                    background: #fe3636;
                    color: #fff;
                    width: 315px;
                    margin: auto;
                    margin-top: 30px;
                    font-size: 16px;
                    outline: none;
                    border:none;
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
        .error{
            position: fixed;
            z-index: 99;
            top: 0;
            bottom: 0;
            left: 0;
            right: 0;
            margin: auto;
            background-color: rgba(0, 0, 0, 0.5);
            width:200px;
            border-radius: 4px;
            line-height: 60px;
            height:60px;
            text-align: center;
            color:#fff;
            font-size: 14px;
        }
    }
</style>