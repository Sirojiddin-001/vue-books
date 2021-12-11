<template>
  <AuthBlock title="Reset Password" button-title="Continue" bg-class="bg-forgot" :submit-function="forgotPassword">
    <template #header>
      <p class="uk-margin">
        Enter the email address associated with your account.
      </p>
    </template>
    <template #form>
      <Input
        label="Email"
        rules="required|email"
        type="email"
        placeholder="Enter your email"
        v-model="email"
      />
    </template>
    <template #footer>
      <p class="text-center text-sm mt-6">
        Back to   
        <router-link class="font-semibold text-blue-600" to="/login">Login</router-link>
      </p>
    </template>
  </AuthBlock>
</template>

<script>
import Input from "../components/Ui/Input.vue";
import AuthBlock from "../layouts/AuthBlock.vue";

export default {
  components: {
    AuthBlock,
    Input,
  },

  data() {
    return {
      email: "",
    };
  },

  methods: {
    forgotPassword() {
      console.log(this.email);
    }
  }
};
</script>
