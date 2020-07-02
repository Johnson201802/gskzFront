<template>
	<div class="mySwiper">
		<!-- swiper start -->
		<swiper class="swiper" :options="swiperOption">
			<swiper-slide class="swiper-slide" v-for="(item,index) in carouselArr" :key="index">
				<router-link v-if="item.is_newtab == 1" target="_blank" :to="item.url">
					<img :src="item.image_url" />
				</router-link>
				<router-link v-else :to="item.url">
					<img :src="item.image_url" />
				</router-link>
			</swiper-slide>
			<!-- 分页器 -->
			<div class="swiper-pagination" slot="pagination"></div>
		</swiper>
		<!-- swiper end -->

		<!-- allList start -->
		<div class="allcenter">
			<div class="botton">
				<router-link class="left" :to=item.path tag="div" v-for="(item,index) in all" :key="index" :class="{'one' : index == 0,'two' : index == 1,'three' : index == 2,'four' : index == 3}">
					<div class="header">
						<p><a href="http://www.baidu.com">{{item.title}}</a></p>
					</div>
					<ul>
						<li v-for="(item,index) in item.list" :key="index"><a href="http://www.baidu.com">{{item}}</a></li>
					</ul>
				</router-link>
			</div>
			<div class="right">
				<div class="topRight">
					<img class="img" src="../../assets/images/avatar.png"></img>
				</div>
				<div class="zhuce">
					<router-link to="/Login" v-if="!$store.state.islogin" tap="p">请登录</router-link>
					<router-link class="tran" v-if="!$store.state.islogin" to="/Egistered" tap="p">免费注册</router-link>
					<router-link to="/PersonalCenter" v-if="$store.state.islogin" tap="p" style="height: 32px;">个人中心</router-link>
					<p class="tran" @click="out()" v-if="$store.state.islogin">退出</p>
				</div>
				<div class="authorization">
					<div>
						<img src="../../assets/images/heMingIcon.png" alt="">
						<p>公司核名</p>
					</div>
					<div>
						<img src="../../assets/images/tm.png" alt="">
						<p>天猫入驻</p>
					</div>
					<div>
						<img src="../../assets/images/ShouQuan.png" alt="">
						<p>商标授权</p>
					</div>
				</div>
				<div class="rnews">
					<div><span>公告</span>NEWS</div>
					<scroll :data="listData" :class-option="optionSingleHeight" class="seamless-warp">
						<ul class="item">
							<li v-for="item in listData" @click="getData(item)">
								<a style="width: 212px;" href="http://www.baidu.com">
									<p class="title" v-text="item.title"></p>
								</a>
							</li>
						</ul>
					</scroll>
				</div>
			</div>
		</div>

		<!-- Trading market start -->
		<div class="tradingmarket">
			<div class="top">
				<div>
					<p>公司转让交易市场</p>
					<span>海量公司转让信息，快速匹配交易</span>
				</div>
				<router-link to="/Transfer" tag="p">查看更多 <i class="iconfont icon-rightarrow"></i></router-link>
			</div>
			<div class="list">
				<div class="i5modal">
					<div class="navs" style="background:url('https://cdn.caiyun.com/upload/www/img/nav/2018/08/30/15356010091508.png') no-repeat;background-size:276px 399px;">
						<div class="title">
							<div class="tit">行业类别</div>
							<div class="more"><a target="_blank" href="/company/buy" rel="nofollow">更多 <i class="icon-angle-right"></i></a></div>
						</div>
						<div class="ul">
							<ul class="i5TwoLabel">
								<li data-color="#e3605f" class="on" style="color:#e3605f" data-i="11">代理类 <i class="icon icon-angle-right"></i></li>
								<li data-color="#e3605f" data-i="5">工程类 <i class="icon icon-angle-right"></i></li>
								<li data-color="#e3605f" data-i="6">设计类 <i class="icon icon-angle-right"></i></li>
								<li data-color="#e3605f" data-i="7">企划类 <i class="icon icon-angle-right"></i></li>
								<li data-color="#e3605f" data-i="8">管理类 <i class="icon icon-angle-right"></i></li>
								<li data-color="#e3605f" data-i="9">服务类 <i class="icon icon-angle-right"></i></li>
								<li data-color="#e3605f" data-i="10">物流类 <i class="icon icon-angle-right"></i></li>
							</ul>
						</div>
					</div>
					<div class="data">
						<div class="list1 liston" id="i5Label11">
							<div class="one">
								<a target="_blank" href="/company/details/c2020032043212.html">
									<img class="bursting" src="https://cdn.caiyun.com/image/new/bursting.svg">
									<div class="title">深圳市***建筑资质代理有限公司</div>
									<div class="money">
										<img class="img" src="https://cdn.caiyun.com/image/new/money.svg">
										<div class="font">注册资本：保密</div>
									</div>
									<div class="time">
										<img class="img" src="https://cdn.caiyun.com/image/new/time.svg">
										<div class="font">成立时间：1970年</div>
									</div>
									<div class="type">
										<img class="img" src="https://cdn.caiyun.com/image/new/type.svg">
										<div class="font">纳税类型：一般纳税人</div>
									</div>
									<div class="price">
										<div class="key">售价</div>
										<div class="val"><span>¥</span>面议</div>
									</div>
									<div class="business">
										<div class="contact">
											<img class="img-circle" src="https://cdn.caiyun.com/image/user2.png">
											<div class="user">
												<div class="label">经纪人</div>
												<div class="name">向芋金</div>
											</div>
										</div>
										<div class="describe">
										</div>
									</div>
								</a>
							</div>
							<div class="two">
								<div class="two1">
									<a target="_blank" href="/company/details/c2019091442833.html">
										<img class="hot" src="https://cdn.caiyun.com/image/new/hot.svg">
										<div class="title">东莞***新视野货运代理有限公司</div>
										<div class="money">
											<img class="img" src="https://cdn.caiyun.com/image/new/money.svg">
											<div class="font">注册资本：100万</div>
										</div>
										<div class="time">
											<img class="img" src="https://cdn.caiyun.com/image/new/time.svg">
											<div class="font">成立时间：2016年</div>
										</div>
										<div class="type">
											<img class="img" src="https://cdn.caiyun.com/image/new/type.svg">
											<div class="font">纳税类型：一般纳税人</div>
										</div>
										<div class="price">
											<div class="key">售价</div>
											<div class="val"><span>¥</span>40万</div>
										</div>
									</a>
								</div>
								<div class="two2">
									<a target="_blank" href="/company/details/c2019081342725.html">
										<img class="hot" src="https://cdn.caiyun.com/image/new/hot.svg">
										<div class="title">中*******代理(东莞)有限公司</div>
										<div class="money">
											<img class="img" src="https://cdn.caiyun.com/image/new/money.svg">
											<div class="font">注册资本：100万</div>
										</div>
										<div class="time">
											<img class="img" src="https://cdn.caiyun.com/image/new/time.svg">
											<div class="font">成立时间：2018年</div>
										</div>
										<div class="type">
											<img class="img" src="https://cdn.caiyun.com/image/new/type.svg">
											<div class="font">纳税类型：小规模</div>
										</div>
										<div class="price">
											<div class="key">售价</div>
											<div class="val"><span>¥</span>面议</div>
										</div>
									</a>
								</div>
							</div>
							<div class="three">
								<div class="border">
									<div class="threes">
										<a target="_blank" href="/company/details/c2019081342724.html">
											<div class="title">中***达贷款代理(东莞)有限公司</div>
											<div class="money">
												<img class="img" src="https://cdn.caiyun.com/image/new/money.svg">
												<div class="font">注册资本：100万</div>
											</div>
											<div class="time">
												<img class="img" src="https://cdn.caiyun.com/image/new/time.svg">
												<div class="font">成立时间：2018年</div>
											</div>
											<div class="type">
												<img class="img" src="https://cdn.caiyun.com/image/new/type.svg">
												<div class="font">纳税类型：小规模</div>
											</div>
											<div class="price">
												<div class="key">售价</div>
												<div class="val"><span>¥</span>面议</div>
											</div>
										</a>
									</div>
									<div class="threes">
										<a target="_blank" href="/company/details/c2019081242717.html">
											<div class="title">西安***代理公司</div>
											<div class="money">
												<img class="img" src="https://cdn.caiyun.com/image/new/money.svg">
												<div class="font">注册资本：101万</div>
											</div>
											<div class="time">
												<img class="img" src="https://cdn.caiyun.com/image/new/time.svg">
												<div class="font">成立时间：2003年</div>
											</div>
											<div class="type">
												<img class="img" src="https://cdn.caiyun.com/image/new/type.svg">
												<div class="font">纳税类型：小规模</div>
											</div>
											<div class="price">
												<div class="key">售价</div>
												<div class="val"><span>¥</span>面议</div>
											</div>
										</a>
									</div>
									<div class="threes">
										<a target="_blank" href="/company/details/c2019071642568.html">
											<div class="title">汇***款代理（广东）有限公司</div>
											<div class="money">
												<img class="img" src="https://cdn.caiyun.com/image/new/money.svg">
												<div class="font">注册资本：5000万</div>
											</div>
											<div class="time">
												<img class="img" src="https://cdn.caiyun.com/image/new/time.svg">
												<div class="font">成立时间：2019年</div>
											</div>
											<div class="type">
												<img class="img" src="https://cdn.caiyun.com/image/new/type.svg">
												<div class="font">纳税类型：一般纳税人</div>
											</div>
											<div class="price">
												<div class="key">售价</div>
												<div class="val"><span>¥</span>面议</div>
											</div>
										</a>
									</div>
									<div class="threes">
										<a target="_blank" href="/company/details/c2019061042309.html">
											<div class="title">达瑜(***)贷款代理有限公司</div>
											<div class="money">
												<img class="img" src="https://cdn.caiyun.com/image/new/money.svg">
												<div class="font">注册资本：100万</div>
											</div>
											<div class="time">
												<img class="img" src="https://cdn.caiyun.com/image/new/time.svg">
												<div class="font">成立时间：2019年</div>
											</div>
											<div class="type">
												<img class="img" src="https://cdn.caiyun.com/image/new/type.svg">
												<div class="font">纳税类型：一般纳税人</div>
											</div>
											<div class="price">
												<div class="key">售价</div>
												<div class="val"><span>¥</span>面议</div>
											</div>
										</a>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
		<div class="tradingmarket" style="display: flex;justify-content: space-around;padding: 0;">
			<div style="width:1200px;height:80px;border-radius: 5px;">
				<a href="http://www.baidu.com" target="_blank" style="width:1200px;height:80px;"><img src="../../assets/images/gg_xq.png" style="border-radius: 5px;cursor: pointer;" alt=""></a>
			</div>
		</div>
		<div class="tradingmarket">
			<div class="top">
				<div>
					<p>天猫店铺转让市场</p>
					<span>为您臻选优质的天猫店铺!</span>
				</div>
				<router-link to="/Transfer" tag="p">查看更多 <i class="iconfont icon-rightarrow"></i></router-link>
			</div>
			<div class="list">
				<div class="i5modal">
					<div class="navs" style="background:url('https://cdn.caiyun.com/upload/www/img/nav/2018/08/30/15356010247276.png') no-repeat;background-size:276px 399px;">
						<div class="title">
							<div class="tit">店铺类别</div>
							<div class="more"><a target="_blank" href="/company/buy" rel="nofollow">更多 <i class="icon-angle-right"></i></a></div>
						</div>
						<div class="ul">
							<ul class="i5TwoLabel">
								<li data-color="#e3605f" class="on" style="color:rgb(98, 152, 226)" data-i="11">代理类 <i class="icon icon-angle-right"></i></li>
								<li data-color="#e3605f" data-i="5">工程类 <i class="icon icon-angle-right"></i></li>
								<li data-color="#e3605f" data-i="6">设计类 <i class="icon icon-angle-right"></i></li>
								<li data-color="#e3605f" data-i="7">企划类 <i class="icon icon-angle-right"></i></li>
								<li data-color="#e3605f" data-i="8">管理类 <i class="icon icon-angle-right"></i></li>
								<li data-color="#e3605f" data-i="9">服务类 <i class="icon icon-angle-right"></i></li>
								<li data-color="#e3605f" data-i="10">物流类 <i class="icon icon-angle-right"></i></li>
							</ul>
						</div>
					</div>
					<div class="data">
						<div class="list1 liston" id="i5Label11">
							<div class="one">
								<a target="_blank" href="/company/details/c2020032043212.html">
									<img class="bursting" src="https://cdn.caiyun.com/image/new/bursting.svg">
									<div class="title">深圳市***建筑资质代理有限公司</div>
									<div class="money">
										<img class="img" src="https://cdn.caiyun.com/image/new/money.svg">
										<div class="font">注册资本：保密</div>
									</div>
									<div class="time">
										<img class="img" src="https://cdn.caiyun.com/image/new/time.svg">
										<div class="font">成立时间：1970年</div>
									</div>
									<div class="type">
										<img class="img" src="https://cdn.caiyun.com/image/new/type.svg">
										<div class="font">纳税类型：一般纳税人</div>
									</div>
									<div class="price">
										<div class="key">售价</div>
										<div class="val"><span>¥</span>面议</div>
									</div>
									<div class="business">
										<div class="contact">
											<img class="img-circle" src="https://cdn.caiyun.com/image/user2.png">
											<div class="user">
												<div class="label">经纪人</div>
												<div class="name">向芋金</div>
											</div>
										</div>
										<div class="describe">
										</div>
									</div>
								</a>
							</div>
							<div class="two">
								<div class="two1">
									<a target="_blank" href="/company/details/c2019091442833.html">
										<img class="hot" src="https://cdn.caiyun.com/image/new/hot.svg">
										<div class="title">东莞***新视野货运代理有限公司</div>
										<div class="money">
											<img class="img" src="https://cdn.caiyun.com/image/new/money.svg">
											<div class="font">注册资本：100万</div>
										</div>
										<div class="time">
											<img class="img" src="https://cdn.caiyun.com/image/new/time.svg">
											<div class="font">成立时间：2016年</div>
										</div>
										<div class="type">
											<img class="img" src="https://cdn.caiyun.com/image/new/type.svg">
											<div class="font">纳税类型：一般纳税人</div>
										</div>
										<div class="price">
											<div class="key">售价</div>
											<div class="val"><span>¥</span>40万</div>
										</div>
									</a>
								</div>
								<div class="two2">
									<a target="_blank" href="/company/details/c2019081342725.html">
										<img class="hot" src="https://cdn.caiyun.com/image/new/hot.svg">
										<div class="title">中*******代理(东莞)有限公司</div>
										<div class="money">
											<img class="img" src="https://cdn.caiyun.com/image/new/money.svg">
											<div class="font">注册资本：100万</div>
										</div>
										<div class="time">
											<img class="img" src="https://cdn.caiyun.com/image/new/time.svg">
											<div class="font">成立时间：2018年</div>
										</div>
										<div class="type">
											<img class="img" src="https://cdn.caiyun.com/image/new/type.svg">
											<div class="font">纳税类型：小规模</div>
										</div>
										<div class="price">
											<div class="key">售价</div>
											<div class="val"><span>¥</span>面议</div>
										</div>
									</a>
								</div>
							</div>
							<div class="three">
								<div class="border">
									<div class="threes">
										<a target="_blank" href="/company/details/c2019081342724.html">
											<div class="title">中***达贷款代理(东莞)有限公司</div>
											<div class="money">
												<img class="img" src="https://cdn.caiyun.com/image/new/money.svg">
												<div class="font">注册资本：100万</div>
											</div>
											<div class="time">
												<img class="img" src="https://cdn.caiyun.com/image/new/time.svg">
												<div class="font">成立时间：2018年</div>
											</div>
											<div class="type">
												<img class="img" src="https://cdn.caiyun.com/image/new/type.svg">
												<div class="font">纳税类型：小规模</div>
											</div>
											<div class="price">
												<div class="key">售价</div>
												<div class="val"><span>¥</span>面议</div>
											</div>
										</a>
									</div>
									<div class="threes">
										<a target="_blank" href="/company/details/c2019081242717.html">
											<div class="title">西安***代理公司</div>
											<div class="money">
												<img class="img" src="https://cdn.caiyun.com/image/new/money.svg">
												<div class="font">注册资本：101万</div>
											</div>
											<div class="time">
												<img class="img" src="https://cdn.caiyun.com/image/new/time.svg">
												<div class="font">成立时间：2003年</div>
											</div>
											<div class="type">
												<img class="img" src="https://cdn.caiyun.com/image/new/type.svg">
												<div class="font">纳税类型：小规模</div>
											</div>
											<div class="price">
												<div class="key">售价</div>
												<div class="val"><span>¥</span>面议</div>
											</div>
										</a>
									</div>
									<div class="threes">
										<a target="_blank" href="/company/details/c2019071642568.html">
											<div class="title">汇***款代理（广东）有限公司</div>
											<div class="money">
												<img class="img" src="https://cdn.caiyun.com/image/new/money.svg">
												<div class="font">注册资本：5000万</div>
											</div>
											<div class="time">
												<img class="img" src="https://cdn.caiyun.com/image/new/time.svg">
												<div class="font">成立时间：2019年</div>
											</div>
											<div class="type">
												<img class="img" src="https://cdn.caiyun.com/image/new/type.svg">
												<div class="font">纳税类型：一般纳税人</div>
											</div>
											<div class="price">
												<div class="key">售价</div>
												<div class="val"><span>¥</span>面议</div>
											</div>
										</a>
									</div>
									<div class="threes">
										<a target="_blank" href="/company/details/c2019061042309.html">
											<div class="title">达瑜(***)贷款代理有限公司</div>
											<div class="money">
												<img class="img" src="https://cdn.caiyun.com/image/new/money.svg">
												<div class="font">注册资本：100万</div>
											</div>
											<div class="time">
												<img class="img" src="https://cdn.caiyun.com/image/new/time.svg">
												<div class="font">成立时间：2019年</div>
											</div>
											<div class="type">
												<img class="img" src="https://cdn.caiyun.com/image/new/type.svg">
												<div class="font">纳税类型：一般纳税人</div>
											</div>
											<div class="price">
												<div class="key">售价</div>
												<div class="val"><span>¥</span>面议</div>
											</div>
										</a>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>

		<!-- Trading market end -->

		<!-- looking market start -->
		<!-- <div class="lookingmarket">
            <div class="top">
                <div>
                    <p>公司求购市场</p>
                    <span>发布公司求购信息，更快找到心仪公司!</span>
                </div>
                <p>查看更多 <i class="iconfont icon-rightarrow"></i></p>
            </div>
        </div> -->
		<!-- looking market end -->

		<!-- Commodity market start -->
		<div class="Commoditymarket">
			<div class="top">
				<div>
					<p>商标转让交易市场</p>
					<span>每日不定时更细特价商标!</span>
				</div>
				<p>查看更多 <i class="iconfont icon-rightarrow"></i></p>
			</div>
			<div class="list">
				<div class="one">
					<div class="left-card">
						<div class="menu-box2 fl" data-id="company-first">
							<a href="/company.html?order_id=1" target="_blank" class="menu-titlerow">精品推荐<i></i></a>
							<span id="">百里挑一 优质公司 助您前行</span>
							<div>
								<a href="/company.html?industry_id=2" target="_blank">商贸贸易</a>
								<a href="/company.html?industry_id=13" target="_blank">科技信息</a>
								<a href="/company.html?industry_id=15" target="_blank">餐饮美容</a>
								<a href="/company.html?industry_id=21" target="_blank">商标资质</a>
							</div>
						</div>
					</div>
					<div class="left-card">
						<div class="menu-box2 fl" data-id="company-second">
							<a href="/company.html?order_id=2" target="_blank" class="menu-titlerow">最新发布<i></i></a>
							<span id="">最新热门公司 等您来选</span>
							<div>
								<a href="/company.html?taxnat_id=1" target="_blank">小规模</a>
								<a href="/company.html?taxnat_id=2" target="_blank">一般纳税人</a>
								<a href="/company.html?taxnat_id=5" target="_blank">出口纳税人</a>
								<a href="/company.html?taxnat_id=6" target="_blank">未核税</a>
								<a href="/company.html?hot_company_id=5" target="_blank">资质类公司</a>
								<a href="/company.html?hot_company_id=4" target="_blank">商标类公司</a>
								<a href="/company.html?hot_company_id=3" target="_blank">网络资产</a>
								<a href="/company.html?hot_company_id=2" target="_blank">专利/著作权</a>
								<a href="/company.html?hot_company_id=1" target="_blank">车牌类公司</a>
							</div>
						</div>
					</div>
					<div class="left-card">
						<div class="menu-box2 fl menu-active" data-id="company-third">
							<a href="/company.html?order_id=3" target="_blank" class="menu-titlerow">特价专区<i></i></a>
							<span id="">不买贵的，只买对的</span>
							<div>
								<a href="/company.html?label_id=21" target="_blank">公募基金</a>
								<a href="/company.html?label_id=8" target="_blank">高新技术</a>
								<a href="/company.html?label_id=7" target="_blank">双软认证</a>
								<a href="/company.html?label_id=6" target="_blank">免费转</a>
								<a href="/company.html?label_id=5" target="_blank">买过社保</a>
								<a href="/company.html?label_id=4" target="_blank">银行流水大</a>
								<a href="/company.html?label_id=3" target="_blank">政府国企</a>
								<a href="/company.html?label_id=2" target="_blank">外资背景</a>
								<a href="/company.html?label_id=1" target="_blank">国家局名称</a>
							</div>
						</div>
					</div>
				</div>
				<div class="xuan">
					<div class="xuanone" v-for="(item,index) in jpyxListone" :key="index">
						<div><img src="../../assets/images/bd.png" alt=""></div>
						<p class="xuantitle">{{item.title}}</p>
						<p class="xuanshiyong">适用项目:{{item.shiyong}}</p>
						<p class="xuanprice"><span>￥:</span> {{item.price}}</p>
					</div>
				</div>
			</div>
		</div>
		<!-- Commodity market end -->

		<div class="Commoditymarket" style="display: flex;justify-content: space-around;padding: 0;">
			<div style="width:1200px;height:80px;border-radius: 5px;">
				<a href="http://www.baidu.com" target="_blank" style="width:1200px;height:80px;"><img src="../../assets/images/gg2.png" style="border-radius: 5px;cursor: pointer;" alt=""></a>
			</div>
		</div>
		
		<div class="Commoditymarket" style="background-color:#f8f8f8">
			<div class="top">
				<div>
					<p>企业场地租赁</p>
					<span>每日不定时更新!</span>
				</div>
				<p>查看更多 <i class="iconfont icon-rightarrow"></i></p>
			</div>
			<div class="list" style="padding-bottom: 40px;">
				<div class="one" :style="{'background': 'url('+imgSrc+') no-repeat center center'}">
					<div class="left-card">
						<div class="menu-box2 fl" data-id="company-first">
							<a href="/company.html?order_id=1" target="_blank" class="menu-titlerow">精品推荐<i></i></a>
							<span id="">全国优质场地园区供您选择</span>
							<div>
								<a href="/company.html?industry_id=2" target="_blank">商贸贸易</a>
								<a href="/company.html?industry_id=13" target="_blank">科技信息</a>
								<a href="/company.html?industry_id=15" target="_blank">餐饮美容</a>
								<a href="/company.html?industry_id=21" target="_blank">商标资质</a>
							</div>
						</div>
					</div>
					<div class="left-card">
						<div class="menu-box2 fl" data-id="company-second">
							<a href="/company.html?order_id=2" target="_blank" class="menu-titlerow">最新发布<i></i></a>
							<span id="">最新热门公司 等您来选</span>
							<div>
								<a href="/company.html?taxnat_id=1" target="_blank">小规模</a>
								<a href="/company.html?taxnat_id=2" target="_blank">一般纳税人</a>
								<a href="/company.html?taxnat_id=5" target="_blank">出口纳税人</a>
								<a href="/company.html?taxnat_id=6" target="_blank">未核税</a>
								<a href="/company.html?hot_company_id=5" target="_blank">资质类公司</a>
								<a href="/company.html?hot_company_id=4" target="_blank">商标类公司</a>
								<a href="/company.html?hot_company_id=3" target="_blank">网络资产</a>
								<a href="/company.html?hot_company_id=2" target="_blank">专利/著作权</a>
								<a href="/company.html?hot_company_id=1" target="_blank">车牌类公司</a>
							</div>
						</div>
					</div>
					<div class="left-card">
						<div class="menu-box2 fl menu-active" data-id="company-third">
							<a href="/company.html?order_id=3" target="_blank" class="menu-titlerow">特价专区<i></i></a>
							<span id="">不买贵的，只买对的</span>
							<div>
								<a href="/company.html?label_id=21" target="_blank">公募基金</a>
								<a href="/company.html?label_id=8" target="_blank">高新技术</a>
								<a href="/company.html?label_id=7" target="_blank">双软认证</a>
								<a href="/company.html?label_id=6" target="_blank">免费转</a>
								<a href="/company.html?label_id=5" target="_blank">买过社保</a>
								<a href="/company.html?label_id=4" target="_blank">银行流水大</a>
								<a href="/company.html?label_id=3" target="_blank">政府国企</a>
								<a href="/company.html?label_id=2" target="_blank">外资背景</a>
								<a href="/company.html?label_id=1" target="_blank">国家局名称</a>
							</div>
						</div>
					</div>
				</div>
				<div class="xuan">
					<div class="xuanone" v-for="(item,index) in jpyxListone" :key="index">
						<div><img src="../../assets/images/bd.png" alt=""></div>
						<p class="xuantitle">{{item.title}}</p>
						<p class="xuanshiyong">适用项目:{{item.shiyong}}</p>
						<p class="xuanprice"><span>￥:</span> {{item.price}}</p>
					</div>
				</div>
			</div>
		</div>

		<!-- agent market start -->
		<div class="Commoditymarket" style="display: flex;justify-content: space-around;padding-bottom: 54px;background-color: rgb(248, 248, 248);margin: 0 auto;padding-top: 0px;">
			<div style="width:1200px;border-radius: 5px;">
					<div class="center">
					            <div class="title">
					                <img class="img-rounded" src="https://cdn.caiyun.com/image/banner7.jpg" alt="img">
					            </div>
					            <swiper class="ul" :options="swiperOption_news">
					                <ul style="width: 1268px; margin-left: 0px;">
					                        <li>
					                            <a target="_blank" href="/news/indetails/n201811281340.html">
					                                <div class="tit">
					                                    <img src="https://cdn.caiyun.com/upload/www/img/info/2018/11/28/1743166226.png" alt="深圳金融公司转让">
					                                </div>
					                                <div class="data">
					                                    <div class="dtit">深圳金融公司转让</div>
					                                    <div class="ddes">近期有客户来电咨询深圳金融服务公司转让的相关事宜，下面，财运网小编给您介绍一下。...</div>
					                                </div>
					                            </a>
					                        </li>
											<li>
					                            <a target="_blank" href="/news/indetails/n201811281341.html">
					                                <div class="tit">
					                                    <img src="https://cdn.caiyun.com/upload/www/img/info/2018/11/28/1742024020.png" alt="两个股东的公司可以零转让股权吗">
					                                </div>
					                                <div class="data">
					                                    <div class="dtit">两个股东的公司可以零转让股权吗</div>
					                                    <div class="ddes">两个股东的公司零元转让股权，你听说过吗?这到底是怎么一回事，下面，财运网小编给大家解释一下...</div>
					                                </div>
					                            </a>
					                        </li>
											<li>
					                            <a target="_blank" href="/news/indetails/n201811281342.html">
					                                <div class="tit">
					                                    <img src="https://cdn.caiyun.com/upload/www/img/info/2018/11/28/1739129597.png" alt="公司股权转让协议中都有哪些重要条款?">
					                                </div>
					                                <div class="data">
					                                    <div class="dtit">公司股权转让协议中都有哪些重要条款?</div>
					                                    <div class="ddes">大家都知道，只要产生商业行为就需要用协议来规范双方的行为，当出现纠纷的时候，协议可以很好地保护你的权益。...</div>
					                                </div>
					                            </a>
					                        </li>
											<li>
					                            <a target="_blank" href="/news/indetails/n201811281343.html">
					                                <div class="tit">
					                                    <img src="https://cdn.caiyun.com/upload/www/img/info/2018/11/28/1737119170.png" alt="上市公司资产重组流程">
					                                </div>
					                                <div class="data">
					                                    <div class="dtit">上市公司资产重组流程</div>
					                                    <div class="ddes">关于上市公司资产的重组，你又了解多少呢，以下是小编搜集并整理的上市公司资产重组有关内容，供大家参考，希望对大家能有所帮助!...</div>
					                                </div>
					                            </a>
					                        </li>
											<li>
					                            <a target="_blank" href="/news/indetails/n201811271334.html">
					                                <div class="tit">
					                                    <img src="https://cdn.caiyun.com/upload/www/img/info/2018/11/27/1746071447.png" alt="有限公司股权转让意向书">
					                                </div>
					                                <div class="data">
					                                    <div class="dtit">有限公司股权转让意向书</div>
					                                    <div class="ddes">有限公司股权转让意向书...</div>
					                                </div>
					                            </a>
					                        </li>
											<li>
					                            <a target="_blank" href="/news/indetails/n201811281339.html">
					                                <div class="tit">
					                                    <img src="https://cdn.caiyun.com/upload/www/img/info/2018/11/28/1745249956.png" alt="两网公司及退市公司股票转让风险揭示书">
					                                </div>
					                                <div class="data">
					                                    <div class="dtit">两网公司及退市公司股票转让风险揭示书</div>
					                                    <div class="ddes">​　　全国中小企业股份转让系统两网公司及退市公司股票转让暂行办法主要有什么内容?该暂行办法一共四十一条，是两网公司和退市公司的股票如何进行转让，股票转让的具体程序等。下面，财运网小编带您来看一下。...</div>
					                                </div>
					                            </a>
					                        </li>
										</ul>
					            </swiper>
					            <div class="more">
					                <a href="/news/industry" rel="nofollow">更多 <i class="icon-angle-right"></i> </a>
					            </div>
					</div>
			</div>
		</div>
		<!-- news center end -->
	</div>
