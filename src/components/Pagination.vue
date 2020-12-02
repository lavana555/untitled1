<template>




  <v-app id="inspire">
<!--    <div class="text-xs-center">-->
<!--      <v-pagination-->
<!--          v-model="page"-->
<!--          :length="6"-->
<!--      ></v-pagination>-->


<!--    </div>-->

<!--    <v-app id="inspire">-->
      <v-expansion-panel v-for="(post,i) in posts"
                         :key="i">
        <v-expansion-panel-content
            v-for="(item,i) in 1"
            :key="i"
        >
          <template v-slot:header>
            <div>{{post.title}}</div>
           </template>
          <v-card>
            <v-card-text>{{post.body}}</v-card-text>
          </v-card>
        </v-expansion-panel-content>
      </v-expansion-panel>
<!--    <v-expansion-panel>-->
<!--      <v-expansion-panel-content-->
<!--          v-for="(item,i) in 5"-->
<!--          :key="i"-->
<!--      >-->
<!--           <template v-slot:header>-->
<!--          <div>Item</div>-->
<!--        </template>-->
<!--        <v-card>-->
<!--          <v-card-text>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</v-card-text>-->
<!--        </v-card>-->
<!--      </v-expansion-panel-content>-->
<!--    </v-expansion-panel>-->


    <v-footer class="pa-3">
      <v-spacer></v-spacer>
      <div>&copy; {{ new Date().getFullYear()}}</div>
    </v-footer>
    </v-app>



</template>

<script>



export default {
name: "Pagination",
  data(){
 // debugger
  return{
    page:4,
    posts: [
      {
        "userId": 1,
        "id": 1,
        "title": "sunt aut facere repellat provident occaecati excepturi optio reprehenderit",
        "body": "quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto"
      },
      {
        "userId": 1,
        "id": 2,
        "title": "qui est esse",
        "body": "est rerum tempore vitae\nsequi sint nihil reprehenderit dolor beatae ea dolores neque\nfugiat blanditiis voluptate porro vel nihil molestiae ut reiciendis\nqui aperiam non debitis possimus qui neque nisi nulla"
      },
      {
        "userId": 1,
        "id": 3,
        "title": "ea molestias quasi exercitationem repellat qui ipsa sit aut",
        "body": "et iusto sed quo iure\nvoluptatem occaecati omnis eligendi aut ad\nvoluptatem doloribus vel accusantium quis pariatur\nmolestiae porro eius odio et labore et velit aut"
      },{
        "userId": 1,
        "id": 4,
        "title": "ea molestias quasi exercitationem repellat qui ipsa sit aut",
        "body": "et iusto sed quo iure\nvoluptatem occaecati omnis eligendi aut ad\nvoluptatem doloribus vel accusantium quis pariatur\nmolestiae porro eius odio et labore et velit aut"
      }
    ]
  }
  }

}
</script>

<style scoped>
.pa-3{
  margin-top: 15px;
  background-color: #e170e9;
}
#inspire{
  color: #26e304;
  font-size: 24px;
}
</style>
