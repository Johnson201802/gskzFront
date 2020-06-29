<template>
    <div class="Header">
        <!-- header start-->
        <header class="header">
            <!-- headerTop start -->
            <div class="headerTop">
                <div class="topOne">
                    <div class="headerTopLeft">
                        <p>您好，{{username}} </p>
                        <router-link v-if="!$store.state.islogin" to="/Login" exact>【用户登录】</router-link>
                        <router-link v-if="!$store.state.islogin" to="/Egistered" exact>【用户注册】</router-link>
                        <router-link v-if="!$store.state.islogin" to="/" exact>【经纪人认证】</router-link>
                        <p v-if="$store.state.islogin" @click="out()">【退出登录】</p>
                    </div>
                    <div class="headerTopRight">
                        <div class="one">
                            <div class="send">
                                <span>免费发布</span>
                                <i class="iconfont icon-arrowBottom"></i>
                            </div>
                            <ul>
                                <li v-for="(item,index) in freeList" :key="index">{{item}}</li>
                            </ul>
                        </div>
                        <div class="two">
                            <div class="center">
                                <span>会员中心</span>
                                <i class="iconfont icon-arrowBottom"></i>
                            </div>
                            <ul>
                                <li><p @click="jump('/PersonalCenter')">个人中心</p></li>
                                <li><p v-if="$store.state.islogin" @click="out()">退出登录</p></li>
                            </ul>
                        </div>
                        <router-link to="/" exact>关于公司快转网</router-link>
                        <router-link to="/" exact>帮助中心</router-link>
                        <router-link to="/User" exact>联系客服</router-link>
                        <router-link to="/User" exact>返回首页</router-link>
                    </div>
                </div>
            </div>
            <!-- headerTop end -->

            <!-- headerLogo start -->
            <div class="headerLogo">
                <!-- logo start -->
                <div class="logo">
                    <h1>
                        <img src="../../assets/images/Logo.png" alt="">
                    </h1>
                </div>
                <!-- logo end -->

                <!-- search start -->
                <div class="search">
                    <div class="company">
                        <p>公司</p>
                        <i class="iconfont icon-arrowBottom" ></i>
                        <ul>
                            <li v-for="(item,index) in logoList" :key="index">{{item}}</li>
                        </ul>
                    </div>
                    <div class="input">
                        <input type="text" placeholder="请输入搜索内容">
                        <div class="Recentsearch">
                            <div class="one">
                                <p>最近搜过</p>
                                <ul>
                                    <li v-for="(item,index) in haveList" :key="index">{{item}}</li>
                                </ul>
                            </div>
                            <div class="two">
                                <div class="more">
                                    <p>最近热搜关键词</p>
                                    <p class="huan">换一批</p>
                                </div>
                                <ul>
                                    <li v-for="(item,index) in hotSearchList" :key="index">{{item}}</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div class="submlit">
                        <i class="iconfont icon-fangdajingsuosou--xian"></i>
                    </div>
                </div>
                <!-- search end -->

                <!-- my start -->
                <div class="my">
                    <i class="iconfont icon-yonghu"></i>
                    <p>我的快转店铺</p>
                    <div class="Releaserecord">
                            <div class="one">
                                <p>发布记录</p>
                                <ul>
                                    <li v-for="(item,index) in recordList" :key="index">{{item}}</li>
                                </ul>
                            </div>
                            <div class="two">
                                <div class="more">
                                    <p>免费发布</p>
                                </div>
                                <ul>
                                    <li v-for="(item,index) in freeRecordList" :key="index">{{item}}</li>
                                </ul>
                            </div>
                        </div>
                </div>
                <!-- my end -->
            </div>
            <!-- headerLogo end -->

            <!-- alltop start -->
            <div class="alltop">
                <div class="bg">
                    <p>全部分类</p>
                    <p><i class="iconfont icon-youjiantou"></i></p>
                </div>
                <div class="item"
                    v-for="(item,index) in allList" 
                    :key="index"
                >
                    <img v-if="item.guide_icon" :src=item.guide_icon>
                    <router-link exact :to=item.guide_url active-class="color" >
                        {{item.guide_name}}
                    </router-link>
                </div>
            </div>
            <!-- alltop end -->
        </header>
        <!-- header end-->
    </div>
</template>

