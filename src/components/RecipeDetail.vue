<template>
  <div class="detail">
    <div class="recipe" v-if="current">
      <h2>{{ current.title }}</h2>
      <a href="#" @click="watchDescription">{{ isFetching ? 'скрыть' : 'показать' }}</a>
      <p v-if="isFetching">{{ current.description }}</p>
      <button class="btn remove" @click="removeRecipe">Удалить</button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'RecipeDetali',
  props: ['current'],
  // props:{
  //   current:Object
  // },
  data() {
    return {
      isFetching: false
    }
  },
  methods: {
    watchDescription() {
      this.isFetching = !this.isFetching
    },
    removeRecipe() {
      alert(this.current.id)
      this.$emit('remove', this.current.id)
    }
  },
  watch: {
    current() {
      this.isFetching = false
    }
  }

}
</script>

<style>
.recipe {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 1rem;
  padding-bottom: 1rem;
}

.recipe p {
  font-size: .8rem;
  margin-bottom: .5rem;
}

.recipe a, .recipe h2 {
  margin-bottom: .5rem;
}
</style>
