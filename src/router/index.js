import Vue from 'vue'
import VueRouter from 'vue-router'
import Cookies from 'js-cookie'

const Home = ()=>import("../components/router/Home")
const User = ()=>import("../components/router/User")
const Tmall = ()=>import("../components/router/Tmall")
const DetailsTmall = ()=>import("../components/router/DetailsTmall")
const Requirements = ()=>import("../components/router/Requirements")
const DetailsSb = ()=>import("../components/router/DetailsSb")
const Login = ()=>import("../components/router/Login")
const Record = ()=>import("../components/router/Record")
const Demand = ()=>import("../components/router/Demand")
const Personal = ()=>import("../components/router/Personal")
const Transfer = ()=>import("../components/router/Transfer")
const Question = ()=>import("../components/router/Question")
const Realname = ()=>import("../components/router/Realname")
const Releasewd = ()=>import("../components/router/Releasewd")
const Egistered = ()=>import("../components/router/Egistered")
const Resources = ()=>import("../components/router/Resources")
const Dbservices = ()=>import("../components/router/Dbservices")
const Sbtransfer = ()=>import("../components/router/Sbtransfer")
const Sbresources = ()=>import("../components/router/Sbresources")
const Personaldata = ()=>import("../components/router/Personaldata")
const PersonalCenter = ()=>import("../components/router/PersonalCenter")
const ChangePassword = ()=>import("../components/router/ChangePassword")
const Personalcompany = ()=>import("../components/router/Personalcompany")
const Detailstransfer = ()=>import("../components/router/Detailstransfer")
const Personaltrademark = ()=>import("../components/router/Personaltrademark")
const PersonalOnlinestore = ()=>import("../components/router/PersonalOnlinestore")
const Personalqualification = ()=>import("../components/router/Personalqualification")


Vue.use(VueRouter)


  const routes = [
    {
      path: '/',
      component: Home,
    },
    {
      path: '/Question',
      component: Question,
    },
    {
      path:"/User",
      component: User,
    },
    {
      path:"/Transfer",
      component: Transfer,
    },
    {
      path:"/Dbservices",
      component: Dbservices,
    },
	{
      path:"/Detailstransfer",
      component: Detailstransfer,
    },
    {
      path:"/Tmall",
      component: Tmall,
    },
	{
	  path:"/DetailsTmall",
	  component: DetailsTmall,
	},
	{
	  path:"/Requirements",
	  component: Requirements,
	},
	{
	  path:"/DetailsSb",
	  component: DetailsSb,
	},
    {
      path:"/Sbtransfer",
      component: Sbtransfer,
    },
    {
      path:"/Login",
      component: Login,
    },
    {
      path:"/Egistered",
      component: Egistered,
    },
    {
      path:"/PersonalCenter",
      redirect:"/PersonalCenter/Personal",
      component: PersonalCenter,
      children:[
          {
            path:"/PersonalCenter/Personal",
            component:Personal
          },
          {
            path:"/PersonalCenter/Personaldata",
            component:Personaldata
          },
          {
            path:"/PersonalCenter/Realname",
            component:Realname
          },
          {
            path:"/PersonalCenter/ChangePassword",
            component:ChangePassword
          },
          {
            path:"/PersonalCenter/Record",
            component:Record
          },
          {
            path:"/PersonalCenter/Resources",
            component:Resources
          },
          {
            path:"/PersonalCenter/Personalcompany",
            component:Personalcompany
          },
          {
            path:"/PersonalCenter/Personaltrademark",
            component:Personaltrademark
          },
          {
            path:"/PersonalCenter/Personalqualification",
            component:Personalqualification
          },
          {
            path:"/PersonalCenter/PersonalOnlinestore",
            component:PersonalOnlinestore
          },
          {
            path:"/PersonalCenter/Sbresources",
            component:Sbresources
          },
          {
            path:"/PersonalCenter/Releasewd",
            component:Releasewd
          },
      ],
      beforeEnter: (to, from, next) => {
        let token = Cookies.get('token')
        if(token){
          next()
        }else{
          next('/')
        }
      }
    },
    {
      path:"/Demand",
      component:Demand,
    }
  ]

  const router = new VueRouter({
    base: process.env.BASE_URL,
    routes,
  })

export default router