<script>
import axios from '../../api/axios'
import Cookies from 'js-cookie'
    export default{
        data(){
            return{
                username:"",
                freeList:["我要买公司","我要卖公司","我要办业务","我要卖商标"],//导航免费发布列表
                logoList:["公司","求购","代办","商标","网店"],//搜索列表
                haveList:["资产","曾经","今日","明天"],//最近搜索列表
                hotSearchList:["装修设计","食品安全","口罩生产","业务咨询","今日头条"],//热搜列表
                recordList:["发布的公司","发布的求购","发布的代办","发布的商标","发布的店铺"],//发布记录列表
                freeRecordList:["发布公司","求购公司","求购商标","求购资质","发布商标","发布网店"],//免费发布列表
                gotop: false,
                allList:[],//全部分类

            }
        },
        created(){
            this.init()
        },
        watch:{
            '$store.state.islogin':function(){
                this.isLogin()
            }
        },
        methods:{
            init:function(){
                this.getallList()
                this.isLogin()
            },
            //请求顶部导航
            getallList:async function(){
                let result = await axios("index/index/getTopGuides")
                this.allList = result.data
            },
            //跳转页面
            jump:function(url){
                if(!this.$store.state.islogin){
                    this.$router.push('/Login')
                    return
                }
                this.$router.push(url)
            },
            //查看用户是否登录
            isLogin:function(){
                let user_name = Cookies.get('user_name')
                this.username = user_name == undefined? "欢迎光临公司快转网!" : user_name + ", 欢迎光临公司快转网!"
            },
            //退出登录
            out:function(){
                Cookies.remove('token');
                Cookies.remove('user_name');
                this.$store.commit('changelogin',false)
            }
        }
    }
</script>

