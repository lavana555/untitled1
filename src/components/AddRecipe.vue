<template>
<!--  <div class="form" @submit.prevent="submit">-->
<!--    <h1>Добавить рецепт</h1>-->
<!--    <div v-if="visible">-->
<!--      <div class="input">-->
<!--        <input type="text" placeholder="Название рецепта" v-model="form.title">-->
<!--      </div>-->

<!--      <div class="input">-->
<!--        <input type="text" placeholder="Описание рецепта" v-model="form.description">-->
<!--      </div>-->
<!--    </div>-->

<!--    <div class="buttons">-->


<!--        <div class="text-xs-center">-->
<!--          <v-btn fab dark-->
<!--                 color="indigo"-->
<!--                 type="submit" v-bind:disabled="!valid"-->
<!--          >-->
<!--            <v-icon dark>add</v-icon>-->
<!--          </v-btn>-->
<!--        </div>-->

<!--&lt;!&ndash;      <button class="btn" type="submit" v-bind:disabled="!valid">Создать</button>&ndash;&gt;-->
<!--      <button class="btn secondary" type="button" @click="toggle">-->
<!--        {{ visible ? 'убрать' : 'показать' }}-->
<!--        форму-->
<!--      </button>-->
<!--    </div>-->

<!--  </div>-->
<div>
  <Form />
</div>
<!--  <Form />-->
<!--  <div>addRecipe</div>-->
</template>

<script>
import {ref, reactive, computed} from '@vue/composition-api'
import {useToggle} from "@/components/composition/toggle";
import Form from "@/components/Form";
//import Form from "@/components/Form";

export default {
  components: {Form},
  //components: {Form},
  props: {
    onAdd: {
      type: Function,
      required: true
    }
  },
  // data() {
  //   debugger
  //   console.log(this.props)
  //   return {
  //     title: '',
  //     description: '',
  //     visible: true
  //
  //   }
  // },
  setup(props) {
    // let visible = ref(true)
    const form = reactive({
          title: '',
          description: ''
        }
    )
    // const toggle = () => {
    //   visible.value = !visible.value
    // }
    const submit = () => {
      const recipe = {
        title: form.title.trim(),
        description: form.description.trim(),
        id: Date.now().toString()
      }
      form.title = form.description = ''
      // debugger
      props.onAdd(recipe)
    }
    const valid = computed(() => {

      return form.title.trim() && form.description.trim()
    })
    return {
      //visible, toggle,
      submit, form, valid,
      ...useToggle()
    }
  },
//   methods: {
//     toggle() {
//       this.visible = !this.visible
//     },
//     submit() {
//       // eslint-disable-next-line no-unused-vars
// debugger
//       const recipe = {
//         title: this.title.trim(),
//         description: this.description.trim(),
//         id: Date.now().toString()
//       }
//       this.title = this.description = ''
//       this.onAdd(recipe)
//     }
//
//   },
//   computed: {
//     valid() {
//       return this.title.trim() && this.description.trim()
//     }
//   }
}
</script>

<style>
.form {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 1rem;
  border: 1px solid #eee;
  margin-bottom: 1rem;
}

.form h1 {
  margin: 0;
  margin-bottom: 1rem;
}

.input {
  margin-bottom: 1rem;
}

.input input {
  border: 1px solid #ccc;
  border-radius: 5px;
  padding: 5px 8px;
  width: 400px;
}

.buttons {
  width: 400px;
  display: flex;
  justify-content: space-around;
}
</style>
