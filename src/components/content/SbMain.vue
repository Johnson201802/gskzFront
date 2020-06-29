<template>
    <div class="SbMain">
        <!-- nav start -->
        <div class="nav">
            <div class="one">
                <i class="iconfont icon-liebiao"></i>
                <p> 当前位置 ：</p>
                <p>易转网首页 ></p>
                <p>商标转让</p>
            </div>
            <div class="two">
                <div class="EEEEEE">
                    <i class="iconfont icon-yanjing"></i>
                    <p>平台帮找</p>
                </div>
                <div class="FF7E00">
                    <i class="iconfont icon-wp-jsb"></i>
                    <p>求购商标</p>
                </div>
                <div class="EA2417">
                    <i class="iconfont icon-wp-jsb"></i>
                    <p>免费发布商标</p>
                </div>
            </div>
        </div>
        <!-- nav end -->

        <!-- screen start -->
        <div class="screen">
            <div class="margin">
                <div class="left">
                    <div class="leftr">
                        <div class="leftrone" :class="{'last' : index == 3}" v-for="(item,index) in screenList" :key="index">
                            <p>{{screentitle[index]}}:</p>
                            <div class="son">
                                <div 
                                    :class="{'show': index1 == screenshow[index]}" 
                                    v-for="(item,index1) in screenList[index]" 
                                    :key="index1"
                                    @click="changescreen(index,index1)"
                                >{{item}}</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="result">
                <div class="resulttop">
                    <div class="tt">
                        <div v-for="(item,index) in resultname" 
                            :key="index" 
                            :class="{'showres' : rstopnum == index}" 
                            @click="cshowres(index)">
                            <span>{{item}} </span>
                            <i class="iconfont icon-shangxiajiantou-"></i>
                        </div>
                    </div>
                    <div class="lianxikf">联系客服</div>
                </div>
                <div class="resultbottom">
                    <div class="bfath" v-for="(item,index) in resultList" :key="index">
                        <img :src="item.url" alt="">
                        <p>{{item.title}}</p>
                        <span>￥{{item.price}}</span>
                        <div>砍价</div>
                    </div>
                </div>
                <div class="pages">
                    <div class="block">
                        <el-pagination
                            background
                            :page-size="1"
                            layout="prev, pager, next"
                            :total=resultList.length>
                        </el-pagination>
                    </div>
                </div>
                <div class="wei">
                    <img src="../../assets/images/weizhaodao.png" alt="">
                    <div class="weione">
                        <div>
                            <p class="pone">没有找到心仪的公司?</p>
                            <p class="ptwo">联系客服帮忙找</p>
                            <span>或</span>
                            <p class="pthree">发布求购需求</p>
                        </div>
                        <p class="pfour">不要急哦，好多热门资源没有展示出来，马上联系服务顾问获取</p>
                    </div>
                </div>
                <div class="interested">
                    <div class="intleft">
                        <span class="ldsa"></span>
                        <p>精选推荐<span> 优质商标 包装你的大品牌</span></p>
                    </div>
                    <div class="inlist">
                        <div class="inlistone" v-for="(item,index) in interested" :key="index">
                            <img :src="item.url" alt="">
                            <p>{{item.title}}</p>
                            <span>￥{{item.price}}</span>
                            <div>砍价</div>
                        </div> 
                    </div>
                </div>
            </div>
        </div>
        <!-- screen end -->
    </div>
</template>

