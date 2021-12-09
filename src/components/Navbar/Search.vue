<template>
  <div v-if="windowWidth >= 1024" class="mr-3">
    <form class="uk-search uk-search-default">
      <a href="#" class="uk-search-icon-flip search-input-icon">
        <i class="icon far fa-search"></i>
      </a>
      <input class="book-input uk-search-input" type="search" :placeholder="$t('search')" />
    </form>
  </div>
</template>

<script>
export default {
  name: "NavbarSearch"
};
</script>

<style>
</style>