<template>
    <div class='Releasewd'>
        <div class="father">
            <!-- 基本信息 start -->
            <div class="top">
                <span></span>
                <p class="p">基本信息</p>
            </div>
            <!-- 基本信息 end -->

            <!-- 标题 start -->
            <div class="son">
                <p><i class="iconfont icon-bitian"></i> 标题:</p>
                <input class="input" type="text" maxlength="30" placeholder="标题不得超出三十个字!">
            </div>
            <!-- 标题 end -->

            <!-- 主营类目 start -->
            <div class="son">
                <p><i class="iconfont icon-bitian"></i> 主营类目:</p>
                <el-select v-model="value" multiple placeholder="请选择">
                    <el-option
                    v-for="item in list"
                    :key="item.value"
                    :label="item.label"
                    :value="item.value">
                    </el-option>
                </el-select>
            </div>
            <!-- 主营类目 end -->

            <!-- 店铺类型 start -->
            <div class="son">
                <p><i class="iconfont icon-bitian"></i> 店铺类型:</p>
                <el-select v-model="value1" placeholder="请选择">
                    <el-option
                    v-for="item in list1"
                    :key="item.value"
                    :label="item.label"
                    :value="item.value">
                    </el-option>
                </el-select>
            </div>
            <!-- 店铺类型 end -->

            <!-- 地区 start -->
            <div class="son">
                <p><i class="iconfont icon-bitian"></i> 地区:</p>
                <el-cascader
                    size="large"
                    :options="options"
                    v-model="selectedOptions"
                    @change="handleChange"
                >
                </el-cascader>
            </div>
            <!-- 地区 end -->

            <!-- 出售价格 start -->
            <div class="son flex">
                <p><i class="iconfont icon-bitian"></i> 出售价格:</p>
                <div class="chilren">
                    <input type="text">
                    <span>元</span>
                </div>
            </div>
            <!-- 出售价格 end -->

            <!-- 卖家到手价 start -->
            <div class="son flex">
                <p><i class="iconfont icon-bitian"></i> 卖家到手价:</p>
                <div class="chilren">
                    <input type="text">
                    <span>元</span>
                </div>
            </div>
            <!-- 卖家到手价 end -->

            <!-- 店铺名称 start -->
            <div class="son">
                <p>店铺名称:</p>
                <input class="input" type="text" maxlength="30" placeholder="请输入店铺名称">
            </div>
            <!-- 店铺名称 end -->

            <!-- 店铺链接 start -->
            <div class="son">
                <p>店铺链接:</p>
                <input class="input" type="text" maxlength="30" placeholder="请输入店铺链接">
            </div>
            <!-- 店铺链接 end -->

            <!-- 新店 start -->
            <div class="son">
                <p><i class="iconfont icon-bitian"></i> 新店:</p>
                <el-radio v-model="radio" label="1" border size="medium">是</el-radio>
                <el-radio v-model="radio" label="2" border size="medium">否</el-radio>
            </div>
            <!-- 新店 end -->

            <!-- 店铺消费者保证金 start -->
            <div class="son flex">
                <p><i class="iconfont icon-bitian"></i> 店铺消费者保证金:</p>
                <div class="chilren">
                    <input type="text">
                    <span>元</span>
                </div>
            </div>
            <!-- 店铺消费者保证金 end -->

            <!-- 保证金需要退还 start -->
            <div class="son">
                <p><i class="iconfont icon-bitian"></i> 保证金需要退还:</p>
                <el-radio v-model="radio1" label="1" border size="medium">是</el-radio>
                <el-radio v-model="radio1" label="2" border size="medium">否</el-radio>
            </div>
            <!-- 保证金需要退还 end -->

            <!-- 技术年费/平台年费 start -->
            <div class="son flex">
                <p><i class="iconfont icon-bitian"></i> 技术年费/平台年费:</p>
                <div class="chilren">
                    <input type="text">
                    <span>元</span>
                </div>
            </div>
            <!-- 技术年费/平台年费 end -->

            <!-- 年费需要退还 start -->
            <div class="son">
                <p><i class="iconfont icon-bitian"></i> 年费需要退还:</p>
                <el-radio v-model="radio2" label="1" border size="medium">退还一半</el-radio>
                <el-radio v-model="radio2" label="2" border size="medium">全额退还</el-radio>
                <el-radio v-model="radio2" label="3" border size="medium">不需要退还</el-radio>
            </div>
            <!-- 年费需要退还 end -->

            <!-- 出售人姓名 start -->
            <div class="son">
                <p><i class="iconfont icon-bitian"></i> 出售人姓名:</p>
                <input class="input" type="text" maxlength="30" placeholder="请输入出售人姓名">
            </div>
            <!-- 出售人姓名 end -->

            <!-- 出售人手机 start -->
            <div class="son">
                <p><i class="iconfont icon-bitian"></i> 出售人手机:</p>
                <input class="input" type="text" maxlength="30" placeholder="请输入出售人手机号">
            </div>
            <!-- 出售人手机 end -->

            <!-- 出售人QQ start -->
            <div class="son">
                <p><i class="iconfont icon-bitian"></i> 出售人QQ:</p>
                <input class="input" type="text" maxlength="30" placeholder="请输入出售人QQ号">
            </div>
            <!-- 出售人QQ end -->

            <!-- 出售人微信 start -->
            <div class="son">
                <p><i class="iconfont icon-bitian"></i> 出售人微信:</p>
                <input class="input" type="text" maxlength="30" placeholder="请输入出售人微信号">
            </div>
            <!-- 出售人微信 end -->

            <!-- 经营状态 start -->
            <div class="son">
                <p><i class="iconfont icon-bitian"></i> 经营状态:</p>
                <el-radio v-model="radio3" label="1" border size="medium">近期没有经营</el-radio>
                <el-radio v-model="radio3" label="2" border size="medium">近期仍在经营</el-radio>
            </div>
            <!-- 经营状态 end -->

            <!-- 店铺标签 start -->
            <div class="son">
                <p><i class="iconfont icon-bitian"></i> 店铺标签:</p>
                <div class="duoxuan">
                    <el-checkbox-group v-model="checkedCities" @change="handleCheckedCitiesChange">
                        <el-checkbox v-for="city in cities" :label="city" :key="city">{{city}}</el-checkbox>
                    </el-checkbox-group>
                </div>
            </div>
            <!-- 店铺标签 end -->

            <!-- 营业指标 start -->
            <div class="son">
                <p><i class="iconfont icon-bitian"></i> 营业指标:</p>
                <el-radio v-model="radio4" label="1" border size="medium">达成</el-radio>
                <el-radio v-model="radio4" label="2" border size="medium">未达成</el-radio>
            </div>
            <!-- 营业指标 end -->

            <!-- 核心卖点 start -->
            <div class="son">
                <p><i class="iconfont icon-bitian"></i> 核心卖点:</p>
                <textarea placeholder="请按 1、主营产品， 2、违规扣分情况，3、有无贷款，4、其他情况 来填写"></textarea>
            </div>
            <!-- 核心卖点 end -->

            <!-- 店铺名称 start -->
            <div class="son">
                <p><i class="iconfont icon-bitian"></i> 店铺名称:</p>
                <input class="input" type="text" maxlength="30" placeholder="请输入店铺名称">
            </div>
            <!-- 店铺名称 end -->

            <!-- 虚拟占比 start -->
            <div class="son">
                <p><i class="iconfont icon-bitian"></i> 虚拟占比:</p>
                <el-select v-model="value2" placeholder="请选择">
                    <el-option
                    v-for="item in list2"
                    :key="item.value"
                    :label="item.label"
                    :value="item.value">
                    </el-option>
                </el-select>
                <span class="sonspan">%</span>
            </div>
            <!-- 虚拟占比 end -->

            <!-- 好评率 start -->
            <div class="son">
                <p><i class="iconfont icon-bitian"></i> 好评率:</p>
                <el-select v-model="value3" placeholder="请选择">
                    <el-option
                    v-for="item in list3"
                    :key="item.value"
                    :label="item.label"
                    :value="item.value">
                    </el-option>
                </el-select>
                <span class="sonspan">%</span>
            </div>
            <!-- 好评率 end -->

            <!-- 描述相符 start -->
            <div class="son">
                <p><i class="iconfont icon-bitian"></i> 描述相符:</p>
                <el-radio v-model="radio5" label="1" border size="medium">高于同行业</el-radio>
                <el-radio v-model="radio5" label="2" border size="medium">于同行业持平</el-radio>
                <el-radio v-model="radio5" label="3" border size="medium">低于同行业</el-radio>
            </div>
            <!-- 描述相符 end -->

            <!-- 服务质量 start -->
            <div class="son">
                <p><i class="iconfont icon-bitian"></i> 服务质量:</p>
                <el-radio v-model="radio6" label="1" border size="medium">高于同行业</el-radio>
                <el-radio v-model="radio6" label="2" border size="medium">于同行业持平</el-radio>
                <el-radio v-model="radio6" label="3" border size="medium">低于同行业</el-radio>
            </div>
            <!-- 服务质量 end -->

            <!-- 物流服务 start -->
            <div class="son">
                <p><i class="iconfont icon-bitian"></i> 物流服务:</p>
                <el-radio v-model="radio7" label="1" border size="medium">高于同行业</el-radio>
                <el-radio v-model="radio7" label="2" border size="medium">于同行业持平</el-radio>
                <el-radio v-model="radio7" label="3" border size="medium">低于同行业</el-radio>
            </div>
            <!-- 物流服务 end -->

            <!-- 一般违规扣分 start -->
            <div class="son">
                <p><i class="iconfont icon-bitian"></i> 一般违规扣分:</p>
                <input class="input" type="text" maxlength="30" placeholder="0">
            </div>
            <!-- 一般违规扣分 end -->

            <!-- 严重违规扣分 start -->
            <div class="son">
                <p><i class="iconfont icon-bitian"></i> 严重违规扣分:</p>
                <input class="input" type="text" maxlength="30" placeholder="0">
            </div>
            <!-- 严重违规扣分 end -->

            <!-- 假冒商品扣分 start -->
            <div class="son">
                <p><i class="iconfont icon-bitian"></i> 假冒商品扣分:</p>
                <input class="input" type="text" maxlength="30" placeholder="0">
            </div>
            <!-- 假冒商品扣分 end -->

            <!-- 创店时间 start -->
            <div class="son">
                <p><i class="iconfont icon-bitian"></i> 创店时间:</p>
                <el-date-picker
                v-model="value4"
                type="year"
                :picker-options="endDateDisabled"
                placeholder="以执照上的成立日期为准">
                </el-date-picker>
            </div>
            <!-- 创店时间 end -->

            <!-- 货源提供 start -->
            <div class="son">
                <p><i class="iconfont icon-bitian"></i> 货源提供:</p>
                <el-radio v-model="radio8" label="1" border size="medium">不提供</el-radio>
                <el-radio v-model="radio8" label="2" border size="medium">提供</el-radio>
            </div>
            <!-- 货源提供 end -->

            <!-- 店铺认证类型 start -->
            <div class="son">
                <p><i class="iconfont icon-bitian"></i> 店铺认证类型:</p>
                <el-radio v-model="radio9" label="1" border size="medium">个人身份证</el-radio>
                <el-radio v-model="radio9" label="2" border size="medium">个体户营业执照</el-radio>
                <el-radio v-model="radio9" label="3" border size="medium">企业营业执照</el-radio>
            </div>
            <!-- 店铺认证类型 end -->

            <!-- 商城类型 start -->
            <div class="son">
                <p><i class="iconfont icon-bitian"></i> 商城类型:</p>
                <el-radio v-model="radio10" label="1" border size="medium">旗舰店</el-radio>
                <el-radio v-model="radio10" label="2" border size="medium">专营店</el-radio>
                <el-radio v-model="radio10" label="3" border size="medium">专卖店</el-radio>
            </div>
            <!-- 商城类型 end -->

            <!-- 商标类型 start -->
            <div class="son">
                <p><i class="iconfont icon-bitian"></i> 商标类型:</p>
                <el-radio v-model="radio11" label="1" border size="medium">无</el-radio>
                <el-radio v-model="radio11" label="2" border size="medium">R标</el-radio>
                <el-radio v-model="radio11" label="3" border size="medium">TM标</el-radio>
            </div>
            <!-- 商标类型 end -->
            
            <!-- 商标类别 start -->
            <div class="son">
                <p>商标类别:</p>
                <div class="duoxuan">
                    <el-checkbox-group v-model="checkedCities1" @change="handleCheckedCitiesChange1">
                        <el-checkbox v-for="city in cities1" :label="city" :key="city">{{city}}</el-checkbox>
                    </el-checkbox-group>
                </div>
            </div>
            <!-- 商标类别 end -->

            <!-- 注册资金 start -->
            <div class="son flex">
                <p><i class="iconfont icon-bitian"></i> 注册资金:</p>
                <div class="chilren">
                    <input type="text">
                    <span>万元</span>
                </div>
            </div>
            <!-- 注册资金 end -->

            <!-- 纳税资质 start -->
            <div class="son">
                <p><i class="iconfont icon-bitian"></i> 纳税资质:</p>
                <el-radio v-model="radio12" label="1" border size="medium">一般纳税人</el-radio>
                <el-radio v-model="radio12" label="2" border size="medium">小规模</el-radio>
            </div>
            <!-- 纳税资质 end -->

            <!-- 一级类目 start -->
            <div class="son">
                <p>一级类目:</p>
                <el-upload
                :class="{hide:hideUpload1}"
                action="https://jsonplaceholder.typicode.com/posts/"
                list-type="picture-card"
                limit=1
                :on-preview="handlePictureCardPreview1"
                :on-change="change1"
                :on-remove="handleRemove1">
                    <i class="el-icon-plus"></i>
                    </el-upload>
                    <el-dialog :visible.sync="dialogVisible1">
                    <img width="100%" :src="dialogImageUrl1" alt="">
                </el-dialog>
            </div>
            <!-- 一级类目 end -->

            <!-- 违规情况截图 start -->
            <div class="son">
                <p>违规情况截图:</p>
                <el-upload
                :class="{hide:hideUpload2}"
                action="https://jsonplaceholder.typicode.com/posts/"
                list-type="picture-card"
                limit=1
                :on-preview="handlePictureCardPreview2"
                :on-change="change2"
                :on-remove="handleRemove2">
                    <i class="el-icon-plus"></i>
                    </el-upload>
                    <el-dialog :visible.sync="dialogVisible2">
                    <img width="100%" :src="dialogImageUrl2" alt="">
                </el-dialog>
            </div>
            <!-- 违规情况截图 end -->

            <!-- 营业额截图 start -->
            <div class="son">
                <p>营业额截图:</p>
                <el-upload
                :class="{hide:hideUpload3}"
                action="https://jsonplaceholder.typicode.com/posts/"
                list-type="picture-card"
                limit=1
                :on-preview="handlePictureCardPreview3"
                :on-change="change3"
                :on-remove="handleRemove3">
                    <i class="el-icon-plus"></i>
                    </el-upload>
                    <el-dialog :visible.sync="dialogVisible3">
                    <img width="100%" :src="dialogImageUrl3" alt="">
                </el-dialog>
            </div>
            <!-- 营业额截图 end -->

            <!-- 续签考核截图 start -->
            <div class="son">
                <p>续签考核截图:</p>
                <el-upload
                :class="{hide:hideUpload4}"
                action="https://jsonplaceholder.typicode.com/posts/"
                list-type="picture-card"
                limit=1
                :on-preview="handlePictureCardPreview4"
                :on-change="change4"
                :on-remove="handleRemove4">
                    <i class="el-icon-plus"></i>
                    </el-upload>
                    <el-dialog :visible.sync="dialogVisible4">
                    <img width="100%" :src="dialogImageUrl4" alt="">
                </el-dialog>
            </div>
            <!-- 续签考核截图 end -->

            <!-- 授权截图 start -->
            <div class="son">
                <p>授权截图:</p>
                <el-upload
                :class="{hide:hideUpload5}"
                action="https://jsonplaceholder.typicode.com/posts/"
                list-type="picture-card"
                limit=1
                :on-preview="handlePictureCardPreview5"
                :on-change="change5"
                :on-remove="handleRemove5">
                    <i class="el-icon-plus"></i>
                    </el-upload>
                    <el-dialog :visible.sync="dialogVisible5">
                    <img width="100%" :src="dialogImageUrl5" alt="">
                </el-dialog>
            </div>
            <!-- 授权截图 end -->

            <!-- 货款额度截图 start -->
            <div class="son">
                <p>货款额度截图:</p>
                <el-upload
                :class="{hide:hideUpload6}"
                action="https://jsonplaceholder.typicode.com/posts/"
                list-type="picture-card"
                limit=1
                :on-preview="handlePictureCardPreview6"
                :on-change="change6"
                :on-remove="handleRemove6">
                    <i class="el-icon-plus"></i>
                    </el-upload>
                    <el-dialog :visible.sync="dialogVisible6">
                    <img width="100%" :src="dialogImageUrl6" alt="">
                </el-dialog>
            </div>
            <!-- 货款额度截图 end -->

             <!-- 店铺描述 start -->
            <div class="son">
                <p><i class="iconfont icon-bitian"></i> 店铺描述:</p>
                <textarea class="miaoshu"></textarea>
            </div>
            <!-- 店铺描述 end -->

            <!-- 确认 start -->
            <div class="button">提交</div>
            <!-- 确认 end -->
        </div>
    </div>
