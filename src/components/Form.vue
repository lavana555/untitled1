<template>
  <div class="formik">
    <v-app >
      <v-form
          ref="form"
          v-model="valid"
          lazy-validation
          @submit.prevent="submit"
      >
        <v-text-field
            v-model="name"
            :counter="10"
            :rules="RecipeRules"
            label="recipe name"
            required
            @input="$v.name.$touch()"
            @blur="$v.name.$touch()"
        ></v-text-field>

        <v-text-field
            v-model="description"
            :counter="20"
            :rules="DescriptionRules"
            label="recipe description"
            required
            @input="$v.description.$touch()"
            @blur="$v.description.$touch()"
        ></v-text-field>
        <v-checkbox
            v-model="checkbox"
            :rules="[v => !!v || 'You must agree to continue!']"
            label="Do you agree?"
            required
        ></v-checkbox>
        <v-btn
            :disabled="!valid"
            color="success"
            @click="validate"
        >
          Validate
        </v-btn>

        <v-btn
            color="error"
            @click="reset"
        >
          Reset Form
        </v-btn>
        <v-btn
            @click="submit"
        >submit</v-btn>
        <v-btn
            color="warning"
            @click="resetValidation"
        >
          Reset Validation
        </v-btn>
      </v-form>
    </v-app>
  </div>
</template>

<script>
export default {
  name: "Form",
  data: () => ({
    valid: true,
    name: '',
    RecipeRules: [
      v => !!v || 'Recipe is required',
      v => (v && v.length <= 10) || 'Name must be less than 10 characters'
    ],
    description: '',
    DescriptionRules: [
      v => !!v || 'Description is required',
      v => (v && v.length <= 20) || 'Description must be less than 20 characters'
    ],
    // select: null,
    // items: [
    //   'Item 1',
    //   'Item 2',
    //   'Item 3',
    //   'Item 4'
    // ],
    checkbox: false
  }),

  methods: {
    validate() {
      if (this.$refs.form.validate()) {
        this.snackbar = true
      }
    },
    reset() {
      this.$refs.form.reset()
    },
    resetValidation() {
      this.$refs.form.resetValidation()
    },
    // submit(){
    //   const recipe = {
    //     title: this.name.trim(),
    //     description: this.description.trim(),
    //     id: Date.now().toString()
    //   }
    // }
    submit () {
      debugger
      this.$v.$touch()
    }
  }
}
</script>

<style scoped>
.formik{
  min-height: 25vh;
}


</style>
