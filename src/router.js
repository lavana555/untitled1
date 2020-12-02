import Vue from 'vue'

import Home from "@/components/Home";
import Todos from "@/components/Todos";
import Router from "vue-router";



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
        }
    ]
})
