<template>
  <AuthBlock
    :title="$t('reset_password')"
    :button-title="$t('continue')"
    bg-class="bg-forgot"
    :submit-function="forgotPassword"
  >
    <template #header>
      <p class="uk-margin">
        {{ $t("email_your_account") }}
      </p>
    </template>
    <template #form>
      <Input
        :label="$t('email')"
        rules="required|email"
        type="email"
        :placeholder="$t('enter_your_email')"
        v-model="email"
      />
    </template>
    <template #footer>
      <p class="text-center text-sm mt-6">
        <router-link class="font-semibold text-blue-600" to="/login">
          {{ $t("back_to_login") }}
        </router-link>
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
    },
  },
};
</script>
