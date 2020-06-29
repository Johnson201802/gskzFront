<template>
    <div class="PersonalCenter">
        <div class="header">
            <div class="headerLeft">
                <p>hi, {{name}}</p>
                <span @click="out()">退出</span>
            </div>
            <div class="headerRight">
                <router-link class="rpo" to="/" tag="p">公司快转网首页</router-link>
                <p class="rpt">帮助中心</p>
                <div class="rdo">
                    <p>网站导航</p>
                    <i class="iconfont icon-arrowBottom"></i>
                    <div class="navson">
                        <router-link v-for="(item,index) in navlist" :to="item.guide_url" tag="div" :key="index">{{item.guide_name}}</router-link>
                    </div>
                </div>
                <p class="rpf">热线服务：<span>176-2150-2150</span></p>
            </div>
        </div>
        <div class="main">
            <Navigation></Navigation>
            <transition>
                <router-view class="routerview">
                    <router-view name="Personal"></router-view>
                    <router-view name="Personaldata"></router-view>
                    <router-view name="Realname"></router-view>
                    <router-view name="ChangePassword"></router-view>
                    <router-view name="Record"></router-view>
                    <router-view name="Resources"></router-view>
                    <router-view name="Personalcompany"></router-view>
                    <router-view name="Personaltrademark"></router-view>
                    <router-view name="Personalqualification"></router-view>
                    <router-view name="PersonalOnlinestore"></router-view>
                    <router-view name="Sbresources"></router-view>
                    <router-view name="Releasewd"></router-view>
                </router-view>
            </transition>
        </div>
        <goTop></goTop>
    </div>
</template>

<script>
import axios from '../../api/axios'
import Cookies from 'js-cookie'
export default {
    data(){
        return{
            navlist:[],
            name:""
        }
    },
    created(){
        this.init()
    },
    methods:{
        //初始化页面数据
        init:function(){
            this.getName(),
            this.getallList()
        },
        //获取用户昵称
        getName:function(){
            this.name = Cookies.get('user_name')
        },
        //请求顶部导航
        getallList:async function(){
            let result = await axios("index/index/getTopGuides")
            this.navlist = result.data
        },
        //退出登录
        out:function(){
            Cookies.remove('token');
            Cookies.remove('user_name');
            this.$store.commit('changelogin',false)
            this.$router.push('/Login')
        }
    }
}

</script>
<style lang="less">
    .PersonalCenter{
        font-size: 14px;
        background-color: #fff;
        .header{
            position: fixed;
            z-index: 999;
            top: 0px;
            left: 0;
            width:100%;
            box-sizing: border-box;
            display: flex;
            justify-content: space-between;
            background-color: #F6F6F6;
            height:40px;
            padding: 0 20px;
            .headerLeft{
                line-height: 40px;
                width:300px;
                display: flex;
                p{
                    margin-right:20px;
                    color:red;
                }
                span{
                    display: block;
                    width:70px;
                    line-height:30px;
                    height:30px;
                    margin-top:5px;
                    background-color: #66B1FF;
                    border-radius: 4px;
                    text-align: center;
                    color:#fff;
                    &:hover{
                        color:red;
                    }
                }
            }  
            .headerRight{
                display: flex;
                justify-content: space-between;
                width:500px;
                line-height: 40px;
                .rdo{
                    display: flex;
                    position: relative;
                    &:hover{
                        .navson{
                            height: auto;
                            box-shadow: 0 0 5px 5px #ddd;
                            div:hover{
                                background-color: #409EFF;
                                color:#fff;
                            }
                        }
                        &:after{
                            display: block;
                        }
                    }
                    &:after{
                        display: none;
                        content:"";
                        position:absolute;
                        z-index: 9999;
                        border:10px solid #fff;
                        border-top:none;
                        border-right-color: transparent;
                        border-left-color: transparent;
                        top: 29px;
                        left: 25px;
                    }
                    .navson{
                        position: absolute;
                        z-index: 9999;
                        width:130px;
                        background-color: #fff;
                        top: 40px;
                        left:-28px;
                        height:0;
                        overflow: hidden;
                        transition: .3s;
                        border-radius: 6px;
                        div{
                            text-align: center;
                            border-bottom: 1px solid #ddd;
                            transition: .3s;
                        }
                    }
                }
                .rpf{
                    span{
                        color:red;
                        font-size: 12px;
                    }
                }
            } 
        }
        .main{
            margin-top:40px;
            display: flex;
            .routerview{
                flex:1;
                margin-left:202px;
            }
        }
    }
</style>