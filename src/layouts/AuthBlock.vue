<template>
  <div class="uk-flex">
    <div class="w-full md:w-1/2 grid place-items-center bg-white min-h-screen shadow-lg">
      <ValidationObserver
        v-slot="{ valid }"
        @submit.prevent="submitFunction"
        tag="form"
        class="w-full max-w-400p mx-auto p-6"
      >
        <h3 class="text-3xl font-bold">{{title}}</h3>
        <slot name="header"></slot>
        <slot name="form"></slot>
        <div class="uk-margin-medium mb-0">
          <button
            :disabled="!valid"
            type="submit"
            class="w-full uk-button book-primary-btn mr-3"
          >{{buttonTitle}}</button>
        </div>
        <div class="uk-margin" v-if="providers">
          <hr class="uk-divider-icon" />
          <div class="flex flex-col md:flex-row">
            <button class="w-full uk-button book-primary-btn-o mb-6 md:mb-0 md:mr-3">Google</button>
            <button class="w-full uk-button book-primary-btn">Facebook</button>
          </div>
        </div>
        <slot name="footer"></slot>
      </ValidationObserver>
    </div>
    <div v-if="windowWidth >= 768" class="uk-width-expand bg-blue-700 bg-auth" :class="bgClass"></div>
  </div>
</template>

<script>
import { ValidationObserver } from "vee-validate";

export default {
  props: {
    title: String,
    buttonTitle: String,
    bgClass: {
      type: String,
      default: "bg-login"
    },
    submitFunction: {
      type: Function,
      default: () => {}
    },
    providers: Boolean
  },

  components: {
    ValidationObserver
  }
};
</script>

<style lang="scss">
.bg-auth {
  min-height: 100vh;
  background-position: center center;
  background-size: cover;
  background-repeat: no-repeat;
  background-blend-mode: hard-light;
}

.bg-login {
  background-image: url("~@/assets/img/login.jpeg");
}

.bg-register {
  background-image: url("~@/assets/img/register.jpeg");
}

.bg-forgot {
  background-image: url("~@/assets/img/forgot.jpeg");
}

.max-w-400p {
  max-width: 400px;
}
</style>