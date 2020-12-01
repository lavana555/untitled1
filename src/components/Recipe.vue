<template>
  <div v-on:click="currentRecipe">
    <p>{{ recipe.title }}</p>


  </div>
</template>

<script>
export default {
  name: "Recipe",
  props: ['recipe'],
  methods:{
    currentRecipe(){
      this.$emit('currentRecipe',this.recipe.id)
    }
  }
}
</script>

<style scoped>

</style>
