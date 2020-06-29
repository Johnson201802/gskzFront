<template>
    <div class="Resources">

        <!-- 基本信息 start -->
        <div class="basiclnformation">
            <div class="top">
                <span></span>
                <p class="p">基本信息</p>
            </div>
            <!--填写信息 start -->
            <div class="information">
                <div class="son two flex">
                    <p><i class="iconfont icon-bitian"></i> 注册区域:</p>
                    <el-cascader
                        size="large"
                        :options="options"
                        v-model="selectedOptions"
                        @change="handleChange"
                    >
                    </el-cascader>
                </div>
                <div class="son flex">
                    <p><i class="iconfont icon-bitian"></i> 公司类型:</p>
                    <el-radio v-for="item2 in company_type_list" v-model="company_type" :label="item2.attr_item_id" border >{{item2.attr_item_name}}</el-radio>
                </div>
                <div class="son flex">
                    <p><i class="iconfont icon-bitian"></i> 公司名称:</p>
                    <input class="input lang" v-model="gsname" type="text" placeholder="请填写完整公司名称">
                </div>
                <div class="son flex">
                    <p><i class="iconfont icon-bitian"></i> 是否隐藏公司名称:</p>
                    <div class="sonone">
                        <div>
                            <el-radio v-model="hide" label="1" @change="onHandleHide(1)" border>隐藏</el-radio>
                            <el-radio v-model="hide" label="2" @change="onHandleHide(2)" border>不隐藏</el-radio>
                        </div>
                        <p class="gsname" v-show="is_hide"><span>公司名称显示状态： </span>{{subname}}</p>
						<div v-show="!is_disable">
							<div>
							    <el-input-number v-show="is_hide" :min="0" :max="100" type="number" v-model="start_hide" label="1" border @change="onHandleShowPosition(1)"></el-input-number>
							    <el-input-number v-show="is_hide" :min="0" :max="100" type="number" v-model="end_hide" label="2" border @change="onHandleShowPosition(2)"></el-input-number>
							</div>
						</div>
						<div v-show="is_disable">
							<div>
							    <el-input-number disabled="disabled" v-show="is_hide" type="number" v-model="start_hide" label="1" border @change="onHandleShowPosition(1)"></el-input-number>
							    <el-input-number disabled="disabled" v-show="is_hide" type="number" v-model="end_hide" label="2" border @change="onHandleShowPosition(2)"></el-input-number>
							</div>
						</div>
                    </div>
                </div>
                <div class="son flex">
                    <p><i class="iconfont icon-bitian"></i> 所属行业:</p>
                    <el-select v-model="trade" placeholder="请选择">
                        <el-option
                        v-for="item in trade_list"
                        :key="item.attr_item_id"
                        :label="item.attr_item_name"
                        :value="item.attr_item_id">
                        </el-option>
                    </el-select>
                </div>
                <div class="son flex">
                    <p><i class="iconfont icon-bitian"></i> 注册资本:</p>
                    <input class="input lang ziben" type="text" v-model="caption" placeholder="请输入注册资本/单位万">
                    <div class="wan">
                        <span>万元</span>
                    </div>
                </div>
                <div class="son flex">
                    <p><i class="iconfont icon-bitian"></i> 成立日期:</p>
                    <el-date-picker
                    v-model="fundDate"
                    type="datetime"
                    placeholder="选择日期时间">
                    </el-date-picker>
                </div>
                <div class="son flex">
                    <p><i class="iconfont icon-bitian"></i> 经营范围:</p>
                    <textarea class="input lang" v-model="manageArea" placeholder="完整的经营范围更利于快速卖出，请与执照上的经营范围保持统一。"></textarea>
                </div>
            </div>
            <!--填写信息 start -->
        </div>
        <!-- 基本信息 end -->


        <!-- 资产信息 start -->
        <div class="Asselnformation">
            <div class="top">
                <span></span>
                <p class="p">资产信息</p>
            </div>
             <!-- 资产详情 start -->
            <div class="assets">
                <!-- <div class="son flex">
                    <p>热门标签:</p>
                    <el-checkbox-group v-model="checkedCities" @change="handleCheckedCitiesChange">
                    <el-checkbox v-for="city in cities" :label="city" :key="city">{{city}}</el-checkbox>
                    </el-checkbox-group>
                </div> -->
                <div class="son">
                    <div class="sons">
                        <p><i class="iconfont icon-bitian"></i> 是否有资质:</p>
                        <el-radio v-model="is_have_intelligence" label="1"  border>有</el-radio>
                        <el-radio v-model="is_have_intelligence" label="0"  border>无</el-radio>
                    </div>
                </div>
                <div class="son">
                    <div class="sons">
                        <p><i class="iconfont icon-bitian"></i> 是否有商标:</p>
                        <el-radio v-model="is_have_trademark" label="1" border>有</el-radio>
                        <el-radio v-model="is_have_trademark" label="0" border>无</el-radio>
                    </div>
                </div>
                <div class="son">
                    <div class="sons">
                        <p><i class="iconfont icon-bitian"></i> 是否有网络资产:</p>
                        <el-radio v-model="is_have_network_assets" label="1"  border>有</el-radio>
                        <el-radio v-model="is_have_network_assets" label="0"  border>无</el-radio>
                    </div>
                </div>
                <div class="son">
                    <div class="sons">
                        <p><i class="iconfont icon-bitian"></i> 是否有车牌指标:</p>
                        <el-radio v-model="is_have_vehicle_license" label="1" border>有</el-radio>
                        <el-radio v-model="is_have_vehicle_license" label="0" border>无</el-radio>
                    </div>
                </div>
                <div class="son">
                    <div class="sons">
                        <p><i class="iconfont icon-bitian"></i> 是否有专利/著作权:</p>
                        <el-radio v-model="is_have_copyright" label="1" border>有</el-radio>
                        <el-radio v-model="is_have_copyright" label="2" border>无</el-radio>
                    </div>
                </div>
            </div>
            <!-- 资产详情 end -->
        </div>
        <!-- 资产信息 end -->

        
        <!-- 税务信息 start -->
        <div class="taxlnformation">
            <div class="top">
                <span></span>
                <p class="p">税务信息</p>
            </div>
            <!-- 税务详情 start -->
            <div class="tax">
                <div class="son flex">
                    <p><i class="iconfont icon-bitian"></i> 是否报到/开业:</p>
                    <el-radio v-model="is_open" label="1" border>有</el-radio>
                    <el-radio v-model="is_open" label="0" border>无</el-radio>
                </div>
                <div class="son flex">
                    <p><i class="iconfont icon-bitian"></i> 纳税类型:</p>
                    <el-radio v-for="item in tax_lists" v-model="tax_type" :label="item.attr_item_id" border>{{item.attr_item_name}}</el-radio>
                </div>
                <div class="son flex">
                    <p><i class="iconfont icon-bitian"></i> 报税情况:</p>
                    <el-radio v-model="tax_status" label="1" border>正常</el-radio>
                    <el-radio v-model="tax_status" label="0" border>不正常</el-radio>
                </div>
                <div class="son flex">
                    <p><i class="iconfont icon-bitian"></i> 是否申领过发票:</p>
                    <el-radio v-model="is_get_bill" label="1" border>是</el-radio>
                    <el-radio v-model="is_get_bill" label="0" border>否</el-radio>
                </div>
            </div>
            <!-- 税务详情 end -->
        </div>
        <!-- 税务信息 end -->


        <!-- 银行信息 start -->
        <div class="banklnformation">
            <div class="top">
                <span></span>
                <p class="p">银行信息</p>
            </div>
             <!-- 银行详情 start -->
            <div class="bank">
                <div class="son flex">
                    <p><i class="iconfont icon-bitian"></i> 银行账户:</p>
                    <el-radio v-model="bank_account_open" label="1" border>已开基本户</el-radio>
                    <el-radio v-model="bank_account_open" label="0" border>未开基本户</el-radio>
                </div>
            </div>
            <!-- 银行详情 end -->
        </div>
        <!-- 银行信息 end -->


        <!-- 转让信息 start -->
        <div class="transferlnformation">
            <div class="top">
                <span></span>
                <p class="p">转让信息</p>
            </div>
            <!-- 转让详情 start -->
            <div class="zhuanr">
                <div class="son">
                    <div class="one sons">
                        <p>转让方式:</p>
                        <el-radio v-model="payment" label="1" border @change="changePrice(2)">免费转</el-radio>
                        <el-radio v-model="payment" label="2" border @change="changePrice(2)">面议</el-radio>
                        <el-radio v-model="payment" label="3" border @change="changePrice(1)">一口价</el-radio>
                    </div>
					<div v-show="priceFlag" class="two sons">
						<p>转让价格:</p>
					    <input class="input lang ziben" type="number" v-model="price" placeholder="请输入注册资本/单位万">
					    <div class="wan">
					        <span>万元</span>
					    </div>
					</div>
                    <div class="two sons">
                        <p>其他信息:</p>
						<Tinymce ref="editor"  v-model="desc_content" :height="500" :width="886"/>
                    </div>
                </div>
            </div>
            <!-- 转让详情 end -->
        </div>
        <!-- 转让信息 end -->


        <!-- 联系方式 start -->
        <div class="contactlnformation">
            <div class="top">
                <span></span>
                <p class="p">联系方式</p>
            </div>
            <!-- 联系详情 start -->
            <div class="contact">
                <div class="son flex">
                    <p><i class="iconfont icon-bitian"></i> 联系电话:</p>
                    <input v-model="contact_num" class="input lang" type="text">
                </div>
                <div class="son flex">
                    <p><i class="iconfont icon-bitian"></i> 联系人:</p>
                    <input v-model="contact_user_name" class="input lang" type="text">
                </div>
            </div>
            <!-- 联系详情 end -->
        </div>
        <!-- 联系方式 end -->


        <!-- 协议 承诺 start -->
        <div class="agreement">
            <p>* 上述信息如有不符，包含欠税款、滞纳金、罚款、黑名单等情况而产生的一切费用，将由老股东自行承担。带 “ * ” 为必填项</p>
            <div>
                <el-checkbox v-model="checked">我已阅读并接受《易转网服务协议》</el-checkbox>
            </div>
        </div>
        <!-- 协议 承诺 end -->


        <!-- 确认 start -->
        <div class="button" @click="submite">提交</div>
        <!-- 确认 end -->
    </div>
