<template>
    <div id="app">
       <router-view></router-view>
    </div>
</template>

<script>
import Cookies from 'js-cookie'
    export default{
        created(){
            this.init()
        },
        methods:{
            init:function(){
                let data = Cookies.get('token')? true : false
                this.$store.commit('changelogin',data)
            }
        }
    }
</script>


<style lang="less">
</style>
