<template>
  <div class="container">
    <v-tabs >
      <v-tab
          v-for="n in path"
          :key="n"
          :to="`/${n}`"
      >
         {{ n }}
      </v-tab>
    </v-tabs>
         <router-view />
<!--    &lt;!&ndash;    <CounterVuex />&ndash;&gt;-->
<!--    <AddRecipe :onAdd="addRecipe"/>-->

<!--    <div class="columns">-->
<!--      <RecipeList-->
<!--          v-on:currentRecipe="currentRecipe"-->
<!--          v-bind:recipies="recipies"-->
<!--      />-->
<!--      <RecipeDetail-->
<!--          v-bind:current="current"-->
<!--          v-on:remove="removeRecipe"-->
<!--      />-->
<!--    </div>-->



<!--    <div v-for="post in all" :key="post.id">-->
<!--      <div class="post">-->
<!--        <p>{{ post.title }}</p>-->
<!--        <p>{{ post.body }}</p>-->
<!--        <p>{{ post.id }}</p>-->
<!--      </div>-->
<!--   -->


<!--    </div>-->
<!--    <Todos />-->
<!--    <Dialog />-->
<!--<Pagination />-->


  </div>
</template>

<script>
//import AddRecipe from '@/components/AddRecipe'
//import RecipeDetail from '@/components/RecipeDetail'
//import RecipeList from '@/components/RecipeList'

import {mapGetters} from 'vuex'
//import Pagination from "@/components/Pagination";
//import Dialog from "@/components/Dialog";
//import Todos from "@/components/Todos";

export default {
  name: 'app',
  data(){
    return{
      path:['todos','recepiesinner']
    }
  },
  components: {
   // Dialog,
    //Todos,
    //Pagination,
   // AddRecipe,
    //RecipeList,
    //RecipeDetail,

  },
  // data() {
  //   return {
  //     recipies: [],
  //     current: null,
  //     // posts:[]
  //   }
  // },
  // methods: {
  //
  //   addRecipe(recipe) {
  //     // eslint-disable-next-line no-debugger
  //     //ebugger
  //     this.recipies.push(recipe)
  //     console.log(recipe)
  //   },
  //   currentRecipe(id) {
  //     // eslint-disable-next-line no-debugger
  //     // debugger
  //     this.current = this.recipies.find((r) => r.id === id)
  //   },
  //   removeRecipe(id) {
  //     this.recipies = this.recipies.filter((r) => r.id !== id)
  //     this.current = null
  //   }
  //
  // },
  // async mounted() {
  //
  //   const response= await fetch('https://jsonplaceholder.typicode.com/posts?_limit=5')
  //    const posts= await  response.json()
  //   // eslint-disable-next-line no-debugger
  //   debugger
  //   this.posts=posts
  //   console.log(posts)
  //  },


  // async mounted() {
  //   ////debugger
  // const response=await this.$store.dispatch('getposts')
  //   console.log(response)
  // },
//  computed: mapGetters(['all'])


}
</script>

<style>
@import url('https://fonts.googleapis.com/css?family=Roboto&display=swap');

* {
  margin: 0;
  padding: 0;
}

body {
  font-family: 'Roboto', sans-serif;
  color: #222;
}

a {
  text-decoration: none;
  color: darkblue;
  transition: .3s all ease;
}

.center {
  text-align: center;
}

a:hover {
  cursor: pointer;
  opacity: .7;
  text-decoration: underline;
}


.container {
  max-width: 1000px;
  margin: 0 auto;
  height: 100vh;

}

.columns {
  display: flex;
}

.post {
  margin: 0 auto;
  margin-bottom: 15px;
  padding: 5px 10px;
  width: 550px;
  border: 1px solid #99f3f5;
  font-size: 17px;
  background-color: #eadc9a;
  border-radius: 20px;
}

.post:hover {
  transition-duration: 2s;
  transform: scale(0.7);
}

.detail, .list {
  width: 50%;
  border: 1px solid #eee;
}

.list {
  border-right: 0;
}

.btn {
  border-radius: 5px;
  background: darkblue;
  color: #fff;
  padding: 6px 14px;
  cursor: pointer;
}

.btn:disabled {
  background-color: #eee;
  color: black;
  cursor: not-allowed;
}

.btn.remove {
  background: darkred;
}

.btn.secondary {
  background: grey;
}
</style>