</template>

<script>
    //引入全国城市列表
    import { regionDataPlus, CodeToText } from "element-china-area-data";
	import axios from '../../api/axios'
	import Cookies from "js-cookie"
	import Tinymce from '../content/Tinymce'
    export default {
		components: { Tinymce },
		data() {
			return {
                options: regionDataPlus,
                selectedOptions: [],
				location:'',
				caption:'',
				fundDate:'',
				manageArea:'',
				hide:'',
				is_hide:true,
				start_hide:'0',
				end_hide:'1',
				is_disable:false,
				subname:'',
				gsname:'',
				is_have_intelligence:'',
				is_have_trademark:'',
				is_have_network_assets:'',
				is_have_vehicle_license:'',
				is_have_copyright:'',
				is_open:'',
				tax_type:'',
				tax_status:'',
				is_get_bill:'',
				bank_account_open:'',
                tax_lists:[],
                trade_list: [],
				trade:'',
				payment:'',
				desc_content:'',
				contact_num:'',
				contact_user_name:'',
				company_type:'',
				company_type_list:[],
				checked:true,
				priceFlag:false,
				price:'',
					}
				},
		created() {
			this.fecthTradeList()
			this.fecthTaxList()
			this.fecthCompanyTypeList()
			this.isDisable(this.gsname)
		},
		watch: {
		  gsname(val) {
			if(this.gsname==''){
				this.is_disable = true;
			}else{
				this.is_disable = false;
				this.subname = this.strChange(this.start_hide,this.end_hide,this.gsname)//gsname.replace(this.start_hide,this.end_hide,'***')
			}
		  },
		  
		},
        methods:{
			onHandleHide(v){
				if(v==1){
					this.is_hide = true
				}else{
					this.is_hide = false
				}
			},
			strChange(s,e,g){
				return g.substr(0, s) + '***' + g.substr(e,g.length);
			},
			isDisable(v){
				if(v==''){
					this.is_disable = true;
				}else{
					this.is_disable = false;
				}
			},
			onHandleShowPosition(v){
					this.subname = this.strChange(this.start_hide,this.end_hide,this.gsname)
			},
            handleChange(value) {
				this.location = value
            },
			changePrice(v){
				if(v==1){
					this.priceFlag = true
				}else{
					this.priceFlag = false
				}
			},
			async fecthTradeList(){
				let result = await axios("index/user/getCompanyTrade")
				if(result.code == 200){
					this.trade_list = result.data
				}else{
					this.$message({
						type:'error',
						massage:'网络请求错误！',
						duration:5000
					})
				}
			},
			async fecthTaxList(){
				let result = await axios("index/user/getCompanyTaxType")
				if(result.code == 200){
					this.tax_lists = result.data
				}else{
					this.$message({
						type:'error',
						massage:'网络请求错误！',
						duration:5000
					})
				}
			},
			async fecthCompanyTypeList(){
				let result = await axios("index/user/getCompanyType")
				if(result.code == 200){
					this.company_type_list = result.data
				}else{
					this.$message({
						type:'error',
						massage:'网络请求错误！',
						duration:5000
					})
				}
			},
			handleTypeChange(v){
				this.companyType = v
			},
            handleCheckAllChange(val) {
                this.checkedCities = val ? cityOptions : [];
                this.isIndeterminate = false;
            },
            async submite(){
				if(this.location==''){
					this.$message({
						type:'error',
						message:'请选择注册地区！',
						duration:5000
					})
					return
				}
				if(this.company_type==''){
					this.$message({
						type:'error',
						message:'请选择公司类型！',
						duration:5000
					})
					return
				}
				if(this.gsname==''){
					this.$message({
						type:'error',
						message:'请填写公司名称！',
						duration:5000
					})
					return
				}
				if(this.trade==''){
					this.$message({
						type:'error',
						message:'请选择所属行业！',
						duration:5000
					})
					return
				}
				if(this.caption==''){
					this.$message({
						type:'error',
						message:'请填写注册资金！',
						duration:5000
					})
					return
				}
				if(this.fundDate==''){
					this.$message({
						type:'error',
						message:'请填写注册日期！',
						duration:5000
					})
					return
				}
				if(this.manageArea==''){
					this.$message({
						type:'error',
						message:'请填写经营范围！',
						duration:5000
					})
					return
				}
				if(this.is_have_intelligence==''){
					this.$message({
						type:'error',
						message:'请选择是否有资质！',
						duration:5000
					})
					return
				}
				if(this.is_have_trademark==''){
					this.$message({
						type:'error',
						message:'请选择是否有商标！',
						duration:5000
					})
					return
				}
				if(this.is_have_network_assets==''){
					this.$message({
						type:'error',
						message:'请选择是否有网络资产！',
						duration:5000
					})
					return
				}
				if(this.is_have_vehicle_license==''){
					this.$message({
						type:'error',
						message:'请选择是否有车牌指标！',
						duration:5000
					})
					return
				}
				if(this.is_have_copyright==''){
					this.$message({
						type:'error',
						message:'请选择是否有专利/著作权！',
						duration:5000
					})
					return
				}
				if(this.is_open==''){
					this.$message({
						type:'error',
						message:'请选择是否开业！',
						duration:5000
					})
					return
				}
				if(this.tax_type==''){
					this.$message({
						type:'error',
						message:'请选择纳税类型！',
						duration:5000
					})
					return
				}
				if(this.tax_status==''){
					this.$message({
						type:'error',
						message:'请选择纳税状态！',
						duration:5000
					})
					return
				}
				if(this.is_get_bill==''){
					this.$message({
						type:'error',
						message:'请选择是否申领过发票！',
						duration:5000
					})
					return
				}
				if(this.bank_account_open==''){
					this.$message({
						type:'error',
						message:'请选择是否开立银行基本账户！',
						duration:5000
					})
					return
				}
				if(this.payment==''){
					this.$message({
						type:'error',
						message:'请选择支付方式！',
						duration:5000
					})
					return
				}
				if(this.desc_content==''){
					this.$message({
						type:'error',
						message:'请填写描述！',
						duration:5000
					})
					return
				}
				if(this.contact_num==''){
					this.$message({
						type:'error',
						message:'请填写联系人手机！',
						duration:5000
					})
					return
				}
				if(this.contact_user_name==''){
					this.$message({
						type:'error',
						message:'请填写联系人名称！',
						duration:5000
					})
					return
				}
				let user_id = Cookies.get('user_id')
				let data = {"service_province_code":this.location[0],"service_city_code":this.location[1],"company_type":this.company_type,"gsname":this.gsname,"subname":this.subname,"trade":this.trade,"caption":this.caption,
				"fundDate":this.fundDate,"manageArea":this.manageArea,"is_have_intelligence":this.is_have_intelligence,"is_have_trademark":this.is_have_trademark,
				"is_have_network_assets":this.is_have_network_assets,"is_have_vehicle_license":this.is_have_vehicle_license,"is_have_copyright":this.is_have_copyright,
				"is_open":this.is_open,"tax_type":this.tax_type,"tax_status":this.tax_status,"is_get_bill":this.is_get_bill,"bank_account_open":this.bank_account_open,
				"payment":this.payment,"desc_content":this.desc_content,"contact_num":this.contact_num,"contact_user_name":this.contact_user_name,"price":this.price,"postman_id":user_id}
				await axios("index/user/posttCompany",data,'post').then((response)=>{
					if(response.code == 200){
						this.$message({
							type:'success',
							message:'提交成功！待审核..',
							duration:5000
						})
					}else{
						this.$message({
							type:'error',
							message:'提交失败！请不要重复提交',
							duration:5000
						})
					}
				})
				
			}
        }
    }
