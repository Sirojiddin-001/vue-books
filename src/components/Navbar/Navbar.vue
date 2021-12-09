<template>
  <nav class="bg-white uk-box-shadow-medium" uk-navbar="mode: click" uk-sticky>
    <div class="container mx-auto flex">
      <div class="uk-navbar-left">
        <a class="uk-navbar-item logo" href="#">Logo</a>
      </div>

      <div class="uk-navbar-right">
        <Search />
        <Language/>
        <div class="v-divider mr-3"></div>
        <button class="uk-button book-primary-btn-o mr-3">Войти</button>
        <button class="uk-button book-primary-btn mr-3">Зарегистрироваться</button>
      </div>
    </div>
  </nav>
</template>

<script>
import Search from "./Search.vue";
import Language from './Language.vue';

export default {
  components: {
    Search,
    Language
  }
};
</script>

<style>
</style>