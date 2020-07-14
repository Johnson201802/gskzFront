<template>
    <div class="transferMain">
        <!-- nav start -->
        <div class="nav">
            <div class="one">
                <i class="iconfont icon-liebiao"></i>
                <p> 当前位置 ：</p>
                <router-link to="/" tag="p" class="zhuan">首页 ></router-link>
                <p>代办服务</p>
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
            </div>
        </div>
		<div class="banner">
			<router-link to="http://www.baidu.com"><img src="../../assets/images/bg113.png" alt=""></router-link>
		</div>
        <!-- nav end -->

        <!-- screen start -->
        <div class="screen">
            <div class="margin">
                <div class="left" ref="main-height">
                    <h2 class="title">优质代办服务</h2>
					<div style="width: 1200px;display: flex;padding:20px 20px 30px 20px">
						<div class="rlift"><img src="../../assets/images/hh.png" alt=""></div>
						<div class="rright">
							  <el-tabs v-model="activeName" @tab-click="handleClick">
							    <el-tab-pane label="股权变更" name="first">
									<div style="display: flex;justify-content: flex-start;width: 860px;height:360px;flex-flow:row wrap;">
										<div style="width:266px;height:130px;box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);background-color:#409EFF;border-radius: 5px;margin:10px 10px"></div>
										<div style="width:266px;height:130px;box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);background-color:#409EFF;border-radius: 5px;margin:10px 10px"></div>
										<div style="width:266px;height:130px;box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);background-color:#409EFF;border-radius: 5px;margin:10px 10px"></div>
										<div style="width:266px;height:130px;box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);background-color:#409EFF;border-radius: 5px;margin:10px 10px"></div>
										<div style="width:266px;height:130px;box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);background-color:#409EFF;border-radius: 5px;margin:10px 10px"></div>
									</div>
								</el-tab-pane>
							    <el-tab-pane label="公司买卖" name="second">
									<div style="display: flex;justify-content: flex-start;width: 860px;height:360px;flex-flow:row wrap;">
										<div style="width:266px;height:130px;box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);background-color:#409EFF;border-radius: 5px;margin:10px 10px"></div>
										<div style="width:266px;height:130px;box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);background-color:#409EFF;border-radius: 5px;margin:10px 10px"></div>
										<div style="width:266px;height:130px;box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);background-color:#409EFF;border-radius: 5px;margin:10px 10px"></div>
									</div>
								</el-tab-pane>
							    <el-tab-pane label="执照加快" name="third">
									<div style="display: flex;justify-content: flex-start;width: 860px;height:360px;flex-flow:row wrap;">
										<div style="width:266px;height:130px;box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);background-color:#409EFF;border-radius: 5px;margin:10px 10px"></div>
										<div style="width:266px;height:130px;box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);background-color:#409EFF;border-radius: 5px;margin:10px 10px"></div>
									</div>
								</el-tab-pane>
							    <el-tab-pane label="内资公司注册" name="fourth">内资公司注册</el-tab-pane>
							    <el-tab-pane label="公司变更" name="fifth">公司变更</el-tab-pane>
							  </el-tabs>
						</div>
					</div>
					<div style="width: 1200px;display: flex;padding:20px 20px 30px 20px">
						<div class="rlift"><img src="../../assets/images/hh1.png" alt=""></div>
						<div class="rright">
							  <el-tabs v-model="activeName" @tab-click="handleClick">
							    <el-tab-pane label="股权变更" name="first">
									<div style="display: flex;justify-content: flex-start;width: 860px;height:360px;flex-flow:row wrap;">
										<div style="width:266px;height:130px;box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);background-color:#FAD8B7;border-radius: 5px;margin:10px 10px"></div>
										<div style="width:266px;height:130px;box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);background-color:#FAD8B7;border-radius: 5px;margin:10px 10px"></div>
										<div style="width:266px;height:130px;box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);background-color:#FAD8B7;border-radius: 5px;margin:10px 10px"></div>
										<div style="width:266px;height:130px;box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);background-color:#FAD8B7;border-radius: 5px;margin:10px 10px"></div>
										<div style="width:266px;height:130px;box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);background-color:#FAD8B7;border-radius: 5px;margin:10px 10px"></div>
									</div>
								</el-tab-pane>
							    <el-tab-pane label="公司买卖" name="second">
									<div style="display: flex;justify-content: flex-start;width: 860px;height:360px;flex-flow:row wrap;">
										<div style="width:266px;height:130px;box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);background-color:#FAD8B7;border-radius: 5px;margin:10px 10px"></div>
										<div style="width:266px;height:130px;box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);background-color:#FAD8B7;border-radius: 5px;margin:10px 10px"></div>
										<div style="width:266px;height:130px;box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);background-color:#FAD8B7;border-radius: 5px;margin:10px 10px"></div>
									</div>
								</el-tab-pane>
							    <el-tab-pane label="执照加快" name="third">
									<div style="display: flex;justify-content: flex-start;width: 860px;height:360px;flex-flow:row wrap;">
										<div style="width:266px;height:130px;box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);background-color:#FAD8B7;border-radius: 5px;margin:10px 10px"></div>
										<div style="width:266px;height:130px;box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);background-color:#FAD8B7;border-radius: 5px;margin:10px 10px"></div>
									</div>
								</el-tab-pane>
							    <el-tab-pane label="内资公司注册" name="fourth">内资公司注册</el-tab-pane>
							    <el-tab-pane label="公司变更" name="fifth">公司变更</el-tab-pane>
							  </el-tabs>
						</div>
					</div>
					<div style="width: 1200px;display: flex;padding:20px 20px 30px 20px">
						<div class="rlift"><img src="../../assets/images/hh2.png" alt=""></div>
						<div class="rright">
							  <el-tabs v-model="activeName" @tab-click="handleClick">
							    <el-tab-pane label="股权变更" name="first">
									<div style="display: flex;justify-content: flex-start;width: 860px;height:360px;flex-flow:row wrap;">
										<div style="width:266px;height:130px;box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);background-color:#72D1A4;border-radius: 5px;margin:10px 10px"></div>
										<div style="width:266px;height:130px;box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);background-color:#72D1A4;border-radius: 5px;margin:10px 10px"></div>
										<div style="width:266px;height:130px;box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);background-color:#72D1A4;border-radius: 5px;margin:10px 10px"></div>
										<div style="width:266px;height:130px;box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);background-color:#72D1A4;border-radius: 5px;margin:10px 10px"></div>
										<div style="width:266px;height:130px;box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);background-color:#72D1A4;border-radius: 5px;margin:10px 10px"></div>
									</div>
								</el-tab-pane>
							    <el-tab-pane label="公司买卖" name="second">
									<div style="display: flex;justify-content: flex-start;width: 860px;height:360px;flex-flow:row wrap;">
										<div style="width:266px;height:130px;box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);background-color:#72D1A4;border-radius: 5px;margin:10px 10px"></div>
										<div style="width:266px;height:130px;box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);background-color:#72D1A4;border-radius: 5px;margin:10px 10px"></div>
										<div style="width:266px;height:130px;box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);background-color:#72D1A4;border-radius: 5px;margin:10px 10px"></div>
									</div>
								</el-tab-pane>
							    <el-tab-pane label="执照加快" name="third">
									<div style="display: flex;justify-content: flex-start;width: 860px;height:360px;flex-flow:row wrap;">
										<div style="width:266px;height:130px;box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);background-color:#72D1A4;border-radius: 5px;margin:10px 10px"></div>
										<div style="width:266px;height:130px;box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);background-color:#72D1A4;border-radius: 5px;margin:10px 10px"></div>
									</div>
								</el-tab-pane>
							    <el-tab-pane label="内资公司注册" name="fourth">内资公司注册</el-tab-pane>
							    <el-tab-pane label="公司变更" name="fifth">公司变更</el-tab-pane>
							  </el-tabs>
						</div>
					</div>
					<div style="width: 1200px;display: flex;padding:20px 20px 30px 20px">
						<div class="rlift"><img src="../../assets/images/hh3.png" alt=""></div>
						<div class="rright">
							  <el-tabs v-model="activeName" @tab-click="handleClick">
							    <el-tab-pane label="股权变更" name="first">
									<div style="display: flex;justify-content: flex-start;width: 860px;height:360px;flex-flow:row wrap;">
										<div style="width:266px;height:130px;box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);background-color:#FF8C64;border-radius: 5px;margin:10px 10px"></div>
										<div style="width:266px;height:130px;box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);background-color:#FF8C64;border-radius: 5px;margin:10px 10px"></div>
										<div style="width:266px;height:130px;box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);background-color:#FF8C64;border-radius: 5px;margin:10px 10px"></div>
										<div style="width:266px;height:130px;box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);background-color:#FF8C64;border-radius: 5px;margin:10px 10px"></div>
										<div style="width:266px;height:130px;box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);background-color:#FF8C64;border-radius: 5px;margin:10px 10px"></div>
									</div>
								</el-tab-pane>
							    <el-tab-pane label="公司买卖" name="second">
									<div style="display: flex;justify-content: flex-start;width: 860px;height:360px;flex-flow:row wrap;">
										<div style="width:266px;height:130px;box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);background-color:#FF8C64;border-radius: 5px;margin:10px 10px"></div>
										<div style="width:266px;height:130px;box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);background-color:#FF8C64;border-radius: 5px;margin:10px 10px"></div>
										<div style="width:266px;height:130px;box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);background-color:#FF8C64;border-radius: 5px;margin:10px 10px"></div>
									</div>
								</el-tab-pane>
							    <el-tab-pane label="执照加快" name="third">
									<div style="display: flex;justify-content: flex-start;width: 860px;height:360px;flex-flow:row wrap;">
										<div style="width:266px;height:130px;box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);background-color:#FF8C64;border-radius: 5px;margin:10px 10px"></div>
										<div style="width:266px;height:130px;box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);background-color:#FF8C64;border-radius: 5px;margin:10px 10px"></div>
									</div>
								</el-tab-pane>
							    <el-tab-pane label="内资公司注册" name="fourth">内资公司注册</el-tab-pane>
							    <el-tab-pane label="公司变更" name="fifth">公司变更</el-tab-pane>
							  </el-tabs>
						</div>
					</div>
					<div style="width: 1200px;display: flex;padding:20px 20px 30px 20px">
						<div class="rlift"><img src="../../assets/images/hh4.png" alt=""></div>
						<div class="rright">
							  <el-tabs v-model="activeName" @tab-click="handleClick">
							    <el-tab-pane label="股权变更" name="first">
									<div style="display: flex;justify-content: flex-start;width: 860px;height:360px;flex-flow:row wrap;">
										<div style="width:266px;height:130px;box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);background-color:#409EFF;border-radius: 5px;margin:10px 10px"></div>
										<div style="width:266px;height:130px;box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);background-color:#409EFF;border-radius: 5px;margin:10px 10px"></div>
										<div style="width:266px;height:130px;box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);background-color:#409EFF;border-radius: 5px;margin:10px 10px"></div>
										<div style="width:266px;height:130px;box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);background-color:#409EFF;border-radius: 5px;margin:10px 10px"></div>
										<div style="width:266px;height:130px;box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);background-color:#409EFF;border-radius: 5px;margin:10px 10px"></div>
									</div>
								</el-tab-pane>
							    <el-tab-pane label="公司买卖" name="second">
									<div style="display: flex;justify-content: flex-start;width: 860px;height:360px;flex-flow:row wrap;">
										<div style="width:266px;height:130px;box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);background-color:#409EFF;border-radius: 5px;margin:10px 10px"></div>
										<div style="width:266px;height:130px;box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);background-color:#409EFF;border-radius: 5px;margin:10px 10px"></div>
										<div style="width:266px;height:130px;box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);background-color:#409EFF;border-radius: 5px;margin:10px 10px"></div>
									</div>
								</el-tab-pane>
							    <el-tab-pane label="执照加快" name="third">
									<div style="display: flex;justify-content: flex-start;width: 860px;height:360px;flex-flow:row wrap;">
										<div style="width:266px;height:130px;box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);background-color:#409EFF;border-radius: 5px;margin:10px 10px"></div>
										<div style="width:266px;height:130px;box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);background-color:#409EFF;border-radius: 5px;margin:10px 10px"></div>
									</div>
								</el-tab-pane>
							    <el-tab-pane label="内资公司注册" name="fourth">内资公司注册</el-tab-pane>
							    <el-tab-pane label="公司变更" name="fifth">公司变更</el-tab-pane>
							  </el-tabs>
						</div>
					</div>
                </div>
				
            </div>
        </div>
            <div class="result">
                
            </div>
		</div>
        <!-- screen end -->
    </div>
	
