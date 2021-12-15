<template>
  <AuthBlock
    :title="$t('sign_in')"
    :button-title="$t('sign_in')"
    providers
    :submit-function="signIn"
  >
    <template #form>
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
        forgot
      />
    </template>
    <template #footer>
      <p class="text-center text-sm">
        {{ $t("have_an_account") }}
        <router-link class="font-semibold text-blue-600" to="/register">
          {{ $t("sign_up") }}
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
      email: "",
      password: "",
    };
  },

  methods: {
    signIn() {
      console.log(this.email, this.password);
    },
  },
};
</script>
