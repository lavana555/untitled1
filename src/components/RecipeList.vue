<template>
  <div class="list" :class="{empty: recipies.length===0}">
    <div v-if="recipies.length">
      <div class="card">
        <h2 class="card-title">название рецепта</h2>

        <Recipe
            v-for="recepi in recipies"
            v-bind:recipe="recepi"
            :key="recepi.id"
            v-on:currentRecipe="currentRecipe"
        />
      </div>
    </div>

    <p class="center">
      {{recipies.length?`В стеке есть  ${recipies.length} рецепта(ов)`:' Нет рецептов. Добавьте первый' }}
    </p>
  </div>
</template>

<script>

// eslint-disable-next-line no-debugger
//debugger
import Recipe from "@/components/Recipe";

export default {
  components: {Recipe},
props:['recipies'],
  // methods:{
  //   currentRecipe(id){
  //     // eslint-disable-next-line no-debugger
  //     //debugger
  //     this.$emit('currentRecipe',id)
  //   }
  // },
setup(props,{attrs,slots,emit}){

    const  currentRecipe=(id)=>{
    // eslint-disable-next-line no-debugger
    //debugger
    emit('currentRecipe',id)
  }

    return{
      currentRecipe,
    }
}
}

</script>

<style>
.card {
  border-bottom: 1px solid #eee;
  padding: 1rem;
  transition: 300ms all ease;
  cursor: pointer;
  background: #fff;
}

.empty {
  padding: 1rem;
  background: #fff !important;
}

.card-title {
  padding: 1rem;
  text-align: center;
}

.card:hover {
  background: #eee;
}

.list {
  background: #fffeee;
}
</style>
