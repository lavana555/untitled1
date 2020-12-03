<template>
  <div class="detail">
    <div class="recipe" v-if="current">
      <h2>{{ current.title }}</h2>
      <a href="#" @click="watchDescription">{{ isFetching ? 'скрыть' : 'показать' }}</a>
      <p v-if="isFetching">{{ current.description }}</p>
      <!--      <p v-if="isFetching">{{ current.description }}</p>-->
<!--      <button class="btn remove" @click="()=>$emit('remove',current.id)">Удалить</button>-->
      <button class="btn remove" @click="removeRecipe">Удалить</button>
    </div>
  </div>
</template>

<script>
import {reactive, ref} from "@vue/composition-api";
import {watch} from "@vue/composition-api"

export default {
  name: 'RecipeDetali',
  props: ['current', 'remove'],
  setup(props,{emit,attrs}) {
    debugger
    console.log(attrs)
    let isFetching = ref(true)
    const watchDescription = () => {
     // debugger
      isFetching.value = !isFetching.value
    }
    const removeRecipe=()=>{
      emit('remove',props.current.id)
    }

    watch(() => props.current, () => {
      isFetching.value = false
    })

    return {
      isFetching, watchDescription,removeRecipe
    }
  },


  // data() {
  //   return {
  //     isFetching: false
  //   }
  // },
  // methods: {
  //   watchDescription() {
  //     this.isFetching = !this.isFetching
  //   },
  //   removeRecipe() {
  //     alert(this.current.id)
  //     this.$emit('remove', this.current.id)
  //   }
  // },
  // watch: {
  //   current() {
  //     this.isFetching = false
  //   }
  // }

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
