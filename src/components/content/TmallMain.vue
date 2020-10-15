<template>
    <div class="transferMain">
        <!-- nav start -->
        <div class="nav">
            <div class="one">
                <i class="iconfont icon-liebiao"></i>
                <p> 当前位置 ：</p>
                <router-link to="/" tag="p" class="zhuan">易转网首页 ></router-link>
                <p>天猫转让</p>
            </div>
            <div class="two">
                <div class="EEEEEE xxx">
                    <i class="iconfont icon-unie737"></i>
                    <p>平台帮找</p>
                    <div class="ewm">
                        <img src="https://www.yizhuanweb.com/uploads/20200611/6a60ca36b2fd3d9adae989e28544d6f6.png" alt="">
                        <p>扫码联系客服</p>
                    </div>
                </div>
                <div class="FF7E00 xxx">
                    <i class="iconfont icon-wp-jsb"></i>
                    <p>求购商铺</p>
                </div>
            </div>
        </div>
        <!-- nav end -->

        <!-- screen start -->
        <div class="screen">
            <div class="margin">
                <div class="left33">
                    <div class="leftr">
                        <div class="leftrone" :class="{'last' : index == 3}" v-for="(item,index) in screenList" :key="index">
                            <p><i class="iconfont" :class="(screenimgtitle[index])" ></i>{{screentitle[index]}}:</p>
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
                <div class="right">
                    <div class="bottom">
                        <p>——— 市场交易动态 ———</p>
                        <div class="bone">
                            <div class="father">
                                <div v-for="(item,index) in swiperList" :key="index"></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="result">
                <div class="resulttop">
                    <div :class="{'showres' : rstopnum == 0}" @click="cshowres(0)">
                        <span>默认排序 </span>
                        <i class="iconfont icon-shangxiajiantou-"></i>
                    </div>
                    <div :class="{'showres' : rstopnum == 1}" @click="cshowres(1)">
                        <span>出售价格 </span>
                        <i class="iconfont icon-shangxiajiantou-"></i>
                    </div>
                    <div :class="{'showres' : rstopnum == 2}" @click="cshowres(2)">
                        <span>收藏人气 </span>
                        <i class="iconfont icon-shangxiajiantou-"></i>
                    </div>
                </div>
                <div class="resultbottom">
                    <router-link class="bfath" :to='{path:"/DetailsTmall",query:{id:item.bh}}' v-for="(item,index) in resultList" :key="index">
                        <div class="fathl">
                            <div class="fathlt">
								<div class="imgone">
									<img style="width: 85px;height:85px" src="../../assets/images/tmall_logo.png" alt="">
								</div>
                                <div class="fathltone">
                                    <div class="fathltonet">
                                        <p>{{item.title}}</p>
                                        <img src="../../assets/images/du_tip.png" alt="">
                                        <img src="../../assets/images/pei_tip.png" alt="">
                                    </div>
                                    <p class="fathltonep">开通类目：{{item.ktlm}}</p>
                                </div>
                            </div>
                            <div class="fathlm">
                                <div class="fathlmone">
                                    <span class="span">主营类目</span>
                                    <p>{{item.zylm}}</p>
                                </div>
                                <div class="fathlmtwo">
                                    <span class="span">商城类型</span>
                                    <p>{{item.sclx}}</p>
                                </div>
                                <div class="fathlmothree">
                                    <span class="span">商标类型</span>
                                    <p>R标(<span>{{item.sblx}}</span>类)</p>
                                </div>
                                <div class="fathlmfour">
                                    <span class="span">消保金</span>
                                    <p>￥{{item.xbj}}</p>
                                </div>
                                <div class="fathlmfive">
                                    <span class="span">技术年费</span>
                                    <p>￥{{item.jsnf}}</p>
                                </div>
                                <div class="fathlmsix">
                                    <span class="span">纳税类型</span>
                                    <p>{{item.nslx}}</p>
                                </div>
                            </div>
                            <div class="fathlb">
                                <p>卖家描述：{{item.mjms}}</p>
                                <span>[查看详情]</span>
                            </div>
                        </div>
                        <div class="fathr">
                            <div class="fathrt">
                                <img src="../../assets/images/icon_yijia1.png" alt="">
                                <span>￥</span>
                                <p>{{item.price}} 万</p>
                            </div>
                            <div class="fathrm">
                                <p class="p">QQ联系</p>
								<p class="p" style="background-color: #FF805A;">收藏</p>
                            </div>
                            <div class="fathrb">
                                <div style="text-align: center;">
                                    <i class="iconfont icon-shizhong"></i>
                                    <p>{{item.time}}</p>
                                </div>
                            </div>
                        </div>
                    </router-link>
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
                    <img src="../../assets/images/empty.png" alt="">
                    <div class="weione">
                        <div>
                            <p class="pone">没有找到心仪的店铺?</p>
                            <p class="ptwo">联系客服帮忙找</p>
                            <span>或</span>
                            <p class="pthree">发布求购店铺需求</p>
                        </div>
                        <p class="pfour">不要急哦，好多热门资源没有展示出来，马上联系服务顾问获取</p>
                    </div>
                </div>
            </div>
			<div class="interested">
			    <h2>您可能感兴趣的店铺</h2>
			    <p>为您精选</p>
			    <div class="inlist">
			        <router-link 
			            class="inlistone"
			            tag="div"
			            :to='{path:"/Detailstransfer",query:{id:item.service_id}}'
			            v-for="(item,index) in interested" 
			            :key="index"
			        >
			            <div class="intop">
			                <img src="../../assets/images/tm.png" alt="">
			                <p>{{item.service_p_name}}</p>
			            </div>
			            <div class="xiangxi">
			                <div class="xxone">
			                    <span>成立时间</span>
			                    <p>{{item.fund_date}}</p>
			                </div>
			                <div class="xxtwo">
			                    <span>注册资本</span>
			                    <p>{{item.registered_capital}}万人民币</p>
			                </div>
			                <p class="xxthree">{{item.service_price}}</p>
			            </div>
			            <div class="hangye">
			                <p>企业行业：</p>
			                <p>{{item.company_trade}}</p>
			            </div>
			        </router-link>
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
                ["全部","服饰","母婴","化妆品","食品","3C数码","图书音像","运动户外","汽车及配件","服务大类","珠宝配饰"
                ,"家用电器","居家日用","家具家装家纺","鞋类箱包","保健品及医药","乐器","话费通讯","网游及QQ"],
                ["全部","天猫商城","天猫新店"],
                ["全部","R标","TM标","授权商标"],
                ["全部","5万以下","5-10万","10-30万","30-50万","50万以上"],
            ],
            screentitle:["类目","类型","商标","价格"],
            screenimgtitle:["icon-leimu","icon-17","icon-shangbiao","icon-jiagebaozheng"],
            screenshow:[0,0,0,0,0,0,0,0,0],
            swiperList:[
                {
                    time:"5-27",
                    quyu:"江苏省南京市玄武区"
                },
                {
                    time:"5-27",
                    quyu:"江苏省南京市玄武区"
                },
                {
                    time:"5-27",
                    quyu:"江苏省南京市玄武区"
                },
                {
                    time:"5-27",
                    quyu:"江苏省南京市玄武区"
                },
                {
                    time:"5-27",
                    quyu:"江苏省南京市玄武区"
                },

                {
                    time:"5-27",
                    quyu:"江苏省南京市玄武区"
                },
                {
                    time:"5-27",
                    quyu:"江苏省南京市玄武区"
                },
                {
                    time:"5-27",
                    quyu:"江苏省南京市玄武区"
                },
                {
                    time:"5-27",
                    quyu:"江苏省南京市玄武区"
                },
                {
                    time:"5-27",
                    quyu:"江苏省南京市玄武区"
                },
                {
                    time:"5-27",
                    quyu:"江苏省南京市玄武区"
                },
                {
                    time:"5-27",
                    quyu:"江苏省南京市玄武区"
                },
                {
                    time:"5-27",
                    quyu:"江苏省南京市玄武区"
                },
                {
                    time:"5-27",
                    quyu:"江苏省南京市玄武区"
                },
                {
                    time:"5-27",
                    quyu:"江苏省南京市玄武区"
                },
                {
                    time:"5-27",
                    quyu:"江苏省南京市玄武区"
                },

                {
                    time:"5-27",
                    quyu:"江苏省南京市玄武区"
                },
                {
                    time:"5-27",
                    quyu:"江苏省南京市玄武区"
                },
                {
                    time:"5-27",
                    quyu:"江苏省南京市玄武区"
                },
                {
                    time:"5-27",
                    quyu:"江苏省南京市玄武区"
                },
            ],
            rstopnum:0,
            resultList:[
                {
                    title:"华南地区，包装用品定制旗舰店，16R，新店，四字母，稀缺资源",
                    ktlm:"个性定制/设计服务/DIY",
                    zylm:"服务大类",
                    sclx:"旗舰店",
                    sblx:"16",
                    xbj:"5000.00",
                    jsnf:"30000.00",
                    nslx:"一般纳税人",
                    mjms:"河南郑州，按摩器材全开，旗舰店，10R，三字中文，益@@，新店，一般纳税人，接手即可无忧经营",
                    price:"10.2",
                    bh:"YZW202005199aMGnS",
                    time:"2020-5-14",
                },
                {
                    title:"华南地区，包装用品定制旗舰店，16R，新店，四字母，稀缺资源",
                    ktlm:"个性定制/设计服务/DIY",
                    zylm:"服务大类",
                    sclx:"旗舰店",
                    sblx:"16",
                    xbj:"5000.00",
                    jsnf:"30000.00",
                    nslx:"一般纳税人",
                    mjms:"河南郑州，按摩器材全开，旗舰店，10R，三字中文，益@@，新店，一般纳税人，接手即可无忧经营",
                    price:"10.2",
                    bh:"YZW202005199aMGnS",
                    time:"2020-5-14",
                },
                {
                    title:"华南地区，包装用品定制旗舰店，16R，新店，四字母，稀缺资源",
                    ktlm:"个性定制/设计服务/DIY",
                    zylm:"服务大类",
                    sclx:"旗舰店",
                    sblx:"16",
                    xbj:"5000.00",
                    jsnf:"30000.00",
                    nslx:"一般纳税人",
                    mjms:"河南郑州，按摩器材全开，旗舰店，10R，三字中文，益@@，新店，一般纳税人，接手即可无忧经营",
                    price:"10.2",
                    bh:"YZW202005199aMGnS",
                    time:"2020-5-14",
                },
                {
                    title:"华南地区，包装用品定制旗舰店，16R，新店，四字母，稀缺资源",
                    ktlm:"个性定制/设计服务/DIY",
                    zylm:"服务大类",
                    sclx:"旗舰店",
                    sblx:"16",
                    xbj:"5000.00",
                    jsnf:"30000.00",
                    nslx:"一般纳税人",
                    mjms:"河南郑州，按摩器材全开，旗舰店，10R，三字中文，益@@，新店，一般纳税人，接手即可无忧经营",
                    price:"10.2",
                    bh:"YZW202005199aMGnS",
                    time:"2020-5-14",
                },
                {
                    title:"华南地区，包装用品定制旗舰店，16R，新店，四字母，稀缺资源",
                    ktlm:"个性定制/设计服务/DIY",
                    zylm:"服务大类",
                    sclx:"旗舰店",
                    sblx:"16",
                    xbj:"5000.00",
                    jsnf:"30000.00",
                    nslx:"一般纳税人",
                    mjms:"河南郑州，按摩器材全开，旗舰店，10R，三字中文，益@@，新店，一般纳税人，接手即可无忧经营",
                    price:"10.2",
                    bh:"YZW202005199aMGnS",
                    time:"2020-5-14",
                },
            ],//结果列表
            interested:[
                {
                    title:"华东地区，床上用品全开旗舰店，带24R，新店，一手资源，特价",
                    type:"家装家具家纺",
                    qijian:"旗舰店",
                    hangye:"水产肉类/新鲜蔬果/熟食",
                    price:"23"
                },
                {
                    title:"华东地区，床上用品全开旗舰店，带24R，新店，一手资源，特价",
                    type:"家装家具家纺",
                    qijian:"旗舰店",
                    price:"23",
                    hangye:"水产肉类/新鲜蔬果/熟食"
                },
                {
                    title:"华东地区，床上用品全开旗舰店，带24R，新店，一手资源，特价",
                    type:"家装家具家纺",
                    qijian:"旗舰店",
                    price:"23",
                    hangye:"水产肉类/新鲜蔬果/熟食"
                }
            ],//可能感兴趣店铺列表
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
    .transferMain{
        font-size: 14px;
		width: 100%;
		margin: 0 auto;
		min-width: 1200px;
        .nav{
            width: 1200px;
            height: 60px;
            margin: 5px auto;
            padding-top: 10px;
            display: flex;
            justify-content: space-between;
            background-color: #fff;
            .one{
                display: flex;
            	width: 50%;
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
            	width:50%;
                display: flex;
                justify-content: flex-end;
                .xxx{
                    display: flex;
            		width: 50%;
                    justify-content: center;
                    margin:auto 10px;
                    width:140px;
                    line-height: 34px;
            		p{
            			margin: 0;
            		}
                    i{
                        margin-right: 10px;
                        font-size: 18px;
                    }
                }
                .EEEEEE{
                    background-color: #EEEEEE;
                    position:relative;
            		color:#888;
            		cursor: pointer;
            		border-radius: 5px;
                    &:hover{
                        .ewm{
                            display: block;
                        }
                    }
                    .ewm{
                        display: none;
                        position: absolute;
                        width:170px;
                        height:180px;
                        top: 50px;
                        left: -10px;
                        background-color: #fff;
                        border:1px solid #E1E1E1;
                        img{
                            display: block;
                            width:130px;
                            height:130px;
                            margin:20px auto 0;
                        }
                        p{
                            line-height: 24px;
                            text-align: center;
                            color:#888;
                            font-size: 14px;
                        }
                    }
                }
                .FF7E00{
                    background-color: #EEEEEE;
                    color:#888;
            		border-radius: 5px;
            		cursor: pointer;
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
                // margin:auto;
                display: flex;
                justify-content: space-between;
                .left33{
                    width:952px;
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
                            width:900px;
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
									max-height: 31px;
                                    margin-right: 4px;
                                    line-height: 31px;
                                    border-radius: 5px;
                                    margin-top:4px;
									cursor: pointer;
                                    &:hover{
                                        color:#F3A54D
                                    }
                                }
                                .show{
                                    background-color: #F3A54D;
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
                .right{
                    width:240px;
                    background-color: #F7F7F7;
                    border-radius: 6px;
                    .bottom{
                        background-color: #fff;
                        border-radius: 6px;
                        p{
                            text-align: center;
                            line-height: 40px;
                        }
                        .bone{
                            height:317px;
                            overflow: hidden;
                            .father{
                                animation: roll 10s infinite linear;
                                &:hover{
                                    animation-play-state:paused
                                }
                                div{
                                    height:54px;
                                    width:190px;
                                    background-color: #F0F0F0;
                                    border-radius: 6px;
                                    margin:auto;
                                    margin-top:20px;
                                }
                            }
                            @keyframes roll {
                                from{
                                    transform:translateY(0);
                                }
                                to{
                                    transform:translateY(-1040px);
                                }
                            }
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
					cursor: pointer;
                    background-color: #fff;
                    border-bottom: 1px solid #eee;
                    border-radius: 6px 6px 0 0;
                    .showres{
                        color:#F3A54D
                    }
                    div{
                        width:170px;
                        line-height: 54px;
                        border-right:1px solid #F2F2F2;
                        text-align: center;
                    }
                    i{
                        font-size: 12px;
                    }
                }
                .resultbottom{
                    justify-content: space-between;
                    display: flex;
                    flex-wrap: wrap;
					a{
						text-decoration: none;
					}
                    .bfath{
						cursor: pointer;
						border-radius: 5px;
                        position: relative;
                        margin-bottom:8px;
                        width:100%;
                        height:240px;
                        background-color: #fff;
                        box-sizing: border-box;
                        padding: 18px 0 29px 29px;
                        transition: 0.3s;
                        display: flex;
                        justify-content: space-between;
                        &:hover{
                            margin-top:-2px;
                            box-shadow: 0 0 5px 5px rgba(49,41,42,0.06);
                        }
                        .fathl{
                            .fathlt{
                                display: flex;
								justify-content: center;
								align-items: center;
								.imgone{
									width: 15%;
									height: inherit;
									.img{
									    margin-right:20px;
										width: 85px;
										height: 85px;
									}
								}
                                .fathltone{
									width:85%;
                                    .fathltonet{
                                        display: flex;
                                        p{
                                            max-width:500px;
                                            color:#575959;
                                            font-size: 18px;
                                            font-weight: bold;
                                            overflow: hidden;
                                            white-space: nowrap;
                                            text-overflow: ellipsis;
                                        }
                                        img{
                                            width:26px;
                                            height:26px;
                                            margin-left:4px;
                                        }
                                    }
                                    .fathltonep{
                                        height: 28px;
                                        font-size: 14px;
                                        padding: 0 15px;
                                        color: #d81e06;
                                        line-height: 28px;
                                        border-radius: 5px;
                                        margin-top: 7px;
                                        display: inline-block;
                                        overflow: hidden;
                                        white-space: nowrap;
                                        text-overflow: ellipsis;
                                        background-color: #f5f5f5;
                                        max-width: 800px;
                                    }
                                }
                            }
                            .fathlm{
                                margin-top:20px;
                                display: flex;
                                div{
                                    border-left: 1px solid #eee;
                                    padding:0 44px;
                                    height:60px;
                                    line-height: 30px;
                                    .span{
                                        display: block;
                                        text-align: center;
                                        color:#a1a1a1;
                                        font-size: 12px;
                                    }
                                }
                                .fathlmone{
                                    border-left: none;
                                    padding-left:0;
                                }
                                .fathlmothree{
                                    p{
                                        span{
                                            color:#F3A54D;
                                        }
                                    }
                                }
                                .fathlmfour,.fathlmfive{
                                    p{
                                        color:#F3A54D;
                                    }
                                }
                            }
                            .fathlb{
                                display: flex;
                                margin-top:20px;
                                p{
                                    max-width: 670px;
                                    color:#a3a3a3;
                                    overflow: hidden;
                                    white-space: nowrap;
                                    text-overflow: ellipsis;
                                    margin-right:6px;
                                }
                                span{
                                    color:#f6a60a;
                                }
                            }
                        }
                        .fathr{
                            margin-right:40px;
                            .fathrt{
                                display: flex;
                                img{
                                    height: 26px;
                                    width: 62px;
                                    animation: topa 1s infinite linear;
                                }
                                span{
                                    font-size: 18px;
                                    color:#f31d22;
                                    padding-top:14px;
                                    font-weight: 600;
                                    margin:0 4px;
                                }
                                p{
                                    color:#f31d22;
                                    font-size: 30px;
                                    font-weight: bold
                                }
                                @keyframes topa {
                                    0%{
                                        margin-top:0;
                                    }
                                    50%{
                                        margin-top:2px;
                                    }
                                    100%{
                                        margin-top:0
                                    }
                                }
                            }
                            .fathrm{
                                .p{
                                    width:200px;
                                    line-height:40px;
                                    border-radius: 6px;
                                    background-color: #0cc467;
                                    text-align: center;
                                    color:#fff;
                                    margin-top:20px;
                                }
                                div{
                                    width:100px;
                                    line-height: 26px;
                                    margin-top:12px;
                                    display: flex;
                                    box-sizing: border-box;
                                    padding:0 20px;
                                    justify-content: space-around;
                                    color:#C2C2C2;
                                    border:1px solid #C2C2C2;
                                    border-radius: 6px;
                                    p{
                                        font-size: 12px;
                                    }
                                }
                            }
                            .fathrb{
                                margin-top: 16px;
                                color: #b7b7b7;
								text-align: center;
                                line-height: 20px;
                                overflow: hidden;
                                white-space: nowrap;
                                text-overflow: ellipsis;
                                p{
                                    font-size: 12px;
                                }
                                div{
                                    margin-top: 6px;
                                    font-size: 12px;
                                    display: flex;
                                    p{
                                        margin-left:6px;
                                    }
                                }
                            }
                        }
                    }
                }
                .pages{
                    width:1200px;
                    margin:auto;
                    padding-bottom: 50px;
                    background-color: #fff;
					border-radius: 5px 5px 0 0;
                    .block{
                        padding-top:20px;
                        text-align: center;
                    }
                }
                .wei{
                    display: flex;
                    width:1200px;
                    box-sizing: border-box;
                    padding:20px 180px;
                    background-color: #fff;
					border-radius:0 0 5px 5px;
                    img{
						max-width: 100px;
                        margin-right:42px;
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
                                background-color: #FF805A;
								cursor: pointer;
                            }
                            span{
                                display: block;
                                margin:0 16px;
                                font-size: 26px;
                            }
                            .pthree{
								cursor: pointer;
                                width:170px;
                                line-height: 38px;
                                height:38px;
                                text-align: center;
                                border-radius: 4px;
                                color:#FF805A;
                                border:1px solid #FF805A;
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
				
            }
			.interested{
				width: 100%;
			    min-width:1200px;
				margin:0 auto;
			    margin-top:20px !important;
				margin-bottom: 0px !important;
				z-index: 999999;
			    background-image: url(../../assets/images/banner1.png);
				background-repeat: x-repeat;
			    box-sizing: border-box;
			    padding:0 20px;
				text-align: center;
				overflow: hidden;
				h2,p{
					color:#fff;
				}
			    .img{
			        display: block;
			        margin:auto;
			        margin-bottom: 16px;
			    }
			    .inlist{
					max-width: 1200px;
			        display: flex;
					margin:20px auto;
					padding-bottom: 40px;
			        justify-content: space-between;
			        .inlistone{
			            width:373px;
			            height:171px;
						cursor: pointer;
						border-radius: 5px;
			            border:1px solid #F2F2F2;
			            background-color: rgba(255,255,255,0.2);
			            box-sizing: border-box;
			            padding:14px;
						transition: 0.5s;
			            &:hover{
							margin-top: -10px;
							background-color: rgba(255,255,255,0.4);
			            }
			            .intop{
			                display: flex;
			                &:hover{
			                    p{
			                        color: #FF805A;
			                    }
			                }
			                img{
			                    width:16px;
			                    height:16px;
			                    margin-top:4px;
			                    margin-right:10px;
			                }
			                p{
			                    font-size: 16px;
			                    color:#fff;
			                }
			            }
			            .xiangxi{
			                margin-top:20px;
			                display: flex;
			                justify-content: space-between;
			                .xxone,.xxtwo,.xxthree{
			                    width:90px;
			                    border-right:1px solid #ccc;
			                    span{
			                        font-size: 12px;
			                        color:#fff;
			                    }
			                    p{
									color:#fff;
			                        margin-top:10px;
			                        overflow: hidden;
			                        text-overflow:ellipsis;
			                        white-space: nowrap;
			                    }
			                }
			                .xxthree{
			                    width:100px;
			                    text-align: right;
			                    line-height: 50px;
			                    font-size: 16px;
			                    color:#FF805A;
			                }
			                .xxtwo{
			                    box-sizing: border-box;
			                    padding-left:20px;
			                    flex: 1;
			                }
			                .xxtwo,.xxthree{
			                    border-right: none;
			                }
			            }
			            .hangye{
			                display: flex;
			                margin-top:12px;
			                color:#fff;
							p{
								color:#fff;
							}
			            }
			        }
			    }
			}
            
        }
    }
</style>