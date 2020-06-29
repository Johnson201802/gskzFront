<template>
    <div class="mySwiper">
        <!-- swiper start -->
        <swiper class="swiper" :options="swiperOption">
            <swiper-slide class="swiper-slide" v-for="(item,index) in carouselArr" :key="index">
                <router-link v-if="item.is_newtab == 1" target="_blank" :to="item.url">
                    <img :src="item.image_url"/>
                </router-link>

                <router-link v-else :to="item.url">
                    <img :src="item.image_url"/>
                </router-link>
            </swiper-slide>
            <!-- 分页器 -->
            <div class="swiper-pagination"  slot="pagination"></div>   
        </swiper>
        <!-- swiper end -->

        <!-- allList start -->
        <div class="allcenter">
            <div class="botton">
                <router-link 
                class="left" 
                :to=item.path
                tag="div"
                v-for="(item,index) in all" 
                :key="index"
                :class="{'one' : index == 0,'two' : index == 1,'three' : index == 2,'four' : index == 3}" 
                >
                    <div class="header">
                        <img :src="item.logoUrl" alt="">
                        <p>{{item.title}}</p>
                        <i class="iconfont icon-youjiantou"></i>
                    </div>
                    <ul>
                        <li v-for="(item,index) in item.list" :key="index">{{item}}</li>
                    </ul>
                </router-link>
            </div>
            <div class="right">
                <img src="../../assets/images/video_text.png" alt="">
                <div class="zhuce">
                    <router-link to="/Login" v-if="!$store.state.islogin" tap="p">请登录</router-link>
                    <router-link class="tran" v-if="!$store.state.islogin" to="/Egistered" tap="p">免费注册</router-link>
                    <router-link to="/PersonalCenter" v-if="$store.state.islogin" tap="p">个人中心</router-link>
                    <p class="tran" @click="out()" v-if="$store.state.islogin">退出</p>
                </div>
                <div class="authorization">
                    <div>
                        <img src="../../assets/images/heMingIcon.png" alt="">
                        <p>公司核名</p>
                    </div>
                    <div>
                        <img src="../../assets/images/TianMao.png" alt="">
                        <p>天猫入驻</p>
                    </div>
                    <div>
                        <img src="../../assets/images/ShouQuan.png" alt="">
                        <p>商标授权</p>
                    </div>
                </div>
                <div class="rnews">
                    <div><span>公告</span>NEWS</div>
                    <P>发帖置顶与刷新</P>
                    <P>发帖置顶与刷新</P>
                    <P>发帖置顶与刷新</P>
                </div>
            </div>
        </div>
        <div class="swiperBottomList">
            <router-link to="/Transfer">
                <img src="../../assets/images/1.png" alt="">
            </router-link>
            <img src="../../assets/images/2.png" alt="">
            <img src="../../assets/images/3.png" alt="">
            <img src="../../assets/images/4.png" alt="">
            <img src="../../assets/images/5.png" alt="">
        </div>
        <!-- allList end -->

        <!-- Trading market start -->
        <div class="tradingmarket">
            <div class="top">
                <div>
                    <p>公司转让交易市场</p>
                    <span>海量公司转让信息，拒绝虚假交易</span>
                </div>
                <router-link to="/Transfer" tag="p">查看更多 <i class="iconfont icon-rightarrow"></i></router-link>
            </div>
            <div class="list">
                <div class="one">
                    <img @mouseenter="changelist(0)" v-show="!trading[0]" src="../../assets/images/tuijian.png" alt="">
                    <img @mouseenter="changelist(0)" v-show="trading[0]" src="../../assets/images/tuijianh.png" alt="">
                    <img @mouseenter="changelist(1)" v-show="!trading[1]" src="../../assets/images/new.png" alt="">
                    <img @mouseenter="changelist(1)" v-show="trading[1]" src="../../assets/images/newh.png" alt="">
                    <img @mouseenter="changelist(2)" v-show="!trading[2]" src="../../assets/images/tejia.png" alt="">
                    <img @mouseenter="changelist(2)" v-show="trading[2]" src="../../assets/images/tejiah.png" alt="">
                </div>
                <div class="xuan">
                    <div class="xuanone" v-for="(item,index) in companyList" :key="index">
                        <div class="xuantop">
                            <img v-if="item.service_type == '空壳公司'" src="../../assets/images/kong.png" alt="">
                            <img v-if="item.service_type == '实体公司'" src="../../assets/images/shiti.png" alt="">
                            <router-link exact tag="p" :to='{path:"/Detailstransfer",query:{id:item.service_id}}'>【转让编号:{{item.service_id}}】{{item.service_p_name}}</router-link>
                        </div>
                        <div class="xuanmain">
                            <p>成立时间: {{item.fund_date}}</p>
                            <p>注册规模: {{item.registered_capital}}万人民币</p>
                            <p>所在地区: {{item.service_province}}{{item.service_city}}</p>
                            <p>纳税类型: {{item.tax_type}}</p>
                        </div>
                        <div class="xuanbottom">
                            <p>发布时间: {{item.create_time}}</p>
                            <p>价格:<span>{{item.service_price}}</span></p>
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
                    <img @mouseenter="changecommodity(0)" v-show="!commodity[0]" src="../../assets/images/jinp.png" alt="">
                    <img @mouseenter="changecommodity(0)" v-show="commodity[0]" src="../../assets/images/jinph.png" alt="">
                    <img @mouseenter="changecommodity(1)" v-show="!commodity[1]" src="../../assets/images/zuix.png" alt="">
                    <img @mouseenter="changecommodity(1)" v-show="commodity[1]" src="../../assets/images/zuixh.png" alt="">
                    <img @mouseenter="changecommodity(2)" v-show="!commodity[2]" src="../../assets/images/zhuanq.png" alt="">
                    <img @mouseenter="changecommodity(2)" v-show="commodity[2]" src="../../assets/images/zhuanqh.png" alt="">
                </div>
                <div class="xuan">
                    <div class="xuanone" v-for="(item,index) in jpyxListone" :key="index">
                        <img :src="item.url" alt="">
                        <p class="xuantitle">{{item.title}}</p>
                        <p class="xuanshiyong">适用项目:{{item.shiyong}}</p>
                        <p class="xuanprice"><span>￥:</span>  {{item.price}}</p>
                    </div>
                </div>
            </div>
        </div>
        <!-- Commodity market end -->

         <!-- agent market start -->
        <div class="agentmarket">
            <div class="top">
                <div>
                    <p>一站式代办服务平台</p>
                    <span>为您臻选优质的企业服务!</span>
                </div>
                <p>查看更多 <i class="iconfont icon-rightarrow"></i></p>
            </div>
            <div class="bottom">
                <div class="one">
                    <div>
                        <img src="../../assets/images/daiban1.png" alt="">
                        <img src="../../assets/images/daiban2.png" alt="">
                    </div>
                    <div class="lll">
                        <img src="../../assets/images/lanmu1.png" alt="">
                        <img src="../../assets/images/lanmu2.png" alt="">
                    </div>
                </div>
                <div class="two">
                    <div>
                        <img src="../../assets/images/daiban3.png" alt="">
                        <img src="../../assets/images/daiban4.png" alt="">
                    </div>
                    <div class="lll">
                        <img src="../../assets/images/lanmu3.png" alt="">
                        <img src="../../assets/images/lanmu4.png" alt="">
                    </div>
                </div>
            </div>
        </div>
        <!-- agent market end -->

        <!-- news center start -->
        <div class="newscenter">
            <div class="top">
                <div>
                    <p>新闻中心</p>
                    <span>最新的行业资讯动态!</span>
                </div>
                <p>查看更多 <i class="iconfont icon-rightarrow"></i></p>
            </div>
            <div class="navlink">
                <div 
                    v-for="(item,index) in nllist" :key="index" 
                    :class="{'redbottom':nlnumber == index }"
                    @mouseenter="changenlnumber(index)"
                >{{item}}</div>
            </div>
            <div class="shownews">
                <div class="shownewsson" v-for="(item,index) in nlblist" :key="index" v-show="index == nlnumber">
                    <div class="newsleft">
                        <img :src="item.title.url" alt="">
                        <div class="title">{{item.title.title}}</div>
                        <div class="content">{{item.title.content}}</div>
                    </div>
                    <div class="newsright">
                        <div class="newsrightson"  v-for="(item,index) in item.list" :key="index">
                            <div class="newsrightOne">
                                <span>{{item.day}}</span>
                                <p>{{item.month}}</p>
                            </div>
                            <div class="newsrightTwo">
                                <p class="righttitle">{{item.title}}</p>
                                <p class="rightone">{{item.content}}</p>
                            </div>
                        </div>
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
 export default {
        data(){
            return {
                swiperOption:{
                    //显示分页
                    pagination: {
                      el: '.swiper-pagination'
                    },
                    effect:"fade",
                    //自动轮播
                    autoplay: {
                      delay: 5000,
                      //当用户滑动图片后继续自动轮播
                      disableOnInteraction: false,
                    },
                    //开启循环模式
                    loop: true
                },
                carouselArr:[],//轮播
                all:[
                    {
                        logoUrl:"https://www.yizhuanweb.com/assets/img/newImg/GsZrRed.png",
                        title:"公司转让",
                        path:"/Transfer",
                        list:["金融投资","广告传媒","家居建材","咨询服务","食品农业","会务展览"]
                    },
                    {
                        logoUrl:"https://www.yizhuanweb.com/assets/img/newImg/QgRed.png",
                        title:"热门求购",
                        path:"",
                        list:["商贸贸易","科技信息","化工原料","颜料油漆","网络资质","科技资质"]
                    },
                    {
                        logoUrl:"https://www.yizhuanweb.com/assets/img/newImg/DbRed.png",
                        title:"身边服务",
                        path:"",
                        list:["财务咨询","工商注册","代理记账","知识产权","资质许可","其他服务"]
                    },
                    {
                        logoUrl:"https://www.yizhuanweb.com/assets/img/newImg/ZrRed.png",
                        title:"商标转让",
                        path:"",
                        list:["日货用品","燃料油脂","医药用品","金属材料","机械设备","手工器械"]
                    }
                ],//轮播左边列表
                trading:[true,false,false],
                commodity:[true,false,false],
                companyList:[],
                jpyxListone:[
                    {
                        url:"http://tmpic.tmkoo.com/c6529ac311016a89",
                        title:"11类 - 图形",
                        shiyong:"玻璃钢冷却塔 冷却设备和装置 气体净化装置 焚化炉 供水设备 污水处理设备 水过滤器 水净化装置 水软化器 水消毒器",
                        price:"6000.00"
                    },
                    {
                        url:"http://tmpic.tmkoo.com/c6529ac311016a89",
                        title:"11类 - 图形",
                        shiyong:"玻璃钢冷却塔 冷却设备和装置 气体净化装置 焚化炉 供水设备 污水处理设备 水过滤器 水净化装置 水软化器 水消毒器",
                        price:"6000.00"
                    },
                    {
                        url:"http://tmpic.tmkoo.com/c6529ac311016a89",
                        title:"11类 - 图形",
                        shiyong:"玻璃钢冷却塔 冷却设备和装置 气体净化装置 焚化炉 供水设备 污水处理设备 水过滤器 水净化装置 水软化器 水消毒器",
                        price:"6000.00"
                    },
                    {
                        url:"http://tmpic.tmkoo.com/c6529ac311016a89",
                        title:"11类 - 图形",
                        shiyong:"玻璃钢冷却塔 冷却设备和装置 气体净化装置 焚化炉 供水设备 污水处理设备 水过滤器 水净化装置 水软化器 水消毒器",
                        price:"6000.00"
                    },
                    {
                        url:"http://tmpic.tmkoo.com/c6529ac311016a89",
                        title:"11类 - 图形",
                        shiyong:"玻璃钢冷却塔 冷却设备和装置 气体净化装置 焚化炉 供水设备 污水处理设备 水过滤器 水净化装置 水软化器 水消毒器",
                        price:"6000.00"
                    },
                    {
                        url:"http://tmpic.tmkoo.com/c6529ac311016a89",
                        title:"11类 - 图形",
                        shiyong:"玻璃钢冷却塔 冷却设备和装置 气体净化装置 焚化炉 供水设备 污水处理设备 水过滤器 水净化装置 水软化器 水消毒器",
                        price:"6000.00"
                    },
                    {
                        url:"http://tmpic.tmkoo.com/c6529ac311016a89",
                        title:"11类 - 图形",
                        shiyong:"玻璃钢冷却塔 冷却设备和装置 气体净化装置 焚化炉 供水设备 污水处理设备 水过滤器 水净化装置 水软化器 水消毒器",
                        price:"6000.00"
                    },
                    {
                        url:"http://tmpic.tmkoo.com/c6529ac311016a89",
                        title:"11类 - 图形",
                        shiyong:"玻璃钢冷却塔 冷却设备和装置 气体净化装置 焚化炉 供水设备 污水处理设备 水过滤器 水净化装置 水软化器 水消毒器",
                        price:"6000.00"
                    },
                ],
                zxfbListone:[
                    {
                        url:"http://tmpic.tmkoo.com/c6529ac311016a89",
                        title:"11类 - 图形",
                        shiyong:"玻璃钢冷却塔 冷却设备和装置 气体净化装置 焚化炉 供水设备 污水处理设备 水过滤器 水净化装置 水软化器 水消毒器",
                        price:"6000.00"
                    },
                    {
                        url:"http://tmpic.tmkoo.com/c6529ac311016a89",
                        title:"11类 - 图形",
                        shiyong:"玻璃钢冷却塔 冷却设备和装置 气体净化装置 焚化炉 供水设备 污水处理设备 水过滤器 水净化装置 水软化器 水消毒器",
                        price:"6000.00"
                    },
                    {
                        url:"http://tmpic.tmkoo.com/c6529ac311016a89",
                        title:"11类 - 图形",
                        shiyong:"玻璃钢冷却塔 冷却设备和装置 气体净化装置 焚化炉 供水设备 污水处理设备 水过滤器 水净化装置 水软化器 水消毒器",
                        price:"6000.00"
                    },
                    {
                        url:"http://tmpic.tmkoo.com/c6529ac311016a89",
                        title:"11类 - 图形",
                        shiyong:"玻璃钢冷却塔 冷却设备和装置 气体净化装置 焚化炉 供水设备 污水处理设备 水过滤器 水净化装置 水软化器 水消毒器",
                        price:"6000.00"
                    },
                    {
                        url:"http://tmpic.tmkoo.com/c6529ac311016a89",
                        title:"11类 - 图形",
                        shiyong:"玻璃钢冷却塔 冷却设备和装置 气体净化装置 焚化炉 供水设备 污水处理设备 水过滤器 水净化装置 水软化器 水消毒器",
                        price:"6000.00"
                    },
                    {
                        url:"http://tmpic.tmkoo.com/c6529ac311016a89",
                        title:"11类 - 图形",
                        shiyong:"玻璃钢冷却塔 冷却设备和装置 气体净化装置 焚化炉 供水设备 污水处理设备 水过滤器 水净化装置 水软化器 水消毒器",
                        price:"6000.00"
                    },
                    {
                        url:"http://tmpic.tmkoo.com/c6529ac311016a89",
                        title:"11类 - 图形",
                        shiyong:"玻璃钢冷却塔 冷却设备和装置 气体净化装置 焚化炉 供水设备 污水处理设备 水过滤器 水净化装置 水软化器 水消毒器",
                        price:"6000.00"
                    },
                    {
                        url:"http://tmpic.tmkoo.com/c6529ac311016a89",
                        title:"11类 - 图形",
                        shiyong:"玻璃钢冷却塔 冷却设备和装置 气体净化装置 焚化炉 供水设备 污水处理设备 水过滤器 水净化装置 水软化器 水消毒器",
                        price:"6000.00"
                    },
                ],
                tjzqListone:[
                    {
                        url:"http://tmpic.tmkoo.com/c6529ac311016a89",
                        title:"11类 - 图形",
                        shiyong:"玻璃钢冷却塔 冷却设备和装置 气体净化装置 焚化炉 供水设备 污水处理设备 水过滤器 水净化装置 水软化器 水消毒器",
                        price:"6000.00"
                    },
                    {
                        url:"http://tmpic.tmkoo.com/c6529ac311016a89",
                        title:"11类 - 图形",
                        shiyong:"玻璃钢冷却塔 冷却设备和装置 气体净化装置 焚化炉 供水设备 污水处理设备 水过滤器 水净化装置 水软化器 水消毒器",
                        price:"6000.00"
                    },
                    {
                        url:"http://tmpic.tmkoo.com/c6529ac311016a89",
                        title:"11类 - 图形",
                        shiyong:"玻璃钢冷却塔 冷却设备和装置 气体净化装置 焚化炉 供水设备 污水处理设备 水过滤器 水净化装置 水软化器 水消毒器",
                        price:"6000.00"
                    },
                    {
                        url:"http://tmpic.tmkoo.com/c6529ac311016a89",
                        title:"11类 - 图形",
                        shiyong:"玻璃钢冷却塔 冷却设备和装置 气体净化装置 焚化炉 供水设备 污水处理设备 水过滤器 水净化装置 水软化器 水消毒器",
                        price:"6000.00"
                    },
                    {
                        url:"http://tmpic.tmkoo.com/c6529ac311016a89",
                        title:"11类 - 图形",
                        shiyong:"玻璃钢冷却塔 冷却设备和装置 气体净化装置 焚化炉 供水设备 污水处理设备 水过滤器 水净化装置 水软化器 水消毒器",
                        price:"6000.00"
                    },
                    {
                        url:"http://tmpic.tmkoo.com/c6529ac311016a89",
                        title:"11类 - 图形",
                        shiyong:"玻璃钢冷却塔 冷却设备和装置 气体净化装置 焚化炉 供水设备 污水处理设备 水过滤器 水净化装置 水软化器 水消毒器",
                        price:"6000.00"
                    },
                    {
                        url:"http://tmpic.tmkoo.com/c6529ac311016a89",
                        title:"11类 - 图形",
                        shiyong:"玻璃钢冷却塔 冷却设备和装置 气体净化装置 焚化炉 供水设备 污水处理设备 水过滤器 水净化装置 水软化器 水消毒器",
                        price:"6000.00"
                    },
                    {
                        url:"http://tmpic.tmkoo.com/c6529ac311016a89",
                        title:"11类 - 图形",
                        shiyong:"玻璃钢冷却塔 冷却设备和装置 气体净化装置 焚化炉 供水设备 污水处理设备 水过滤器 水净化装置 水软化器 水消毒器",
                        price:"6000.00"
                    },
                ],
                nlnumber:0,
                nllist:["公司转让","易转问答","政策法规","行业资讯"],
                nlblist:[
                    {
                        title:{
                            url:"https://www.yizhuanweb.com/uploads/20190513/f1675e02943374940817f83ded5de788.jpg",
                            title:"公司转让合同的重要性",
                            content:"公司转让过程中，转让合同非常重要，作为契约保障，那么转让合同有哪些重要性呢?专注打造公司转让平台易转网带来以下内容介绍：...",
                        },
                        list:[
                            {
                                day:"25",
                                month:"2020-05",
                                title:"专利侵权类型有哪些?如何区分?...",
                                content:"专利权是保护人智力劳动成果的法律，专利侵权是指他人未经专利权人许可，以生产经营为目的，实施了依法..."
                            },
                            {
                                day:"25",
                                month:"2020-05",
                                title:"专利侵权类型有哪些?如何区分?...",
                                content:"专利权是保护人智力劳动成果的法律，专利侵权是指他人未经专利权人许可，以生产经营为目的，实施了依法..."
                            },
                            {
                                day:"25",
                                month:"2020-05",
                                title:"专利侵权类型有哪些?如何区分?...",
                                content:"专利权是保护人智力劳动成果的法律，专利侵权是指他人未经专利权人许可，以生产经营为目的，实施了依法..."
                            },
                            {
                                day:"25",
                                month:"2020-05",
                                title:"专利侵权类型有哪些?如何区分?...",
                                content:"专利权是保护人智力劳动成果的法律，专利侵权是指他人未经专利权人许可，以生产经营为目的，实施了依法..."
                            },
                            {
                                day:"25",
                                month:"2020-05",
                                title:"专利侵权类型有哪些?如何区分?...",
                                content:"专利权是保护人智力劳动成果的法律，专利侵权是指他人未经专利权人许可，以生产经营为目的，实施了依法..."
                            },
                            {
                                day:"25",
                                month:"2020-05",
                                title:"专利侵权类型有哪些?如何区分?...",
                                content:"专利权是保护人智力劳动成果的法律，专利侵权是指他人未经专利权人许可，以生产经营为目的，实施了依法..."
                            },
                            {
                                day:"25",
                                month:"2020-05",
                                title:"专利侵权类型有哪些?如何区分?...",
                                content:"专利权是保护人智力劳动成果的法律，专利侵权是指他人未经专利权人许可，以生产经营为目的，实施了依法..."
                            },
                            {
                                day:"25",
                                month:"2020-05",
                                title:"专利侵权类型有哪些?如何区分?...",
                                content:"专利权是保护人智力劳动成果的法律，专利侵权是指他人未经专利权人许可，以生产经营为目的，实施了依法..."
                            },
                        ]
                    },
                    {
                        title:{
                            url:"https://www.yizhuanweb.com/uploads/20190513/f1675e02943374940817f83ded5de788.jpg",
                            title:"公司转让合同的重要性",
                            content:"公司转让过程中，转让合同非常重要，作为契约保障，那么转让合同有哪些重要性呢?专注打造公司转让平台易转网带来以下内容介绍：...",
                        },
                        list:[
                            {
                                day:"25",
                                month:"2020-05",
                                title:"专利侵权类型有哪些?如何区分?...",
                                content:"专利权是保护人智力劳动成果的法律，专利侵权是指他人未经专利权人许可，以生产经营为目的，实施了依法..."
                            },
                            {
                                day:"25",
                                month:"2020-05",
                                title:"专利侵权类型有哪些?如何区分?...",
                                content:"专利权是保护人智力劳动成果的法律，专利侵权是指他人未经专利权人许可，以生产经营为目的，实施了依法..."
                            },
                            {
                                day:"25",
                                month:"2020-05",
                                title:"专利侵权类型有哪些?如何区分?...",
                                content:"专利权是保护人智力劳动成果的法律，专利侵权是指他人未经专利权人许可，以生产经营为目的，实施了依法..."
                            },
                            {
                                day:"25",
                                month:"2020-05",
                                title:"专利侵权类型有哪些?如何区分?...",
                                content:"专利权是保护人智力劳动成果的法律，专利侵权是指他人未经专利权人许可，以生产经营为目的，实施了依法..."
                            },
                            {
                                day:"25",
                                month:"2020-05",
                                title:"专利侵权类型有哪些?如何区分?...",
                                content:"专利权是保护人智力劳动成果的法律，专利侵权是指他人未经专利权人许可，以生产经营为目的，实施了依法..."
                            },
                            {
                                day:"25",
                                month:"2020-05",
                                title:"专利侵权类型有哪些?如何区分?...",
                                content:"专利权是保护人智力劳动成果的法律，专利侵权是指他人未经专利权人许可，以生产经营为目的，实施了依法..."
                            },
                            {
                                day:"25",
                                month:"2020-05",
                                title:"专利侵权类型有哪些?如何区分?...",
                                content:"专利权是保护人智力劳动成果的法律，专利侵权是指他人未经专利权人许可，以生产经营为目的，实施了依法..."
                            },
                            {
                                day:"25",
                                month:"2020-05",
                                title:"专利侵权类型有哪些?如何区分?...",
                                content:"专利权是保护人智力劳动成果的法律，专利侵权是指他人未经专利权人许可，以生产经营为目的，实施了依法..."
                            },
                        ]
                    },
                    {
                        title:{
                            url:"https://www.yizhuanweb.com/uploads/20190513/f1675e02943374940817f83ded5de788.jpg",
                            title:"公司转让合同的重要性",
                            content:"公司转让过程中，转让合同非常重要，作为契约保障，那么转让合同有哪些重要性呢?专注打造公司转让平台易转网带来以下内容介绍：...",
                        },
                        list:[
                            {
                                day:"25",
                                month:"2020-05",
                                title:"专利侵权类型有哪些?如何区分?...",
                                content:"专利权是保护人智力劳动成果的法律，专利侵权是指他人未经专利权人许可，以生产经营为目的，实施了依法..."
                            },
                            {
                                day:"25",
                                month:"2020-05",
                                title:"专利侵权类型有哪些?如何区分?...",
                                content:"专利权是保护人智力劳动成果的法律，专利侵权是指他人未经专利权人许可，以生产经营为目的，实施了依法..."
                            },
                            {
                                day:"25",
                                month:"2020-05",
                                title:"专利侵权类型有哪些?如何区分?...",
                                content:"专利权是保护人智力劳动成果的法律，专利侵权是指他人未经专利权人许可，以生产经营为目的，实施了依法..."
                            },
                            {
                                day:"25",
                                month:"2020-05",
                                title:"专利侵权类型有哪些?如何区分?...",
                                content:"专利权是保护人智力劳动成果的法律，专利侵权是指他人未经专利权人许可，以生产经营为目的，实施了依法..."
                            },
                            {
                                day:"25",
                                month:"2020-05",
                                title:"专利侵权类型有哪些?如何区分?...",
                                content:"专利权是保护人智力劳动成果的法律，专利侵权是指他人未经专利权人许可，以生产经营为目的，实施了依法..."
                            },
                            {
                                day:"25",
                                month:"2020-05",
                                title:"专利侵权类型有哪些?如何区分?...",
                                content:"专利权是保护人智力劳动成果的法律，专利侵权是指他人未经专利权人许可，以生产经营为目的，实施了依法..."
                            },
                            {
                                day:"25",
                                month:"2020-05",
                                title:"专利侵权类型有哪些?如何区分?...",
                                content:"专利权是保护人智力劳动成果的法律，专利侵权是指他人未经专利权人许可，以生产经营为目的，实施了依法..."
                            },
                            {
                                day:"25",
                                month:"2020-05",
                                title:"专利侵权类型有哪些?如何区分?...",
                                content:"专利权是保护人智力劳动成果的法律，专利侵权是指他人未经专利权人许可，以生产经营为目的，实施了依法..."
                            },
                        ]
                    },
                    {
                        title:{
                            url:"https://www.yizhuanweb.com/uploads/20190513/f1675e02943374940817f83ded5de788.jpg",
                            title:"公司转让合同的重要性",
                            content:"公司转让过程中，转让合同非常重要，作为契约保障，那么转让合同有哪些重要性呢?专注打造公司转让平台易转网带来以下内容介绍：...",
                        },
                        list:[
                            {
                                day:"25",
                                month:"2020-05",
                                title:"专利侵权类型有哪些?如何区分?...",
                                content:"专利权是保护人智力劳动成果的法律，专利侵权是指他人未经专利权人许可，以生产经营为目的，实施了依法..."
                            },
                            {
                                day:"25",
                                month:"2020-05",
                                title:"专利侵权类型有哪些?如何区分?...",
                                content:"专利权是保护人智力劳动成果的法律，专利侵权是指他人未经专利权人许可，以生产经营为目的，实施了依法..."
                            },
                            {
                                day:"25",
                                month:"2020-05",
                                title:"专利侵权类型有哪些?如何区分?...",
                                content:"专利权是保护人智力劳动成果的法律，专利侵权是指他人未经专利权人许可，以生产经营为目的，实施了依法..."
                            },
                            {
                                day:"25",
                                month:"2020-05",
                                title:"专利侵权类型有哪些?如何区分?...",
                                content:"专利权是保护人智力劳动成果的法律，专利侵权是指他人未经专利权人许可，以生产经营为目的，实施了依法..."
                            },
                            {
                                day:"25",
                                month:"2020-05",
                                title:"专利侵权类型有哪些?如何区分?...",
                                content:"专利权是保护人智力劳动成果的法律，专利侵权是指他人未经专利权人许可，以生产经营为目的，实施了依法..."
                            },
                            {
                                day:"25",
                                month:"2020-05",
                                title:"专利侵权类型有哪些?如何区分?...",
                                content:"专利权是保护人智力劳动成果的法律，专利侵权是指他人未经专利权人许可，以生产经营为目的，实施了依法..."
                            },
                            {
                                day:"25",
                                month:"2020-05",
                                title:"专利侵权类型有哪些?如何区分?...",
                                content:"专利权是保护人智力劳动成果的法律，专利侵权是指他人未经专利权人许可，以生产经营为目的，实施了依法..."
                            },
                            {
                                day:"25",
                                month:"2020-05",
                                title:"专利侵权类型有哪些?如何区分?...",
                                content:"专利权是保护人智力劳动成果的法律，专利侵权是指他人未经专利权人许可，以生产经营为目的，实施了依法..."
                            },
                        ]
                    }
                ]
            }
        },
        created(){
            this.init()
        },
        methods:{
            //初始化页面数据
            init:function(){
                //请求轮播资源
                this.getSwiper()
                //请求公司交易市场数据
                this.getCompany()
            },
            //请求轮播资源
            getSwiper:async function(){
                let carouselArr = await axios("index/index/getCarousel")
                this.carouselArr = carouselArr.data
            },
            //请求公司交易市场数据
            getCompany:async function(type = 1){
                let companyList = await axios('index/index/getTransfer',{type})
                companyList.data.map((item,index)=>{
                    item.fund_date = this.getTime(item.fund_date)
                    item.create_time = this.getTime(item.create_time)
                    item.service_price = item.service_price == "0.00"? "面议" : item.service_price + "万人民币"
                })
                this.companyList = companyList.data
            },
            //把时间戳转换成日期
			getTime:function(timeStamp){
				let time = new Date(parseInt(timeStamp * 1000))
				let Y = time.getFullYear() + '-';
				let M = (time.getMonth() + 1 < 10 ? '0' + (time.getMonth() + 1) : time.getMonth() + 1) + '-';
				let D = time.getDate();
				return time = Y + M + D
			},
            //公司交易市场 切换选项卡
            changelist:function(index){
                //全部重置为false
                this.trading.map((item,index)=>{
                    this.trading[index] = false
                })
                this.trading.splice(index,1,true)
                this.getCompany(index + 1)
            },
            //商标交易市场 切换选项卡
            changecommodity:function(index){
                //全部重置为false
                this.commodity.map((item,index)=>{
                    this.commodity[index] = false
                })
                this.commodity.splice(index,1,true)
            },
            //新闻中心 导航切换
            changenlnumber:function(number){
                this.nlnumber = number
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
    .mySwiper{
        margin-top:80px;
        position: relative;
        background-color: #F2F2F2;
        cursor: progress;
        .swiper{
            height:500px;
            img{
                width:100%;
                height:500px;
            }
            .swiper-pagination{
                top:430px;
                width:300px;
                left: 0;
                right: 0;
                margin:auto;
                --swiper-pagination-color: #FFFFFF;/* 两种都可以 */
                
            }
        }
        .allcenter{
            position: absolute;
            width:1200px;
            height:0;
            font-size: 14px;
            z-index: 999;
            top: 0px;
            left: 0;
            right: 0;
            margin:auto;
            .botton{
                float: left;
                width:230px;
                height:460px;
                box-sizing: border-box;
                padding-top:58px;
                background-image: url(https://www.yizhuanweb.com/assets/img/newImg/leftBottom.png);
                background-position-y: -67px;
                .left{
                    position: relative;
                    height:100px;
                    box-sizing: border-box;
                    padding:10px 20px;
                    margin:auto;
                    .header{
                        width:160px;
                        display: flex;
                        justify-content: space-between;
                        img{
                            width:30px;
                            height:30px;
                            border-radius: 4px;
                        }
                        p{
                            line-height:30px;
                            color:#fff;
                        }
                        i{
                            width:14px;
                            height:14px;
                            line-height:14px;
                            text-align: center;
                            color:#999;
                            border:1px solid #999;
                            font-size: 12px;
                            margin:auto 0;
                            border-radius: 50%;
                        }
                    }
                    ul{
                        display: flex;
                        flex-wrap: wrap;
                        justify-content: space-between;
                        li{
                            line-height:24px;
                            color:#939392;
                        }
                    }
                    .rightList{
                        display: none;
                        position: absolute;
                        left: 230px;
                        top: -57px;
                        width:740px;
                        height:453px;
                        background-color: #fff;
                        box-sizing: border-box;
                        padding:4px 16px;
                        .one{
                            position: relative;
                            display: flex;
                            flex-wrap: wrap;
                            border-bottom: 1px dashed #ccc;
                            padding-bottom: 14px;
                            padding-left:100px;
                            cursor: pointer;
                            .storg{
                                position: absolute;
                                left:0;
                                font-weight: 600;
                                color:#000;
                                border-left:none;
                                &:hover{
                                    color:#000;
                                }
                            }
                            div{
                                width:100px;
                                text-align: center;
                                line-height: 20px;
                                margin-top:14px;
                                border-left:1px solid #D6D6D6;
                                font-size: 14px;
                                color:#666;
                                &:hover{
                                    color:#EA2417;
                                }
                            }
                        }
                        .oneList{
                            border:none;
                            margin-top:10px;
                            padding-left: 0;
                            div{
                                width:120px;
                                text-align: center;
                                line-height: 26px;
                                color:#fff;
                                font-size: 14px;
                                margin-left:10px;
                                margin-top:0;
                                background-color: #3C3C3C;
                                border: none;
                            }
                        }
                    }
                    &:hover{
                        background-color: #fff;
                        border-right:1px solid #eee;
                        p,i,li{
                            color:#000 ; 
                        }
                        .rightList{
                            display: block;
                        }
                    }
                }
                .two{
                    .rightList{
                        top:-157px;
                    }
                }
                .three{
                    .rightList{
                        top:-257px;
                    }
                }
                .four{
                    .rightList{
                        height:457px;
                        top:-357px;
                    }
                }
            }
            .right{
                float: right;
                position: relative;
                margin-top:2px;
                width:232px;
                height:455px;
                background-color: #F4F4F4;
                border-radius: 6px 6px 0 0;
                img{
                    width:212px;
                    margin:10px 0 0 10px;
                }
                .zhuce{
                    position: absolute;
                    width:212px;
                    top: 180px;
                    left: 0;
                    right: 0;
                    margin: auto;
                    display: flex;
                    justify-content: space-around;
                    a,p{
                        width:90px;
                        line-height: 30px;
                        text-align: center;
                        background: #EA2417;
                        border-radius: 6px;;
                        color:#fff;
                    }
                    .tran{
                        background-color: #FCD271;
                    }
                }
                .authorization{
                    display: flex;
                    justify-content: space-between;
                    box-sizing: border-box;
                    padding:10px;
                    div{
                        flex: 1;
                        text-align: center;
                        img{
                            width:30px;
                            height:30px;
                        }
                        p{
                            color:#ff6c00;
                            text-align: center;
                            font-size: 12px;
                        }
                    }
                }
                .rnews{
                    background-color: #fff;
                    box-sizing: border-box;
                    padding:10px;
                    height: 137px;
                    div{
                        font-weight: bold;
                    }
                    div,p{
                        margin-top:4px;
                        font-size: 14px;
                        color:red;
                        span{
                            color:#000;
                        }
                    }
                    p{
                        color:#7d7d7d;
                    }
                }
            }
        }
        .swiperBottomList{
            position: absolute;
            z-index: 999;
            top: 470px;
            left: -4px;
            right: 0;
            width:1200px;
            height:106px;
            display: flex;
            justify-content: space-between;
            margin:auto;
            img{
                width:240px;
                height:106px;
            }
        }
        .tradingmarket{
            margin-top:80px;
            padding-top:20px;
            padding-bottom: 80px;
            background-color: #fff;
            .top{
                width:1200px;
                margin:auto;
                display: flex;
                justify-content: space-between;
                div{
                    display: flex;
                    p{
                        font-size: 30px;
                        color:#000;
                    }
                    span{
                        display: block;
                        margin-top: 18px;
                        margin-left: 20px;;
                        font-size: 14px;
                    }
                }
                p{
                    color:#ccc;
                    i{
                        color:red;
                    }
                }
            }
            .list{
                position: relative;
                width:1200px;
                margin:auto;
                height:598px;
                margin-top:30px;
                display: flex;
                .one{
                    img{
                        display: block;
                        width:290px;
                        height:200px;
                    }
                }
                .xuan{
                    flex:1;
                    border: 1px solid #ccc;
                    border-bottom:none;
                    .xuanone{
                        width:50%;
                        height:200px;
                        display: inline-block;
                        box-sizing: border-box;
                        padding:15px 20px 20px;
                        border:1px solid #ccc;
                        border-right: none;
                        border-top: none;
                        .xuantop{
                            display: flex;
                            img{
                                width:30px;
                                height:30px;
                            }
                            p{
                                margin-left:10px;
                                font-weight: 600;
                                overflow: hidden;
                                text-overflow:ellipsis;
                                white-space: nowrap;
                                &:hover{
                                    color:red;
                                }
                            }
                        }
                        .xuanmain{
                            background-color: #F8F8F8;
                            height:80px;
                            font-size: 14px;
                            color:#564f4f;
                            box-sizing: border-box;
                            padding:15px 10px;
                            margin-top:10px;
                            p{
                                display: inline-block;
                                line-height: 26px;
                                width:50%;
                                overflow: hidden;
                                text-overflow:ellipsis;
                                white-space: nowrap;
                            }
                        }
                        .xuanbottom{
                            height:80px;
                            font-size: 14px;
                            margin-top:10px;
                            p{
                                display: inline-block;
                                line-height: 26px;
                                width:50%;
                                span{
                                    margin-left:6px;
                                    color:#FF0000;
                                    overflow: hidden;
                                    text-overflow:ellipsis;
                                    white-space: nowrap;
                                }
                            }
                        }
                    }
                }
            }
        }
        .lookingmarket{
            margin-top:30px;
            padding-top:20px;
            height:300px;
            .top{
                width:1200px;
                margin:auto;
                display: flex;
                justify-content: space-between;
                div{
                    display: flex;
                    p{
                        font-size: 30px;
                        color:#000;
                    }
                    span{
                        display: block;
                        margin-top: 18px;
                        margin-left: 20px;;
                        font-size: 14px;
                    }
                }
                p{
                    color:#ccc;
                    i{
                        color:red;
                    }
                }
            }
        }
        .Commoditymarket{
            margin-top:30px;
            padding-top:20px;
            .top{
                width:1200px;
                margin:auto;
                display: flex;
                justify-content: space-between;
                div{
                    display: flex;
                    p{
                        font-size: 30px;
                        color:#000;
                    }
                    span{
                        display: block;
                        margin-top: 18px;
                        margin-left: 20px;;
                        font-size: 14px;
                    }
                }
                p{
                    color:#ccc;
                    i{
                        color:red;
                    }
                }
            }
            .list{
                position: relative;
                width:1200px;
                margin:auto;
                height:598px;
                margin-top:30px;
                display: flex;
                .one{
                    img{
                        display: block;
                        width:290px;
                        height:200px;
                    }
                }
                .xuan{
                    position: absolute;
                    top:0;
                    left: 288px;
                    border-bottom: 1px solid #ccc;
                    .xuanone{
                        width:25%;
                        display: inline-block;
                        box-sizing: border-box;
                        padding:15px 20px 20px;
                        border:1px solid #ccc;
                        border-left: none;
                        border-bottom: none;
                        background-color: #fff;
                        img{
                            width:190px;
                            height:150px;
                            margin:auto;
                        }
                        p{
                            text-align: center;
                            margin-top:20px;
                        }
                        .xuanshiyong{
                            font-size: 12px;
                            margin-top:10px;
                            color:red;
                            overflow: hidden;
                            text-overflow:ellipsis;
                            white-space: nowrap;
                        }
                        .xuanprice{
                            font-weight: 600;
                            color:red;
                            span{
                                font-weight: normal;
                                font-size: 12px;
                            }
                        }
                    }
                }
            }
        }
        .agentmarket{
            margin-top:30px;
            padding-top:20px;
            background-color: #fff;
            .top{
                width:1200px;
                margin:auto;
                display: flex;
                justify-content: space-between;
                div{
                    display: flex;
                    p{
                        font-size: 30px;
                        color:#000;
                    }
                    span{
                        display: block;
                        margin-top: 18px;
                        margin-left: 20px;;
                        font-size: 14px;
                    }
                }
                p{
                    color:#ccc;
                    i{
                        color:red;
                    }
                }
            }
            .bottom{
                width:1200px;
                margin:auto;
                margin-top: 40px;
                .one,.two{
                    div{
                        display: flex;
                        justify-content: space-between;
                        margin-top:20px;
                    }
                    .lll{
                        img{
                            width:578px;
                            height:88px;
                        }
                    }
                }
            }
        }
        .newscenter{
            padding-top:40px;
            background-color: #fff;
            .top{
                width:1200px;
                margin:auto;
                display: flex;
                justify-content: space-between;
                div{
                    display: flex;
                    p{
                        font-size: 30px;
                        color:#000;
                    }
                    span{
                        display: block;
                        margin-top: 18px;
                        margin-left: 20px;;
                        font-size: 14px;
                    }
                }
                p{
                    color:#ccc;
                    i{
                        color:red;
                    }
                }
            }
            .navlink{
                width:1200px;
                margin:auto;
                margin-top:40px;
                box-sizing: border-box;
                padding:0 300px;
                border-bottom: 1px solid #ccc;
                display: flex;
                justify-content: space-between;
                div{
                    cursor: pointer;
                    position: relative;
                    width:150px;
                    text-align: center;
                    padding-bottom: 16px;
                }
                .redbottom{
                    border-bottom: 2px solid red;
                    color:red;
                    &:after{
                        content:"";
                        position: absolute;
                        top:42px;
                        left:64px;
                        border:10px solid red;
                        border-bottom: none;
                        border-left-color: transparent;
                        border-right-color: transparent;
                    }
                }
            }
            .shownews{
                height:376px;
                width:1200px;
                margin:auto;
                margin-top:40px;
                cursor: pointer;
                .shownewsson{
                    display: flex;
                    justify-content: space-between;
                    .newsleft{
                        margin-right:50px;
                        img{
                            width:300px;
                            height:200px;
                        }
                        .title{
                            margin:20px 0;
                            overflow: hidden;
                            text-overflow:ellipsis;
                            white-space: nowrap;
                            &:hover{
                                color:red;
                            }
                        }
                        .content{
                            color:#999;
                            font-size: 14px;
                            line-height:26px;
                        }
                    }
                    .newsright{
                        display: flex;
                        flex-wrap: wrap;
                        justify-content: space-between;
                        .newsrightson{
                            display: flex;
                            justify-content: space-between;
                            width:400px;
                            height:90px;
                            margin-bottom: 10px;
                            border:1px solid #ccc;
                            box-sizing: border-box;
                            padding:10px;
                            &:hover{
                                border:2px solid red;
                                .newsrightTwo{
                                    .righttitle{
                                        color:red;
                                    }
                                }
                                .newsrightOne{
                                    background-color: red;
                                }
                            }
                            .newsrightOne{
                                width:65px;
                                height:65px;
                                background-color: #969393;
                                margin-right:10px;
                                span,p{
                                    display: block;
                                    text-align: center;
                                    font-weight: 900;
                                    font-size: 18px;
                                    color:#fff;
                                    margin-top:8px;
                                }
                                p{
                                    font-size: 14px;
                                    font-weight: normal;
                                }
                            }
                            .newsrightTwo{
                                flex:1;
                                p{
                                    font-size:12px;
                                }
                                .rightone{
                                    margin-top:10px;
                                    color:#999;
                                }
                            }
                        }
                    }
                }
            }
        }
    }
</style>
