<template>
    <div class="Transfer">
        <Header :is_index="true"></Header>
        <div id="mapContainer" style="width:100%;height:600px"></div>
        <goTop></goTop>
        <Footer></Footer>
    </div>
</template>


<script>
import axios from '../../api/axios'
export default {
	data(){
		return{
			lng:'',
			lat:'',
			lac_name:'',
			markersArray:[],
			map:undefined
		}
	},
    mounted() {
        this.getLocation();
      },
    methods: {
		async getLocation(){
				let that = this
			    await axios('index/index/getIP').then((resonse)=>{
					this.lng = resonse.content.point.x
					this.lat = resonse.content.point.y
			    	this.lac_name = resonse.content.address
					that.bdMap()
			    })
			},
        async bdMap() {
          //创建地图
          this.map = new BMap.Map("mapContainer");
		  const geoc = new BMap.Geocoder(); //地址解析对象  
		  var geolocation = new BMap.Geolocation();
          let point = new BMap.Point(this.lng,this.lat);
          this.map.centerAndZoom(point,6); // 创建点坐标
          this.map.addControl(new BMap.NavigationControl());
          this.map.enableScrollWheelZoom(true);//允许鼠标滚动缩放
          // 初始化地图， 设置中心点坐标和地图级别
          let marker = new BMap.Marker(point);
          this.map.addOverlay(marker); //添加覆盖物
          marker.setAnimation(BMAP_ANIMATION_BOUNCE); //跳动的动画
           //添加覆盖物文字
          let label = new BMap.Label(this.lac_name, {
            offset: new BMap.Size(20, -25)
          });
          marker.setLabel(label);
		  this.map.addEventListener("click", this.showInfo);
        },
		showInfo(e) {
		        console.log(e.point.lng)
		        console.log(e.point.lat)
				const geoc = new BMap.Geocoder(); //地址解析对象 
		        geoc.getLocation(e.point, function(rs) {
		            var addComp = rs.addressComponents;
		            var address = addComp.province + addComp.city + addComp.district + addComp.street + addComp.streetNumber;
					console.log(address)
		        });
		        this.addMarker({"lng":e.point.lng,"lat":e.point.lat,"url":"http://www.baidu.com","id":1,"name":"p1"});
		    },
			addMarker(point) {
			    var marker = new BMap.Marker(point);
			    this.markersArray.push(marker);
			    // clearOverlays();
			    this.map.addOverlay(marker);
				this.showInfo2(marker,point)
			},
			showInfo2(thisMarker,point) {
			    //获取点的信息
			    var sContent = 
			    '<ul style="margin:0 0 5px 0;padding:0.2em 0">'  
			    +'<li style="line-height: 26px;font-size: 15px;">'  
			    +'<span style="width: 50px;display: inline-block;">id：</span>' + point.id + '</li>'  
			    +'<li style="line-height: 26px;font-size: 15px;">'  
			    +'<span style="width: 50px;display: inline-block;">名称：</span>' + point.name + '</li>'  
			    +'<li style="line-height: 26px;font-size: 15px;"><span style="width: 50px;display: inline-block;">查看：</span><a href="'+point.url+'">详情</a></li>'  
			    +'</ul>';
			    var infoWindow = new BMap.InfoWindow(sContent); //创建信息窗口对象
			    thisMarker.openInfoWindow(infoWindow); //图片加载完后重绘infoWindow
			}
	}
}
</script>


<style scoped lang="less">
    
</style>