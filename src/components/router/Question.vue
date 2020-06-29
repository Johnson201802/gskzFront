<template>
    <div class="Question">
        <!-- <Header></Header> -->
        <QuestionMain></QuestionMain>
        <goTop></goTop>
    </div>
</template>

<script>
export default {
    data(){
        return{

        }
    },
    created() {
        console.log(this.$route.query)
    },
}
</script>

<style lang="less">
    .Question{

    }
</style>