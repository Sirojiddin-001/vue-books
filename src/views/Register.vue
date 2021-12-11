<template>
  <AuthBlock
    title="Sign Up"
    button-title="Register"
    bg-class="bg-register"
    providers
    :submit-function="signUp"
  >
    <template #form>
      <Input
        label="Full name"
        rules="required|min:3"
        type="text"
        placeholder="Enter your full name"
        v-model="fullName"
      />

      <Input
        label="Email"
        rules="required|email"
        type="email"
        placeholder="Enter your email"
        v-model="email"
      />

      <PasswordInput
        label="Password"
        rules="required|min:8"
        placeholder="Enter password"
        v-model="password"
      />
    </template>
    <template #footer>
      <p class="text-center text-sm">
        Already have an account?
        <router-link class="font-semibold text-blue-600" to="/login">Login</router-link>
      </p>
    </template>
  </AuthBlock>
</template>

<script>
import Input from "../components/Ui/Input.vue";
import PasswordInput from "../components/Ui/PasswordInput.vue";
import AuthBlock from "../layouts/AuthBlock.vue";

export default {
  components: {
    AuthBlock,
    Input,
    PasswordInput
  },

  data() {
    return {
      fullName: "",
      email: "",
      password: ""
    };
  },

  methods: {
    signUp() {
      console.log(this.email, this.password);
    }
  }
};
</script>
