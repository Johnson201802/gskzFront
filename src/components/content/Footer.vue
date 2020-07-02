<template>
    <div class="Footer">
        <!-- 优势 start -->
        <!-- <div class="advantage">
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
        </div> -->
        <!-- 优势 end -->

        <!-- 服务 start -->
        <div class="service">
            <div class="serviceSon">
                <!-- <div class="logo">
                    <img src="../../assets/images/logo2.png" alt="">
                </div> -->
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
                    <div class="ewm" style="text-align: center;">
                        <img src="https://www.yizhuanweb.com/uploads/20200401/161ab13b7e2e03ae575bf160a77f1251.jpg" alt="">
                        <p>手机访问更便捷</p>
                    </div>
                    <p class="hotLine" style="text-align: center;">客户服务热线</p>
                    <p class="number" style="text-align: center;">176-2150-2150</p>
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
        </div>
        <!-- 友情链接 end -->

        <!-- 备案信息 start -->
        <div class="record">
            <div class="recordSon">
                <div class="one">
					<a href="https://www.baidu.com" target="_blank" style="padding-right: 10px;">Copyright © 2016-2020 公司快转网</a>
                    <img src="../../assets/images/guohui.png" alt="">
                    <a href="https://www.baidu.com" target="_blank" style="padding-right: 10px;">沪ICP备26515025456号-1</a>
					<a href="http://www.magiczh.com/" target="_blank">&nbsp;&nbsp;&nbsp;技术支持：上海迈暨科技</a>
                </div>
            </div>
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
		
    },
    methods:{
        //初始化页面数据
        init:function(){
            for(let i = 1; i < 20; i++){
                this.linkList.push('上海注册公好的')
            }
        },

    }
}
</script>

<style lang="less">
    .Footer{
		min-width: 1200px;
        padding-top:50px;
        background-color:#2e3238;
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
					display: flex;
					align-items: center;
					justify-content: space-around;
                    img{
						width: 60%;
                        // width:239px;
                    }
                }
                .options{
                    width:82%;
                    .title{
                        display: flex;
                        justify-content: space-between;
                        color:#fff;
                        font-weight: bold;
                        font-size: 16px;
                        p{
                            flex:1;
                            text-align: left;
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
								cursor: pointer;
                                color:#a9a6a6;
                                margin-bottom: 10px;
								text-align: left;
                                &:hover{
                                    color:#F3A54D;
                                }
                            }
                        }
                    }
                }
                .phone{
					width:18%;
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
                border-bottom:1px solid #3C3C3C;
            }
            .list{
                margin-top:20px;
                overflow: hidden;
                p{
                    display: inline-block;
                    margin-right:10px;
                    margin-bottom:6px;
                    color:#a9a6a6;
					cursor: pointer;
                    &:hover{
                        color:#F3A54D;
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
			background-color: #272a30;
			
            .recordSon{
                width:1200px;
                padding:20px;
                margin:0 auto;
                margin-top:20px;
				display: flex;
				justify-content: space-around;
                // display: flex;
                .one{
                    margin-left:20px;
					display: flex;
					align-items: center;
					color:#fff;
                    img{
                        margin-right:0px;
                    }
                    a{
                        color:#fff;
                        font-size: 12px;
                    }
                }
            }
        }
    }
</style>