<template>
    <div class="transferMain">
        <!-- nav start -->
        <div class="nav">
            <div class="one">
                <i class="iconfont icon-liebiao"></i>
                <p> 当前位置 ：</p>
                <router-link to="/" tag="p" class="zhuan">公司快转网首页 ></router-link>
                <p>公司转让列表</p>
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
                    <p>求购公司</p>
                </div>
                <div class="EA2417 xxx">
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
                    <div class="leftr">
                        <div class="leftrone" ref="left" v-for="(item,index) in screenList" :key="index">
                            <p>{{screentitle[index]}}:</p>
                            <div class="son">
                                <div 
                                    :class="{'show': index1 == screenshow[index]}" 
                                    v-for="(item,index1) in screenList[index]" 
                                    :key="index1"
                                    @click="changescreen(index,index1,item)"
                                >{{item.attr_item_name}}</div>
                            </div>
                            <div v-if="isheight[index]">
                                <span class="span" v-if="!whoShow[index]" @click="heightAll(index,true)">更多</span>
                                <span class="span" v-if="whoShow[index]" @click="heightAll(index,false)">收起</span>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="right">
                    <div class="rtop">
                        <img src="../../assets/images/quckicon.png" alt="">
                        <div class="mai">
                            <i class="iconfont icon-wp-jsb"></i>
                            <p>我要卖公司</p> 
                        </div>                      
                    </div>
                    <div class="bottom">
                        <p>公司求购动态 ——————</p>
                        <div class="bone" ref="bone">
                            <div class="father">
                                <div v-for="(item,index) in swiperList" :key="index">
                                    <p>区域: {{item.quyu}}</p>
                                    <span>发布时间: {{item.time}}</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="result">
                <div class="resulttop">
                    <div>搜索结果</div>
                    <!-- <div :class="{'showres' : rstopnum == 0}" @click="cshowres(0)">
                        <span>综合排序 </span>
                        <i class="iconfont icon-arrowBottom"></i>
                    </div>
                    <div :class="{'showres' : rstopnum == 1}" @click="cshowres(1)">
                        <span>热门浏览 </span>
                        <i class="iconfont icon-arrowBottom"></i>
                    </div>
                    <div :class="{'showres' : rstopnum == 2}" @click="cshowres(2)">
                        <span>发布时间 </span>
                        <i class="iconfont icon-arrowBottom"></i>
                    </div>
                    <div :class="{'showres' : rstopnum == 3}" @click="cshowres(3)">
                        <span>免费专区</span>
                    </div> -->
                </div>
                <div class="resultbottom">
                    <router-link class="bfath" tag="div"
                        :to='{path:"/Detailstransfer",query:{id:item.service_id}}'
                        v-for="(item,index) in resultList" 
                        :key="index">
                        <img class="img" src="../../assets/images/remen.png" alt="">
                        <div class="bfone">
                            <img v-if="item.service_type == '空壳公司'" src="../../assets/images/kongke1.png" alt="">
                            <img v-if="item.service_type == '实体公司'" src="../../assets/images/shiti1.png" alt="">
                            <p>{{item.service_p_name}}</p>
                        </div>
                        <div class="bftwo">
                            <p class="bfto">{{item.service_price}}</p>
                            <p class="bftt">{{item.is_check}}</p>
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
                        <div class="bffour">
                            <span>详细了解</span>
                        </div>
                        <div class="bffive">
                            <p>转让编号: {{item.service_id}}</p>
                            <p>发布时间: {{item.create_time}}</p>
                        </div>
                    </router-link>
                    <div class="noresult" v-if="!resultList.length">
                        <img src="../../assets/images/noresult.png" alt="">
                        <p>没有查找到更多信息</p>
                    </div>
                </div>
                <div class="pages" v-if="resultList.length">
                    <div class="block">
                        <el-pagination
                            background
                            :page-size="9"
                            @current-change="pageChange"
                            layout="prev, pager, next"
                            :total=total>
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
                            <p class="pthree">发布求购公司需求</p>
                        </div>
                        <p class="pfour">不要急哦，好多热门资源没有展示出来，马上联系服务顾问获取</p>
                    </div>
                </div>
                <div class="interested">
                    <!-- <p>您可能感兴趣的公司</p> -->
                    <img class="img" src="../../assets/images/interse.png" alt="">
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
        </div>
        <!-- screen end -->
    </div>