</template>

<script>
import axios from '../../api/axios'
import { regionDataPlus  } from 'element-china-area-data'
import scroll from 'vue-seamless-scroll'
export default {
	components: {
		scroll
	},
    data(){
        return{
			city:'',
			height2:'',
            screenList:[],
            screentitle:[],
			activeName: 'first',
			value:'',
			options: regionDataPlus,
			selectedOptions: [],
            screenshow:[],
            isheight:[],
            whoShow:[],
            rstopnum:0,
            total:0,
            resultList:[],
            interested:[],
            conditions:{},
        }
    },
    created(){
        this.init()
		this.getHeight()
    },
    mounted(){
        this.height()
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
    methods:{
        //初始化页面数据
        init:function(){
            this.getScreen()
            this.getResult({page:1})
            this.link()
        },
		handleChange (value) {
		        console.log(value)
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
				console.log(item)
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
        },
		getHeight(){
			// 获取高度值 （内容高+padding+边框）
			this.height2= window.getComputedStyle(this.$refs.main-height).height;
			console.log(this.height2)
		}
    }
}
</script>

<style  lang="less">
    .transferMain{
		width: 100%;
		min-width: 1200px;
		background-color: #fff;
        font-size: 14px;
		margin: 0 auto;
		.banner{
			width: 100%;
			background-color: #f8f8f8;
			display: flex;
			justify-content: center;
			img{
				border-radius: 5px;
				width: 1200px;
				height: 188px;
			}
		}
        .nav{
            height: 60px;
            margin: 5px auto;
            padding-top: 10px;
            display: flex;
            justify-content: space-between;
            background-color: #fff;
			width: 1200px;
			
			&::before{
				display: none;
				content: '';
			}
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
            background-color: #f8f8f8;
            padding-top:10px;
			
            .margin{
                width:1200px;
                margin:auto;
                overflow: hidden;
                display: flex;
                .left{
                    width:1200px;
                    box-sizing: border-box;
                    margin:20px 0;
                    border-radius: 6px;
                    background-color: #fff;
					h2{
						text-align: center;
					}
					.title{
						font-size: 24px;
						font-weight: 600;
					}
					.rlift{
						width:280px;
						border-radius: 5px;
						img{
							border-radius: 5px;
						}
					}
					.rright{
						margin-left: 20px;
						.el-tabs__item{
							padding:0 58px;
						}
					}
                }
            }
            .result{
                width:1200px;
                margin:0px auto;
                .resulttop{
					margin-top: 10px;
					border-radius: 5px;
                    display: flex;
                    height:54px;
                    background-color: #fff;
					border-radius: 5px;
                    .showres{
                        color:rgb(243, 165, 77,0.6)
                    }
                    div{
						cursor: pointer;
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
						border-radius: 5px;
                        position: relative;
                        margin-bottom:16px;
                        width:384px;
                        height:384px;
                        background-color: #fff;
                        box-sizing: border-box;
                        padding:30px 0 20px;
                        transition: 0.5s;
						cursor: pointer;
                        &:hover{
                            margin-top:-2px;
                            box-shadow: 0 0 5px 5px rgba(243,165,77,0.5);
                            .bfone{
                                border-left-color:rgb(243, 165, 77);
                                p{
                                    color:rgb(243, 165, 77);
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
								border-radius: 5px;
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