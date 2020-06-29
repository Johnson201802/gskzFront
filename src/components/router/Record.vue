<template>
    <div class="Record">
        <!-- 发布管理 start -->
        <div class="more">
            <div class="moretop">
                <span class="span" @click="jump('/PersonalCenter/Resources')">发布公司转让资源</span>
            </div>
            <div class="link">
                <p :class="{'show' : moreshow == 1}" @click="moreshow = 1">发布的公司</p>
                <p :class="{'show' : moreshow == 2}" @click="moreshow = 2">发布的求购</p>
                <p :class="{'show' : moreshow == 3}" @click="moreshow = 3">发布的代办</p>
                <p :class="{'show' : moreshow == 4}" @click="moreshow = 4">发布的商标</p>
            </div>
            <div class="list">
                <div v-show="moreshow == 1" class="company one">
                    <div class="name">
                        <p>名称</p>
                        <p>状态</p>
                        <p>浏览量</p>
                        <!-- <p>海报浏览量</p> -->
                        <p>发布时间</p>
                        <p class="caozuo">操作</p>
                    </div>
                    <div class="result">
                        <span>1</span>
                        <p>上海环球金融中心</p>
                        <p>审核中</p>
                        <p>0</p>
                        <p>0</p>
                        <p>2018-06-21 8:20:10</p>
                        <div>
                            <!-- <span class="rdone" @click="ismsg = true">驳回原因</span> -->
                            <span class="rdtwo">在线客服</span>
                            <span class="rdthree">修改</span>
                            <span class="rdfour">删除</span>
                        </div>
                    </div>
                </div>
                <div v-show="moreshow == 2" class="look one">
                    <div class="name">
                        <p>名称</p>
                        <p>类型</p>
                        <p>状态</p>
                        <p>浏览量</p>
                        <!-- <p>海报浏览量</p> -->
                        <p>发布时间</p>
                        <p class="caozuo">操作</p>
                    </div>
                    <div class="result">
                        <span>1</span>
                        <p>上海环球金融中心</p>
                        <p>审核中</p>
                        <p>0</p>
                        <p>0</p>
                        <p>2018-06-21 8:20:10</p>
                        <div>
                            <!-- <span class="rdone" @click="ismsg = true">驳回原因</span> -->
                            <span class="rdtwo">在线客服</span>
                            <span class="rdthree">修改</span>
                            <span class="rdfour">删除</span>
                        </div>
                    </div>
                </div>
                <div v-show="moreshow == 3" class="sth one">
                    <div class="name">
                        <p>名称</p>
                        <p>状态</p>
                        <p>浏览量</p>
                        <p>发布时间</p>
                        <p class="caozuo">操作</p>
                    </div>
                    <div class="result">
                        <span>1</span>
                        <p>上海环球金融中心</p>
                        <p>审核中</p>
                        <p>0</p>
                        <p>2018-06-21 8:20:10</p>
                        <div>
                            <!-- <span class="rdone" @click="ismsg = true">驳回原因</span> -->
                            <span class="rdtwo">在线客服</span>
                            <span class="rdthree">修改</span>
                            <span class="rdfour">删除</span>
                        </div>
                    </div>
                </div>
                <div v-show="moreshow == 4" class="trademark one">
                    <div class="name">
                        <p>商标注册号</p>
                        <p>价格</p>
                        <p>状态</p>
                        <p>浏览量</p>
                        <!-- <p>海报浏览量</p> -->
                        <p>发布时间</p>
                        <p class="caozuo">操作</p>
                    </div>
                    <div class="result">
                        <span>1</span>
                        <p>241862562sdx5745</p>
                        <p>2500000000</p>
                        <p>审核中</p>
                        <p>0</p>
                        <p>0</p>
                        <p>2018-06-21 8:20:10</p>
                        <div>
                            <!-- <span class="rdone" @click="ismsg = true">驳回原因</span> -->
                            <span class="rdtwo">在线客服</span>
                            <span class="rdthree">修改</span>
                            <span class="rdfour">删除</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <!-- 发布管理 end -->

        <!-- 驳回原因弹框 start -->
        <!-- <div class="rejected" v-if="ismsg">
            <div class="msg">
                <span>提示 :</span>
                <p>请输入完整公司信息</p>
                <div class="button" @click="ismsg = false">确定</div>
            </div>
        </div> -->
        <!-- 驳回原因弹框 start -->
    </div>
</template>

<script>
export default {
    data(){
        return{
            moreshow:1,
            ismsg:false
        }
    },
    methods:{
        //跳转
        jump:function(url){
            this.$router.push(url)
        }
    }
}   
</script>

<style lang="less">
    .Record{
        padding-top:20px;
        flex: 1;
        .more{
            background-color: #F8F8F8;
            border-bottom: 20px solid #EFEFEF;
            font-size: 12px;
            .moretop{
                display: flex;
                padding:4px 10px;
                justify-content: space-between;
                border-bottom: 1px solid #ddd;
                .span{
                    width:140px;
                    background-color: #409EFF;
                    line-height: 34px;
                    border-radius: 6px;
                    color:#fff;
                    text-align: center;
                }
            }
            .link{
                display: flex;
                line-height: 40px;
                color:#909399;
                font-size: 12px;
                p{
                    width:120px;
                    text-align: center;
                }
                .show{
                    background-color: #fff;
                    color:skyblue
                }
            }
            .list{
                background-color: #fff;
                .one{
                    .name{
                        display: flex;
                        justify-content: space-between;
                        line-height: 50px;
                        border-bottom: 1px solid #ddd;
                        font-size: 12px;
                        p{
                            flex:1;
                            color:#666;
                            text-align: center;
                        }
                        .caozuo{
                            flex: 2;
                            text-align: left;
                        }
                    }
                }
                .result{
                    display: flex;
                    justify-content: space-between;
                    padding-left:10px;
                    line-height: 50px;
                    border-bottom: 1px solid #ddd;
                    p{
                        flex:1;
                        color:#666;
                        text-align: center;
                        overflow: hidden;
                        text-overflow:ellipsis;
                        white-space: nowrap; 
                    }
                    div{
                        flex: 2;
                        span{
                            display: inline-block;
                            font-size: 12px;
                            padding:0 15px;
                            line-height: 28px;
                            margin-right:5px;
                            border-radius: 2px;
                            text-align: center;
                            color:#fff;
                        }
                        .rdone{
                            background:#F56C6C;
                        }
                        .rdtwo{
                            background:#83CD5E;
                        }
                        .rdthree{
                            background:#909399;
                        }
                        .rdfour{
                            background:#F56C6C;
                        }
                    }
                }
            }
        }
        .rejected{
            position: fixed;
            z-index: 9999;
            top: 0;
            bottom: 0;
            left: 0;
            right: 0;
            background-color: rgba(0, 0, 0, .5);
            .msg{
                position: absolute;
                top: 0;
                bottom: 0;
                left: 0;
                right: 0;
                margin: auto;
                width:350px;
                height:200px;
                background-color: #fff;
                border-radius: 6px;
                span{
                    display:block;
                    margin-top:20px;
                    text-indent: 20px;
                }
                p{
                    text-align: center;
                    margin-top:20px;
                    font-size: 16px;
                }
                .button{
                    position: absolute;
                    left: 0;
                    right: 0;
                    bottom: 20px;
                    width:300px;
                    text-align: center;
                    line-height: 40px;
                    color: #fff;
                    background-color: #409eff;
                    border-color: #409eff;
                    border-radius: 6px;
                    margin:auto;
                }
            }
        }
    }
</style>