</template>

<script>
import axios from '../../api/axios'
export default {
    data(){
        return{
            screenList:[],
            screentitle:[],
            screenshow:[],
            isheight:[],
            whoShow:[],
            rstopnum:0,
            total:0,
            resultList:[],
            interested:[],
            conditions:{},
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
            this.getScreen()
            this.getResult({page:1})
            this.link()
        },
        //获取筛选列表数据
        getScreen:async function(){
            let result = await axios('index/index/getTransferCateItem?type=1')
            for(let key in result.data){
                this.screentitle.push(key)
                result.data[key].unshift({
                    attr_item_name:"不限",
                    attr_item_id:'',
                    key:result.data[key][0].key
                })
                this.screenList.push(result.data[key])
                this.screenshow.push(0)
                this.conditions[result.data[key][1].key] = ""
            }
        },
        //获取筛选结果
        getResult:async function(data){
            let result = await axios('index/index/getTransferList',data)
            result.data.map((item,index)=>{
                item.fund_date = this.getTime(item.fund_date)
                item.create_time = this.getTime(item.create_time)
                item.service_price = item.service_price == "0.00"? "面议" : item.service_price + "万人民币"
                item.is_check = item.is_check == 1? "已认证" : "未认证"
            })
            this.resultList = result.data
            this.total = result.total
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
        //切换筛选条件
        changescreen:function(index,index1,item,page=1){
            this.screenshow.splice(index,1,index1)
            this.$set(this.conditions, item.key, item.attr_item_id)
            this.$set(this.conditions, 'page' , page)
            let data = {}
            for(let key in this.conditions){
                if(this.conditions[key] != ""){
                    this.$set(data, key , this.conditions[key])
                }
            }
            this.getResult(data)
        },
        //切换展示区域
        cshowres:function(num){
            this.rstopnum = num
        },
        //获取选项高度
        height:function(){
            let number = []
            if(!this.$refs.left){
                setTimeout(()=>{
                    this.height()
                },10)
                return
            }
            //拿到元素高度
            this.$refs.left.map((item,index)=>{
                number.push(parseInt(window.getComputedStyle(item).height))
            })
            //判断是否要显示更多按钮
            number.map((item,index)=>{
                this.isheight.push(item > 35? true : false)
                this.whoShow.push(false)
                if(item < 35) return
                this.$refs.left[index].style.height = '35px'
            })
        },
        //改变选项高度
        heightAll:function(index,bool){
            this.whoShow.splice(index,1,bool)
            this.$refs.left[index].style.height = this.whoShow[index]? 'auto' : '35px'
        },
        //获取当前页数据
        pageChange:function(page){
            this.$set(this.conditions, 'page' , page)
            let data = {}
            for(let key in this.conditions){
                if(this.conditions[key] != ""){
                    this.$set(data, key , this.conditions[key])
                }
            }
            this.getResult(data)
        }
    }
}
</script>

<style scoped lang="less">
    .transferMain{
        margin-top:80px;
        font-size: 14px;
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
                .xxx{
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
                overflow: hidden;
                display: flex;
                justify-content: space-between;
                .left{
                    width:958px;
                    display: flex;
                    justify-content: space-between;
                    box-sizing: border-box;
                    padding:20px 0;
                    border-radius: 6px;
                    background-color: #fff;
                    .leftr{
                        flex: 1;
                        .leftrone{
                            width:900px;
                            display: flex;
                            margin-top:10px;
                            p{
                                width:180px;
                                line-height:30px;
                                height:30px;
                                text-align: center;
                            }
                            .son{
                                color:#666;
                                flex:1;
                                overflow: hidden;
                                display: flex;
                                flex-wrap: wrap;
                                div{
                                    padding:0 16px;
                                    margin-right: 4px;
                                    line-height: 30px;
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
                            .span{
                                color:#0085D0;
                                line-height: 35px;
                            }
                        }
                    }
                }
                .right{
                    width:240px;
                    background-color: #F7F7F7;
                    border-radius: 6px;
                    height:108px;
                    .rtop{
                        height:76px;
                        border-radius: 6px 6px 0 0;
                        img{
                            display: block;
                            width:170px;
                            margin:30px auto 10px;
                        }
                        .mai{
                            width:170px;
                            margin:auto;
                            display: flex;
                            justify-content: center;
                            border-radius: 10px;
                            background-color: red;
                            line-height: 36px;
                            color:#fff;
                            i{
                                font-size: 18px;
                            }
                            p{
                                margin-left:10px;
                                font-size: 16px;
                            }
                        }
                    }
                    .bottom{
                        background-color: #fff;
                        border-radius: 0 0 6px 6px;
                        p{
                            text-align: center;
                            line-height: 40px;
                        }
                        .bone{
                            overflow: hidden;
                            .father{
                                animation: roll 15s infinite linear;
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
                                    p{
                                        line-height: 30px;
                                    }
                                    p,span{
                                        color:#b5b5b5;
                                    }
                                    span{
                                        display: block;
                                        text-indent: 16px;
                                    }
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
                margin:30px auto 0;
                .resulttop{
                    display: flex;
                    height:54px;
                    background-color: #fff;
                    .showres{
                        color:skyblue
                    }
                    div{
                        width:170px;
                        line-height: 54px;
                        border-right:1px solid #F2F2F2;
                        text-align: center;
                    }
                }
                .resultbottom{
                    margin-top:10px;
                    justify-content: space-between;
                    display: flex;
                    flex-wrap: wrap;
                    .bfath{
                        position: relative;
                        margin-bottom:16px;
                        width:384px;
                        height:384px;
                        background-color: #fff;
                        box-sizing: border-box;
                        padding:30px 0 20px;
                        transition: 0.5s;
                        &:hover{
                            margin-top:-2px;
                            box-shadow: 0 0 5px 5px #ccc;
                            .bfone{
                                border-left-color:#EA2417;
                                p{
                                    color:#EA2417;
                                }
                            }  
                        }
                        .img{
                            position: absolute;
                            width:60px;
                            top: -6px;
                            right: -6px;
                        }
                        .bfone{
                            height:60px;
                            display: flex;
                            border-left:4px solid #ccc;
                            padding-left: 30px;
                            img{
                                width:50px;
                                height:50px;
                            }
                            p{
                                height:30px;
                                font-weight: 600;
                                color:#444;
                                font-size: 18px;
                                margin-top: 16px;
                            }
                        }
                        .bftwo{
                            display: flex;
                            justify-content: space-between;
                            padding: 0 50px;
                            padding-bottom: 20px;
                            border-bottom: 1px solid #ccc;
                            .bftt{
                                color:#ff7800;
                                width:70px;
                                line-height: 28px;
                                text-align: center;
                                border:1px solid;
                            }
                            .bfto{
                                color:#FF805A;
                                font-weight: 600;
                                font-size: 20px;
                            }
                        }
                        .bfthree{
                            display: flex;
                            flex-wrap: wrap;
                            justify-content: space-between;
                            margin-top:20px;
                            box-sizing: border-box;
                            padding:0 40px;
                            div{
                                margin-top:10px;
                                width:106px;
                                span{
                                    font-size: 14px;
                                    overflow: hidden;
                                    text-overflow:ellipsis;
                                    white-space: nowrap;
                                }
                                p{
                                    margin-top:10px;
                                    font-size: 12px;
                                    color:#999;
                                }
                            }
                        }
                        .bffour{
                            margin-top:20px;
                            height:30px;
                            box-sizing: border-box;
                            padding:0 30px;
                            span{
                                float:right;
                                display: block;
                                text-align: center;
                                line-height: 28px;
                                background-color: #F3F5F8;
                                color:#EA2417;
                                width:120px;
                                border-radius: 6px;
                                &:hover{
                                    color:#fff;
                                    background-color: #EA2417;
                                }
                            }
                        }
                        .bffive{
                            display: flex;
                            justify-content: space-between;
                            box-sizing: border-box;
                            padding:0 30px;
                            margin-top:20px;
                            color:#999;
                        }
                    }
                    .noresult{
                        width:1200px;
                        text-align: center;
                        color:#C2C2C2;
                        background-color: #fff;
                        img{
                            display: block;
                            margin:20px auto;
                            width:150px;
                            height:150px;
                        }
                        p{
                            font-size: 16px;
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
                    padding:0 20px;
                    padding-top:30px;
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
            
        }
    }
</style>