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
				    <p>求购商标</p>
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
								<div :class="{'show': index1 == screenshow[index]}" v-for="(item,index1) in screenList[index]" :key="index1"
								 @click="changescreen(index,index1)">{{item}}</div>
							</div>
						</div>
					</div>
				</div>
			</div>
			<div class="result">
				<div class="resulttop">
					<div class="tt">
						<div v-for="(item,index) in resultname" :key="index" :class="{'showres' : rstopnum == index}" @click="cshowres(index)">
							<span>{{item}} </span>
							<i class="iconfont icon-shangxiajiantou-"></i>
						</div>
					</div>
				</div>
				<div class="resultbottom">
					<router-link :to='{path:"/DetailsSb"}' class="bfath" v-for="(item,index) in resultList" :key="index">
						<div class="img">
							<img src="../../assets/images/bd.png" alt="">
						</div>
						<p>{{item.title}}</p>
						<p class="desc">适合项目：染发膏化解纠纷VB内部v荣誉往可见韩国法国和健康没机会GV你们那边v</p>
						<span>￥{{item.price}}</span>
					</router-link>
				</div>
				<div class="pages">
					<div class="block">
						<el-pagination background :page-size="1" layout="prev, pager, next" :total=resultList.length>
						</el-pagination>
					</div>
				</div>
				<div class="wei">
				    <img src="../../assets/images/empty.png" alt="">
				    <div class="weione">
				        <div>
				            <p class="pone">没有找到心仪的公司?</p>
				            <p class="ptwo">联系客服帮忙找</p>
				            <span>或</span>
				            <p class="pthree">发布求购公司需求</p>
				        </div>
				        <p class="pfour">不要急哦，好多热门资源没有展示出来，马上联系服务顾问获取</p>
				    </div>
				</div>
			</div>
			<div class="interested">
			    <h2>您可能感兴趣的代办服务</h2>
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
		data() {
			return {
				screenList: [
					["不限", "服饰", "母婴", "化妆品", "食品", "3C数码", "图书音像", "运动户外", "汽车及配件", "服务大类", "珠宝配饰", "家用电器", "居家日用", "家具家装家纺", "鞋类箱包",
						"保健品及医药", "乐器", "话费通讯", "网游及QQ"
					],
					["不限", "中文", "英文", "中文+英文", "图形", "中文+图形", "组合", "数字", "拼音", "英文+图形", "中文+拼音", "中文+英文+拼音"],
					["不限", "1-2字", "3字", "4字", "5字", "5字以上"],
					["不限", "1万以下", "1-2万", "2-5万", "5万以上"],
				],
				resultname: ["综合排序", "价格排序", "下证时间", "字符数量", "人气排序"],
				screentitle: ["商标分类", "组合类型", "字符长度", "出售价格"],
				screenshow: [0, 0, 0, 0, 0, 0, 0, 0, 0],
				rstopnum: 0,
				resultList: [{
						url: "http://tmpic.tmkoo.com/ad4bc2b35ab2ed72967541ee3bb13223",
						title: "3类-柒小柒",
						price: "2000.00"
					},
					{
						url: "http://tmpic.tmkoo.com/ad4bc2b35ab2ed72967541ee3bb13223",
						title: "3类-柒小柒",
						price: "2000.00"
					}, {
						url: "http://tmpic.tmkoo.com/ad4bc2b35ab2ed72967541ee3bb13223",
						title: "3类-柒小柒",
						price: "2000.00"
					}, {
						url: "http://tmpic.tmkoo.com/ad4bc2b35ab2ed72967541ee3bb13223",
						title: "3类-柒小柒",
						price: "2000.00"
					}, {
						url: "http://tmpic.tmkoo.com/ad4bc2b35ab2ed72967541ee3bb13223",
						title: "3类-柒小柒",
						price: "2000.00"
					}, {
						url: "http://tmpic.tmkoo.com/ad4bc2b35ab2ed72967541ee3bb13223",
						title: "3类-柒小柒",
						price: "2000.00"
					}, {
						url: "http://tmpic.tmkoo.com/ad4bc2b35ab2ed72967541ee3bb13223",
						title: "3类-柒小柒",
						price: "2000.00"
					}, {
						url: "http://tmpic.tmkoo.com/ad4bc2b35ab2ed72967541ee3bb13223",
						title: "3类-柒小柒",
						price: "2000.00"
					}, {
						url: "http://tmpic.tmkoo.com/ad4bc2b35ab2ed72967541ee3bb13223",
						title: "3类-柒小柒",
						price: "2000.00"
					}, {
						url: "http://tmpic.tmkoo.com/ad4bc2b35ab2ed72967541ee3bb13223",
						title: "3类-柒小柒",
						price: "2000.00"
					}, {
						url: "http://tmpic.tmkoo.com/ad4bc2b35ab2ed72967541ee3bb13223",
						title: "3类-柒小柒",
						price: "2000.00"
					}, {
						url: "http://tmpic.tmkoo.com/ad4bc2b35ab2ed72967541ee3bb13223",
						title: "3类-柒小柒",
						price: "2000.00"
					}, {
						url: "http://tmpic.tmkoo.com/ad4bc2b35ab2ed72967541ee3bb13223",
						title: "3类-柒小柒",
						price: "2000.00"
					}, {
						url: "http://tmpic.tmkoo.com/ad4bc2b35ab2ed72967541ee3bb13223",
						title: "3类-柒小柒",
						price: "2000.00"
					}, {
						url: "http://tmpic.tmkoo.com/ad4bc2b35ab2ed72967541ee3bb13223",
						title: "3类-柒小柒",
						price: "2000.00"
					},
				], //结果列表
				interested: [{
						url: "http://tmpic.tmkoo.com/ad4bc2b35ab2ed72967541ee3bb13223",
						title: "3类-柒小柒",
						price: "2000.00"
					},
					{
						url: "http://tmpic.tmkoo.com/ad4bc2b35ab2ed72967541ee3bb13223",
						title: "3类-柒小柒",
						price: "2000.00"
					},
					{
						url: "http://tmpic.tmkoo.com/ad4bc2b35ab2ed72967541ee3bb13223",
						title: "3类-柒小柒",
						price: "2000.00"
					},
				], //可能感兴趣公司列表
			}
		},
		methods: {
			//切换筛选条件
			changescreen: function(index, index1) {
				this.screenshow.splice(index, 1, index1)
			},
			//切换展示区域
			cshowres: function(num) {
				this.rstopnum = num
			}
		}
	}
