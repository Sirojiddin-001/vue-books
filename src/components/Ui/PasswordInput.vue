<template>
  <ValidationProvider tag="div" class="uk-margin" :name="label" :rules="rules" v-slot="{ errors }">
    <div class="flex justify-between mb-1">
      <label class="uk-form-label font-semibold" for="password">{{label}}</label>
      <router-link v-if="forgot" class="uk-form-label text-blue-600 font-semibold" to="/forgot-password">Forgot password?</router-link>
    </div>

    <div class="uk-inline w-full">
      <a href="#" class="uk-form-icon uk-form-icon-flip book-form-icon" @click="view = !view">
        <i
          class="fa"
          :class="[view ? 'fa-eye-slash' : 'fa-eye', errors.length > 0 ? 'text-red-500' : 'text-blue-600']"
        />
      </a>
      <input
        class="uk-input book-input"
        :class="{'uk-form-danger': errors.length > 0}"
        :type="view ? 'text' : 'password'"
        :placeholder="placeholder"
        :value="value"
        @input="onInput"
      />
    </div>
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
    prop: "value",
    event: "input"
  },

  props: {
    label: String,

    forgot: Boolean,

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

  data() {
    return {
      view: false
    };
  },

  methods: {
    onInput(e) {
      this.$emit("input", e.target.value);
    }
  }
};
</script>