</script>

<style lang="less">
    .Resources{
        font-size: 14px;
        flex:1;
        .top{
            width:900px;
            margin:50px auto 0;
            color:#606266;
            span{
                display: block;
                border-bottom: 1px solid #dcdfe6;
            }
            .p{
                width:150px;
                line-height: 40px;
                text-align: center;
                background-color: #fff;
                margin:auto;
                margin-top:-22px;
                font-weight: bold;
                font-size: 18px;
            }
        }
        .information,.assets,.tax,.bank,.zhuanr,.contact{
            width:1200px;
            margin:50px auto 0;
            .el-checkbox-group{
                .el-checkbox-button{
                    margin: 0 10px 10px 0;
                    .el-checkbox-button__inner{
                        border-left: 1px solid #DCDFE6;
                    }
                }
                .el-checkbox-button.is-focus .el-checkbox-button__inner{
                    border-left: 1px solid #409EFF;
                }
            }
            .son{
                line-height: 38px;
                margin-bottom: 20px;
                .gsname{
                    color:red;
                    width:500px;
                    text-align: left;
                    margin-top:10px;
                    span{
                        color:rgb(153, 153, 153);
                    }
                }
                .two{
                    margin-top:20px;
                }
                .sons{
                    display: flex;
                }
                .chilren{
                    width:720px;
                    margin-top:20px;
                    margin-left: 176px;
                    input,textarea{
                        width:700px;
                        height:100px;
                        margin-top:20px;
                    }
                    .xxx{
                        margin: 0;
                    }
                }
                p{
                    width:160px;
                    color: #606266;
                    text-align: right;
                    margin-right:20px;
                    overflow: hidden;
                    text-overflow:ellipsis;
                    white-space: nowrap;
                    i{
                        color:red;
                    }
                }
                .wan{
                    width:60px;
                    background-color: #F5F7FA;
                    border-radius: 0 4px 4px 0;
                    padding-left:20px;
                    color:#909399;
                    border:1px solid #DCDFE6;
                    .el-input__inner{
                        width:100px;
                        border:none;
                        border-radius: 0 4px 4px 0;
                        background-color: #F5F7FA;
                        color:#909399;
                    }
                }
                .input{
                    outline: none;
                    transition: .3s;
                    resize: none;
                    border:1px solid #DCDFE6;
                    border-radius: 4px;
                    text-indent: 16px;
                    color:#909399;
                    &:focus{
                        border:1px solid #66B1FF;
                    }
                }
                .lang{
                    width:700px;
                }
                .ziben{
                    width:580px;
                    border-radius: 4px 0 0 4px;
                    border-right:none;
                }
            }
            .flex{
                display: flex;
            }
            textarea{
                height:100px;
                line-height: 30px;
            }
        }
        .agreement{
            width:900px;
            margin:50px auto 0;
            p{
                line-height: 60px;
                text-align: center;
                border-top:1px solid #EEEEEE;
                border-bottom:1px solid #EEEEEE;
                font-weight: bold;
            }
            div{
                margin-top:20px;
                text-align: center;
            }
        }
        .button{
            width:300px;
            text-align: center;
            line-height: 40px;
            color: #fff;
            background-color: #409eff;
            border-color: #409eff;
            border-radius: 6px;
            margin:20px auto;
        }
    }
</style>