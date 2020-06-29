<template>
    <div class="PersonalOnlinestore">
        <!-- 求购信息 start -->
        <div class="basiclnformation">
            <div class="top">
                <span></span>
                <p class="p">求购信息</p>
            </div>
            <!--求购信息 start -->
            <div class="information">
                <div class="son two flex">
                    <p><i class="iconfont icon-bitian"></i> 求购区域:</p>
                    <el-cascader
                        size="large"
                        :options="options"
                        v-model="selectedOptions"
                        @change="handleChange"
                    >
                    </el-cascader>
                </div>
                <div class="son flex shilie">
                    <p><i class="iconfont icon-bitian"></i> 标题:</p>
                    <input class="input lang" v-model="gsname" type="text" placeholder="请填写求购标题">
                    <span>XXX(预算价格/可不填)求购XX（商标类别）商标</span>
                </div>
                <div class="son flex">
                    <p><i class="iconfont icon-bitian"></i> 网站平台:</p>
                    <el-checkbox-group size="mini"  v-model="checkboxGroup">
                        <el-checkbox-button v-for="city in cities" :label="city" :key="city">{{city}}</el-checkbox-button>
                    </el-checkbox-group>
                </div>
                <div class="son flex">
                    <p><i class="iconfont icon-bitian"></i> 主营类目:</p>
                    <el-checkbox-group size="mini" v-model="checkboxGroup1">
                        <el-checkbox-button v-for="city in cities1" :label="city" :key="city">{{city}}</el-checkbox-button>
                    </el-checkbox-group>
                </div>
                <div class="son flex">
                    <p>求购预算:</p>
                    <div class="chilren1">
                        <input type="text" placeholder="不填默认面议。">
                        <span>元</span>
                    </div>
                </div>
                <div class="son flex el-input">
                    <p><i class="iconfont icon-bitian"></i> 求购详情:</p>
                    <el-input
                    type="textarea"
                    placeholder="请详细描述求购的公司要求，限100字以内。"
                    v-model="textarea"
                    maxlength="100"
                    show-word-limit
                    resize="none"
                    >
                    </el-input>
                </div>
            </div>
            <!--求购信息 start -->
        </div>
        <!-- 求购信息 end -->


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
    import { regionDataPlus, CodeToText } from "element-china-area-data";
    export default {
        data(){
            return{
                options: regionDataPlus,
                selectedOptions: [],
                checkboxGroup: [],
                checkboxGroup1: [],
                checked: true,
                textarea:"",
                cities: ['深圳', '深圳','上海', '北京', '广州', '深圳','京', '广州', '深圳'],
                cities1: ['深圳', '深圳','上海', '北京', '广州', '深圳','京', '广州', '深圳'],
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
        }
    }
</script>


<style lang="less">
    .PersonalOnlinestore{
        flex: 1;
        font-size: 14px;
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
        .information,.contact{
            width:900px;
            margin:50px auto 0;
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
                .el-checkbox-group{
                    flex:1 ;
                    .el-checkbox-button{
                        margin: 0 10px 10px 0;
                        .el-checkbox-button__inner{
                            border-left: 1px solid #DCDFE6;
                        }
                    }
                    .el-checkbox-button.is-focus .el-checkbox-button__inner{
                        border-left: 1px solid #409EFF;
                    }
                    .is-checked .el-checkbox-button__inner{
                        border-left: none;
                    }
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
                .chilren1{
                    display: flex;
                    input{
                        line-height: 38px;
                        width:624px;
                        border-color:transparent;
                        outline: none;
                        text-indent: 16px;
                        border-radius: 6px 0 0 6px;
                        border:1px solid #DCDFE6;
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
                        border:1px solid #DCDFE6;
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
            }
            .flex{
                display: flex;
            }
            .el-input{
                div{
                    width:680px;
                    .el-input__count{
                        height:40%;
                    }
                }
            }
            .shilie{
                .input{
                    width:400px;
                    border-right:none;
                    border-radius:6px 0 0 6px;
                }
                span{
                    display: block;
                    width:330px;
                    border-radius:0 6px 6px 0;
                    color:red;
                    text-align: center;
                    font-size: 12px;
                    background-color: #F5F7FA;
                    border:1px solid #DCDFE6;
                }
            }
            textarea{
                height:100px;
                line-height: 30px;
            }
        }
        .agreement{
            width:900px;
            margin:50px auto 0;
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
