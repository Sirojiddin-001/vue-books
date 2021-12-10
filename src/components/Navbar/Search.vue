<template>
  <fragment>
    <div v-if="windowWidth >= 1024" class="mr-3">
      <form class="uk-search uk-search-default">
        <a href="#" class="uk-search-icon-flip search-input-icon">
          <i class="icon far fa-search"></i>
        </a>
        <input class="book-input uk-search-input" type="search" :placeholder="$t('search')" />
      </form>
    </div>

    <a
      v-if="windowWidth < 1024"
      class="uk-navbar-toggle px-0 mr-3"
      uk-toggle="target: .nav-overlay; animation: uk-animation-fade"
      href="#"
    >
      <div class="search-btn" tabindex="0">
        <span class="far fa-lg fa-search"></span>
      </div>
    </a>
  </fragment>
</template>

<script>
export default {
  name: "NavbarSearch"
};
</script>

<style>
</style>