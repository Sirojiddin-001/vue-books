<template>
  <div>
    <div v-if="windowWidth >= 1024" class="mr-3">
      <form @submit.prevent="" class="uk-search uk-search-default">
        <a href="#" class="uk-search-icon-flip search-input-icon">
          <i class="icon far fa-search"></i>
        </a>
        <input
          class="book-input uk-search-input"
          v-model="search"
          @change="toResultPage"
          type="search"
          :placeholder="$t('search')"
        />
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
  </div>
</template>

<script>
export default {
  name: "NavbarSearch",
  data() {
    return {
      search: "",
    };
  },

  methods: {
    toResultPage() {
      this.$router.push({ path: `/search/${this.search}` });
    },
  },
};
</script>

<style></style>
