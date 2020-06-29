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
                    <el-radio v-model="radio1" label="1" border>空壳公司</el-radio>
                    <el-radio v-model="radio1" label="2" border>实体公司</el-radio>
                </div>
                <div class="son flex">
                    <p><i class="iconfont icon-bitian"></i> 公司名称:</p>
                    <input class="input lang" v-model="gsname" type="text" placeholder="请填写完整公司名称">
                </div>
                <div class="son flex">
                    <p><i class="iconfont icon-bitian"></i> 是否隐藏公司名称:</p>
                    <div class="sonone">
                        <div>
                            <el-radio v-model="radio2" label="1" border>隐藏</el-radio>
                            <el-radio v-model="radio2" label="2" border>不隐藏</el-radio>
                        </div>
                        <p class="gsname"><span>公司名称显示状态： </span>{{gsname}}</p>
                    </div>
                </div>
                <div class="son flex">
                    <p><i class="iconfont icon-bitian"></i> 所属行业:</p>
                    <el-select v-model="value" placeholder="请选择">
                        <el-option
                        v-for="item in list"
                        :key="item.value"
                        :label="item.label"
                        :value="item.value">
                        </el-option>
                    </el-select>
                </div>
                <div class="son flex">
                    <p><i class="iconfont icon-bitian"></i> 注册资本:</p>
                    <input class="input lang ziben" type="text" placeholder="请输入注册资本">
                    <div class="wan">
                        <span>万</span>
                        <el-select v-model="value1" placeholder="请选择">
                            <el-option
                            v-for="item in list1"
                            :key="item.value"
                            :label="item.label"
                            :value="item.value">
                            </el-option>
                        </el-select>
                    </div>
                </div>
                <div class="son flex">
                    <p><i class="iconfont icon-bitian"></i> 成立日期:</p>
                    <el-date-picker
                    v-model="value3"
                    type="datetime"
                    placeholder="选择日期时间">
                    </el-date-picker>
                </div>
                <div class="son flex">
                    <p><i class="iconfont icon-bitian"></i> 经营范围:</p>
                    <textarea class="input lang" placeholder="完整的经营范围更利于快速卖出，请与执照上的经营范围保持统一。"></textarea>
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
                <div class="son flex">
                    <p>热门标签:</p>
                    <el-checkbox-group v-model="checkedCities" @change="handleCheckedCitiesChange">
                    <el-checkbox v-for="city in cities" :label="city" :key="city">{{city}}</el-checkbox>
                    </el-checkbox-group>
                </div>
                <div class="son">
                    <div class="sons">
                        <p><i class="iconfont icon-bitian"></i> 是否有资质:</p>
                        <el-radio v-model="radio3" label="1" @change="changeassets(0,true)" border>有</el-radio>
                        <el-radio v-model="radio3" label="2" @change="changeassets(0,false)" border>无</el-radio>
                    </div>
                    <div class="chilren" v-show="assets[0]">
                        <el-checkbox-group v-model="checkboxGroup1">
                        <el-checkbox-button v-for="city in cities1" :label="city" :key="city">{{city}}</el-checkbox-button>
                        </el-checkbox-group>
                        <textarea class="input" placeholder="完整的呈现资质信息对公司的价值很重要，由于资质分类不全导致你选择其它资质时，务必在此做详细描述。"></textarea>
                    </div>
                </div>
                <div class="son">
                    <div class="sons">
                        <p><i class="iconfont icon-bitian"></i> 是否有商标:</p>
                        <el-radio v-model="radio4" label="1" @change="changeassets(1,true)" border>有</el-radio>
                        <el-radio v-model="radio4" label="2" @change="changeassets(1,false)" border>无</el-radio>
                    </div>
                    <div class="chilren" v-show="assets[1]">
                        <el-checkbox-group v-model="checkboxGroup2">
                        <el-checkbox-button v-for="city in cities2" :label="city" :key="city">{{city}}</el-checkbox-button>
                        </el-checkbox-group>
                        <textarea class="input" placeholder="请具体描述公司商标详情"></textarea>
                    </div>
                </div>
                <div class="son">
                    <div class="sons">
                        <p><i class="iconfont icon-bitian"></i> 是否有网络资产:</p>
                        <el-radio v-model="radio5" label="1" @change="changeassets(2,true)" border>有</el-radio>
                        <el-radio v-model="radio5" label="2" @change="changeassets(2,false)" border>无</el-radio>
                    </div>
                    <div class="chilren" v-show="assets[2]">
                        <el-checkbox-group v-model="checkboxGroup3">
                        <el-checkbox-button v-for="city in cities3" :label="city" :key="city">{{city}}</el-checkbox-button>
                        </el-checkbox-group>
                        <textarea class="input" placeholder="为了更准确的呈现贵司网络资产价值，请务必在此做详细描述。"></textarea>
                    </div>
                </div>
                <div class="son">
                    <div class="sons">
                        <p><i class="iconfont icon-bitian"></i> 是否有车牌指标:</p>
                        <el-radio v-model="radio6" label="1" @change="changeassets(3,true)" border>有</el-radio>
                        <el-radio v-model="radio6" label="2" @change="changeassets(3,false)" border>无</el-radio>
                    </div>
                    <div class="chilren" v-show="assets[3]">
                        <textarea class="input xxx" placeholder="请具体描述公司车牌指标详情。"></textarea>
                    </div>
                </div>
                <div class="son">
                    <div class="sons">
                        <p><i class="iconfont icon-bitian"></i> 是否有专利/著作权:</p>
                        <el-radio v-model="radio7" label="1" @change="changeassets(4,true)" border>有</el-radio>
                        <el-radio v-model="radio7" label="2" @change="changeassets(4,false)" border>无</el-radio>
                    </div>
                    <div class="chilren" v-show="assets[4]">
                        <textarea class="input xxx" placeholder="请具体描述公司专利/著作权。"></textarea>
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
                    <el-radio v-model="radio8" label="1" border>有</el-radio>
                    <el-radio v-model="radio8" label="2" border>无</el-radio>
                </div>
                <div class="son flex">
                    <p><i class="iconfont icon-bitian"></i> 纳税类型:</p>
                    <el-radio v-model="radio9" label="1" border>小规模</el-radio>
                    <el-radio v-model="radio9" label="2" border>一般纳税人</el-radio>
                    <el-radio v-model="radio9" label="3" border>出口纳税人</el-radio>
                    <el-radio v-model="radio9" label="4" border>未核税</el-radio>
                </div>
                <div class="son flex">
                    <p><i class="iconfont icon-bitian"></i> 报税情况:</p>
                    <el-radio v-model="radio10" label="1" border>正常</el-radio>
                    <el-radio v-model="radio10" label="2" border>非正常</el-radio>
                </div>
                <div class="son flex">
                    <p><i class="iconfont icon-bitian"></i> 是否申领过发票:</p>
                    <el-radio v-model="radio11" label="1" border>是</el-radio>
                    <el-radio v-model="radio11" label="2" border>否</el-radio>
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
                    <el-radio v-model="radio12" label="1" border>已开基本户</el-radio>
                    <el-radio v-model="radio12" label="2" border>未开基本户</el-radio>
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
                        <p>转让价格:</p>
                        <el-radio v-model="radio13" label="1" border>免费转</el-radio>
                        <el-radio v-model="radio13" label="2" border>面议</el-radio>
                        <el-radio v-model="radio13" label="3" border>一口价</el-radio>
                    </div>
                    <div class="two sons">
                        <p>其他信息:</p>
                        <textarea class="input lang" placeholder="未尽信息或公司资产，可在此做详细描述。"></textarea>
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
                    <input class="input lang" type="text">
                </div>
                <div class="son flex">
                    <p><i class="iconfont icon-bitian"></i> 联系人:</p>
                    <input class="input lang" type="text">
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
        <div class="button">提交</div>
        <!-- 确认 end -->
    </div>
