<template>
    <div class="Personal">
        <!-- left start -->
        <div class="left">
            <!-- 个人信息 start-->
            <div class="information">
                <img :src="userData.avater" alt="">
                <div class="xinxi">
                    <div class="son one">
                        <p class="onepo">会员名：{{userData.user_name}}</p>
                        <p class="onept">qq绑定：<span>{{userData.is_bind_qq}}</span></p>
                    </div>
                    <div class="son two">
                        <div class="phone">
                            <p>手机号：</p>
                            <div class="number">
                                <i class="iconfont icon-shouji"></i>
                                <span>{{userData.user_tel}}</span>
                            </div>
                        </div>
                        <p class="tpo">微信绑定：<span>{{userData.is_bind_wechat}}</span></p>
                    </div>
                <div class="son three">
                        <p class="tpo">实名标识：<span>{{userData.is_certification}}</span></p>
                        <p class="tpt">上次登录：<span>{{userData.last_login_time}}</span></p>
                </div>
                </div>
            </div>
            <!-- 个人信息 end -->

            <!-- 发布 start -->
            <div class="fabu">
                <p class="line"></p>
                <p class="kuaisu">快速发布</p>
                <div>
                    <p class="a"><i class="iconfont icon-star"></i>卖公司</p>
                    <p class="b"><i class="iconfont icon-fangdajing"></i>卖商标</p>
                    <p class="c"><i class="iconfont icon-ai-module"></i>卖网店</p>
                    <p class="a"><i class="iconfont icon-suo"></i>买公司</p>
                    <p class="b"><i class="iconfont icon-unie737"></i>买商标</p>
                    <p class="a"><i class="iconfont icon-tuikuan"></i>买资质</p>
                    <p class="c"><i class="iconfont icon-shouye"></i>买网店</p>
                </div>
            </div>
            <!-- 发布 end -->

            <!-- 发布管理 start -->
            <div class="more">
                <div class="moretop">
                    <div>
                        <span></span>
                        <p>发布管理</p>
                    </div>
                    <router-link to="/PersonalCenter/Record" class="span" tag="span"> 查看更多 ></router-link>
                </div>
                <div class="link">
                    <p :class="{'show' : moreshow == 1}" @click="moreshow = 1">发布的公司</p>
                    <p :class="{'show' : moreshow == 2}" @click="moreshow = 2">发布的求购</p>
                    <p :class="{'show' : moreshow == 3}" @click="moreshow = 3">发布的代办</p>
                    <p :class="{'show' : moreshow == 4}" @click="moreshow = 4">发布的商标</p>
                </div>
                <div class="list">
                    <div v-show="moreshow == 1" class="company one">
                        <div class="name">
                            <p>名称</p>
                            <p>状态</p>
                            <p>浏览量</p>
                            <p>发布时间</p>
                        </div>
                        <div class="result">
                            <span>1</span>
                            <p>上海环球金融中心</p>
                            <p>审核中</p>
                            <p>0</p>
                            <p>2018-06-21 8:20:10</p>
                        </div>
                    </div>
                    <div v-show="moreshow == 2" class="look one">
                        <div class="name">
                            <p>名称</p>
                            <p>状态</p>
                            <p>浏览量</p>
                            <p>发布时间</p>
                        </div>
                        <div class="result">
                            <span>1</span>
                            <p>上海环球金融中心</p>
                            <p>审核中</p>
                            <p>0</p>
                            <p>2018-06-21 8:20:10</p>
                        </div>
                    </div>
                    <div v-show="moreshow == 3" class="sth one">
                        <div class="name">
                            <p>名称</p>
                            <p>状态</p>
                            <p>浏览量</p>
                            <p>发布时间</p>
                        </div>
                        <div class="result">
                            <span>1</span>
                            <p>上海环球金融中心</p>
                            <p>审核中</p>
                            <p>0</p>
                            <p>2018-06-21 8:20:10</p>
                        </div>
                    </div>
                    <div v-show="moreshow == 4" class="trademark one">
                        <div class="name">
                            <p>商标注册号</p>
                            <p>价格</p>
                            <p>状态</p>
                            <p>浏览量</p>
                            <p>发布时间</p>
                        </div>
                        <div class="result">
                            <span>1</span>
                            <p>241862562sdx5745</p>
                            <p>2500000000</p>
                            <p>审核中</p>
                            <p>0</p>
                            <p>2018-06-21 8:20:10</p>
                        </div>
                    </div>
                </div>
            </div>
            <!-- 发布管理 end -->

            <!-- 线索管理 start -->
            <div class="more">
                <div class="moretop">
                    <div>
                        <span></span>
                        <p>线索管理</p>
                    </div>
                    <span class="span"> 查看更多 ></span>
                </div>
                <div class="link">
                    <p :class="{'show' : moreshowt == 1}" @click="moreshowt = 1">发布的公司</p>
                    <p :class="{'show' : moreshowt == 2}" @click="moreshowt = 2">发布的求购</p>
                    <p :class="{'show' : moreshowt == 3}" @click="moreshowt = 3">发布的代办</p>
                    <p :class="{'show' : moreshowt == 4}" @click="moreshowt = 4">发布的商标</p>
                </div>
                <div class="list">
                    <div class="one">
                        <div class="name">
                            <p>用户ID</p>
                            <p>名称</p>
                            <p>姓名</p>
                            <p>电话</p>
                        </div>
                        <div class="result">
                            <span>1</span>
                            <p>51565833</p>
                            <p>一碗清汤荞麦面</p>
                            <p>纵横捭阖</p>
                            <p>18321891624</p>
                        </div>
                    </div>
                </div>
            </div>
            <!-- 线索管理 start -->
        </div>
        <!-- left end -->
        
        <!-- right start -->
        <div class="right">
            <!-- 易转网公告 start -->
            <div class="announcement">
                <div class="atop">易转网公告</div>
                <div class="amain">
                    <p>发帖置顶与刷新</p>
                    <p>公众号订阅关注信息</p>
                    <p>网站会员积分(易转币)</p>
                    <p>会员个人认证与机构认证</p>
                    <p>易转网个人中心更新公告</p>
                    <p>易转网个人中心全新上线</p>
                </div>
            </div>
            <!-- 易转网公告 end -->

            <!-- 二维码 start -->
                <div class="qrcode">
                    <img class="img" src="../../assets/images/logo_round.4b7cbb8f.jpg" alt="">
                    <p>全国服务热线</p>
                    <p style="font-size:24px">400-625-1117</p>
                    <div class="ewm">
                        <img src="https://www.yizhuanweb.com/uploads/20200401/161ab13b7e2e03ae575bf160a77f1251.jpg" alt="">
                    </div>
                    <p>关注易转网</p>
                </div>
            <!-- 二维码 end -->
        </div>
        <!-- right end -->
    </div>
