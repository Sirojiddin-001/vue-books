<template>
  <nav class="bg-white uk-box-shadow-medium" uk-navbar="mode: click" uk-sticky>
    <div class="container mx-auto flex">
      <div class="nav-overlay uk-navbar-left">
        <div
          v-if="windowWidth < 1024"
          class="menu-btn ml-3"
          tabindex="0"
          uk-toggle="target: #vertical-menu"
        >
          <span class="far fa-bars"></span>
        </div>

        <router-link
          v-if="windowWidth >= 768"
          class="uk-navbar-item logo"
          to="/"
          >Logo</router-link
        >
      </div>

      <div v-if="windowWidth < 768" class="nav-overlay uk-navbar-right">
        <router-link class="uk-navbar-item logo" to="/">Logo</router-link>
      </div>

      <div class="nav-overlay uk-navbar-right">
        <Search />
        <Language />
        <div v-if="windowWidth >= 768" class="v-divider mr-3" />
        <Profile v-if="isAuth" />
        <AuthButtons v-else />
      </div>

      <div class="nav-overlay uk-navbar-left uk-flex-1" hidden>
        <div class="uk-navbar-item uk-width-expand">
          <form class="uk-search uk-search-navbar uk-width-1-1">
            <input
              class="uk-search-input"
              type="search"
              :placeholder="$t('search')"
              autofocus
            />
          </form>
        </div>
        <a
          class="uk-navbar-toggle"
          data-uk-close
          uk-toggle="target: .nav-overlay; animation: uk-animation-fade"
          href="#close"
        />
      </div>
    </div>
  </nav>
</template>

<script>
import Search from "./Search.vue";
import Language from "./Language.vue";
import AuthButtons from "./AuthButtons.vue";
import Profile from "./Profile.vue";

export default {
  components: {
    Search,
    Language,
    AuthButtons,
    Profile,
  },

  data() {
    return {
      isAuth: true,
    };
  },
};
</script>

<style></style>