<style scoped lang="less">
    .Header{
        font-size: 14px !important;
        .header{
            .headerTop{
                background-color: #364144;
                .topOne{
                    display:flex;
                    justify-content: space-between;
                    width:1200px;
                    height:36px;
                    margin:0 auto;
                    background-color: #364144;
                    .headerTopLeft{
                        display:flex;
                        p,a{
                            line-height: 36px;
                            color:#CECECE;
                        }
                    }
                    .headerTopRight{
                        display:flex;
                        div,span,a{
                            line-height: 36px;
                            color:#CECECE;
                        }
                        .one,.two{
                            position: relative;
                            width:100px;
                            // border-right:1px solid #626262;
                            &:hover ul{
                                display: block;
                            }
                            .send,.center{
                                display: flex;
                                justify-content: space-between;
                                width:90px;
                                margin:auto;
                                line-height: 36px;
                                span{
                                    margin-left: 10px;
                                }
                            }
                            ul{
                                display: none;
                                position: absolute;
                                z-index: 99;
                                cursor: pointer;
                                top:36px;
                                left: 0;
                                width:100px;
                                background: #fff;
                                border:1px solid #000;
                                li{
                                    line-height: 36px;
                                    text-align: center;
                                    color:#000;
                                    &:hover{
                                        background-color: #eee;
                                        color:chocolate;
                                    }
                                }
                            }
                        }
                        a{
                            width:100px;
                            text-align: center;
                            // border-right:1px solid #626262;
                        }
                    }
                }
            }
            .headerLogo{
                width:1200px;
                margin:50px auto;
                display: flex;
                justify-content: space-between;
                .logo{
                    h1{
                        img{
                            width:260px;
                        }
                    }
                }
                .search{
                    display: flex;
                    width:600px;
                    height:32px;
                    margin:auto;
                    .company{
                        position: relative;
                        cursor: pointer;
                        width:100px;
                        display: flex;
                        line-height: 30px;
                        margin: auto;
                        justify-content: space-around;
                        border:2px solid #EA2417;
                        border-right: 1px solid #A2A2A2;
                        &:hover ul{
                            display: block;
                        }
                        ul{
                            display: none;
                            position: absolute;
                            z-index: 999999;
                            width:100px;
                            top:33px;
                            left:0px;
                            box-shadow: 0 0 3px 3px #ccc;
                            background-color: #fff;
                            li{
                                text-align: center;
                                line-height: 36px;
                                font-size: 14px;
                                &:hover{
                                    color:#EA2417;
                                }
                            }
                        }
                    }
                    .input{
                        position: relative;
                        cursor: pointer;
                        width:400px;
                        height: 30px;
                        margin:auto;
                        border:2px solid #EA2417;
                        border-right: none;
                        border-left: none;
                        &:hover .Recentsearch{
                            display: block;
                        }
                        input{
                            width:400px;
                            border:none;
                            outline: none;
                            text-indent: 2rem;
                            line-height: 30px;
                        }
                        .Recentsearch{
                            cursor: pointer;
                            display: none;
                            position: absolute;
                            z-index: 99999;
                            top:33px;
                            left: 0px;
                            width:400px;
                            height:200px;
                            box-shadow: 0 0 3px 3px #ccc;
                            box-sizing: border-box;
                            padding:20px;
                            color:#8A8A8A;
                            background-color: #fff;
                            .one{
                                p{
                                    line-height: 30px;
                                }
                                ul{
                                    display: flex;
                                    color:#000;
                                    li{
                                        margin-right: 16px;
                                        margin-top:10px;
                                        &:hover{
                                            color:#EA2417;
                                        }
                                    }
                                }
                            }
                            .two{
                                margin-top:20px;
                                .more{
                                    display: flex;
                                    justify-content: space-between;
                                    .huan{
                                        background-color: #EEEEEE;
                                        width:100px;
                                        line-height: 30px;
                                        border-radius: 15px;
                                        text-align: center;
                                        color:#EA2417;
                                    }
                                }
                                ul{
                                    margin-top:10px;
                                    display: flex;
                                    color:#000;
                                    li{
                                        margin-right: 16px;
                                        margin-top:10px;
                                    }
                                }
                            }
                        }
                    }
                    .submlit{
                        width:100px;
                        line-height:34px;
                        height:34px;
                        text-align: center;
                        color:#fff;
                        background-color: #EA2417;
                        i{
                            font-size: 20px;
                        }
                    }
                }
                .my{
                    position: relative;
                    display: flex;
                    width:200px;
                    margin:auto;
                    height: 36px;
                    border:1px solid #EA2417;
                    color:#EA2417;
                    &:hover .Releaserecord{
                        display: flex;
                    }
                    i,p{
                        line-height: 34px;
                    }
                    i{
                        margin-left: 14px;
                        font-size: 30px;
                    }
                    .Releaserecord{
                        cursor: pointer;
                        display: none;
                        position: absolute;
                        z-index: 999;
                        top:38px;
                        right: 0px;
                        width:580px;
                        height:300px;
                        box-shadow: 0 0 3px 3px #ccc;
                        background-color: #fff;
                        color:#8A8A8A;
                        .one,.two{
                            box-sizing: border-box;
                            padding:20px;
                            width:50%;
                            border-right:1px solid #eee;
                            p{
                                padding-left: 10px;
                                line-height: 30px;
                                border-left: 2px solid #D75696;
                                color:#D75696;
                                font-weight: 600;
                            }
                            ul{
                                margin-top:10px;
                                display: flex;
                                justify-content: space-between;
                                flex-wrap: wrap;
                                color:#000;
                                li{
                                    width:50%;
                                    text-align: center;
                                    margin-top:10px;
                                    line-height: 34px;
                                    &:hover{
                                        color:#EA2417;
                                    }
                                }
                            }
                        }
                        .two{
                            p{
                                border-left: 2px solid #41A8DE;
                                color:#41A8DE;
                            }
                        }
                    }
                }
            }
            .alltop{
                font-size: 18px;
                font-weight: 600;
                position: absolute;
                top: 232px;
                left: 0;
                right: 0;
                margin:auto;
                width:1200px;
                height:40px;
                background-color: #fff;
                display: flex;
                .bg{
                    width:230px;
                    height:40px;
                    display: flex;
                    justify-content: space-around;
                    color:#fff;
                    background-image: url("https://www.yizhuanweb.com/assets/img/newImg/leftTop.png");
                    p,i{
                        line-height: 40px;
                        font-weight: 600;
                    }
                    i{
                        display: block;
                        width:20px;
                        height:20px;
                        line-height: 20px;
                        margin-top:10px;
                        font-size: 12px;
                        text-align: center;
                        background-color: #fff;
                        border-radius: 50%;
                        color:#444;
                    }
                }
                .item{
                    position: relative;
                    width:95px;
                    text-align: center;
                    line-height: 40px;
                    &:hover{
                        a{
                            color:#EB2D25;
                        }
                    }
                    a{
                        color:#666;
                    }
                    .color{
                        color:#EB2D25;
                    }
                    img{
                        position: absolute;
                        top: -10px;
                        left: 56px;
                        width:30px;
                        height:20px;
                        animation: run 1s infinite linear;
                    }
                    @keyframes run {
                        0%{
                            margin-top:-10px;
                        }
                        50%{
                            margin-top:-6px;
                        }
                        100%{
                            margin-top:-10px;
                        }
                    }
                    &:hover{
                        color:#EA2417;
                        cursor: pointer;
                    }
                }
            }
        }
    }
</style>