</template>

<script>
	import axios from '../../api/axios'
	import Cookies from 'js-cookie'
	import scroll from 'vue-seamless-scroll'
	export default {
		components: {
			scroll
		},
		data() {
			return {
				imgSrc: require('../../assets/images/bl3.png'),
				listData: [{
						'title': '无缝滚动第一行无缝滚动第一行56435765',
						'date': '2017-12-16'
					}, {
						'title': '无缝滚动第二行无缝滚动第二行7865434678',
						'date': '2017-12-16'
					}, {
						'title': '无缝滚动第三行无缝滚动第三行78654',
						'date': '2017-12-16'
					}, {
						'title': '无缝滚动第四行无缝滚动第四行7865467',
						'date': '2017-12-16'
					}, {
						'title': '无缝滚动第五行无缝滚动第五行78654',
						'date': '2017-12-16'
					}, {
						'title': '无缝滚动第六行无缝滚动第六行786545342',
						'date': '2017-12-16'
					},
					{
						'title': '无缝滚动第六行无缝滚动第六行876543',
						'date': '2017-12-16'
					},
					{
						'title': '无缝滚动第六行无缝滚动第六行',
						'date': '2017-12-16'
					}
				],
				swiperOption: {
					//显示分页
					pagination: {
						el: '.swiper-pagination',
						clickable: true,
					},
					// 如果需要滚动条
					scrollbar: {
						el: '.swiper-scrollbar',
					},
					effect: "fade",
					//自动轮播
					autoplay: {
						delay: 5000,
						//当用户滑动图片后继续自动轮播
						disableOnInteraction: false,
					},
					//开启循环模式
					loop: true
				},
				swiperOption_news :{
					effect: "slide",
					//自动轮播
					autoplay: {
						delay: 5000,
						//当用户滑动图片后继续自动轮播
						disableOnInteraction: false,
					},
					//开启循环模式
					loop: true
				},
				carouselArr: [], //轮播
				all: [{
						logoUrl: "https://www.yizhuanweb.com/assets/img/newImg/GsZrRed.png",
						title: "公司转让",
						path: "/Transfer",
						list: ["金融投资", "广告传媒", "家居建材", "咨询服务", "食品农业", "会务展览"]
					},
					{
						logoUrl: "https://www.yizhuanweb.com/assets/img/newImg/QgRed.png",
						title: "热门求购",
						path: "",
						list: ["商贸贸易", "科技信息", "化工原料", "颜料油漆", "网络资质", "科技资质"]
					},
					{
						logoUrl: "https://www.yizhuanweb.com/assets/img/newImg/DbRed.png",
						title: "身边服务",
						path: "",
						list: ["财务咨询", "工商注册", "代理记账", "知识产权", "资质许可", "其他服务"]
					},
					{
						logoUrl: "https://www.yizhuanweb.com/assets/img/newImg/ZrRed.png",
						title: "商标转让",
						path: "",
						list: ["日货用品", "燃料油脂", "医药用品", "金属材料", "机械设备", "手工器械"]
					},
					{
						logoUrl: "https://www.yizhuanweb.com/assets/img/newImg/ZrRed.png",
						title: "商标转让",
						path: "",
						list: ["日货用品", "燃料油脂", "医药用品", "金属材料", "机械设备", "手工器械"]
					}
				], //轮播左边列表
				trading: [true, false, false],
				commodity: [true, false, false],
				companyList: [],
				jpyxListone: [{
						url: "../../assets/images/pg_logo.png",
						title: "11类 - 图形",
						shiyong: "玻璃钢冷却塔 冷却设备和装置 气体净化装置 焚化炉 供水设备 污水处理设备 水过滤器 水净化装置 水软化器 水消毒器",
						price: "6000.00"
					},
					{
						url: "../../assets/images/pg_logo.png",
						title: "11类 - 图形",
						shiyong: "玻璃钢冷却塔 冷却设备和装置 气体净化装置 焚化炉 供水设备 污水处理设备 水过滤器 水净化装置 水软化器 水消毒器",
						price: "6000.00"
					},
					{
						url: "../../assets/images/pg_logo.png",
						title: "11类 - 图形",
						shiyong: "玻璃钢冷却塔 冷却设备和装置 气体净化装置 焚化炉 供水设备 污水处理设备 水过滤器 水净化装置 水软化器 水消毒器",
						price: "6000.00"
					},
					{
						url: "http://tmpic.tmkoo.com/c6529ac311016a89",
						title: "11类 - 图形",
						shiyong: "玻璃钢冷却塔 冷却设备和装置 气体净化装置 焚化炉 供水设备 污水处理设备 水过滤器 水净化装置 水软化器 水消毒器",
						price: "6000.00"
					},
					{
						url: "http://tmpic.tmkoo.com/c6529ac311016a89",
						title: "11类 - 图形",
						shiyong: "玻璃钢冷却塔 冷却设备和装置 气体净化装置 焚化炉 供水设备 污水处理设备 水过滤器 水净化装置 水软化器 水消毒器",
						price: "6000.00"
					},
					{
						url: "http://tmpic.tmkoo.com/c6529ac311016a89",
						title: "11类 - 图形",
						shiyong: "玻璃钢冷却塔 冷却设备和装置 气体净化装置 焚化炉 供水设备 污水处理设备 水过滤器 水净化装置 水软化器 水消毒器",
						price: "6000.00"
					},
					{
						url: "http://tmpic.tmkoo.com/c6529ac311016a89",
						title: "11类 - 图形",
						shiyong: "玻璃钢冷却塔 冷却设备和装置 气体净化装置 焚化炉 供水设备 污水处理设备 水过滤器 水净化装置 水软化器 水消毒器",
						price: "6000.00"
					},
					{
						url: "http://tmpic.tmkoo.com/c6529ac311016a89",
						title: "11类 - 图形",
						shiyong: "玻璃钢冷却塔 冷却设备和装置 气体净化装置 焚化炉 供水设备 污水处理设备 水过滤器 水净化装置 水软化器 水消毒器",
						price: "6000.00"
					},
				],
				zxfbListone: [{
						url: "http://tmpic.tmkoo.com/c6529ac311016a89",
						title: "11类 - 图形",
						shiyong: "玻璃钢冷却塔 冷却设备和装置 气体净化装置 焚化炉 供水设备 污水处理设备 水过滤器 水净化装置 水软化器 水消毒器",
						price: "6000.00"
					},
					{
						url: "http://tmpic.tmkoo.com/c6529ac311016a89",
						title: "11类 - 图形",
						shiyong: "玻璃钢冷却塔 冷却设备和装置 气体净化装置 焚化炉 供水设备 污水处理设备 水过滤器 水净化装置 水软化器 水消毒器",
						price: "6000.00"
					},
					{
						url: "http://tmpic.tmkoo.com/c6529ac311016a89",
						title: "11类 - 图形",
						shiyong: "玻璃钢冷却塔 冷却设备和装置 气体净化装置 焚化炉 供水设备 污水处理设备 水过滤器 水净化装置 水软化器 水消毒器",
						price: "6000.00"
					},
					{
						url: "http://tmpic.tmkoo.com/c6529ac311016a89",
						title: "11类 - 图形",
						shiyong: "玻璃钢冷却塔 冷却设备和装置 气体净化装置 焚化炉 供水设备 污水处理设备 水过滤器 水净化装置 水软化器 水消毒器",
						price: "6000.00"
					},
					{
						url: "http://tmpic.tmkoo.com/c6529ac311016a89",
						title: "11类 - 图形",
						shiyong: "玻璃钢冷却塔 冷却设备和装置 气体净化装置 焚化炉 供水设备 污水处理设备 水过滤器 水净化装置 水软化器 水消毒器",
						price: "6000.00"
					},
					{
						url: "http://tmpic.tmkoo.com/c6529ac311016a89",
						title: "11类 - 图形",
						shiyong: "玻璃钢冷却塔 冷却设备和装置 气体净化装置 焚化炉 供水设备 污水处理设备 水过滤器 水净化装置 水软化器 水消毒器",
						price: "6000.00"
					},
					{
						url: "http://tmpic.tmkoo.com/c6529ac311016a89",
						title: "11类 - 图形",
						shiyong: "玻璃钢冷却塔 冷却设备和装置 气体净化装置 焚化炉 供水设备 污水处理设备 水过滤器 水净化装置 水软化器 水消毒器",
						price: "6000.00"
					},
					{
						url: "http://tmpic.tmkoo.com/c6529ac311016a89",
						title: "11类 - 图形",
						shiyong: "玻璃钢冷却塔 冷却设备和装置 气体净化装置 焚化炉 供水设备 污水处理设备 水过滤器 水净化装置 水软化器 水消毒器",
						price: "6000.00"
					},
				],
				tjzqListone: [{
						url: "http://tmpic.tmkoo.com/c6529ac311016a89",
						title: "11类 - 图形",
						shiyong: "玻璃钢冷却塔 冷却设备和装置 气体净化装置 焚化炉 供水设备 污水处理设备 水过滤器 水净化装置 水软化器 水消毒器",
						price: "6000.00"
					},
					{
						url: "http://tmpic.tmkoo.com/c6529ac311016a89",
						title: "11类 - 图形",
						shiyong: "玻璃钢冷却塔 冷却设备和装置 气体净化装置 焚化炉 供水设备 污水处理设备 水过滤器 水净化装置 水软化器 水消毒器",
						price: "6000.00"
					},
					{
						url: "http://tmpic.tmkoo.com/c6529ac311016a89",
						title: "11类 - 图形",
						shiyong: "玻璃钢冷却塔 冷却设备和装置 气体净化装置 焚化炉 供水设备 污水处理设备 水过滤器 水净化装置 水软化器 水消毒器",
						price: "6000.00"
					},
					{
						url: "http://tmpic.tmkoo.com/c6529ac311016a89",
						title: "11类 - 图形",
						shiyong: "玻璃钢冷却塔 冷却设备和装置 气体净化装置 焚化炉 供水设备 污水处理设备 水过滤器 水净化装置 水软化器 水消毒器",
						price: "6000.00"
					},
					{
						url: "http://tmpic.tmkoo.com/c6529ac311016a89",
						title: "11类 - 图形",
						shiyong: "玻璃钢冷却塔 冷却设备和装置 气体净化装置 焚化炉 供水设备 污水处理设备 水过滤器 水净化装置 水软化器 水消毒器",
						price: "6000.00"
					},
					{
						url: "http://tmpic.tmkoo.com/c6529ac311016a89",
						title: "11类 - 图形",
						shiyong: "玻璃钢冷却塔 冷却设备和装置 气体净化装置 焚化炉 供水设备 污水处理设备 水过滤器 水净化装置 水软化器 水消毒器",
						price: "6000.00"
					},
					{
						url: "http://tmpic.tmkoo.com/c6529ac311016a89",
						title: "11类 - 图形",
						shiyong: "玻璃钢冷却塔 冷却设备和装置 气体净化装置 焚化炉 供水设备 污水处理设备 水过滤器 水净化装置 水软化器 水消毒器",
						price: "6000.00"
					},
					{
						url: "http://tmpic.tmkoo.com/c6529ac311016a89",
						title: "11类 - 图形",
						shiyong: "玻璃钢冷却塔 冷却设备和装置 气体净化装置 焚化炉 供水设备 污水处理设备 水过滤器 水净化装置 水软化器 水消毒器",
						price: "6000.00"
					},
				],
				nlnumber: 0,
				nllist: ["公司转让", "易转问答", "政策法规", "行业资讯"],
				nlblist: [{
						title: {
							url: "https://www.yizhuanweb.com/uploads/20190513/f1675e02943374940817f83ded5de788.jpg",
							title: "公司转让合同的重要性",
							content: "公司转让过程中，转让合同非常重要，作为契约保障，那么转让合同有哪些重要性呢?专注打造公司转让平台易转网带来以下内容介绍：...",
						},
						list: [{
								day: "25",
								month: "2020-05",
								title: "专利侵权类型有哪些?如何区分?...",
								content: "专利权是保护人智力劳动成果的法律，专利侵权是指他人未经专利权人许可，以生产经营为目的，实施了依法..."
							},
							{
								day: "25",
								month: "2020-05",
								title: "专利侵权类型有哪些?如何区分?...",
								content: "专利权是保护人智力劳动成果的法律，专利侵权是指他人未经专利权人许可，以生产经营为目的，实施了依法..."
							},
							{
								day: "25",
								month: "2020-05",
								title: "专利侵权类型有哪些?如何区分?...",
								content: "专利权是保护人智力劳动成果的法律，专利侵权是指他人未经专利权人许可，以生产经营为目的，实施了依法..."
							},
							{
								day: "25",
								month: "2020-05",
								title: "专利侵权类型有哪些?如何区分?...",
								content: "专利权是保护人智力劳动成果的法律，专利侵权是指他人未经专利权人许可，以生产经营为目的，实施了依法..."
							},
							{
								day: "25",
								month: "2020-05",
								title: "专利侵权类型有哪些?如何区分?...",
								content: "专利权是保护人智力劳动成果的法律，专利侵权是指他人未经专利权人许可，以生产经营为目的，实施了依法..."
							},
							{
								day: "25",
								month: "2020-05",
								title: "专利侵权类型有哪些?如何区分?...",
								content: "专利权是保护人智力劳动成果的法律，专利侵权是指他人未经专利权人许可，以生产经营为目的，实施了依法..."
							},
							{
								day: "25",
								month: "2020-05",
								title: "专利侵权类型有哪些?如何区分?...",
								content: "专利权是保护人智力劳动成果的法律，专利侵权是指他人未经专利权人许可，以生产经营为目的，实施了依法..."
							},
							{
								day: "25",
								month: "2020-05",
								title: "专利侵权类型有哪些?如何区分?...",
								content: "专利权是保护人智力劳动成果的法律，专利侵权是指他人未经专利权人许可，以生产经营为目的，实施了依法..."
							},
						]
					},
					{
						title: {
							url: "https://www.yizhuanweb.com/uploads/20190513/f1675e02943374940817f83ded5de788.jpg",
							title: "公司转让合同的重要性",
							content: "公司转让过程中，转让合同非常重要，作为契约保障，那么转让合同有哪些重要性呢?专注打造公司转让平台易转网带来以下内容介绍：...",
						},
						list: [{
								day: "25",
								month: "2020-05",
								title: "专利侵权类型有哪些?如何区分?...",
								content: "专利权是保护人智力劳动成果的法律，专利侵权是指他人未经专利权人许可，以生产经营为目的，实施了依法..."
							},
							{
								day: "25",
								month: "2020-05",
								title: "专利侵权类型有哪些?如何区分?...",
								content: "专利权是保护人智力劳动成果的法律，专利侵权是指他人未经专利权人许可，以生产经营为目的，实施了依法..."
							},
							{
								day: "25",
								month: "2020-05",
								title: "专利侵权类型有哪些?如何区分?...",
								content: "专利权是保护人智力劳动成果的法律，专利侵权是指他人未经专利权人许可，以生产经营为目的，实施了依法..."
							},
							{
								day: "25",
								month: "2020-05",
								title: "专利侵权类型有哪些?如何区分?...",
								content: "专利权是保护人智力劳动成果的法律，专利侵权是指他人未经专利权人许可，以生产经营为目的，实施了依法..."
							},
							{
								day: "25",
								month: "2020-05",
								title: "专利侵权类型有哪些?如何区分?...",
								content: "专利权是保护人智力劳动成果的法律，专利侵权是指他人未经专利权人许可，以生产经营为目的，实施了依法..."
							},
							{
								day: "25",
								month: "2020-05",
								title: "专利侵权类型有哪些?如何区分?...",
								content: "专利权是保护人智力劳动成果的法律，专利侵权是指他人未经专利权人许可，以生产经营为目的，实施了依法..."
							},
							{
								day: "25",
								month: "2020-05",
								title: "专利侵权类型有哪些?如何区分?...",
								content: "专利权是保护人智力劳动成果的法律，专利侵权是指他人未经专利权人许可，以生产经营为目的，实施了依法..."
							},
							{
								day: "25",
								month: "2020-05",
								title: "专利侵权类型有哪些?如何区分?...",
								content: "专利权是保护人智力劳动成果的法律，专利侵权是指他人未经专利权人许可，以生产经营为目的，实施了依法..."
							},
						]
					},
					{
						title: {
							url: "https://www.yizhuanweb.com/uploads/20190513/f1675e02943374940817f83ded5de788.jpg",
							title: "公司转让合同的重要性",
							content: "公司转让过程中，转让合同非常重要，作为契约保障，那么转让合同有哪些重要性呢?专注打造公司转让平台易转网带来以下内容介绍：...",
						},
						list: [{
								day: "25",
								month: "2020-05",
								title: "专利侵权类型有哪些?如何区分?...",
								content: "专利权是保护人智力劳动成果的法律，专利侵权是指他人未经专利权人许可，以生产经营为目的，实施了依法..."
							},
							{
								day: "25",
								month: "2020-05",
								title: "专利侵权类型有哪些?如何区分?...",
								content: "专利权是保护人智力劳动成果的法律，专利侵权是指他人未经专利权人许可，以生产经营为目的，实施了依法..."
							},
							{
								day: "25",
								month: "2020-05",
								title: "专利侵权类型有哪些?如何区分?...",
								content: "专利权是保护人智力劳动成果的法律，专利侵权是指他人未经专利权人许可，以生产经营为目的，实施了依法..."
							},
							{
								day: "25",
								month: "2020-05",
								title: "专利侵权类型有哪些?如何区分?...",
								content: "专利权是保护人智力劳动成果的法律，专利侵权是指他人未经专利权人许可，以生产经营为目的，实施了依法..."
							},
							{
								day: "25",
								month: "2020-05",
								title: "专利侵权类型有哪些?如何区分?...",
								content: "专利权是保护人智力劳动成果的法律，专利侵权是指他人未经专利权人许可，以生产经营为目的，实施了依法..."
							},
							{
								day: "25",
								month: "2020-05",
								title: "专利侵权类型有哪些?如何区分?...",
								content: "专利权是保护人智力劳动成果的法律，专利侵权是指他人未经专利权人许可，以生产经营为目的，实施了依法..."
							},
							{
								day: "25",
								month: "2020-05",
								title: "专利侵权类型有哪些?如何区分?...",
								content: "专利权是保护人智力劳动成果的法律，专利侵权是指他人未经专利权人许可，以生产经营为目的，实施了依法..."
							},
							{
								day: "25",
								month: "2020-05",
								title: "专利侵权类型有哪些?如何区分?...",
								content: "专利权是保护人智力劳动成果的法律，专利侵权是指他人未经专利权人许可，以生产经营为目的，实施了依法..."
							},
						]
					},
					{
						title: {
							url: "https://www.yizhuanweb.com/uploads/20190513/f1675e02943374940817f83ded5de788.jpg",
							title: "公司转让合同的重要性",
							content: "公司转让过程中，转让合同非常重要，作为契约保障，那么转让合同有哪些重要性呢?专注打造公司转让平台易转网带来以下内容介绍：...",
						},
						list: [{
								day: "25",
								month: "2020-05",
								title: "专利侵权类型有哪些?如何区分?...",
								content: "专利权是保护人智力劳动成果的法律，专利侵权是指他人未经专利权人许可，以生产经营为目的，实施了依法..."
							},
							{
								day: "25",
								month: "2020-05",
								title: "专利侵权类型有哪些?如何区分?...",
								content: "专利权是保护人智力劳动成果的法律，专利侵权是指他人未经专利权人许可，以生产经营为目的，实施了依法..."
							},
							{
								day: "25",
								month: "2020-05",
								title: "专利侵权类型有哪些?如何区分?...",
								content: "专利权是保护人智力劳动成果的法律，专利侵权是指他人未经专利权人许可，以生产经营为目的，实施了依法..."
							},
							{
								day: "25",
								month: "2020-05",
								title: "专利侵权类型有哪些?如何区分?...",
								content: "专利权是保护人智力劳动成果的法律，专利侵权是指他人未经专利权人许可，以生产经营为目的，实施了依法..."
							},
							{
								day: "25",
								month: "2020-05",
								title: "专利侵权类型有哪些?如何区分?...",
								content: "专利权是保护人智力劳动成果的法律，专利侵权是指他人未经专利权人许可，以生产经营为目的，实施了依法..."
							},
							{
								day: "25",
								month: "2020-05",
								title: "专利侵权类型有哪些?如何区分?...",
								content: "专利权是保护人智力劳动成果的法律，专利侵权是指他人未经专利权人许可，以生产经营为目的，实施了依法..."
							},
							{
								day: "25",
								month: "2020-05",
								title: "专利侵权类型有哪些?如何区分?...",
								content: "专利权是保护人智力劳动成果的法律，专利侵权是指他人未经专利权人许可，以生产经营为目的，实施了依法..."
							},
							{
								day: "25",
								month: "2020-05",
								title: "专利侵权类型有哪些?如何区分?...",
								content: "专利权是保护人智力劳动成果的法律，专利侵权是指他人未经专利权人许可，以生产经营为目的，实施了依法..."
							},
						]
					}
				]
			}
		},
		created() {
			this.init()
		},
		computed: {
			optionSingleHeight() {
				return {
					//什么都不设置默认的
					singleHeight: 0, //（带停顿的）
					waitTime: 1, //（停顿时间）
					// direction: 0,          //（从上往下的）
					step: 0.5, //（调整速度的）
					// hoverStop:false       // (鼠标停留停止 离开继续运行（反之则停止）)
				}
			}
		},
		methods: {
			getData: function(item) {
				console.log(item.title);
			},
			//初始化页面数据
			init: function() {
				//请求轮播资源
				this.getSwiper()
				//请求公司交易市场数据
				this.getCompany()
			},
			//请求轮播资源
			getSwiper: async function() {
				let carouselArr = await axios("index/index/getCarousel")
				this.carouselArr = carouselArr.data
			},
			//请求公司交易市场数据
			getCompany: async function(type = 1) {
				let companyList = await axios('index/index/getTransfer', {
					type
				})
				companyList.data.map((item, index) => {
					item.fund_date = this.getTime(item.fund_date)
					item.create_time = this.getTime(item.create_time)
					item.service_price = item.service_price == "0.00" ? "面议" : item.service_price + "万人民币"
				})
				this.companyList = companyList.data
			},
			//把时间戳转换成日期
			getTime: function(timeStamp) {
				let time = new Date(parseInt(timeStamp * 1000))
				let Y = time.getFullYear() + '-';
				let M = (time.getMonth() + 1 < 10 ? '0' + (time.getMonth() + 1) : time.getMonth() + 1) + '-';
				let D = time.getDate();
				return time = Y + M + D
			},
			//公司交易市场 切换选项卡
			changelist: function(index) {
				//全部重置为false
				this.trading.map((item, index) => {
					this.trading[index] = false
				})
				this.trading.splice(index, 1, true)
				this.getCompany(index + 1)
			},
			//商标交易市场 切换选项卡
			changecommodity: function(index) {
				//全部重置为false
				this.commodity.map((item, index) => {
					this.commodity[index] = false
				})
				this.commodity.splice(index, 1, true)
			},
			//新闻中心 导航切换
			changenlnumber: function(number) {
				this.nlnumber = number
			},
			//退出登录
			out: function() {
				Cookies.remove('token');
				Cookies.remove('user_name');
				this.$store.commit('changelogin', false)
			}
		}
	}