<script>
export default {
    data(){
        return{
            screenList:[
                ["不限","服饰","母婴","化妆品","食品","3C数码","图书音像","运动户外","汽车及配件","服务大类","珠宝配饰"
                ,"家用电器","居家日用","家具家装家纺","鞋类箱包","保健品及医药","乐器","话费通讯","网游及QQ"],
                ["不限","中文","英文","中文+英文","图形","中文+图形","组合","数字","拼音","英文+图形","中文+拼音","中文+英文+拼音"],
                ["不限","1-2字","3字","4字","5字","5字以上"],
                ["不限","1万以下","1-2万","2-5万","5万以上"],
            ],
            resultname:["综合排序","价格排序","下证时间","字符数量","人气排序"],
            screentitle:["商标分类","组合类型","字符长度","出售价格"],
            screenshow:[0,0,0,0,0,0,0,0,0],
            rstopnum:0,
            resultList:[
                {
                    url:"http://tmpic.tmkoo.com/ad4bc2b35ab2ed72967541ee3bb13223",
                    title:"3类-柒小柒",
                    price:"2000.00"
                },
                {
                    url:"http://tmpic.tmkoo.com/ad4bc2b35ab2ed72967541ee3bb13223",
                    title:"3类-柒小柒",
                    price:"2000.00"
                },{
                    url:"http://tmpic.tmkoo.com/ad4bc2b35ab2ed72967541ee3bb13223",
                    title:"3类-柒小柒",
                    price:"2000.00"
                },{
                    url:"http://tmpic.tmkoo.com/ad4bc2b35ab2ed72967541ee3bb13223",
                    title:"3类-柒小柒",
                    price:"2000.00"
                },{
                    url:"http://tmpic.tmkoo.com/ad4bc2b35ab2ed72967541ee3bb13223",
                    title:"3类-柒小柒",
                    price:"2000.00"
                },{
                    url:"http://tmpic.tmkoo.com/ad4bc2b35ab2ed72967541ee3bb13223",
                    title:"3类-柒小柒",
                    price:"2000.00"
                },{
                    url:"http://tmpic.tmkoo.com/ad4bc2b35ab2ed72967541ee3bb13223",
                    title:"3类-柒小柒",
                    price:"2000.00"
                },{
                    url:"http://tmpic.tmkoo.com/ad4bc2b35ab2ed72967541ee3bb13223",
                    title:"3类-柒小柒",
                    price:"2000.00"
                },{
                    url:"http://tmpic.tmkoo.com/ad4bc2b35ab2ed72967541ee3bb13223",
                    title:"3类-柒小柒",
                    price:"2000.00"
                },{
                    url:"http://tmpic.tmkoo.com/ad4bc2b35ab2ed72967541ee3bb13223",
                    title:"3类-柒小柒",
                    price:"2000.00"
                },{
                    url:"http://tmpic.tmkoo.com/ad4bc2b35ab2ed72967541ee3bb13223",
                    title:"3类-柒小柒",
                    price:"2000.00"
                },{
                    url:"http://tmpic.tmkoo.com/ad4bc2b35ab2ed72967541ee3bb13223",
                    title:"3类-柒小柒",
                    price:"2000.00"
                },{
                    url:"http://tmpic.tmkoo.com/ad4bc2b35ab2ed72967541ee3bb13223",
                    title:"3类-柒小柒",
                    price:"2000.00"
                },{
                    url:"http://tmpic.tmkoo.com/ad4bc2b35ab2ed72967541ee3bb13223",
                    title:"3类-柒小柒",
                    price:"2000.00"
                },{
                    url:"http://tmpic.tmkoo.com/ad4bc2b35ab2ed72967541ee3bb13223",
                    title:"3类-柒小柒",
                    price:"2000.00"
                },
            ],//结果列表
            interested:[
                {
                    url:"http://tmpic.tmkoo.com/ad4bc2b35ab2ed72967541ee3bb13223",
                    title:"3类-柒小柒",
                    price:"2000.00"
                },
                {
                    url:"http://tmpic.tmkoo.com/ad4bc2b35ab2ed72967541ee3bb13223",
                    title:"3类-柒小柒",
                    price:"2000.00"
                },
                {
                    url:"http://tmpic.tmkoo.com/ad4bc2b35ab2ed72967541ee3bb13223",
                    title:"3类-柒小柒",
                    price:"2000.00"
                },
                {
                    url:"http://tmpic.tmkoo.com/ad4bc2b35ab2ed72967541ee3bb13223",
                    title:"3类-柒小柒",
                    price:"2000.00"
                },
                {
                    url:"http://tmpic.tmkoo.com/ad4bc2b35ab2ed72967541ee3bb13223",
                    title:"3类-柒小柒",
                    price:"2000.00"
                },
            ],//可能感兴趣公司列表
        }
    },
    methods:{
        //切换筛选条件
        changescreen:function(index,index1){
            this.screenshow.splice(index,1,index1)
        },
        //切换展示区域
        cshowres:function(num){
            this.rstopnum = num
        }
    }
}
</script>