</script>

<style scoped lang="less">
	.SbMain {
		font-size: 14px;
		.nav {
			width: 1200px;
			height: 60px;
			margin: 5px auto;
			padding-top: 10px;
			display: flex;
			justify-content: space-between;
			background-color: #fff;

			.one {
				display: flex;
				width: 50%;

				p,
				i {
					line-height: 60px;
					margin-right: 10px;
					color: #666;
					font-size: 14px;
				}

				i {
					font-size: 18px;
					color: #000;
				}

				.zhuan {
					transition: .3s;

					&:hover {
						color: #FF7815
					}
				}
			}

			.two {
				width: 50%;
				display: flex;
				justify-content: flex-end;

				.xxx {
					display: flex;
					width: 50%;
					justify-content: center;
					margin: auto 10px;
					width: 140px;
					line-height: 34px;

					p {
						margin: 0;
					}

					i {
						margin-right: 10px;
						font-size: 18px;
					}
				}

				.EEEEEE {
					background-color: #EEEEEE;
					position: relative;
					color: #888;
					cursor: pointer;
					border-radius: 5px;

					&:hover {
						.ewm {
							display: block;
						}
					}

					.ewm {
						display: none;
						position: absolute;
						width: 170px;
						height: 180px;
						top: 50px;
						left: -10px;
						background-color: #fff;
						border: 1px solid #E1E1E1;

						img {
							display: block;
							width: 130px;
							height: 130px;
							margin: 20px auto 0;
						}

						p {
							line-height: 24px;
							text-align: center;
							color: #888;
							font-size: 14px;
						}
					}
				}

				.FF7E00 {
					background-color: #EEEEEE;
					color: #888;
					border-radius: 5px;
					cursor: pointer;
				}

				.EA2417 {
					background-color: #EA2417;
					color: #fff;
				}
			}
		}

		.screen {
			background-color: #F2F2F2;
			padding-top: 10px;

			.margin {
				width: 1200px;
				margin: auto;
				display: flex;
				justify-content: space-between;

				.left {
					display: flex;
					justify-content: space-between;
					box-sizing: border-box;
					padding-top: 20px;
					background-color: #fff;
					border-radius: 6px;

					.leftr {
						flex: 1;
						padding: 0 30px;

						.leftrone {
							display: flex;
							margin-top: 10px;
							border-bottom: 1px solid #ccc;
							padding-bottom: 20px;

							p {
								width: 120px;
								line-height: 30px;
								height: 30px;
								text-indent: 10px;

								i {
									display: inline-block;
									margin-right: 10px;
									vertical-align: -1px;
									color: #666;
								}
							}

							.son {
								color: #666;
								flex: 1;
								display: flex;
								flex-wrap: wrap;

								div {
									cursor: pointer;
									padding: 0 16px;
									margin-right: 4px;
									line-height: 31px;
									border-radius: 5px;
									margin-top: 4px;
									height:31px;
									&:hover {
										color: #F3A54D
									}
								}

								.show {
									background-color: #F3A54D;
									color: #fff;

									&:hover {
										color: #fff
									}
								}
							}
						}

						.last {
							border-bottom: none;
						}
					}
				}
			}

			
			.result {
				width: 1200px;
				margin: 10px auto;

				.resulttop {
					cursor: pointer;
					display: flex;
					height: 54px;
					justify-content: space-between;
					background-color: #fff;
					border-bottom: 1px solid #eee;
					border-radius: 5px;

					.showres {
						color: #F3A54D
					}

					.tt {
						display: flex;

						div {
							width: 170px;
							line-height: 54px;
							border-right: 1px solid #F2F2F2;
							text-align: center;
						}
					}

					i {
						font-size: 12px;
					}

					.lianxikf {
						line-height: 30px;
						height: 30px;
						text-align: center;
						width: 120px;
						margin: auto;
						border-radius: 6px;
						color: #F3A54D;
						border: 1px solid #F3A54D;
					}
				}

				.resultbottom {
					justify-content: space-between;
					display: flex;
					flex-wrap: wrap;
					margin-top: 10px;

					.bfath {
						width: 230px;
						height: 300px;
						border-radius: 5px;
						background-color: #fff;
						margin-bottom: 10px;
						overflow: hidden;
						border: 1px solid #fff;
						transition: 0.3s;
						text-align: center;

						&:hover {
							margin-top: -2px;
							box-shadow: 0 15px 15px 0 rgba(243,165,77,0.1);
							text-decoration: none;
							border: 1px solid #F3A54D;
						}
						.img{
							height:137px;
							background-color: #fff;
							img {
								display: block;
								max-width: 200px;
								margin: 20px auto;
							}
						}

						p {
							padding-top: 50px;
							text-align: center;
							z-index: 999;
							font-size: 16px;
							color:#888
						}
						.desc{
							font-size: 12px;
							color:#888;
							padding: 0 10px;
							overflow:hidden; //超出的文本隐藏
							text-overflow:ellipsis; //溢出用省略号显示
							white-space:nowrap; //溢出不换行
						}

						span {
							display: block;
							text-align: center;
							font-weight: bold;
							margin-top: 4px;
							color: red;
						}

						div {
							line-height: 30px;
							text-align: center;
							width: 200px;
							background-color: #F3A54D;
							border-radius: 4px 4px 0 0;
							margin: auto;
							color: #fff;
							transform: translateY(49px);
							transition: 0.3s;
						}
					}
				}

				.pages {
					width: 1200px;
					margin: auto;
					padding-bottom: 50px;
					background-color: #fff;

					.block {
						padding-top: 20px;
						text-align: center;
					}
				}

                .wei{
                    display: flex;
                    width:1200px;
                    box-sizing: border-box;
                    padding:20px 180px;
                    background-color: #fff;
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
