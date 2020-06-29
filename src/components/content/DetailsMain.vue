<template>
    <div class="DetailsMain">
        <!-- nav start -->
        <div class="nav">
            <div class="one">
                <i class="iconfont icon-liebiao"></i>
                <p> 当前位置 ：</p>
                <router-link to="/" tag="p" class="zhuan">易转网首页 ></router-link>
                <router-link to="/Transfer" tag="p" class="zhuan">公司转让列表 ></router-link>
                <p>{{companyinformation.service_name}}</p>
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
                <div class="FF7E00">
                    <i class="iconfont icon-wp-jsb"></i>
                    <p>求购公司</p>
                </div>
                <div class="EA2417">
                    <i class="iconfont icon-wp-jsb"></i>
                    <p>免费发布公司</p>
                </div>
            </div>
        </div>
        <!-- nav end -->

        <!-- screen start -->
        <div class="screen">
            <div class="margin">
                <div class="left">
                    <div class="leftOne">
                        <img v-if="companyinformation.is_check == 1" src="../../assets/images/verificationIMG.png" alt="" class="renzhen">
                        <div class="loo">
                            <img src="../../assets/images/kongke1.png" alt="">
                            <p>公司名称：{{companyinformation.service_name}}</p>
                        </div>
                    </div>
                    <div class="leftTwo">
                        <div>
                            <p>{{companyinformation.company_trade}}</p>
                            <span>企业行业</span>
                        </div>
                        <div>
                            <p>{{companyinformation.fund_date}}</p>
                            <span>成立时间</span>
                        </div>
                        <div>
                            <p>{{companyinformation.tax_type}}</p>
                            <span>纳税类型</span>
                        </div>
                        <div>
                            <p>{{companyinformation.registered_capital}}万人民币</p>
                            <span>注册资本</span>
                        </div>
                        <div>
                            <p>{{companyinformation.bank_account_open}}</p>
                            <span>是否开户</span>
                        </div>
                        <div>
                            <p>{{companyinformation.service_province_code}}</p>
                            <span>所在地区</span>
                        </div>
                    </div>
                    <div class="leftThree">
                        <p class="price">出售价格：<span>￥ {{companyinformation.service_price}}</span></p>
                        <p class="nozhuan">郑重承诺：易转网不赚差价, 信息保真</p>
                        <div>
                            <p>关注易转网</p>
                            <i class="iconfont icon-ico"></i>
                            <div class="guanzhu">
                                <span></span>
                                <img src="https://www.yizhuanweb.com/uploads/20200401/161ab13b7e2e03ae575bf160a77f1251.jpg" alt="">
                            </div>
                        </div>
                    </div>
                    <div class="leftFour">
                        <p>公司转让编号：{{companyinformation.service_id}}</p>
                        <p>交易方式：易转网居间</p>
                        <p>浏览量：{{companyinformation.browse}}次</p>
                        <!-- browse -->
                        <p>发布时间：{{companyinformation.create_time}}</p>
                    </div>
                    <div class="leftFive">
                        <!-- <p>查看公司全称</p> -->
                        <div class="posters">
                            <img src="../../assets/images/weChatIcon.png" alt="">
                            <span>生成海报</span>
                        </div>
                        <div class="postersshow">
                            <span class="spano">海报</span>
                            <span class="spant">扫码生成海报 快速分享</span>
                            <div class="hbimg">
                                <img src="https://www.yizhuanweb.com/qrcode/build?text=https%3A%2F%2Fm.yizhuanweb.com%2Fmobile%2Findex%2Fshow_qrcode%3Ftype%3Dcompany%26id%3D114694&logo=1&logosize=50" alt="">
                            </div>
                        </div>
                        <div class="collection">
                            <i class="iconfont icon-wujiaoxing"></i>
                            <span>收藏</span>
                        </div>
                    </div>
                    <div class="leftSix">
                        <div v-for="(item,index) in showlist" :key="index">
                            <i class="iconfont" :class="(item.icon)"></i>
                            <p>{{item.text}}</p>
                        </div>
                    </div>
                </div>
                <div class="right">
                    <div class="rone">
                        <span></span>
                        <p>发布人</p>
                    </div>
                    <div class="rtwo">
                        <span>{{userinformation.is_certification}}</span>
                        <img :src="userinformation.avater" alt="">
                        <p class="poneo">{{userinformation.user_name}}</p>
                        <p class="dq">所在地: {{userinformation.area}}</p>
                    </div>
                    <div class="rthree">
                        <div class="lianxi">
                            <a target="_blank" id="noRemember" class="qq" :href=userinformation.qq>QQ咨询</a>
                            <p class="wechat">微信咨询</p>
                            <div class="ewm">
                                <p>扫一扫或复制微信号，添加好友咨询~</p>
                                <img class="icon-weixn" :src="userinformation.wechat_qrcode">
                                <p>微信号：{{userinformation.wechat}}</p>
                            </div>
                        </div>
                        <div class="phonenum">
                            <img src="../../assets/images/icon_phone.png" alt="">
                            <!-- <p v-show="!islogin" @click="changeLook()">电话咨询：查看卖家电话</p> -->
                            <!-- <p v-show="islogin">电话咨询：{{companyinformation.contact_num}}</p> -->
                            <p>电话咨询：{{companyinformation.contact_num}}</p>

                        </div>
                        <p class="p">联系我时,请说在易转网看到的,谢谢!</p>
                    </div>
                    <!-- <div class="rfour">
                        <span></span>
                        <p class="p">安全交易顾问</p>
                        <div class="head">
                            <img src="../../assets/images/xiaoyi.png" alt="">
                            <div class="hone">
                                <p class="hsonep">顾问：小易</p>
                                <div class="honedivone">
                                    <div class="div">
                                        <img src="../../assets/images/icon_qq-s.png" alt="">
                                        <p>咨询</p>
                                    </div>
                                    <span class="img1"></span>
                                    <span class="img2"></span>
                                    <div class="phonenumber">电话号码：18321891624</div>
                                    <div class="ewm">
                                        <p>扫一扫，添加好友咨询~</p>
                                        <img class="icon-weixn" src="https://www.yizhuanweb.com/uploads/20200323/fc8b05440e9dc6d162c14a964acb298d.jpg">
                                        <p>微信号：13939054459</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="complaints">
                            <div class="comone">
                                <i class="iconfont icon-unie737"></i>
                                <p>联系平台</p>
                            </div>
                            <div class="comtwo">
                                <i class="iconfont icon-biji"></i>
                                <p>举报投诉</p>
                            </div>
                        </div>
                    </div> -->
                </div>
            </div>
            <div class="basic">
                <div class="left">
                    <div class="ltop">
                        <div v-for="(item,index) in basiclist" :key="index">
                            <i class="iconfont icon-17"></i>
                            <a :href="mao[index]">{{item}}</a>
                        </div>
                    </div>
                    <div class="lmain">
                        <div class="mone div" id="oone">
                            <div class="mson">
                                <i class="iconfont icon-17"></i>
                                <span>基本信息</span>
                            </div>
                            <div class="itm">
                                <span>公司名称：</span><p>{{companyinformation.service_name}}</p>
                            </div>
                            <div class="itm">
                                <span>所属行业：</span><p>{{companyinformation.company_trade}}</p>
                            </div>
                            <div class="itm">
                                <span>注册资本：</span><p>{{companyinformation.registered_capital}}万人民币</p>                             
                            </div>
                            <div class="itm">
                                <span>成立时间：</span><p>{{companyinformation.fund_date}}</p>                             
                            </div>
                            <div class="itm">
                                <span>注册地址：</span><p>{{companyinformation.service_province_code}}</p>
                            </div>
                            <div class="itm">
                                <span>经营范围：</span><p>{{companyinformation.business_scope}}</p>                               
                            </div>
                        </div>
                        <div class="mtwo div" id="otwo">
                            <div class="mson">
                                <i class="iconfont icon-17"></i>
                                <span>资本信息</span>
                            </div>
                            <div class="itm">
                                <span>资质类别：</span><p>{{companyinformation.is_have_intelligence}}</p>
                            </div>
                            <!-- <div class="itm">
                                <span>资质描述: </span><p>{{companyinformation.intelligence}}</p>
                            </div> -->
                            <div class="itm">
                                <span>商标类别：</span><p>{{companyinformation.is_have_trademark}}</p>                        
                            </div>
                            <!-- <div class="itm">
                                <span>商标描述：</span><p>{{companyinformation.intelligence}}</p>       
                            </div> -->
                            <div class="itm">
                                <span>网络资产：</span><p>{{companyinformation.is_have_network_assets}}</p>
                            </div>
                            <!-- <div class="itm">
                                <span>资产描述：</span><p>{{companyinformation.is_have_network_assets}}</p>
                            </div> -->

                        </div>
                        <div class="mthree div" id="othree">
                            <div class="mson">
                                <i class="iconfont icon-17"></i>
                                <span>税务信息</span>
                            </div>
                            <div class="itm">
                                <span>纳税类型：</span><p>{{companyinformation.tax_type}}</p>
                            </div>
                            <div class="itm">
                                <span>报税情况：</span><p>{{companyinformation.tax_status}}</p>
                            </div>
                            <div class="itm">
                                <span>申领发票：</span><p>{{companyinformation.is_get_bill}}</p>
                            </div>
                        </div>
                        <div class="mfour div" id="ofour">
                            <div class="mson">
                                <i class="iconfont icon-17"></i>
                                <span>银行信息</span>
                            </div>
                            <div class="itm">
                                <span>银行账户：</span><p>{{companyinformation.bank_account_open}}</p>
                            </div>
                        </div>
                        <div class="mfive div" id="ofive">
                            <div class="mson">
                                <i class="iconfont icon-17"></i>
                                <span>更多信息</span>
                            </div>
                            <div class="itm">
                               <div v-html="companyinformation.desc_content"></div>
                            </div>
                        </div>
                        <div class="tishi">
                            <span>友情提示：</span>
                            <p>以上信息由卖家自行发布，请先确认对方资质，谨防上当受骗!</p>
                        </div>
                    </div>
                </div>
                <div class="right">
                    <div class="rtop">相关推荐</div>
                    <div class="rmain">
                        <div class="mainson" @click="init(item.service_id)" v-for="(item,index) in tuijian" :key="index">
                            <div class="title">
                                <img v-if="item.company_type == '空壳公司'" src="../../assets/images/kongke1.png" alt="">
                                <img v-if="item.company_type == '实体公司'" class="titleimg" src="../../assets/images/shiti.png" alt="">
                                <p>{{item.service_p_name}}</p>
                            </div>
                            <div class="bfthree">
                                <div>
                                    <span>{{item.company_trade}}</span>
                                    <p>行业类别</p>
                                </div>
                                <div>
                                    <span>{{item.tax_type}}</span>
                                    <p>纳税类型</p>
                                </div>
                                <div>
                                    <span>{{item.fund_date}}</span>
                                    <p>成立时间</p>
                                </div>
                                <div>
                                    <span>{{item.registered_capital}}万人民币</span>
                                    <p>注册资本</p>
                                </div>
                            </div>
                            <div class="foter">
                                <p>{{item.service_price}}</p>
                                <span>{{item.create_time}}</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="query">
                <div class="querysono">
                    <span></span>
                    <p>信息核实查询</p>
                </div>
                <div class="querysont">
                    <div class="querygsono">
                        <img src="../../assets/images/qgqy.jpg" alt="">
                        <a href="http://www.gsxt.gov.cn/index.html" target="blank">企业信用网</a>
                    </div>
                    <div class="querygsont">
                        <p class="kown">买家须知</p>
                        <div>
                            <span>1</span>
                            <p>本平台公提供信息真实可靠，信息均来源全国信用信息公司系统.</p>
                        </div>
                        <div>
                            <span>2</span>
                            <p>审核内容均按照以上信息为准</p>
                        </div>
                        <div>
                            <span>3</span>
                            <p>实际未涉及信息无法考量，如您因其它信息而蒙受损失与本平台无关，请马上联系平台客服人员，进行投诉.</p>
                        </div>
                    </div>
                </div>
            </div>
            <div class="problem">
                <div class="problemson">
                    <span></span>
                    <p>公司转让常见问题</p>
                </div>
                <div class="prson">
                    <ul class="clearfix">
                        <li>
                            <h3><i class="bg-que"></i>转让前公司如有产生的责任由谁承担？</h3>
                            <p><i class="bg-ans"></i>转让前产生的包含欠税款、滞纳金、罚款、黑名单等情况而产生的一切费用，将由原法人、股东承担！</p>
                        </li>
                        <li>
                            <h3><i class="bg-que"></i>转让后公司如有产生的责任由谁承担？</h3>
                            <p><i class="bg-ans"></i>转让后产生的包含欠税款、滞纳金、罚款、黑名单等情况而产生的一切费用，将由新法人、股东承担！</p>
                        </li>
                        <li>
                            <h3><i class="bg-que"></i>公司转让哪些信息可以变更？</h3>
                            <p><i class="bg-ans"></i>按照规定公司可以根据实际经营情况决定变更，如：公司、地址、法人、股东、监事、资本、经营范围、行业、类型等信息变更!</p>
                        </li>
                        <li>
                            <h3><i class="bg-que"></i>易转网公司转让平台是什么性质的平台？</h3>
                            <p><i class="bg-ans"></i>易转网是一家专业的公司转让买卖交易信息服务平台。本平台提供公司买卖的信息发布、展示，交易匹配、代办股转等服务；本平台提供的所有公司买卖信息都真实可靠。专业的交易顾问为您提供一对一服务，为您规避交易涉及的各类风险；</p>
                        </li>
                        <li>
                            <h3><i class="bg-que"></i>如何办理公司股权变更手续？</h3>
                            <p><i class="bg-ans"></i>签订交易协议之前，交易顾问为您协商由哪方负责办理公司的股权变更手续。由于公司股权变更涉及工商、税务、银行等各个环节，现任记账会计对该公司的账目情况掌握的较全面，利于股权手续的办理，原则上建议由该公司财务人员来协助完成股权变更手续。</p>
                        </li>
                        <li>
                            <h3><i class="bg-que"></i>如何规避所转公司的债权债务等情况？</h3>
                            <p><i class="bg-ans"></i>1、去当地人民银行信用中心查询该企业的信用报告；<br>2、对该公司在股权转让之前的资产登报公示，并对公示信息进行留存；<br>3、待转公司法人或股东签署《公司资产状况承诺书》。</p>
                        </li>
                    </ul>
                </div>
            </div>
            <div class="result">
                <div class="wei">
                    <img src="../../assets/images/weizhaodao.png" alt="">
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
                <div class="interested">
                    <!-- <p>您可能感兴趣的公司</p> -->
                    <img class="img" src="../../assets/images/interse.png" alt="">
                    <div class="inlist">
                        <div class="inlistone" @click="init(item.service_id)" v-for="(item,index) in interested" :key="index">
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
                        </div>
                    </div>
                </div>
            </div>
            <div class="agent">
                <div class="agentson">
                    <span></span>
                    <p>代办公司推荐</p>
                </div>
                <div class="son" v-for="(item,index) in agent" :key="index">
                    <img class="img" :src="item.url" alt="">
                    <div class="title">
                        <p class="one">{{item.title}}</p>
                        <p class="two">{{item.content}}</p>
                    </div>
                    <div class="sontwo">
                        <div class="one">
                            <img src="../../assets/images/publisher-tel.jpg" alt="">
                            <p class="color">{{item.number}}</p>
                        </div>
                        <div class="two">
                            <i class="iconfont icon-iconset0392"></i>
                            <p>{{item.address}}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <!-- screen end -->

        <!-- pageLogin start -->
        <!-- <page-Login v-if="login" @isShowLogin='isShowLogin'></page-Login> -->
        <!-- pageLogin end -->
    </div>
