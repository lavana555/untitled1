<template>
  <div class="container">
<!--    <CounterVuex />-->
    <AddRecipe :onAdd="addRecipe"/>

    <div class="columns">
      <RecipeList
          v-on:currentRecipe="currentRecipe"
          v-bind:recipies="recipies"
      />
      <RecipeDetail
          v-bind:current="current"
          v-on:remove="removeRecipe"
      />
    </div>

    <div v-for="post in all" :key="post.id">
      <div class="post">
      <p>{{post.title}}</p>
      <p>{{post.body}}</p>
      <p>{{post.id}}</p>
      </div>
      </div>


  </div>
</template>

<script>
import AddRecipe from '@/components/AddRecipe'
import RecipeDetail from '@/components/RecipeDetail'
import RecipeList from '@/components/RecipeList'
//import CounterVuex from "@/components/CounterVuex";
import {mapGetters} from 'vuex'

export default {
  name: 'app',
  components: {
  //  CounterVuex,
    AddRecipe,
    RecipeList,
    RecipeDetail
  },
  data() {
    return {
      recipies: [],
      current: null,
      // posts:[]
    }
  },
  methods: {

    addRecipe(recipe) {
      // eslint-disable-next-line no-debugger
      //ebugger
      this.recipies.push(recipe)
      console.log(recipe)
    },
    currentRecipe(id) {
      // eslint-disable-next-line no-debugger
      // debugger
      this.current = this.recipies.find((r) => r.id === id)
    },
    removeRecipe(id) {
      this.recipies = this.recipies.filter((r) => r.id !== id)
      this.current = null
    }

  },
 // async mounted() {
 //
 //   const response= await fetch('https://jsonplaceholder.typicode.com/posts?_limit=5')
 //    const posts= await  response.json()
 //   // eslint-disable-next-line no-debugger
 //   debugger
 //   this.posts=posts
 //   console.log(posts)
 //  },

  // computed: {
  //   allPosts(){
  //     // eslint-disable-next-line no-debugger
  //     debugger
  //   return   this.$store.getters.all
  //   }
  // }
  async mounted() {
    await this.$store.dispatch('getposts')
  },
  computed:mapGetters(['all'])

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
.post:hover{
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
