<template>
    <!-- goTop start -->
    <div class="footer">
        <!-- 扫码客服 start -->
        <div class="Customer">
            <i class="iconfont icon-unie737"></i>
            <div class="ewm">
                <img src="https://www.yizhuanweb.com/uploads/20200611/6a60ca36b2fd3d9adae989e28544d6f6.png" alt="">
                <p>扫码联系客服</p>
            </div>
        </div>
        <!-- 扫码客服 end -->

        <!-- 置顶 start -->
        <div class="gotop" v-show="gotop" @click="toTop">
            <i class="iconfont icon-zhiding"></i>
        </div>
        <!-- 置顶 end -->
    </div>
    <!-- goTop end -->
</template>


<script>
export default {
    data(){
        return{
            gotop: false
        }
    },
    mounted() {
    　　// 此处true需要加上，不加滚动事件可能绑定不成功
        window.addEventListener("scroll", this.handleScroll, true);
    },
    methods: {
        handleScroll() {
            let scrolltop = document.documentElement.scrollTop || document.body.scrollTop;
            scrolltop > 30 ? (this.gotop = true) : (this.gotop = false);
        },
        toTop() {
            let top = document.documentElement.scrollTop || document.body.scrollTop;
            // 实现滚动效果 
            const timeTop = setInterval(() => {
                document.body.scrollTop = document.documentElement.scrollTop = top -= 50;
                if (top <= 0) {
                    clearInterval(timeTop);
                }
            }, 10);
        }
    }
}
</script>



<style lang="less">
    .footer {
        .gotop,.Customer{
            text-align: center;
            z-index: 99999999;
            position: fixed;
            right: 30px;
            bottom: 30px;
            cursor: pointer;
            width:50px;
            line-height: 50px;
            height:50px;
            border-radius: 50%;
            background:#E1E1E1;
            transition: .3s;
            color: #000;
            &:hover{
                background-color: red;
                color:#fff;
            }    
        }
        .Customer{
            bottom: 85px;
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
                top: -70px;
                left: -180px;
                background-color: #fff;
                border:1px solid #E1E1E1;
                img{
                    width:130px;
                    height:130px;
                    margin:20px auto 0;
                }
                p{
                    margin-top:-16px;
                    line-height: 24px;
                    text-align: center;
                    color:#888;
                    font-size: 14px;
                }
            }
        }
    }
</style>