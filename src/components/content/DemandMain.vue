<template>
    <div class="DemandMain">
        <!-- nav start -->
        <div class="nav">
            <div class="one">
                <i class="iconfont icon-liebiao"></i>
                <p> 当前位置 ：</p>
                <router-link to="/" tag="p" class="zhuan">易转网首页 ></router-link>
                <p>需求大厅</p>
            </div>
            <div class="two">
                <div class="EEEEEE">
                    <i class="iconfont icon-wp-jsb"></i>
                    <p>求购公司</p>
                </div>
                <div class="FF7E00">
                    <i class="iconfont icon-wp-jsb"></i>
                    <p>求购商标</p>
                </div>
                <div class="EA2417">
                    <i class="iconfont icon-wp-jsb"></i>
                    <p>求购资质</p>
                </div>
            </div>
        </div>
        <!-- nav end -->

        <!-- main start -->
        <div class="main">
            <!-- 寻源推荐 start -->
            <div class="xun">
                <img src="https://www.yizhuanweb.com/assets/img/buy/buy_banner.jpg" alt="">
                <div class="xunone">
                    <p class="sonp">寻源推荐</p>
                </div>
            </div>
            <!-- 寻源推荐 end -->

            <!-- 求购网店 start -->
            <div class="qg">
                <div class="qgwd">
                    <p class="line"></p>
                    <p class="text">求购<span>网店</span></p>
                    <div class="advantage">
                        <div>
                            <i class="iconfont icon-duihao"></i>
                            <p>老公司有历史、有沉淀，有资质</p>
                        </div>
                        <div>
                            <i class="iconfont icon-duihao"></i>
                            <p>增加商业成交的机会</p>
                        </div>
                        <div>
                            <i class="iconfont icon-duihao"></i>
                            <p>增加陌生客户的信任</p>
                        </div>
                    </div>
                </div>
                <div class="qglist">
                    <div class="listtop">
                        <p>服饰</p>
                        <p>母婴</p>
                        <p>化妆品</p>
                        <p>食品</p>
                        <p>3C数码</p>
                    </div>
                </div>
                <div class="qgresult">
                    <div class="left">
                        <div v-for="(item,index) in qgresult" :key="index">
                            <div class="title">
                                <img src="" alt="">
                                <p>{{item.title}}</p>
                            </div>
                            <p>地区: {{item.region}}</p>
                            <p>店铺类型: {{item.type}}</p>
                            <p>主营类目: {{item.zytype}}</p>
                            <div class="price">
                                
                                <p>地区: {{item.region}}</p>

                            </div>
                        </div>
                    </div>
                    <div class="right">

                    </div>
                </div>
            </div>
            
            <!-- 求购网店 end -->


        </div>
        <!-- main end -->
    </div>
</template>

<script>
export default {
    data(){
        return{
            qgresult:[
                {
                    title:"求购，电动车头盔旗舰店，专营店旗舰店都行",
                    region:"全国",
                    type:"天猫商城",
                    zytype:"运动户外",
                    price:"13000000.00元"
                }
            ]
        }
    },
    methods:{
    }
}
</script>

<style scoped lang="less">
    .DemandMain{
        font-size: 14px;
        margin-top:80px;
        .nav{
            width:1200px;
            height:60px;
            margin:auto;
            display: flex;
            justify-content: space-between;
            .one{
                display: flex;
                p,i{
                    line-height: 60px;
                    margin-right: 10px;
                    color:#666;
                    font-size: 14px;
                }
                i{
                    font-size: 18px;
                    color:#000;
                }
                .zhuan{
                    transition: .3s;
                    &:hover{
                        color:#FF7815
                    }
                }
            }
            .two{
                display: flex;
                justify-content: space-between;
                width:450px;
                div{
                    display: flex;
                    justify-content: center;
                    margin:auto 0;
                    width:140px;
                    line-height: 34px;
                    i{
                        margin-right: 10px;
                        font-size: 18px;
                    }
                }
                .EEEEEE{
                    background-color: #EEEEEE;
                }
                .FF7E00{
                    background-color: #FF7E00;
                    color:#fff;
                }
                .EA2417{
                    background-color: #EA2417;
                    color:#fff;
                }
            }
        }
        .main{
            background-color: #F2F2F2;
            margin-bottom: 100px;
            .xun{
                width:1200px;
                margin:auto;
                img{
                    width:1200px;
                    height:188px
                }
                .xunone{
                    .sonp{
                        border: 1px solid #ea2417;
                        font-size: 22px;
                        font-weight: 500;
                        width:190px;
                        height: 45px;
                        line-height: 43px;
                        box-sizing: border-box;
                        padding: 0 50px;
                        transition:.3s ease 0s;
                        margin:30px auto;
                        display: block;
                        color: red;
                        background: linear-gradient(135deg,transparent 30px,#ea2417 30px,#ea2417 31px,transparent 31px),linear-gradient(-45deg,transparent 30px,#ea2417 30px,#ea2417 31px,transparent 31px);
                        &:hover{
                            background-color: #ea2417!important;
                            color: #fff;
                            padding-left:20px
                        }
                    }
                }
            }
            .qg{
                .qgwd{
                    width:1200px;
                    margin:60px auto 10px;
                    background-color: #fff;
                    border-top:1px solid transparent;
                    padding-bottom: 20px;
                    .line{
                        width:730px;
                        margin:50px auto 0 ;
                        border-bottom: 1px solid #ddd;
                    }
                    .text{
                        width:200px;
                        margin: -28px auto 0;
                        background-color: #fff;
                        line-height: 50px;
                        text-align: center;
                        font-size: 24px;
                        span{
                            color:#FF7E52;
                        }
                    }
                    .advantage{
                        display: flex;
                        width:700px;
                        margin:10px auto 0;
                        justify-content: space-between;
                        div{
                            display: flex;
                            i{
                                color:red;
                                font-size: 20px;
                            }
                            p{
                                margin-left:6px;
                                color:#999
                            }
                        }
                    }
                }
                .qglist{
                    width:1200px;
                    margin:0 auto 0;
                    background-color: #fff;
                    border-bottom: 1px solid #ddd;
                    .listtop{
                        width:700px;
                        margin:auto;
                        display: flex;
                        padding:14px 0;
                        justify-content: space-between;
                        p{
                            line-height: 26px;
                            border-radius: 4px;
                            text-align: center;
                            background-color: red;
                            color:#fff;
                            width:120px;

                        }
                    }
                }
                .qgresult{
                    width:1200px;
                    margin:auto;
                }
            }
        }
    }
</style>