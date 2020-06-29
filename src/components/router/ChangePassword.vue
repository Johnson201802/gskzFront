<template>
    <!-- 修改密码 start -->
    <div class="ChangePassword">
        <span></span>
        <p class="p">修改密码</p>
        <div>
            <p><i class="iconfont icon-bitian"></i> 旧密码:</p>
            <input type="password" v-model="oldpassword" placeholder="请填写旧密码">
        </div>
        <div>
            <p><i class="iconfont icon-bitian"></i> 新密码:</p>
            <input type="password" v-model="newpassword" placeholder="请填写新密码">
        </div>
        <div>
            <p><i class="iconfont icon-bitian"></i> 确认新密码:</p>
            <input type="password" v-model="twopassword" placeholder="请确认新密码">
        </div>
        <div class="button" @click="send">提交</div>
        <!-- 消息提示 start -->
        <div class="message" :class='{"show" : ismessage , "hide" : !ismessage}'>{{message}}</div>
        <!-- 消息提示 end -->
    </div>
    <!-- 修改密码 end -->
</template>

<script>
    import axios from '../../api/axios'
    export default {
        data() {
            return {
                oldpassword:"",
                newpassword:"",
                twopassword:"",
                message:"",
                ismessage:false,
                showhidetime:true,
            }
        },
        methods:{
            //修改密码
            send:async function(){
                if(!this.validation()) return
                const {oldpassword,newpassword} = this
                let data = {
                    user_pwd_old : oldpassword,
                    user_pwd_new : newpassword,
                }
                let result = await('index/user/user_change_pwd',data)
                console.log(result)
            },
            //验证密码
            validation:function(){
                const {twopassword,newpassword,oldpassword} = this
                if(oldpassword.match(/^[ ]*$/)){
                    this.showHide('请输入旧密码')
                    return false
                }else if(newpassword.match(/^[ ]*$/)){
                    this.showHide('请输入新密码')
                    return false
                }else if(newpassword != twopassword){
                    this.showHide('两次密码不一致')
                    return false
                }else{
                    return true
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
        }
    }
</script>

<style lang="less">
    .ChangePassword{
        width:800px;
        margin:100px auto 0;
        color:#606266;
        font-size: 14px;
        span{
            display: block;
            border-bottom: 1px solid #dcdfe6;
        }
        .p{
            width:150px;
            line-height: 40px;
            text-align: center;
            background-color: #fff;
            margin:auto;
            margin-top:-22px;
            font-weight: bold;
            font-size: 18px;
        }
        div{
            width:580px;
            display: flex;
            margin:20px auto;
            transform: translateX(-50px);
            line-height: 40px;
            p{
                width:120px;
                text-align: right;
                margin-right:20px;
                .iconfont{
                    color:red;
                }
            }
            input{
                width:420px;
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
        .button{
            transform: translateX(0);
            display: block;
            width:300px;
            text-align: center;
            line-height: 40px;
            color: #fff;
            background-color: #409eff;
            border-color: #409eff;
            border-radius: 6px;
            margin:50px auto;
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
            justify-content: center;
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