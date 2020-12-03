import Vue from 'vue'

import Home from "@/components/Home";
import Todos from "@/components/Todos";
import Router from "vue-router";
import RecipeInner from "@/components/RecipeInner";



Vue.use(Router)

export default new Router({
    mode:'history',
    routes:[
        {
            path:'/',
            component:Home
        },
        {
            path:'/todos',
            component:Todos
        },
        {
            path:'/recepiesinner',
            component: RecipeInner
        }
    ]
})
