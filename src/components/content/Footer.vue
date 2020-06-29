<template>
    <div class="Footer">
        <!-- 优势 start -->
        <div class="advantage">
            <div class="grson">
                <div class="son">
                    <img src="../../assets/images/money.png" alt="">
                    <div>
                        <p>买卖直连</p>
                        <p class="bu">买卖双方直连,没有中间商</p>
                    </div>
                </div>
                <div class="son">
                    <img src="../../assets/images/bao.png" alt="">
                    <div>
                        <p>交易保障</p>
                        <p class="bu">安全的交易方式</p>
                    </div>
                </div>
                <div class="son">
                    <img src="../../assets/images/tianp.png" alt="">
                    <div>
                        <p>一对一服务</p>
                        <p class="bu">经纪人跟进协助</p>
                    </div>
                </div>
                <div class="son none">
                    <img src="../../assets/images/fb.png" alt="">
                    <div>
                        <p>免费发布</p>
                        <p class="bu">免费将您的信息推广到全国</p>
                    </div>
                </div>
            </div>
        </div>
        <!-- 优势 end -->

        <!-- 服务 start -->
        <div class="service">
            <div class="serviceSon">
                <h1 class="logo">
                    <img src="../../assets/images/footerLogo.png" alt="">
                </h1>
                <div class="options">
                    <div class="title">
                        <p>服务</p>
                        <p>帮助</p>
                        <p>客服</p>
                        <p>我们</p>
                    </div>
                    <div class="list">
                        <div>
                            <p>转让常识</p>
                            <p>合同签署</p>
                            <p>安全保障</p>
                            <p>严格审核</p>
                        </div>
                        <div>
                            <p>服务协议</p>
                            <p>转让流程</p>
                            <p>购买流程</p>
                            <p>风险控制</p>
                        </div>
                        <div>
                            <p>业务咨询</p>
                            <p>投诉建议</p>
                            <p>售后客服</p>
                        </div>
                        <div>
                            <p>关于我们</p>
                            <p>联系我们</p>
                            <p>商务合作</p>
                            <p>易转问答</p>
                        </div>
                    </div>
                </div>
                <div class="phone">
                    <div class="ewm">
                        <img src="https://www.yizhuanweb.com/uploads/20200401/161ab13b7e2e03ae575bf160a77f1251.jpg" alt="">
                        <p>手机访问更便捷</p>
                    </div>
                    <p class="hotLine">客户服务热线 :</p>
                    <p class="number">176-2150-2150</p>
                </div>
            </div>
        </div>
        <!-- 服务 end -->

        <!-- 友情链接 start -->
        <div class="link">
            <p class="yqlink">友情链接</p>
            <div class="list" ref="navlist">
                <p v-for="(item,index) in linkList" :key="index">{{item}}</p>
            </div>
            <div class="more" v-if="ismore" @click="heightAll()">
                <p v-if="istop">查看更多</p>
                <i class="iconfont" :class="{'icon-shuangxiajiantou-' : istop , 'icon-shuangshangjiantou-' : !istop}"></i>
                <p v-if="!istop">点击收起</p>
            </div>
        </div>
        <!-- 友情链接 end -->

        <!-- 备案信息 start -->
        <div class="record">
            <div class="recordSon">
                <div class="one">
                    <img src="../../assets/images/guohui.png" alt="">
                    <p>沪ICP备26515025456号-1</p>
                </div>
                <div class="one">
                    <img src="../../assets/images/guohui.png" alt="">
                    <p>国家企业信用信息公示系统</p>
                </div>
                <div class="one">
                    <img src="../../assets/images/jigou.png" alt="">
                    <p>国家知识产权局备案代理机构</p>
                </div>
                <div class="one">
                    <img src="../../assets/images/jigou.png" alt="">
                    <p>常年法律顾问</p>
                </div>
            </div>
            <p class="address">地址：上海宝山区友谊西路101号 客服邮箱： qianlonggufen@163.com 或致电：176-2150-2150</p>
        </div>
        <!-- 备案信息 end -->
    </div>
</template>

