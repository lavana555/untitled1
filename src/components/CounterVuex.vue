<template>
  <div>
    <button @click="decrement">-</button>
    <button @click="increment">+</button>
    <p>{{count}}</p>
  </div>

</template>

<script>
import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)

const store=new Vuex.Store({
  state:{
    count:0
  },
  mutations:{
    increment:state=>state.count++,
    decrement:state=>state.count--,
  }

})


export default {
  name: "CounterVuex",
  computed:{
    count(){
      return store.state.count
    }
  },
  methods:{
    increment(){
      store.commit('increment')
    },
    decrement(){
      store.commit('decrement')
    }
  }
}
</script>

<style scoped>

</style>