</template>


<script>
import axios from '../../api/axios'
import Cookies from 'js-cookie'
export default {
    data(){
        return{
            moreshow:1,
            moreshowt:1,
            userData:{},
        }
    },
    created(){
        this.init()
    },
    methods:{
        //初始化页面数据
        init:function(){
            this.getdata()
        },
        //获取用户信息
        getdata:async function(){
            let id = Cookies.get('user_id')
            let result = await axios('index/user/userCenter',{id},false)
            if(result.code == 200){
                result.data.last_login_time = this.getTime(result.data.last_login_time)
                result.data.is_bind_qq = result.data.is_bind_qq == 1? '已绑定' : '未绑定'
                result.data.is_bind_wechat = result.data.is_bind_wechat == 1? '已绑定' : '未绑定'
                result.data.is_certification = result.data.is_certification == 1? '已认证' : '未认证'
                this.userData = result.data
            }
        },
        //把时间戳转换成日期
        getTime:function(timeStamp){
           return new Date(parseInt(timeStamp) * 1000).toLocaleString('chinese', { hour12: false }).split("/").join("-")
        },    
    }
}   
</script>


<style lang="less">
    .Personal{
        font-size: 14px;
        flex: 1;
        display: flex;
        .left{
            flex: 1;
            border-right:2px solid skyblue;
            .information{
                display: flex;
                background-color: #fff;
                padding-bottom: 20px;
                border-bottom: 10px solid #F8F8F8;
                img{
                    width:90px;
                    height:90px;
                    border:5px solid #DCDCDC;
                    border-radius: 50%;
                    margin-left:20px;
                    margin-top:30px;
                    background: url('../../assets/images/avatar.png') no-repeat center;
                }
                .xinxi{
                    margin-left:40px;
                    margin-top:34px;
                    width:600px;
                    .son{
                        display: flex;
                        justify-content: space-between;
                    }
                    .one{
                        .onepo{
                            font-weight: bold;
                            font-size: 18px;
                        }
                        .onept{
                            margin-right: 78px;
                            span{
                                display: inline-block;
                                width:50px;
                                text-align: center;
                                line-height: 20px;
                                height:20px;
                                border:1px solid;
                                font-size: 12px;
                                color:#409eff;
                                border-radius: 2px;
                                background-color: #ECF5FF;
                            }
                        }
                    }
                    .two{
                        display: flex;
                        justify-content: space-between;
                        margin:10px 0;
                        .phone{
                            display: flex;
                            line-height: 24px;
                            .number{
                                width:120px;
                                text-align: center;
                                line-height:24px;
                                border-radius: 2px;
                                border:1px solid;
                                color:#f56c6c;
                                font-size: 12px;
                                background-color: #FEF0F0;
                                span{
                                    vertical-align: 1px;
                                }
                            }
                        }
                        .tpo{
                            margin-right: 56px;
                            span{
                                display: inline-block;
                                width:60px;
                                text-align: center;
                                line-height: 20px;
                                height:20px;
                                border:1px solid;
                                font-size: 12px;
                                color:#409eff;
                                border-radius: 2px;
                                background-color: #ECF5FF;
                            }
                        }
                    }
                    .three{
                        .tpo,.tpt{
                            span{
                                color:#909399;
                            }
                        }
                    }
                }
            }
            .fabu{
                position: relative;
                padding-top:20px;
                padding-bottom: 20px;
                border-bottom: 10px solid #EFEFEF;
                .line{
                    border-bottom:1px solid #ccc;
                }
                .kuaisu{
                    position: absolute;
                    top: 4px;
                    left: 0;
                    right: 0;
                    width:200px;
                    line-height: 30px;
                    background-color: #fff;
                    margin:0 auto;
                    text-align: center;
                }
                div{
                    margin-top:20px;
                    display: flex;
                    justify-content: space-around;
                    p{
                        color:#fff;
                        border-radius: 4px;
                        width:100px;
                        line-height: 28px;
                        text-align: center;
                        font-size: 12px;
                        i{
                            margin-right: 4px;
                        }
                    }
                    .a{
                        background-color:#409EFF ;
                    }   
                    .b{
                        background-color:#67C23A ;
                    }
                    .c{
                        background-color:#909398 ;
                    }
                }
            }
            .more{
                background-color: #F8F8F8;
                border-bottom: 20px solid #EFEFEF;
                font-size: 12px;
                .moretop{
                    display: flex;
                    padding:4px 10px;
                    justify-content: space-between;
                    border-bottom: 1px solid #ddd;
                    div{
                        display: flex;
                        line-height: 26px;
                        span{
                            display: inline-block;
                            height:26px;
                            border:2px solid #C7161C;
                            margin-right:10px;
                        }
                    }
                    .span{
                        color:#66B1FF;
                        line-height: 26px;
                    }
                }
                .link{
                    display: flex;
                    line-height: 40px;
                    color:#909399;
                    font-size: 12px;
                    p{
                        width:120px;
                        text-align: center;
                    }
                    .show{
                        background-color: #fff;
                        color:skyblue
                    }
                }
                .list{
                    background-color: #fff;
                    .one{
                        .name{
                            display: flex;
                            justify-content: space-between;
                            line-height: 50px;
                            border-bottom: 1px solid #ddd;
                            font-size: 12px;
                            p{
                                flex:1;
                                color:#666;
                                text-align: center;
                            }
                        }
                    }
                    .result{
                        display: flex;
                        justify-content: space-between;
                        padding-left:10px;
                        line-height: 50px;
                        border-bottom: 1px solid #ddd;
                        p{
                            flex:1;
                            color:#666;
                            text-align: center;
                            overflow: hidden;
                            text-overflow:ellipsis;
                            white-space: nowrap; 
                        }
                    }
                }
            }
        }
        .right{
            width:300px;
            .announcement{
                box-sizing: border-box;
                padding:0 10px;
                border-bottom: 20px solid #F0F0F0;
                .atop{
                    color:#409EFF;
                    line-height: 40px;
                    border-bottom: 2px solid #409EFF;
                }
                .amain{
                    p{
                        line-height: 30px;
                    }
                }
            }
            .qrcode{
                .img{
                    display: block;
                    margin:auto;
                    margin-top:20px;
                    width:150px;
                    height:110px;
                }
                p{
                    text-align: center;
                    margin-bottom:10px;
                }
                .ewm{
                    position: relative;
                    margin:20px auto;
                    border:1px solid #ddd;
                    width:250px;
                    height:250px;
                    img{
                        position: absolute;
                        top: 0;
                        right: 0;
                        left: 0;
                        bottom: 0;
                        margin: auto;
                        width:238px;
                        height:238px;
                    }
                }
            }
        }
    }           
               
</style>