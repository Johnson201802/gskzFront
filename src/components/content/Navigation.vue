<template>
    <div class="Navigation">
        <h1>
            <img src="../../assets/images/Logo.png" alt="">
        </h1>
        <el-row class="tac">
            <el-col :span="12">
                <el-menu
                default-active="1"
                class="el-menu-vertical-demo navlink"
                @open="handleOpen"
                :unique-opened=true
                @close="handleClose">
                    <el-submenu index="1">
                        <template slot="title">
                        <i class="el-icon-user-solid"></i>
                        <span>账户中心</span>
                        </template>
                        <el-menu-item-group>
                        <el-menu-item @click="jump('/PersonalCenter/Personal')" index="1-1">个人中心</el-menu-item>
                        <el-menu-item @click="jump('/PersonalCenter/Personaldata')" index="1-2">个人资料</el-menu-item>
                        <el-menu-item @click="jump('/PersonalCenter/Realname')" index="1-3">认证中心</el-menu-item>
                        <el-menu-item @click="jump('/PersonalCenter/')" index="1-4">任务中心</el-menu-item>
                        <el-menu-item @click="jump('/PersonalCenter/')" index="1-5">订阅中心</el-menu-item>
                        <el-menu-item @click="jump('/PersonalCenter/')" index="1-6">每日签到</el-menu-item>
                        <el-menu-item @click="jump('/PersonalCenter/')" index="1-7">账户明细</el-menu-item>
                        <el-menu-item @click="jump('/PersonalCenter/')" index="1-8">我的消息</el-menu-item>
                        <el-menu-item @click="jump('/PersonalCenter/ChangePassword')" index="1-9">修改密码</el-menu-item>
                        </el-menu-item-group>
                    </el-submenu>
                    <el-submenu index="2">
                        <template slot="title">
                        <i class="el-icon-s-promotion"></i>
                        <span>发布管理</span>
                        </template>
                        <el-menu-item-group>
                        <el-menu-item @click="jump('/PersonalCenter/Record')" index="2-1">发布记录</el-menu-item>
                        <el-menu-item @click="jump('/PersonalCenter/Resources')" index="2-2">发布公司资源</el-menu-item>
                        <el-submenu index="2-3">
                            <template slot="title">热门求购</template>
                            <el-menu-item @click="jump('/PersonalCenter/Personalcompany')" index="2-3-1">求购公司</el-menu-item>
                            <el-menu-item @click="jump('/PersonalCenter/Personaltrademark')" index="2-3-2">求购商标</el-menu-item>
                            <el-menu-item @click="jump('/PersonalCenter/Personalqualification')" index="2-3-3">求购资质</el-menu-item>
                            <el-menu-item @click="jump('/PersonalCenter/PersonalOnlinestore')" index="2-3-4">求购网店</el-menu-item>
                        </el-submenu>
                        <el-menu-item @click="jump('/PersonalCenter/Sbresources')" index="2-4">发布商标资源</el-menu-item>
                        <el-menu-item @click="jump('/PersonalCenter/Releasewd')" index="2-5">发布网店</el-menu-item>
                        </el-menu-item-group>
                    </el-submenu>
                    <el-submenu index="3">
                        <template slot="title">
                        <i class="el-icon-s-grid"></i>
                        <span>身边服务</span>
                        </template>
                        <el-menu-item-group>
                        <el-menu-item index="3-1">服务商信息</el-menu-item>
                        <el-menu-item index="3-2">发布服务</el-menu-item>
                        <el-menu-item index="3-3">服务列表</el-menu-item>
                        <el-menu-item index="3-4">预约记录</el-menu-item>
                        </el-menu-item-group>
                    </el-submenu>
                    <el-submenu index="4">
                        <template slot="title">
                        <i class="el-icon-star-on"></i>
                        <span>我的关注</span>
                        </template>
                        <el-menu-item-group>
                        <el-menu-item index="4-1">浏览足迹</el-menu-item>
                        <el-menu-item index="4-2">我的收藏</el-menu-item>
                        <el-menu-item index="4-3">我的关注</el-menu-item>
                        </el-menu-item-group>
                    </el-submenu>
                </el-menu>
            </el-col>
        </el-row>
    </div>
</template>

<script>
    export default {
        methods: {
            handleOpen(key, keyPath) {
                console.log(key, keyPath);
            },
            handleClose(key, keyPath) {
                console.log(key, keyPath);
            },
            //跳转
            jump:function(url){
                this.$router.push(url)
            }
        }
    }
</script>

<style lang="less">
    .Navigation{
        position: fixed;
        top: 40px;
        left: 0;
        min-height: 100%;
        border-right:1px solid #dcdfe6;
        h1{
            margin:10px 0 0 10px 
        }
        img{
            width:180px;
            height:50px;
        }
        .tac{
            .navlink{
                width:200px;
                border:none;
            }
        }
    }
</style>