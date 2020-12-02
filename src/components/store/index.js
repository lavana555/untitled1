import Vue from 'vue'
import Vuex from 'vuex'
import posts from './modules/post'
import Vuetify from 'vuetify'
import 'vuetify/dist/vuetify.min.css'

Vue.use(Vuetify)

Vue.use(Vuex)

export default new Vuex.Store({
    modules:{
        posts
    }
})