</template>


<script>
    import { regionDataPlus, CodeToText } from "element-china-area-data";

    export default {
        data(){
            return{
                options: regionDataPlus,
                selectedOptions: [],
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
                value:[],
                list1: [{
                    value: '选项1',
                    label: '天猫商城'
                    },{
                    value: '选项2',
                    label: '天猫新店'
                    }
                ],
                list2: [],
                list3: [],
                value1:"",
                value2:"",
                value3:"",
                value4:"",
                radio:"1",
                radio1:"1",
                radio2:"2",
                radio3:"2",
                radio4:"1",
                radio5:"1",
                radio6:"1",
                radio7:"1",
                radio8:"1",
                radio9:"3",
                radio10:"1",
                radio11:"2",
                radio12:"2",
                cities:['上海', '北京', '广州', '深圳','上海', '北京', '广州', '深圳','上海', '北京', '广州', '深圳'],
                checkedCities:[],
                cities1:['上海', '北京', '广州', '深圳','上海', '北京', '广州', '深圳','上海', '北京', '广州', '深圳'],
                checkedCities1:[],
                endDateDisabled: {},

                dialogImageUrl1:"",
                hideUpload1: false,
                limitCount1:1,
                dialogVisible1: false,
                dialogImageUrl2:"",
                hideUpload2: false,
                limitCount2:1,
                dialogVisible2: false,
                dialogImageUrl3:"",
                hideUpload3: false,
                limitCount3:1,
                dialogVisible3: false,
                dialogImageUrl4:"",
                hideUpload4: false,
                limitCount4:1,
                dialogVisible4: false,
                dialogImageUrl5:"",
                hideUpload5: false,
                limitCount5:1,
                dialogVisible5: false,
                dialogImageUrl6:"",
                hideUpload6: false,
                limitCount6:1,
                dialogVisible6: false,
            }
        },
        created:function(){
            this.init()
        },
        methods:{
            //初始化数据
            init:function(){
                for(let i = 0;i < 100;i++){
                    this.list2.push({value:`选项${i}`,label:`${i}`})
                    this.list3.push({value:`选项${i}`,label:`${i}`})
                }
                // 限制结束日期：当前日期往后的日期都不能选取
                this.endDateDisabled.disabledDate = function (time) {
                    return time.getTime() > Date.now()
                }
            },
            handleChange() {
                var loc = "";
                for (let i = 0; i < this.selectedOptions.length; i++) {
                    loc += CodeToText[this.selectedOptions[i]];
                }
                alert(loc);
            },
            handleChange1() {
                var loc = "";
                for (let i = 0; i < this.selectedOptions.length; i++) {
                    loc += CodeToText[this.selectedOptions[i]];
                }
                alert(loc);
            },
            change1:function(file, fileList){
                this.hideUpload1 = fileList.length >= this.limitCount1
            },
            handleRemove1(file, fileList) {
                this.hideUpload1 = fileList.length >= this.limitCount1;
            },
            handlePictureCardPreview1(file) {
                this.dialogImageUrl1 = file.url;
                this.dialogVisible1 = false;
            },
            change2:function(file, fileList){
                this.hideUpload2 = fileList.length >= this.limitCount2
            },
            handleRemove2(file, fileList) {
                this.hideUpload2 = fileList.length >= this.limitCount2;
            },
            handlePictureCardPreview2(file) {
                this.dialogImageUrl2 = file.url;
                this.dialogVisible2 = false;
            },
            change3:function(file, fileList){
                this.hideUpload3 = fileList.length >= this.limitCount3
            },
            handleRemove3(file, fileList) {
                this.hideUpload3 = fileList.length >= this.limitCount3;
            },
            handlePictureCardPreview3(file) {
                this.dialogImageUrl3 = file.url;
                this.dialogVisible3 = false;
            },
            change4:function(file, fileList){
                this.hideUpload4 = fileList.length >= this.limitCount4
            },
            handleRemove4(file, fileList) {
                this.hideUpload4 = fileList.length >= this.limitCount4;
            },
            handlePictureCardPreview4(file) {
                this.dialogImageUrl4 = file.url;
                this.dialogVisible4 = false;
            },
            change5:function(file, fileList){
                this.hideUpload5 = fileList.length >= this.limitCount5
            },
            handleRemove5(file, fileList) {
                this.hideUpload5 = fileList.length >= this.limitCount5
            },
            handlePictureCardPreview5(file) {
                this.dialogImageUrl5 = file.url;
                this.dialogVisible5 = false;
            },
            change6:function(file, fileList){
                this.hideUpload6 = fileList.length >= this.limitCount6
            },
            handleRemove6(file, fileList) {
                this.hideUpload6 = fileList.length >= this.limitCount6
            },
            handlePictureCardPreview6(file) {
                this.dialogImageUrl6 = file.url;
                this.dialogVisible6 = false;
            }
        }
    }
