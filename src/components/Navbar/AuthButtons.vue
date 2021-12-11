<template>
  <div v-if="windowWidth >= 768">
    <router-link to="/login" class="uk-button book-primary-btn-o mr-3">{{$t("sign_in")}}</router-link>
    <router-link to="/register" class="uk-button book-primary-btn mr-3">{{$t("sign_up")}}</router-link>
  </div>
</template>

<script>
export default {
  name: "AuthButtons"
};
</script>