<style scoped lang="less">
    .SbMain{
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
        .screen{
            background-color: #F2F2F2;
            padding-top:10px;
            .margin{
                width:1200px;
                margin:auto;
                display: flex;
                justify-content: space-between;
                .left{
                    display: flex;
                    justify-content: space-between;
                    box-sizing: border-box;
                    padding-top:20px;
                    background-color: #fff;
                    border-radius: 6px;
                    .leftr{
                        flex: 1;
                        padding:0 30px;
                        .leftrone{
                            display: flex;
                            margin-top:10px;
                            border-bottom: 1px solid #ccc;
                            padding-bottom: 20px;
                            p{
                                width:120px;
                                line-height:30px;
                                height:30px;
                                text-indent: 10px;
                                i{
                                    display: inline-block;
                                    margin-right:10px;
                                    vertical-align: -1px;
                                    color:#666;
                                }
                            }
                            .son{
                                color:#666;
                                flex:1;
                                display: flex;
                                flex-wrap: wrap;
                                div{
                                    padding:0 16px;
                                    margin-right: 4px;
                                    line-height: 24px;
                                    border-radius: 16px;
                                    margin-top:4px;
                                    &:hover{
                                        color:red
                                    }
                                }
                                .show{
                                    background-color: red;
                                    color:#fff;
                                    &:hover{
                                        color:#fff
                                    }
                                }
                            }
                        }
                        .last{
                            border-bottom: none;
                        }
                    }
                }
            }
            .result{
                width:1200px;
                margin:20px auto 0;
                .resulttop{
                    display: flex;
                    height:54px;
                    justify-content: space-between;
                    background-color: #fff;
                    border-bottom: 1px solid #eee;
                    border-radius: 6px 6px 0 0;
                    .showres{
                        color:skyblue
                    }
                    .tt{
                        display: flex;
                        div{
                            width:170px;
                            line-height: 54px;
                            border-right:1px solid #F2F2F2;
                            text-align: center;
                        }
                    }  
                    i{
                        font-size: 12px;
                    }
                    .lianxikf{
                        line-height:30px;
                        height:30px;
                        text-align: center;
                        width:120px;
                        margin:auto;
                        border-radius: 6px;
                        color:red;
                        border:1px solid red;
                    }
                }
                .resultbottom{
                    justify-content: space-between;
                    display: flex;
                    flex-wrap: wrap;
                    margin-top:10px;
                    .bfath{
                        width:230px;
                        height:300px;
                        background-color: #fff;
                        margin-bottom: 10px;
                        overflow: hidden;
                        &:hover{
                            margin-top:-2px;
                            box-shadow: 0 0 6px 10px #ddd;
                            div{
                                transform: translateY(19px);
                            }
                        }
                        img{
                            display: block;
                            width:136px;
                            height:136px;
                            margin:20px auto 40px;
                        }
                        p{
                            padding-top:10px;
                            border-top:1px solid #EEEEEE;
                            text-align: center;
                            font-size: 16px;
                        }
                        span{
                            display: block;
                            text-align: center;
                            font-weight: bold;
                            margin-top:4px;
                            color:red;
                        }
                        div{
                            line-height: 30px;
                            text-align: center;
                            width:200px;
                            background-color: red;
                            border-radius: 4px 4px 0 0;
                            margin:auto;
                            color:#fff;
                            transform: translateY(49px);
                            transition: 0.3s;
                        }
                    }
                }
                .pages{
                    width:1200px;
                    margin:auto;
                    padding-bottom: 50px;
                    background-color: #fff;
                    .block{
                        padding-top:20px;
                        text-align: center;
                    }
                }
                .wei{
                    display: flex;
                    width:1200px;
                    margin:auto;
                    box-sizing: border-box;
                    padding:0 180px;
                    background-color: #fff;
                    img{
                        margin-right:20px;
                    }
                    .weione{
                        padding-top:14px;
                        div{
                            display: flex;
                            .ptwo{
                                width:154px;
                                text-align: center;
                                color:#fff;
                                font-size: 16px;
                                line-height: 40px;
                                height:40px;
                                border-radius: 4px;
                                background-color: red;
                            }
                            span{
                                display: block;
                                margin:0 16px;
                                font-size: 26px;
                            }
                            .pthree{
                                width:170px;
                                line-height: 38px;
                                height:38px;
                                text-align: center;
                                border-radius: 4px;
                                color:red;
                                border:1px solid red;
                            }
                            .pone{
                                font-size: 26px;
                                margin-right:20px
                            }
                        }
                        .pfour{
                            color:#999;
                            margin-top:10px;
                        }
                    } 
                }
                .interested{
                    width:1200px;
                    margin:auto;
                    margin-bottom: 20px;
                    background-color: #fff;
                    box-sizing: border-box;
                    padding-top:30px;
                    .intleft{
                        display: flex;
                        .ldsa{
                            display: block;
                            height:20px;
                            width:4px;
                            background-color: #F61825;
                            margin-right:10px;
                        }
                        p{
                            font-size: 16px;
                            font-weight: bold;
                            span{
                                font-size: 14px;
                                font-weight: normal;
                                color:#a6a6a6;
                            }
                        }
                    }
                    .inlist{
                        display: flex;
                        justify-content: space-between;
                        margin-top:20px;
                        background-color: #F7F9FB;
                        .inlistone{
                            width:230px;
                            height:300px;
                            background-color: #fff;
                            margin-bottom: 10px;
                            overflow: hidden;
                            &:hover{
                                margin-top:-2px;
                                div{
                                    transform: translateY(19px);
                                }
                            }
                            img{
                                display: block;
                                width:136px;
                                height:136px;
                                margin:20px auto 40px;
                            }
                            p{
                                padding-top:10px;
                                border-top:1px solid #EEEEEE;
                                text-align: center;
                                font-size: 16px;
                            }
                            span{
                                display: block;
                                text-align: center;
                                font-weight: bold;
                                margin-top:4px;
                                color:red;
                            }
                            div{
                                line-height: 30px;
                                text-align: center;
                                width:200px;
                                background-color: red;
                                border-radius: 4px 4px 0 0;
                                margin:auto;
                                color:#fff;
                                transform: translateY(49px);
                                transition: 0.3s;
                            }
                        }
                    }
                }
            }
            
        }
    }
</style>