</script>



<style lang="less">
    .Releasewd{
        flex: 1;
        font-size: 14px;
        .father{
            width:900px;
            margin:auto;
            .top{
                width:900px;
                margin:50px auto 0;
                color:#606266;
                span{
                    display: block;
                    border-bottom: 1px solid #888;
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
            .son{
                line-height: 38px;
                margin: 20px auto;
                display: flex;
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
                .input{
                    flex: 1;
                    outline: none;
                    transition: .3s;
                    resize: none;
                    border:1px solid #888;
                    border-radius: 4px;
                    text-indent: 16px;
                    padding-right: 10px;
                    color:#909399;
                    &:focus{
                        border:1px solid #66B1FF;
                    }
                }
                .duoxuan{
                    flex:1
                }
                .sonspan{
                    display: block;
                    width:150px;
                    line-height: 40px;
                    border-radius: 6px;
                    background-color: #F5F7FA;
                    text-align: center;
                    margin-left:50px;
                }
                textarea{
                    width:420px;
                    height:100px;
                    box-sizing: border-box;
                    padding: 0 10px;
                    line-height: 30px;
                    border-radius: 6px;
                    resize: none;
                    outline: none;
                    border-color:#888;
                    &:focus{
                        border:1px solid #66B1FF;
                    }
                }
                .miaoshu{
                    width:700px;
                    height:350px;
                }
                .chilren{
                    display: flex;
                    input{
                        line-height: 38px;
                        width:624px;
                        border-color:transparent;
                        outline: none;
                        text-indent: 16px;
                        border-radius: 6px 0 0 6px;
                        border:1px solid #888;
                        border-right:none;
                        &:focus{
                            border:1px solid #66B1FF;
                        }
                    }
                    span{
                        display: block;
                        background-color: #F5F7FA;
                        text-align: center;
                        width:54px;
                        line-height: 38px;
                        border-radius: 0 6px 6px 0;
                        border:1px solid #888;
                    }
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
            .hide .el-upload--picture-card {
                display: none;
            }
        }
        
    }
</style>