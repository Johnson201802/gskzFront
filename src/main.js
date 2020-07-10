import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import less from 'less'
import vueSwiper from 'vue-awesome-swiper'
import ElementUI from 'element-ui';

import 'swiper/css/swiper.css'
import 'element-ui/lib/theme-chalk/index.css';
import Header from "./components/content/Header"
import Footer from "./components/content/Footer"
import MySwiper from "./components/content/mySwiper"
import TransferMain from "./components/content/transferMain"
import TmallMain from "./components/content/TmallMain"
import DetailsTmall from "./components/content/DetailsTmall"
import DetailsMain from "./components/content/DetailsMain"
import Navigation from "./components/content/Navigation"
import SbMain from "./components/content/SbMain"
import SbMian from "./components/content/SbMian"
import goTop from "./components/content/goTop"
import DemandMain from "./components/content/DemandMain"
import DbservicesMain from "./components/content/DbservicesMain"
import QuestionMain from "./components/content/QuestionMain"
import pageLogin from "./components/content/pageLogin"
import Requirements from "./components/content/Requirements"


Vue.component("Header",Header),
Vue.component("Footer",Footer),
Vue.component("MySwiper",MySwiper),
Vue.component("TransferMain",TransferMain),
Vue.component("TmallMain",TmallMain),
Vue.component("DetailsMain",DetailsMain),
Vue.component("Navigation",Navigation),
Vue.component("SbMain",SbMain),
Vue.component("goTop",goTop),
Vue.component("DemandMain",DemandMain),
Vue.component("QuestionMain",QuestionMain),
Vue.component("pageLogin",pageLogin),
Vue.component("DetailsTmall",DetailsTmall),
Vue.component("DbservicesMain",DbservicesMain),
Vue.component("SbMian",SbMian),
Vue.component("Requirements",Requirements),


Vue.use(ElementUI)
Vue.use(less)
Vue.use(vueSwiper)
Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
