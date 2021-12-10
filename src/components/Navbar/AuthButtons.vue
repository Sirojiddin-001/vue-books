<template>
  <fragment v-if="windowWidth >= 768">
    <button class="uk-button book-primary-btn-o mr-3">Войти</button>
    <button class="uk-button book-primary-btn mr-3">Зарегистрироваться</button>
  </fragment>
</template>

<script>
export default {
  name: "AuthButtons"
};
</script>