</template>

<script>
import axios from '../../api/axios'
export default {
    data(){
        return{
            interested:[],
            tuijian:[],
            companyinformation:{},
            userinformation:{},
            // islogin:false,
            // login:false,
            basiclist:["基本信息","资产信息","税务信息","银行信息","更多信息"],
            showlist:[
                {
                    icon:"icon-V",
                    text:"咨询顾问",
                },
                {
                    icon:"icon-V",
                    text:"签署合同",
                },
                {
                    icon:"icon-baozhengdanbao",
                    text:"担保交易",
                },
                {
                    icon:"icon-tuikuan",
                    text:"极速退款",
                },
                {
                    icon:"icon-iconfontzhizuobiaozhun023109",
                    text:"支持线下",
                },
                {
                    icon:"icon-queren",
                    text:"确认后放款",
                },
            ],
            mao:["#oone","#otwo","#othree","#ofour","#ofive"],
            agent:[
                {
                    url:"https://www.yizhuanweb.com/uploads/20200529/0470c6697031d8f96b3aade4e3eba6fd.jpg",
                    title:"商标，专利，高企，软著，版权，双软",
                    content:"税务疑难处理 税务疑难处理 税务疑难处理 税务疑难处理 税务疑难处理 税务疑难处理 税务疑难处理",
                    number:"136****3859",
                    address:"河南省 郑州市 郑东新区"
                },
                {
                    url:"https://www.yizhuanweb.com/uploads/20200529/0470c6697031d8f96b3aade4e3eba6fd.jpg",
                    title:"商标，专利，高企，软著，版权，双软",
                    content:"税务疑难处理 税务疑难处理 税务疑难处理 税务疑难处理 税务疑难处理 税务疑难处理 税务疑难处理",
                    number:"136****3859",
                    address:"河南省 郑州市 郑东新区"
                },
                {
                    url:"https://www.yizhuanweb.com/uploads/20200529/0470c6697031d8f96b3aade4e3eba6fd.jpg",
                    title:"商标，专利，高企，软著，版权，双软",
                    content:"税务疑难处理 税务疑难处理 税务疑难处理 税务疑难处理 税务疑难处理 税务疑难处理 税务疑难处理",
                    number:"136****3859",
                    address:"河南省 郑州市 郑东新区"
                },
                {
                    url:"https://www.yizhuanweb.com/uploads/20200529/0470c6697031d8f96b3aade4e3eba6fd.jpg",
                    title:"商标，专利，高企，软著，版权，双软",
                    content:"税务疑难处理 税务疑难处理 税务疑难处理 税务疑难处理 税务疑难处理 税务疑难处理 税务疑难处理",
                    number:"136****3859",
                    address:"河南省 郑州市 郑东新区"
                },
                {
                    url:"https://www.yizhuanweb.com/uploads/20200529/0470c6697031d8f96b3aade4e3eba6fd.jpg",
                    title:"商标，专利，高企，软著，版权，双软",
                    content:"税务疑难处理 税务疑难处理 税务疑难处理 税务疑难处理 税务疑难处理 税务疑难处理 税务疑难处理",
                    number:"136****3859",
                    address:"河南省 郑州市 郑东新区"
                },
                {
                    url:"https://www.yizhuanweb.com/uploads/20200529/0470c6697031d8f96b3aade4e3eba6fd.jpg",
                    title:"商标，专利，高企，软著，版权，双软",
                    content:"税务疑难处理 税务疑难处理 税务疑难处理 税务疑难处理 税务疑难处理 税务疑难处理 税务疑难处理",
                    number:"136****3859",
                    address:"河南省 郑州市 郑东新区"
                },
            ],
        }
    },
    created(){
        this.init(this.$route.query.id)
    },
    methods:{
        //初始化页面数据
        init:function(id){
            this.information(id)
            this.recommended()
            this.link()
        },
        //公司详细信息
        information:async function(id){
            let result = await axios('index/index/getGszrDetail',{id})
            result.data.fund_date = this.getTime(result.data.fund_date)
            result.data.create_time = this.getTime(result.data.create_time)
            result.data.is_have_intelligence = result.data.is_have_intelligence == 1? '有' : '无'
            result.data.is_have_trademark = result.data.is_have_trademark == 1? '有' : '无'
            result.data.is_have_network_assets = result.data.is_have_network_assets == 1? '有' : '无'
            result.data.tax_status = result.data.tax_status == 1? '正常' : '未报税'
            result.data.is_get_bill = result.data.is_get_bill == 1? '已申领' : '未申领'
            result.data.bank_account_open = result.data.bank_account_open == 1? '已开户' : '未开户'
            result.data.desc_content = result.data.desc_content == ""? '无' : result.data.desc_content
            result.data.service_price = result.data.service_price == "0.00"? "面议" : result.data.service_price + "万人民币"
            this.companyinformation = result.data

            result.user.is_certification = result.user.is_certification == 1? '已认证' : '未认证'
            result.user.qq = `http://wpa.qq.com/msgrd?v=3&uin=${result.user.qq}&site=qq&menu=yes`
            this.userinformation = result.user
        },
        //相关推荐
        recommended:async function(){
            let result = await axios('index/index/getDetailRight')
            result.data.map((item,index)=>{
                item.fund_date = this.getTime(item.fund_date)
                item.create_time = this.getTime(item.create_time)
                item.service_price = item.service_price == "0.00"? "面议" : item.service_price + "万人民币"
            })
            this.tuijian = result.data
        },
        //猜你喜欢列表数据
        link:async function(){
            let result = await axios('index/index/getRecommandBottom')
            result.data.map((item,index)=>{
                item.fund_date = this.getTime(item.fund_date)
                item.service_price = item.service_price == "0.00"? "面议" : item.service_price + "万人民币"
            })
            this.interested = result.data
        },
        //把时间戳转换成日期
        getTime:function(timeStamp){
            let time = new Date(parseInt(timeStamp * 1000))
            let Y = time.getFullYear() + '-';
            let M = (time.getMonth() + 1 < 10 ? '0' + (time.getMonth() + 1) : time.getMonth() + 1) + '-';
            let D = time.getDate();
            return time = Y + M + D
        },

        //是否显示发布人手机号码
        // changeLook:function(){
        //     this.islogin = this.$store.state.islogin
        //     if(!this.islogin){
        //         this.login = true
        //     }
        // },
        // //消失登录界面
        // isShowLogin:function(){
        //     this.login = false
        // }
    }
}
</script>

