<template>
  <AuthBlock
    :title="$t('sign_up')"
    :button-title="$t('sign_up')"
    bg-class="bg-register"
    providers
    :submit-function="signUp"
  >
    <template #form>
      <Input
        :label="$t('full_name')"
        rules="required|min:3"
        type="text"
        :placeholder="$t('enter_your_full_name')"
        v-model="fullName"
      />

      <Input
        :label="$t('email')"
        rules="required|email"
        type="email"
        :placeholder="$t('enter_your_email')"
        v-model="email"
      />

      <PasswordInput
        :label="$t('password')"
        rules="required|min:8"
        :placeholder="$t('enter_password')"
        v-model="password"
      />
    </template>
    <template #footer>
      <p class="text-center text-sm">
        {{ $t("already_have_an_account") }}
        <router-link class="font-semibold text-blue-600" to="/login">
          {{ $t("sign_in") }}
        </router-link>
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
    PasswordInput,
  },

  data() {
    return {
      fullName: "",
      email: "",
      password: "",
    };
  },

  methods: {
    signUp() {
      console.log(this.email, this.password);
    },
  },
};
</script>
