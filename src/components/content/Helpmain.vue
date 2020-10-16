<template>
	<div class="container">
		<div class="position">
			<span class="iconfont icon-V"></span>
		</div>
	</div>
</template>

<script>
	import axios from '../../api/axios'
	import Cookies from 'js-cookie'
	import scroll from 'vue-seamless-scroll'
	export default {
		components: {
			scroll
		},
		data() {
			return {
				
			}
		},
		methods:{
			
		}
}
</script>

<style scoped lang="less">
	.container{
		width: 100%;
		display: flex;
		justify-content: center;
		.position{
			width: 1200px;
			height: 1200px;
			border-top: 1px solid #eeeeee;
		}
		
	}
</style>