<style scoped lang="less">
    .DetailsMain{
        font-size: 14px;
        margin-top:80px;
        p,span{
            overflow: hidden;
            text-overflow:ellipsis;
            white-space: nowrap;
        }
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
                    position:relative;
                    &:hover{
                        .ewm{
                            display: block;
                        }
                    }
                    .ewm{
                        display: none;
                        position: absolute;
                        z-index: 9999;
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
                    width:888px;
                    .leftOne{
                        position: relative;
                        background-color: #fff;
                        padding:30px 20px 40px 20px;
                        .renzhen{
                            position: absolute;
                            top: 0px;
                            right: 38px;
                        }
                        .loo{
                            display: flex;
                            line-height: 30px;
                            img{
                                width:40px;
                                height:40px;
                            }
                            p{
                                font-size: 22px;
                                font-weight: bold;
                                color:#666;
                                margin-top: 6px;
                            }
                        }
                    }
                    .leftTwo{
                        background-color: #fff;
                        display: flex;
                        border-top:1px solid #ccc;
                        height: 80px;
                        div{
                            padding:0 39px;
                            border-left: 1px solid #F2F2F2;
                            p,span{
                                line-height: 24px;
                                text-align: center;
                            }
                            p{
                                margin-top:16px;
                            }
                            span{
                                display: block;
                                color:#b4b4b4;
                                font-size: 14px;
                            }
                        }
                    }
                    .leftThree{
                        display: flex;
                        line-height:100px;
                        height: 100px;
                        background-color: #EAEDEF;
                        padding:0 30px;
                        position: relative;
                        .price{
                            font-weight: bold;
                            color:#626262;
                            span{
                                color: #ea2417;
                                font-size: 30px;
                            }
                        }
                        .nozhuan{
                            color:#6a6a6a;
                            margin-left: 20px;
                        }
                        div{
                            position: absolute;
                            top: 0;
                            right: 0;
                            border-left: 1px solid rgba(217, 222, 237, 0.58);
                            width:250px;
                            height:100px;
                            color:#ccc;
                            text-align: center;
                            p{
                                margin-top:16px;
                                text-align: center;
                                font-size: 12px;
                                line-height: 30px;
                            }
                            i{
                                display: block;
                                margin-top:-30px;
                                font-size: 40px;
                                &:hover + .guanzhu{
                                    display: block;
                                }
                            }
                            .guanzhu{
                                position: absolute;
                                z-index: 100;
                                display: none;
                                top: 100px;
                                left: 55px;
                                border: 1px solid #ff364a;
                                width: 140px;
                                height: 140px;
                                span{
                                    position: absolute;
                                    left: 0;
                                    right: 0;
                                    top: -8px;
                                    margin: 0 auto;
                                    width: 15px;
                                    height: 8px;
                                    background: url(../../assets/images/icon_shang.png) center no-repeat;
                                }
                                img{
                                    max-width: 100%;
                                    border: 0;
                                    outline: none;
                                    vertical-align: middle;
                                }
                            }
                        }
                    }
                    .leftFour{
                        background-color: #fff;
                        line-height: 88px;
                        border:1px solid #ccc;
                        border-right: 1px solid transparent;
                        border-left: 1px solid transparent;
                        display: flex;
                        p{
                            font-size: 12px;
                            color: #999;
                            margin-left: 30px;
                        }
                    }
                    .leftFive{
                        position: relative;
                        height:100px;
                        border-bottom: 1px solid #ccc;
                        display: flex;
                        background-color: #fff;
                        p{
                            width:170px;
                            height:50px;
                            line-height:50px;
                            text-align: center;
                            background-color: #EA2417;
                            color:#fff;
                            border-radius: 4px;
                            margin-top:25px;
                            margin-left:40px;
                            &:hover{
                                box-sizing: border-box;
                                background-color: #fff;
                                color:red;
                                border:1px solid red;
                            }
                        }
                        .posters{
                            width:170px;
                            height:50px;
                            line-height:50px;
                            margin:25px 0 0 50px;
                            border-radius: 4px;
                            text-align: center;
                            color:red;
                            border:1px solid red;
                            &:hover + .postersshow{
                                display: block;
                            }
                            img{
                                width:30px;
                                height:30px;
                                margin:10px 0;
                                margin-right: 10px;
                                vertical-align: -20px;
                            }
                        }
                        .postersshow{
                            display: none;
                            position: absolute;
                            bottom: 114px;
                            // left: 260px;
                            left:48px;
                            width:170px;
                            height:230px;
                            border-radius: 4px;
                            border:1px solid #FF6600;
                            background-color: #fff;
                            .spano{
                                display: block;
                                text-align: center;
                                color:#ff6600;
                                font-size: 16px;
                                margin-top:14px;
                            }
                            .spant{
                                display: block;
                                text-align: center;
                                margin:10px 0;
                                font-size: 12px;
                                color:#555
                            }
                            .hbimg{
                                border:1px dashed #ddd;
                                width:150px;
                                height:150px;
                                margin:10px auto 10px;
                                img{
                                    display: block;
                                    width:124px;
                                    height:124px;
                                    margin:20px auto 10px;
                                }
                            }
                            &:after{
                                content: "";
                                position: absolute;
                                left: 30px;
                                bottom: -7px;
                                display: inline-block;
                                border-width: 1px;
                                border-style: solid;
                                border-color: #ff6600 transparent transparent #ff6600;
                                width: 12px;
                                height: 12px;
                                transform: rotate(225deg);
                                background: #fff;
                            }
                        }
                        .collection{
                            width:80px;
                            height:22px;
                            line-height:22px;
                            border:1px solid #999;
                            border-radius: 12px;
                            margin:38px 0;
                            margin-left: 50px;
                            color:#444;
                            font-size: 12px;
                            text-align: center;
                            i{
                                margin-right: 4px;
                            }
                        }
                    }
                    .leftSix{
                        display:flex;
                        height:70px;
                        background-color: #fff;
                        div{
                            color:#6c6c6c;
                            font-size:12px;
                            display:flex;
                            width:150px;
                            line-height: 70px;
                            justify-content: center;
                            i{
                                margin-right:10px;
                            }
                        }
                    }
                }
                .right{
                    width:300px;
                    box-sizing: border-box;
                    padding:30px;
                    background-color: #fff;
                    .rone{
                        position: relative;
                        span{
                            display: block;
                            height:1px;
                            background-color: #DCDCDC;
                        }
                        p{
                            position: absolute;
                            top: -10px;
                            left: 68px;
                            font-size:18px;
                            width:100px;
                            text-align: center;
                            background-color: #fff;
                        }
                    }
                    .rtwo{
                        position: relative;
                        margin-top:20px;
                        span{
                            position: absolute;
                            top: 10px;
                            right: 0;
                            width:50px;
                            line-height: 18px;
                            height:18px;
                            border-radius: 9px;
                            text-align: center;
                            border:1px solid #EA2417;
                            color:#EA2417;
                            font-size: 12px;
                        }
                        img{
                            width:120px;
                            height:120px;
                            border-radius: 50%;
                            display: block;
                            margin:auto;
                            background: url('../../assets/images/avatar.png');
                        }
                        .poneo{
                            font-size: 16px;
                            text-align: center;
                            font-weight: bold;
                            color:#666;
                        }
                        .dq{
                            text-align: center;
                            font-size: 12px;
                            color:#ccc;
                            margin-top:4px;
                        }
                    }
                    .rthree{
                        margin-top:12px;
                        .lianxi{
                            position: relative;
                            display: flex;
                            justify-content: space-between;
                            p,a{
                                width:115px;
                                height:36px;
                                border-radius: 6px;
                                text-align: center;
                                line-height: 36px;
                                color:#fff;
                            }
                            .qq{
                                display: block;
                                background-color: #1EAADC;
                                &:hover{
                                    background-color: #1694C8;
                                }
                            }
                            .ewm{
                                display: none;
                                position: absolute;
                                top: -280px;
                                left: -14px;
                                z-index: 2;
                                width: 270px;
                                padding: 18px 0 9px;
                                font-size: 14px;
                                color: #999;
                                line-height: 1.2;
                                text-align: center;
                                background: #fff;
                                border-radius: 10px;
                                box-shadow: 0 4px 20px rgba(170, 177, 183, 0.38);
                                    &:after{
                                    content:"";
                                    position: absolute;
                                    bottom: -5px;
                                    right: 88px;
                                    width: 0;
                                    height: 0;
                                    border-right: 5px solid transparent;
                                    border-left: 5px solid transparent;
                                    border-top: 5px solid #fff;
                                }
                                P{
                                    color:#999;
                                    width:100%;
                                    text-align: center;
                                }
                                img{
                                    width: 170px;
                                    height: 170px;
                                    background: url('../../assets/images/wuewm.png');
                                }
                            }
                            .wechat{
                                background-color:#0cc467;
                                &:hover{
                                    background-color: #0DB25E;
                                }
                                &:hover + .ewm{
                                    display: block;
                                }
                            }
                        }
                        .phonenum{
                            display: flex;
                            justify-content: center;
                            width:242px;
                            height:32px;
                            line-height:32px;
                            text-align: center;
                            border:1px solid #ddd;
                            margin-top:10px;
                            border-radius: 10px;
                            font-size: 12px;
                            img{
                                margin-top:8px;
                                margin-right: 6px;
                                width:16px;
                                height:16px;
                            }
                        }
                        .p{
                            font-size: 12px;
                            text-align: center;
                            color:#666;
                            margin-top: 10px;
                        }
                    }
                    .rfour{
                        margin-top:20px;
                        span{
                            height:1px;
                            display: block;
                            background-color: #ddd;
                        }
                        .p{
                            width:150px;
                            line-height: 30px;
                            background-color: #fff;
                            margin:auto;
                            text-align: center;
                            margin-top: -16px;
                            font-size: 18px;
                            color:#666;
                        }
                        .head{
                            display: flex;
                            margin-top:6px;
                            img{
                                width:90px;
                                height:90px;
                            }
                            .hone{
                                .hsonep{
                                    color:#666;
                                    font-size: 16px;
                                    font-weight: bold;
                                    margin-top:10px;
                                }
                                .honedivone{
                                    position: relative;
                                    display: flex;
                                    margin-top:8px;
                                    justify-content: space-between;
                                    .div{
                                        display: flex;
                                        justify-content: center;
                                        width:66px;
                                        height:25px;
                                        line-height:25px;
                                        background-color: #1EAADC;
                                        border-radius: 6px;
                                        font-size: 12px;
                                        color:#fff;
                                        &:hover{
                                            background-color: #1694C8;
                                        }
                                        img{
                                            display: block;
                                            margin:6px 4px 0 0;
                                            width:14px;
                                            height:14px;
                                        }
                                    }
                                    span{
                                        width: 25px;
                                        height:25px;
                                        margin-left: 6px;
                                    }
                                    .img1{
                                        background: url(../../assets/images/icon_contant.png) 0 0 no-repeat;
                                        &:hover ~ .ewm{
                                            display: block;
                                        }
                                    }
                                    .img2{
                                        background: url(../../assets/images/icon_contant.png) 0 0 no-repeat;
                                        background-position: 0 -25px;
                                        &:hover + .phonenumber{
                                            display: block;
                                        }
                                    }
                                    .phonenumber{
                                        display: none;
                                        position: absolute;
                                        top: -52px;
                                        right: -38px;
                                        color: #666;
                                        width: 230px;
                                        height: 43px;
                                        line-height: 43px;
                                        text-align: center;
                                        background: #fff;
                                        border-radius: 10px;
                                        font-size: 12px;
                                        box-shadow: 0 4px 20px rgba(170, 177, 183, 0.38);
                                        &:after{
                                            content:"";
                                            position: absolute;
                                            bottom: -5px;
                                            right: 46px;
                                            width: 0;
                                            height: 0;
                                            border-right: 5px solid transparent;
                                            border-left: 5px solid transparent;
                                            border-top: 5px solid #fff;
                                        }
                                    }
                                    .ewm{
                                        display: none;
                                        position: absolute;
                                        top: -246px;
                                        left: -114px;
                                        z-index: 2;
                                        width: 289px;
                                        padding: 18px 0 9px;
                                        font-size: 14px;
                                        color: #999;
                                        line-height: 1.2;
                                        text-align: center;
                                        background: #fff;
                                        border-radius: 10px;
                                        box-shadow: 0 4px 20px rgba(170, 177, 183, 0.38);
                                         &:after{
                                            content:"";
                                            position: absolute;
                                            bottom: -5px;
                                            right: 88px;
                                            width: 0;
                                            height: 0;
                                            border-right: 5px solid transparent;
                                            border-left: 5px solid transparent;
                                            border-top: 5px solid #fff;
                                        }
                                        img{
                                            width: 169px;
                                            height: 169px;
                                        }
                                    }
                                }
                            }
                        }
                        .complaints{
                            display: flex;
                            justify-content: space-between;
                            div{
                                display: flex;
                                justify-content: center;
                                width:110px;
                                height:30px;
                                line-height: 30px;
                                border-radius: 15px;
                                font-size: 12px;
                                &:hover{
                                    color: #fff;
                                }
                                i{
                                    margin-right: 4px;
                                }
                            }
                            .comone{
                                color: #F49D51;
                                border:1px solid #F49D51;
                                &:hover{
                                    background-color: #F49D51;
                                }
                            }
                            .comtwo{
                                color: #649BE8;
                                border:1px solid #649BE8;
                                &:hover{
                                    background-color: #649BE8;
                                }
                                i{
                                    font-size: 14px;
                                }
                            }
                        }
                    }
                }
            }
            .basic{
                width:1200px;
                margin:auto;
                margin-top:14px;
                background-color: #F2F2F2;
                display: flex;
                .left{
					background-color: #fff;
                    width:888px;
                    .ltop{
                        display: flex;
                        justify-content: space-between;
                        line-height: 66px;
                        border-bottom: 1px solid #ddd;
                        div{
                            display: flex;
                            flex:1;
                            justify-content: center;
                            &:hover{
                                a,i{
                                    color:#FF6701;
                                }
                            }
                            i{
                                margin-right:4px;
                            }
                        }
                    }
                    .lmain{
                        .tishi{
                            display: flex;
                            line-height: 40px;
                            background-color: #E8E8E8;
                            box-sizing: border-box;
                            padding-left: 26px;
                            font-size: 12px;
                            span{
                                color:red;

                            }
                        }
                        .div{
                            font-size: 14px;
                            min-height: 100px;
                            box-sizing: border-box;
                            padding-left: 20px;
                            padding-right: 20px;
                            padding-top:10px;
                            border-bottom: 1px solid #ddd;
                            .itm{
                                display: flex;
                                box-sizing: border-box;
                                span{
                                    width:100px;
                                    display: block;
                                    color:#666;
                                }
                                p{
                                    width:730px;
                                    line-height: 24px;
                                }
                            }
                            .mson{
                                display: flex;
                                i{
                                    margin:3px 8px 0 0;
                                    color:red;
                                }
                                span{
                                    display: block;
                                    color:red;
                                    font-size: 16px;
                                    margin-bottom: 20px;
                                }
                            }
                            p{
                                margin-bottom:20px;
                            }
                            
                        }
                    }
                }
                .right{
                    position: relative;
                    width:260px;
					height:1000px;
                    margin-left:15px;
                    padding:0 20px;
					background-color: #fff;
                    .rtop{
                        line-height: 54px;
                        border-bottom: 1px solid #ddd;
                        text-align: center;
                    }
                    .rmain{
                        .mainson{
                            border-bottom: 10px solid #F8F8F8;
                            .title{
                                height:60px;
                                display: flex;
                                img{
                                    display: block;
                                    margin-right:10px;
                                    width:50px;
                                    height:50px;
                                }
                                .titleimg{
                                    margin-top:10px;
                                    width:40px;
                                    height:40px;
                                }
                                p{
                                    height:30px;
                                    font-weight: 600;
                                    color:#444;
                                    font-size: 14px;
                                    margin-top: 16px;
                                }
                            }
                            .bfthree{
                                display: flex;
                                flex-wrap: wrap;
                                justify-content: space-between;
                                div{
                                    margin-top:10px;
                                    width:106px;
                                    text-align: center;
                                    span{
                                        display: block;
                                        font-size: 14px;
                                    }
                                    p{
                                        margin-top:10px;
                                        font-size: 12px;
                                        color:#999;
                                    }
                                }
                            }
                            .foter{
                                display: flex;
                                margin-top:20px;
                                margin-bottom:14px;
                                padding-left:14px;
                                justify-content: space-between;
                                p{
                                    color:#FC7D14;
                                    font-size: 18px;
                                    font-weight: 600;
                                }
                                span{
                                    color:#666;
                                }
                            }
                        }
                    }
                }
            }
            .query{
                width:1200px;
                margin:40px auto;
                background-color: #fff;
                .querysono{
                    position: relative;
                    border-bottom: 1px solid #ccc;
                    span{
                        position: absolute;
                        top: 0;
                        bottom: 0;
                        margin:auto;
                        left: 0;
                        width:6px;
                        height:30px;
                        background-color:#FF6600 ;
                    }
                    p{
                        line-height: 66px;
                        text-indent: 40px;
                        font-size: 22px;
                        color: #333;
                    }
                }
                .querysont{
                    height:240px;
                    box-sizing: border-box;
                    padding:30px 24px 0;
                    display: flex;
                    .querygsono{
                        margin-right: 50px;
                        a{
                            display: block;
                            text-align: center;
                            margin-top:20px;
                            font-size: 16px;
                        }
                    }
                    .querygsont{
                        .kown{
                            height: 35px;
                            line-height: 35px;
                            background: #f2f2f2;
                            text-indent: 24px;
                            font-size: 14px;
                            color: #333;
                        }
                        div{
                            display: flex;
                            margin-top:20px;
                            padding-left: 20px;
                            span{
                                display: block;
                                width:20px;
                                height:20px;
                                line-height:20px;
                                background-color: #FF6600;
                                border-radius: 50%;
                                color:#fff;
                                text-align: center;
                                margin-right: 16px;
                            }
                            p{
                                color:#888;
                                &:hover{
                                    color:#FF6600;
                                }
                            }
                        }
                    }
                }
            }
            .problem{
                width:1200px;
                margin:auto;
                background-color: #fff;
                .problemson{
                    position: relative;
                    border-bottom: 1px solid #ccc;
                    span{
                        position: absolute;
                        top: 0;
                        bottom: 0;
                        margin:auto;
                        left: 0;
                        width:6px;
                        height:30px;
                        background-color:#FF6600 ;
                    }
                    p{
                        line-height: 66px;
                        text-indent: 40px;
                        font-size: 22px;
                        color: #333;
                    }
                }
                .prson{
                    padding: 15px 25px;
                    .clearfix{
                        margin: 30px -30px 20px -30px;
                        display: flex;
                        justify-content: space-between;
                        flex-wrap: wrap;
                        li{
                            width:33.33%;
                            box-sizing: border-box;
                            padding: 0 25px;
                            padding-bottom: 20px;
                            h3{
                                font-weight: normal;
                                font-size: 16px;
                                color: #333;
                                margin-bottom: 20px;
                                .bg-que{
                                    display: inline-block;
                                    margin-right: 10px;
                                    vertical-align: middle;
                                    width: 22px;
                                    height: 18px;
                                    background: url(../../assets/images/css_sprites.png) -362px -246px;
                                }
                            }
                            p{
                                position: relative;
                                padding-left: 32px;
                                line-height: 1.6;
                                color: #999;
                                .bg-ans{
                                    position: absolute;
                                    top: 2px;
                                    left: 0;
                                    display: inline-block;
                                    width: 22px;
                                    height: 18px;
                                    background: url(../../assets/images/css_sprites.png) -362px -208px;
                                }
                            }
                        }
                    }
                }
            }
            .result{
                width:1200px;
                margin:30px auto 0;
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
                    padding:0 20px;
                    padding-bottom:20px;
                    .img{
                        display: block;
                        margin:auto;
                        margin-bottom: 16px;
                    }
                    .inlist{
                        display: flex;
                        justify-content: space-between;
                        .inlistone{
                            width:373px;
                            height:171px;
                            border:1px solid #F2F2F2;
                            background-color: #F2F2F2;
                            box-sizing: border-box;
                            padding:14px;
                            &:hover{
                                background-color: #fff;
                            }
                            .intop{
                                display: flex;
                                &:hover{
                                    p{
                                        color: red;
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
                                    color:#666;
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
                                        color:#666;
                                    }
                                    p{
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
                                    color:red;
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
                                margin-top:30px;
                                color:#666;
                            }
                        }
                    }
                }
            }
            .agent{
                width:1200px;
                margin:auto;
                background-color: #F2F2F2;
                .agentson{
                    position: relative;
                    margin:20px 0 0;
                    background-color: #fff;
                    span{
                        position: absolute;
                        top: 0;
                        bottom: 0;
                        margin:auto;
                        left: 0;
                        width:6px;
                        height:30px;
                        background-color:#FF6600 ;
                    }
                    p{
                        line-height: 66px;
                        text-indent: 40px;
                        font-size: 22px;
                        color: #333;
                    }
                }
                .son{
                    display: flex;
                    justify-content: space-between;
                    margin-top:20px;
                    height:150px;
                    background-color: #fff;
                    box-sizing: border-box;
                    padding:10px;
                    &:hover{
                        margin-top:18px;
                        box-shadow: 0 0 6px 6px #ccc;
                    }
                    .img{
                        width:130px;
                        height:130px;
                    }
                    .title{
                        margin-left: 40px;
                        margin-top:10px;
                        width: 800px;
                        color:#666;
                        font-size: 18px;
                        .two{
                            margin-top:10px;
                            font-size: 14px;
                            color:#999;
                        }
                    }
                    .sontwo{
                        width:240px;
                        padding-top:40px;
                        border-left: 1px solid #E7E7E7;
                        div{
                            display: flex;
                            justify-content: center;
                            .color{
                                color:#ea2417;
                            }
                            img,i{
                                margin-right:6px;
                            }
                        }
                        .two{
                            margin-top:20px;
                            p{
                                font-size: 12px;
                                color:#888;
                            }
                        }
                    }
                }
            }
        }
    }
</style>