<script>
export default {
    data(){
        return{
            ismore:false,
            isShowMore:false,
            istop:true,
            linkList:[],
        }
    },
    created(){
        this.init()
    },
    mounted(){
        this.height()
    },
    methods:{
        //初始化页面数据
        init:function(){
            for(let i = 1; i < 50; i++){
                this.linkList.push('上海注册公司')
            }
        },

        //获取友情链接高度
        height:function(){
            //拿到元素高度
            let number =  parseInt(window.getComputedStyle(this.$refs.navlist).height)
            if(number > 50){
                this.$refs.navlist.style.height = '50px'
                this.ismore = true
            }
        },

        //改变友情链接高度
        heightAll:function(){
            this.isShowMore = !this.isShowMore
            this.istop = !this.istop
            this.$refs.navlist.style.height = this.isShowMore? 'auto' : '50px'
        }
    }
}
</script>

<style lang="less">
    .Footer{
        margin-top:50px;
        padding-bottom: 20px;
        background:#1F1F1F url("../../assets/images/footerbg.png") no-repeat;
        background-position-y: 50px;
        background-position-x: -60px;
        font-size: 14px;
        user-select: none;
        .advantage{
            border-bottom: 1px solid #3C3C3C;
            .grson{
                width:1200px;
                margin:auto;
                display: flex;
                height:100px;
                justify-content: center;
                .son{
                    margin-top:27px;
                    display: flex;
                    width:300px;
                    height:45px;
                    border-right:1px solid #3c3c3c;
                    justify-content: center;
                    div{
                        margin-left:10px;
                        p{
                            color:#fff;
                            font-size: 18px;
                        }
                        .bu{
                            color:#a9a6a6;
                            font-size: 14px;
                        }
                    }
                }
                .none{
                    border-right:none;
                }
            }
            
        }
        .service{
            margin-top:50px;
            .serviceSon{
                width:1200px;
                margin:auto;
                display: flex;
                justify-content: space-between;
                .logo{
                    img{
                        width:280px;
                        height:120px;
                    }
                }
                .options{
                    margin-left:50px;
                    width:650px;
                    .title{
                        display: flex;
                        justify-content: space-between;
                        color:#fff;
                        font-weight: bold;
                        font-size: 16px;
                        p{
                            flex:1;
                            text-align: center;
                        }
                    }
                    .list{
                        margin-top:20px;
                        display: flex;
                        justify-content: space-between;
                        div{
                            flex:1;
                            text-align: center;
                            p{
                                color:#a9a6a6;
                                margin-bottom: 10px;
                                &:hover{
                                    color:#EA2417;
                                }
                            }
                        }
                    }
                }
                .phone{
                    flex:1;
                    border-left:1px dashed #363636;
                    box-sizing: border-box;
                    padding-left:100px;
                    color:#a9a6a6;
                    .ewm{
                        img{
                            width:106px;
                            height:106px;
                        }
                        p{
                            text-align: center;
                        }
                    }
                    .hotLine{
                        margin-top:20px;
                    }
                    .number{
                        font-weight: bold;
                        font-size: 16px;
                        margin-top:4px;
                    }
                }
            }
        }
        .link{
            width:1200px;
            margin:10px auto 0;
            .yqlink{
                color:#fefefe;
                padding-bottom: 10px;
                text-indent: 20px;
                border-bottom:1px solid #3C3C3C;
            }
            .list{
                margin-top:20px;
                overflow: hidden;
                p{
                    display: inline-block;
                    margin-right:10px;
                    margin-bottom:6px;
                    color:#525252;
                    &:hover{
                        color:red;
                    }
                }
            }
            .more{
                margin-top:10px;
                text-align: center;
                color:#23A8F2;
                animation: run 1.5s infinite linear;
                i{
                    display: block;
                }
                @keyframes run {
                    0%{
                        transform: translateY(0);
                    };
                    50%{
                        transform: translateY(10px);
                    };
                    100%{
                        transform: translateY(0);
                    };
                }
            }
        }
        .record{
            margin-top:20px;
            border-top:1px solid #3C3C3C;
            .recordSon{
                width:1200px;
                margin:auto;
                margin-top:20px;
                display: flex;
                .one{
                    display: flex;
                    margin-left:20px;
                    img{
                        margin-right:4px;
                    }
                    p{
                        color:#999;
                        font-size: 12px;
                    }
                }
            }
            .address{
                width:1200px;
                margin:auto;
                margin-top:10px;
                text-indent: 20px;
                font-size: 12px;
                color:#515151;
            }
        }
    }
</style>