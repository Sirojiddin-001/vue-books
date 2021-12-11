<template>
  <ValidationProvider tag="div" class="uk-margin" :name="label" :rules="rules" v-slot="{ errors }">
    <label class="uk-form-label font-semibold" :for="label">{{label}}</label>
    <input
      class="uk-input mt-1 book-input"
      :class="{'uk-form-danger': errors.length > 0}"
      :type="type"
      :placeholder="placeholder" 
      :value="value"
      @input="onInput"
    />
    <span class="text-red-500 text-sm">{{errors[0]}}</span>
  </ValidationProvider>
</template>

<script>
import { ValidationProvider, extend } from "vee-validate";
import { required, email, min } from "vee-validate/dist/rules";

extend("email", email);
extend("min", min);
extend("required", {
  ...required,
  message: "This field is required"
});

export default {
  model: {
    prop: 'value',
    event: 'input',
  },

  props: {
    label: String,

    rules: {
      type: String,
      default: "required"
    },

    type: {
      type: String,
      default: "text"
    },

    placeholder: String,

    value: String
  },

  components: {
    ValidationProvider
  },

  methods:{
    onInput(e){
      this.$emit('input', e.target.value)
    }
  }
};
</script>
