import Vue from 'vue'

import Home from "@/components/Home";
import Todos from "@/components/Todos";
import Router from "vue-router";
import RecipeInner from "@/components/RecipeInner";
import store from "@/vuex/store";



Vue.use(Router)

 let router=new Router({
    mode:'history',
    routes:[
        {
            path:'/',
            component:Home
        },
        {
            path:'/todos',
            component:Todos,
            props:true
        },
        {
            path:'/recepiesinner',
            name:'recepiesinner',
            component: RecipeInner
        }
    ],


})
router.beforeEach((to, from, next) => {

    if (!store.state.isAuth && to.name==='recepiesinner') alert('non auth')
    else next()
})

export default router
