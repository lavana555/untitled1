import Vue from 'vue'
import App from './App.vue'
import store from './components/store/index'
import vuetify from "@/Plugins/vuetify";
import router from "@/router";
import VueCompositionApi from '@vue/composition-api';




Vue.use(VueCompositionApi)




Vue.config.productionTip = false


new Vue({
  store,
    router,
  vuetify,
  VueCompositionApi,

  render: h => h(App),
}).$mount('#app')