</script>

<style scoped lang="less">
	.mySwiper {
		margin-top: 80px;
		width: 100%;
		position: relative;

		.swiper {
			width: 100%;
			min-width: 1200px;
			height: 500px;
		img {
			  overflow: hidden;
			}
			@media screen and (max-width: 1200px) {
			    img {
			    	margin-left:-350px;
			    	overflow: hidden;
			    }
			}
			.swiper-pagination {
				top: 430px;
				width: 300px;
				left: 0;
				right: 0;
				margin: auto;
				--swiper-pagination-color: #FFFFFF;
				/* 两种都可以 */

			}
		}

		.allcenter {
			position: absolute;
			width: 1200px;
			height: 0;
			font-size: 14px;
			z-index: 999;
			top: 0px;
			left: 0;
			right: 0;
			margin: auto;

			.botton {
				float: left;
				width: 230px;
				height: 500px;
				box-sizing: border-box;
				background-color: rgba(0, 0, 0, 0.79);
				background-position-y: -67px;

				.left {
					position: relative;
					height: 100px;
					box-sizing: border-box;
					padding: 10px 20px;
					margin: auto;

					.header {
						width: 160px;
						display: flex;
						justify-content: space-between;

						img {
							width: 30px;
							height: 30px;
							border-radius: 4px;
						}

						p {
							line-height: 30px;
							color: #fff;
							margin: 0;

							a {
								color: #fff;
								text-decoration: none;
							}
						}

						i {
							width: 14px;
							height: 14px;
							line-height: 14px;
							text-align: center;
							color: #999;
							border: 1px solid #999;
							font-size: 12px;
							margin: auto 0;
							border-radius: 50%;
						}
					}

					ul {
						display: flex;
						flex-wrap: wrap;
						justify-content: space-between;

						li {
							line-height: 24px;
							color: #939392;

							a {
								color: #888;
							}
						}
					}

					.rightList {
						display: none;
						position: absolute;
						left: 230px;
						top: -57px;
						width: 740px;
						height: 453px;
						background-color: #fff;
						box-sizing: border-box;
						padding: 4px 16px;

						.one {
							position: relative;
							display: flex;
							flex-wrap: wrap;
							border-bottom: 1px dashed #ccc;
							padding-bottom: 14px;
							padding-left: 100px;
							cursor: pointer;

							.storg {
								position: absolute;
								left: 0;
								font-weight: 600;
								color: #000;
								border-left: none;

								&:hover {
									color: #000;
								}
							}

							div {
								width: 100px;
								text-align: center;
								line-height: 20px;
								margin-top: 14px;
								border-left: 1px solid #D6D6D6;
								font-size: 14px;
								color: #666;

								&:hover {
									color: #EA2417;
								}
							}
						}

						.oneList {
							border: none;
							margin-top: 10px;
							padding-left: 0;

							div {
								width: 120px;
								text-align: center;
								line-height: 26px;
								color: #fff;
								font-size: 14px;
								margin-left: 10px;
								margin-top: 0;
								background-color: #3C3C3C;
								border: none;
							}
						}
					}

					&:hover {
						.rightList {
							display: block;
						}
					}
				}

				.two {
					.rightList {
						top: -157px;
					}
				}

				.three {
					.rightList {
						top: -257px;
					}
				}

				.four {
					.rightList {
						height: 457px;
						top: -357px;
					}
				}
			}

			.right {
				float: right;
				position: relative;
				width: 232px;
				height: 500px;
				background-color: #fff;

				.topRight {
					display: flex;
					align-items: center;
					width: 232px;
					height: 212px;
					background-color: #fff;
					background-image: url(../../assets/images/bg1.png);
					background-repeat: no-repeat;
					margin: 0;
					justify-content: center;

					.img {
						width: 128px;
						height: 128px;
						border-radius: 50px;
					}
				}

				.zhuce {
					position: absolute;
					width: 212px;
					top: 180px;
					left: 0;
					right: 0;
					margin: auto;
					display: flex;
					justify-content: space-around;

					a,
					p {
						width: 90px;
						line-height: 30px;
						text-align: center;
						background: #F3A54D;
						border-radius: 6px;
						;
						color: #fff;
					}

					a,
					p:hover {
						text-decoration: none;
					}

					.tran {
						background-color: #fff;
						border: 1px solid #F3A54D;
						color: #888;
					}
				}

				.authorization {
					display: flex;
					background-color: #fafafa;
					justify-content: space-between;
					box-sizing: border-box;
					padding: 15px;

					div {
						flex: 1;
						text-align: center;

						img {
							width: 30px;
							height: 30px;
						}

						p {
							color: #ff6c00;
							text-align: center;
							font-size: 12px;
						}
					}
				}

				.rnews {
					background-color: #fff;
					box-sizing: border-box;
					padding: 10px;
					height: 201px;

					.seamless-warp {
						width: 100%;
						height: 160px;

						.item {
							margin: 0;

							li {
								a {
									width: 212px;

									.title {
										font-weight: 500;
										cursor: pointer;
										width: 208px;
										color: #888;
										text-align: left;
										white-space: nowrap;
										// overflow:hidden;
										text-overflow: ellipsis;
									}
								}
							}
						}
					}

					div {
						font-weight: bold;
						border-bottom: 1px solid #DCDCDC;
						text-align: center;
					}

					div,
					p {
						width: 204px;
						margin: 4px;
						font-size: 14px;
						color: red;
						overflow: hidden;
						white-space: nowrap;
						text-overflow: ellipsis;

						span {
							color: #000;
						}

						a {
							color: #000;
						}

						a:hover {
							text-decoration: underline;
						}
					}

					p {
						color: #7d7d7d;
					}
				}
			}
		}

		.swiperBottomList {
			position: absolute;
			z-index: 999;
			top: 500px;
			left: 0px;
			right: 0;
			width: 1203px;
			height: 106px;
			display: flex;
			justify-content: space-between;
			margin: auto;

			img {
				width: 240px;
				height: 106px;
			}
		}

		.tradingmarket {
			padding-top: 50px;
			padding-bottom: 40px;
			background-color: #f8f8f8;
			min-width: 1200px;
			.top {
				width: 1200px;
				margin: auto;
				display: flex;
				justify-content: space-between;

				div {
					display: flex;

					p {
						font-size: 30px;
						color: #000;
					}

					span {
						display: block;
						margin-top: 18px;
						margin-left: 20px;
						;
						font-size: 14px;
					}
				}

				p {
					cursor: pointer;
					color: #F3A54D;

					i {
						color: #F3A54D;
					}
				}
			}

			.list {
				position: relative;
				width: 1200px;
				margin: auto;
				margin-top: 30px;
				display: flex;

				.i5modal {
					float: left;
					width: 100%;
					height: 397px;
					height: auto;
					overflow: hidden;

					.data {
						float: left;
						overflow: hidden;
						width: 984px;

						.liston {
							display: block;
							overflow: hidden;
						}

						.list1 {
							overflow: hidden;

							.one {
								border-top: 1px solid #f7f8fc;
								width: 300px;
								height: 397px;
								float: left;
								position: relative;
								background: url(../../assets/images/bg3.png);
								background-size: 100% 100%;
								text-align: left;

								a {
									display: block;
									overflow: hidden;
									text-decoration: none;
									color: #333;
								}

								.bursting {
									position: absolute;
									right: 0;
									top: 0;
									width: 72px;
								}

								.title {
									float: left;
									font-size: 20px;
									line-height: 20px;
									height: 20px;
									margin-top: 40px;
									margin-left: 14px;
									width: 208px;
									text-overflow: ellipsis;
									white-space: nowrap;
									text-decoration: none;
									overflow: hidden;
								}

								.money {
									float: left;
									clear: both;
									width: 100%;
									margin-top: 39px;
									height: 17px;
									overflow: hidden;
									text-overflow: ellipsis;
									white-space: nowrap;
									text-decoration: none;
									overflow: hidden;

									.img {
										float: left;
										margin-left: 15px;
										width: 17px;
										height: 17px;
									}

									.font {
										float: left;
										margin-left: 7px;
										line-height: 17px;
										font-size: 16px;
										color: #999999;
									}
								}

								.time {
									float: left;
									clear: both;
									width: 100%;
									margin-top: 15px;
									height: 17px;
									overflow: hidden;
									text-overflow: ellipsis;
									white-space: nowrap;
									text-decoration: none;
									overflow: hidden;

									.img {
										float: left;
										margin-left: 15px;
										width: 17px;
										height: 17px;
									}

									.font {
										float: left;
										margin-left: 7px;
										line-height: 17px;
										font-size: 16px;
										color: #999999;
									}
								}

								.type {
									float: left;
									clear: both;
									width: 100%;
									margin-top: 15px;
									height: 17px;
									overflow: hidden;
									text-overflow: ellipsis;
									white-space: nowrap;
									text-decoration: none;
									overflow: hidden;

									.img {
										float: left;
										margin-left: 15px;
										width: 17px;
										height: 17px;
									}

									.font {
										float: left;
										margin-left: 7px;
										line-height: 17px;
										font-size: 16px;
										color: #999999;
									}
								}

								.price {
									float: left;
									clear: both;
									width: 100%;
									overflow: hidden;
									text-overflow: ellipsis;
									white-space: nowrap;
									text-decoration: none;
									overflow: hidden;

									.key {
										float: left;
										margin-left: 15px;
										color: #333;
										margin-top: 45px;
										font-size: 12px;
										line-height: 12px;
										height: 12px;
									}

									.val {
										float: left;
										color: #F3A54D;
										margin-top: 39px;
										font-size: 20px;
										line-height: 20px;
										height: 20px;

										span {
											font-size: 14px;
											line-height: 14px;
											margin-top: 6px;
											margin-left: 10px;
											margin-right: 7px;
										}
									}
								}

								.business {
									overflow: hidden;
									margin-top: 54px;
									float: left;
									width: 100%;

									.contact {
										overflow: hidden;

										img {
											float: left;
											width: 34px;
											height: 34px;
											margin-left: 13px;
										}

										.user {
											float: left;
											overflow: hidden;
											margin: 0px;
											padding: 0px;
											margin-left: 10px;

											.label {
												display: block;
												padding: 0px;
												margin: 0px;
												color: #666;
												font-size: 12px;
												line-height: 12px;
												height: 12px;
												text-align: left;
											}

											.name {
												display: block;
												padding: 0px;
												margin: 0px;
												color: #AD866B;
												line-height: 14px;
												font-size: 14px;
												height: 14px;
												margin-top: 7px;
												text-align: left;
											}
										}
									}
								}
							}

							.two {
								border-top: 1px solid #f7f8fc;
								float: left;
								width: 250px;
								height: 397px;
								overflow: hidden;
								text-align: left;

								a {
									display: block;
									overflow: hidden;
									text-decoration: none;
									color: #333;
								}

								.two1 {
									height: 50%;
									width: 100%;
									background: url(../../assets/images/bg4.png);
									position: relative;
									overflow: hidden;

									.hot {
										position: absolute;
										right: 0;
										top: 0;
										width: 40px;
									}

									.time {
										float: left;
										clear: both;
										width: 100%;
										margin-top: 10px;
										height: 15px;
										overflow: hidden;
										text-overflow: ellipsis;
										white-space: nowrap;
										text-decoration: none;
										overflow: hidden;

										.img {
											float: left;
											margin-left: 19px;
											width: 15px;
											height: 15px;
										}

										.font {
											float: left;
											margin-left: 7px;
											line-height: 15px;
											font-size: 12px;
											color: #999999;
										}
									}

									.title {
										float: left;
										font-size: 14px;
										line-height: 14px;
										height: 14px;
										margin-top: 19px;
										margin-left: 19px;
										width: 210px;
										text-overflow: ellipsis;
										white-space: nowrap;
										text-decoration: none;
										overflow: hidden;
										text-align: left;
									}

									.money {
										float: left;
										clear: both;
										width: 100%;
										margin-top: 27px;
										height: 15px;
										overflow: hidden;
										text-overflow: ellipsis;
										white-space: nowrap;
										text-decoration: none;
										overflow: hidden;

										.img {
											float: left;
											margin-left: 19px;
											width: 15px;
											height: 15px;
										}

										.font {
											float: left;
											margin-left: 7px;
											line-height: 15px;
											font-size: 12px;
											color: #999999;
										}
									}

									.type {
										float: left;
										clear: both;
										width: 100%;
										margin-top: 10px;
										height: 15px;
										overflow: hidden;
										text-overflow: ellipsis;
										white-space: nowrap;
										text-decoration: none;
										overflow: hidden;

										.img {
											float: left;
											margin-left: 19px;
											width: 15px;
											height: 15px;
										}

										.font {
											float: left;
											margin-left: 7px;
											line-height: 15px;
											font-size: 12px;
											color: #999999;
										}
									}

									.price {
										float: left;
										clear: both;
										width: 100%;
										overflow: hidden;
										text-overflow: ellipsis;
										white-space: nowrap;
										text-decoration: none;
										overflow: hidden;

										.key {
											float: left;
											margin-left: 20px;
											color: #333;
											margin-top: 30px;
											font-size: 12px;
											line-height: 12px;
											height: 12px;
										}

										.val {
											float: left;
											color: #F3A54D;
											margin-top: 29px;
											font-size: 14px;
											line-height: 14px;
											height: 14px;

											span {
												font-size: 12px;
												line-height: 12px;
												margin-top: 3px;
												margin-left: 11px;
												margin-right: 9px;
											}
										}
									}
								}

								.two2 {
									height: 50%;
									width: 100%;
									background: url(../../assets/images/bg5.png);
									position: relative;
									overflow: hidden;

									.hot {
										position: absolute;
										right: 0;
										top: 0;
										width: 40px;
									}

									.title {
										float: left;
										font-size: 14px;
										line-height: 14px;
										height: 14px;
										margin-top: 19px;
										margin-left: 19px;
										width: 210px;
										text-overflow: ellipsis;
										white-space: nowrap;
										text-decoration: none;
										overflow: hidden;
									}

									.money {
										float: left;
										clear: both;
										width: 100%;
										margin-top: 27px;
										height: 15px;
										overflow: hidden;
										text-overflow: ellipsis;
										white-space: nowrap;
										text-decoration: none;
										overflow: hidden;

										.img {
											float: left;
											margin-left: 19px;
											width: 15px;
											height: 15px;
										}

										.font {
											float: left;
											margin-left: 7px;
											line-height: 15px;
											font-size: 12px;
											color: #999999;
										}
									}

									.time {
										float: left;
										clear: both;
										width: 100%;
										margin-top: 10px;
										height: 15px;
										overflow: hidden;
										text-overflow: ellipsis;
										white-space: nowrap;
										text-decoration: none;
										overflow: hidden;

										.img {
											float: left;
											margin-left: 19px;
											width: 15px;
											height: 15px;
										}

										.font {
											float: left;
											margin-left: 7px;
											line-height: 15px;
											font-size: 12px;
											color: #999999;
										}
									}

									.type {
										float: left;
										clear: both;
										width: 100%;
										margin-top: 10px;
										height: 15px;
										overflow: hidden;
										text-overflow: ellipsis;
										white-space: nowrap;
										text-decoration: none;
										overflow: hidden;

										.img {
											float: left;
											margin-left: 19px;
											width: 15px;
											height: 15px;
										}

										.font {
											float: left;
											margin-left: 7px;
											line-height: 15px;
											font-size: 12px;
											color: #999999;
										}
									}

									.price {
										float: left;
										clear: both;
										width: 100%;
										overflow: hidden;
										text-overflow: ellipsis;
										white-space: nowrap;
										text-decoration: none;
										overflow: hidden;

										.key {
											float: left;
											margin-left: 20px;
											color: #333;
											margin-top: 30px;
											font-size: 12px;
											line-height: 12px;
											height: 12px;
										}

										.val {
											float: left;
											color: #F3A54D;
											margin-top: 29px;
											font-size: 14px;
											line-height: 14px;
											height: 14px;

											span {
												font-size: 12px;
												line-height: 12px;
												margin-top: 3px;
												margin-left: 11px;
												margin-right: 9px;
											}
										}
									}
								}
							}

							.three {
								overflow: hidden;
								width: 434px;
								height: 397px;
								text-align: left;

								.border {
									width: 434px;
									height: 397px;
									overflow: hidden;
									float: right;

									.threes {
										height: 50%;
										width: 50%;
										float: left;
										background: #fff;
										position: relative;
										overflow: hidden;
										border-top: 1px solid #f7f8fc;
										border-right: 1px solid #f7f8fc;
										text-align: left;

										a {
											color: #337ab7;
											text-decoration: none;

											.title {
												float: left;
												font-size: 14px;
												line-height: 14px;
												height: 14px;
												margin-top: 19px;
												margin-left: 17px;
												width: 182px;
												text-overflow: ellipsis;
												white-space: nowrap;
												text-decoration: none;
												overflow: hidden;
											}

										}
									}
								}

								.money {
									float: left;
									clear: both;
									width: 100%;
									margin-top: 27px;
									height: 15px;
									overflow: hidden;
									text-overflow: ellipsis;
									white-space: nowrap;
									text-decoration: none;
									overflow: hidden;

									.img {
										float: left;
										margin-left: 19px;
										width: 15px;
										height: 15px;
									}

									.font {
										float: left;
										margin-left: 7px;
										line-height: 15px;
										font-size: 12px;
										color: #999999;
									}
								}

								.time {
									float: left;
									clear: both;
									width: 100%;
									margin-top: 10px;
									height: 15px;
									overflow: hidden;
									text-overflow: ellipsis;
									white-space: nowrap;
									text-decoration: none;
									overflow: hidden;

									.img {
										float: left;
										margin-left: 19px;
										width: 15px;
										height: 15px;
									}

									.font {
										float: left;
										margin-left: 7px;
										line-height: 15px;
										font-size: 12px;
										color: #999999;
									}
								}

								.type {
									float: left;
									clear: both;
									width: 100%;
									margin-top: 10px;
									height: 15px;
									overflow: hidden;
									text-overflow: ellipsis;
									white-space: nowrap;
									text-decoration: none;
									overflow: hidden;

									.img {
										float: left;
										margin-left: 19px;
										width: 15px;
										height: 15px;
									}

									.font {
										float: left;
										margin-left: 7px;
										line-height: 15px;
										font-size: 12px;
										color: #999999;
									}
								}

								.price {
									float: left;
									clear: both;
									width: 100%;
									overflow: hidden;
									text-overflow: ellipsis;
									white-space: nowrap;
									text-decoration: none;
									overflow: hidden;

									.key {
										float: left;
										margin-left: 20px;
										color: #333;
										margin-top: 30px;
										font-size: 12px;
										line-height: 12px;
										height: 12px;
									}

									.val {
										float: left;
										color: #F3A54D;
										margin-top: 29px;
										font-size: 14px;
										line-height: 14px;
										height: 14px;

										span {
											font-size: 12px;
											line-height: 12px;
											margin-top: 3px;
											margin-left: 11px;
											margin-right: 9px;
										}
									}
								}
							}
						}
					}

					.navs {
						border-top: 1px solid #f7f8fc;
						color: #fff;
						overflow: hidden;
						width: 216px;
						height: 397px;
						float: left;

						.tit {
							float: left;
							margin-left: 18px;
							font-size: 20px;
							font-weight: bold;
							margin-top: 33px;
							height: 20px;
							line-height: 20px;
						}

						.more {
							float: right;
							font-size: 12px;
							/* font-weight: bold; */
							margin-top: 40px;
							margin-right: 10px;
							height: 12px;
							line-height: 12px;

							a {
								text-decoration: none;
								color: #fff;
							}
						}

						.ul {
							width: 100%;
							overflow: hidden;

							ul {
								list-style: none;
								padding: 0px;
								margin: 0px;

								.on {
									background: #fff;
									color: #333;
								}

								li {
									height: 35px;
									width: 197px;
									float: right;
									line-height: 35px;
									font-size: 14px;
									margin-top: 12px;
									text-align: left;
									padding-left: 22px;
									cursor: pointer;
								}
							}
						}
					}
				}
			}
		}

		.lookingmarket {
			margin-top: 30px;
			padding-top: 20px;
			height: 300px;

			.top {
				width: 1200px;
				margin: auto;
				display: flex;
				justify-content: space-between;

				div {
					display: flex;

					p {
						font-size: 30px;
						color: #000;
					}

					span {
						display: block;
						margin-top: 18px;
						margin-left: 20px;
						;
						font-size: 14px;
					}
				}

				p {
					color: #ccc;

					i {
						color: red;
					}
				}
			}
		}

		.Commoditymarket {
			margin-top: 30px;
			padding-top: 20px;
			min-width: 1200px;
			.top {
				width: 1200px;
				margin: auto;
				display: flex;
				justify-content: space-between;

				div {
					display: flex;

					p {
						font-size: 30px;
						color: #000;
					}

					span {
						display: block;
						margin-top: 18px;
						margin-left: 20px;
						;
						font-size: 14px;
					}
				}

				p {
					color: #F3A54D;

					i {
						color: #F3A54D;
					}
				}
			}
			.center{
					background: #fff;
					width: 1199px;
					border-right: 1px solid #f7f8fc;
					height: 90px;
					margin:0px auto;
					overflow: hidden;
					position:relative;
					border-radius: 5px;
			}
			.title {
			    float: left;
			    width: 236px;
			    height: 90px;
				img {
				    width: 236px;
				    height: 90px;
				}
			}
			.ul {
			    float: left;
			    width: 962px;
			    height: auto;
			    padding-top: 10px;
			    overflow: hidden;
				ul{
					padding:0px;
					list-style: none;
					overflow: hidden;
					height: 70px;
					li{
						float:left;
						overflow: hidden;
						width:306px;
						height:70px;
						line-height:20px;
						font-size:12px;
						color:#666;
						padding-right:13px;
						a{
							width:295px;
							height:70px;
							text-decoration: none;
							display: block;
							overflow: hidden;
							.tit{
								float:left;
								overflow: hidden;
								width:100px;
								height:70px;
								img{
									width:100px;
									height:70px;
								}
							}
						}
						.data{
							float:left;
							overflow: hidden;
							width:190px;
							margin-left:5px;
							.dtit{
								font-size: 14px;
								color:#333;
								overflow: hidden;
								text-overflow:ellipsis;
								white-space: nowrap;
							}
							.ddes{
								margin-top:5px;
								font-size: 12px;
								line-height:20px;
								color:#999;
								height: 40px;
								overflow: hidden;
							}
						}
					}
				}
			}
			.more{
				position:absolute;
				width:50px;
				height: 90px;
				top:0;
				right:0;
				background: #fff;
				display: flex;
				align-items: center;
				a{
					color:#888;
					&:hover{
						color: #F3A54D;
					}
				}
			}

			.list {
				position: relative;
				width: 1200px;
				margin: auto;
				margin-top: 30px;
				display: flex;

				.one {
					border-radius: 5px;
					background-image: url(../../assets/images/sb.png);
					background-repeat: no-repeat;
					.left-card {
						display: block;
						width: 290px;
						height: 200px;
						
						.menu-box2 {
							width: 290px;
							height: 200px;
							padding: 0 25px 25px;

							.menu-titlerow {
								margin: 0;
								color: #fff;
								font-size: 24px;
								font-weight: bold;
								display: block;
								height: 62px;
								line-height: 100px;
							}

							span {
								color: rgba(233, 233, 233, .6);
								font-size: 14px;
								line-height: 40px;
								display: inline-block;
							}

							div a {
								position: relative;
								display: inline-block;
								width: 32%;
								height: 10px;
								margin: 8px 0;
								color: rgba(255, 255, 255, .8);
								font-size: 13px;
								line-height: 8px;
								text-align: center;
							}
						}
					}
				}

				.xuan {
					position: absolute;
					top: 0;
					left: 292px;
				
					.xuanone {
						cursor: pointer;
						width: 212px;
						display: inline-block;
						box-sizing: border-box;
						padding: 12px 4px;
						margin:5px 5px 5px 10px;
						height: 291px;
						border: 1px solid #fff;
						// border-left: none;
						// border-bottom: none;
						background-color: #fff;
						box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);
						transition: 0.3s;
						border-radius: 5px;
						text-align: center;
						&:hover{
							border: 1px solid #9176F8;
							box-shadow: 0 15px 15px 0 rgba(145,118,248,0.2);
							transition: 0.3s;
						}
						div{
							cursor: pointer;
							height:150px;
							width: 204px;
							display: flex;
							align-items: center;
							img {
								max-width: 190px;
								max-height: 150px;
								margin: auto;
							}
						}
					
						p {
							cursor: pointer;
							text-align: center;
							margin-top: 20px;
						}

						.xuanshiyong {
							cursor: pointer;
							font-size: 12px;
							margin-top: 10px;
							color: red;
							overflow: hidden;
							text-overflow: ellipsis;
							white-space: nowrap;
						}

						.xuanprice {
							cursor: pointer;
							font-weight: 600;
							color: red;

							span {
								cursor: pointer;
								font-weight: normal;
								font-size: 12px;
							}
						}
					}
				}
			}
		}

		.agentmarket {
			margin-top: 30px;
			padding-top: 20px;
			background-color: #fff;

			.top {
				width: 1200px;
				margin: auto;
				display: flex;
				justify-content: space-between;

				div {
					display: flex;

					p {
						font-size: 30px;
						color: #000;
					}

					span {
						display: block;
						margin-top: 18px;
						margin-left: 20px;
						;
						font-size: 14px;
					}
				}

				p {
					color: #ccc;

					i {
						color: red;
					}
				}
			}

			.bottom {
				width: 1200px;
				margin: auto;
				margin-top: 40px;

				.one,
				.two {
					div {
						display: flex;
						justify-content: space-between;
						margin-top: 20px;
					}

					.lll {
						img {
							width: 578px;
							height: 88px;
						}
					}
				}
			}
		}

		.newscenter {
			padding-top: 40px;
			background-color: #fff;

			.top {
				width: 1200px;
				margin: auto;
				display: flex;
				justify-content: space-between;

				div {
					display: flex;

					p {
						font-size: 30px;
						color: #000;
					}

					span {
						display: block;
						margin-top: 18px;
						margin-left: 20px;
						;
						font-size: 14px;
					}
				}

				p {
					color: #ccc;

					i {
						color: red;
					}
				}
			}

			.navlink {
				width: 1200px;
				margin: auto;
				margin-top: 40px;
				box-sizing: border-box;
				padding: 0 300px;
				border-bottom: 1px solid #ccc;
				display: flex;
				justify-content: space-between;

				div {
					cursor: pointer;
					position: relative;
					width: 150px;
					text-align: center;
					padding-bottom: 16px;
				}

				.redbottom {
					border-bottom: 2px solid red;
					color: red;

					&:after {
						content: "";
						position: absolute;
						top: 42px;
						left: 64px;
						border: 10px solid red;
						border-bottom: none;
						border-left-color: transparent;
						border-right-color: transparent;
					}
				}
			}

			.shownews {
				height: 376px;
				width: 1200px;
				margin: auto;
				margin-top: 40px;
				cursor: pointer;

				.shownewsson {
					display: flex;
					justify-content: space-between;

					.newsleft {
						margin-right: 50px;

						img {
							width: 300px;
							height: 200px;
						}

						.title {
							margin: 20px 0;
							overflow: hidden;
							text-overflow: ellipsis;
							white-space: nowrap;

							&:hover {
								color: red;
							}
						}

						.content {
							color: #999;
							font-size: 14px;
							line-height: 26px;
						}
					}

					.newsright {
						display: flex;
						flex-wrap: wrap;
						justify-content: space-between;

						.newsrightson {
							display: flex;
							justify-content: space-between;
							width: 400px;
							height: 90px;
							margin-bottom: 10px;
							border: 1px solid #ccc;
							box-sizing: border-box;
							padding: 10px;

							&:hover {
								border: 2px solid red;

								.newsrightTwo {
									.righttitle {
										color: red;
									}
								}

								.newsrightOne {
									background-color: red;
								}
							}

							.newsrightOne {
								width: 65px;
								height: 65px;
								background-color: #969393;
								margin-right: 10px;

								span,
								p {
									display: block;
									text-align: center;
									font-weight: 900;
									font-size: 18px;
									color: #fff;
									margin-top: 8px;
								}

								p {
									font-size: 14px;
									font-weight: normal;
								}
							}

							.newsrightTwo {
								flex: 1;

								p {
									font-size: 12px;
								}

								.rightone {
									margin-top: 10px;
									color: #999;
								}
							}
						}
					}
				}
			}
		}
	}
</style>
