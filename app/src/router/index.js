//配置路由的地方
import Vue from "vue";
import VueRouter from "vue-router";
//使用插件
Vue.use(VueRouter)
//引入路由组件
import Home from '@/pages/Home'
import Login from '@/pages/Login'
import Register from '@/pages/Register'
import Search from '@/pages/Search'


//配置路由
export default new VueRouter({
    routes:[
        {
        path:"/home",
        component:Home,
        meta:{showFooter:true}
        },  {
        path:"/login",
        component:Login,
        meta:{showFooter:false}
        },
        {
        path:"/register",
        component:Register,
        meta:{showFooter:false}
        },{
        path:"/search/:keyword?",
        component:Search,
        meta:{showFooter:true},
        name:"search",
            //路由组件能不能传递props参数？
            //布尔值写法：params
         //props:true

        },
        //重定向到Home页面
        {
        path:"/",
        redirect:"home"
        }
    ]
})