</template>

<script>
    //引入全国城市列表
    import { regionDataPlus, CodeToText } from "element-china-area-data";
    export default {
        data(){
            return{
                options: regionDataPlus,
                selectedOptions: [],
                assets:[false,false,false,false,false],
                list: [{
                    value: '选项1',
                    label: '行业不限'
                    },{
                    value: '选项2',
                    label: '金融投资'
                    }, {
                    value: '选项3',
                    label: '商贸贸易'
                    }, {
                    value: '选项4',
                    label: '广告传媒'
                    }, {
                    value: '选项5',
                    label: '教育培训'
                    },{
                    value: '选项6',
                    label: '物业地产'
                    },{
                    value: '选项7',
                    label: '经纪中介'
                    },{
                    value: '选项8',
                    label: '建筑装饰'
                    },{
                    value: '选项9',
                    label: '家具建材'
                    },{
                    value: '选项10',
                    label: '通讯网络'
                    },{
                    value: '选项11',
                    label: '实业生产'
                    },{
                    value: '选项12',
                    label: '珠宝服饰'
                    },{
                    value: '选项13',
                    label: '科技信息'
                    },{
                    value: '选项14',
                    label: '印刷包装'
                    },{
                    value: '选项15',
                    label: '餐饮美容'
                    },{
                    value: '选项16',
                    label: '咨询服务'
                    },{
                    value: '选项17',
                    label: '食品农业'
                    },{
                    value: '选项18',
                    label: '会务展览'
                    },{
                    value: '选项19',
                    label: '物流供应链'
                    },{
                    value: '选项20',
                    label: '车牌资质'
                    },{
                    value: '选项21',
                    label: '商标资质'
                    },{
                    value: '选项22',
                    label: '特殊资质'
                    },{
                    value: '选项23',
                    label: '其他行业'
                    }
                ],
                list1:[
                    {
                    value: '选项1',
                    label: '人民币'
                    },
                    {
                    value: '选项2',
                    label: '美元'
                    },
                    {
                    value: '选项3',
                    label: '港币'
                    },
                ],
                value3: '',
                value: '选项1',
                value1: '选项1',
                gsname:"",
                checked: true,
                checkAll: false,
                checkedCities: [],
                isIndeterminate: true,
                cities1: ['上海', '北京', '广州', '深圳'],
                cities2: ['四川', '北京', '广州', '深圳'],
                cities3: ['合肥', '北京', '广州', '深圳'],
                checkboxGroup1: [],
                checkboxGroup2: [],
                checkboxGroup3: [],
                radio1:"",
                radio2:"1",
                radio3:"2",
                radio4:"2",
                radio5:"2",
                radio6:"2",
                radio7:"2",
                radio8:"1",
                radio9:"1",
                radio10:"1",
                radio11:"2",
                radio12:"2",
                radio13:"2",
            }
        },
        methods:{
            handleChange() {
                var loc = "";
                for (let i = 0; i < this.selectedOptions.length; i++) {
                    loc += CodeToText[this.selectedOptions[i]];
                }
                alert(loc);
            },
            handleCheckAllChange(val) {
                this.checkedCities = val ? cityOptions : [];
                this.isIndeterminate = false;
            },
            handleCheckedCitiesChange(value) {
                let checkedCount = value.length;
                this.checkAll = checkedCount === this.cities.length;
                this.isIndeterminate = checkedCount > 0 && checkedCount < this.cities.length;
            },
            //显示 隐藏 资产信息里面的更多选项
            changeassets:function(index,bool){
                this.assets.splice(index,1,bool)
                console.log(this.assets)
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
            width:900px;
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
                    width:120px;
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