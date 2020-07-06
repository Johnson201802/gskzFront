<template>
    <div class="Sbresources">
        <div class="father">
            <!-- 基本信息 start -->
            <div class="top">
                <span></span>
                <p class="p">基本信息</p>
            </div>
            <!-- 基本信息 end -->

            <!-- 商标注册号 start -->
            <div class="son flex shilie">
                <p><i class="iconfont icon-bitian"></i> 商标注册号:</p>
                <input class="input lang" v-model="gsname" type="text" placeholder="请填写商标注册号">
            </div>
            <!-- 商标注册号 end -->

            <!-- 商标类别 start -->
            <div class="son flex">
                <p><i class="iconfont icon-bitian"></i> 商标类别:</p>
                <el-select v-model="value" placeholder="请选择">
                    <el-option
                    v-for="item in list"
                    :key="item.value"
                    :label="item.label"
                    :value="item.value">
                    </el-option>
                </el-select>
            </div>
            <!-- 商标类别 end -->

            <!-- 价格 start -->
            <div class="son flex">
                <p><i class="iconfont icon-bitian"></i> 价格:</p>
                <div class="chilren1">
                    <input type="text" placeholder="不填默认面议。">
                    <span>元</span>
                </div>
            </div>
            <!-- 价格 end -->

            <!-- 商标描述 start -->
            <div class="son flex">
                <p><i class="iconfont icon-bitian"></i> 商标描述:</p>
                <textarea placeholder="请填写商标描述"></textarea>
            </div>
            <!-- 商标描述 end -->

            <!-- 确认 start -->
                <div class="button">提交</div>
            <!-- 确认 end -->
        </div>
    </div>
</template>


<script>
    export default {
        data(){
            return{
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
                value: '选项1',
            }
        }
    }
</script>


<style lang="less">
    .Sbresources{
        flex: 1;
        font-size: 14px;
        .father{
            width:800px;
            margin:auto;
        }
        .top{
            width:800px;
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
        textarea{
            width:420px;
            resize:none;
            border:1px solid #888;
            text-indent: 10px;
            outline: none;
            border-radius: 6px;
            &:focus{
                border:1px solid #66B1FF;
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
            .chilren1{
                display: flex;
                input{
                    line-height: 38px;
                    width:360px;
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
                border:1px solid #888;
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
        .shilie{
            margin-top:30px;
            .input{
                width:300px;
                border-radius:6px;
            }
        }
        textarea{
            height:100px;
            line-height: 30px;
        }
        .button{
            width:300px;
            text-align: center;
            line-height: 40px;
            color: #fff;
            background-color: #F3A54D;
            border-color: #F3A54D;
            border-radius: 6px;
            margin:40px auto;
        }
    }
</style>