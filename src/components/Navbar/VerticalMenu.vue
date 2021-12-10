<template>
  <div v-show="windowWidth <= 1024" id="vertical-menu" uk-offcanvas="overlay: true">
    <div class="uk-offcanvas-bar">
      <div v-if="isAuth" class="flex flex-nowrap">
        <div>
          <Avatar backgroundColor="#0058ff" color="#fff" :size="50" username="Sirojiddin R" />
        </div>
        <div class="uk-width-1-1 ml-3 mt-1 mb-3 profile-info">
          <p class="m-0 p-0 font-semibold uk-text-truncate">Sirojiddin Rixsiboyev</p>
          <p class="m-0 p-0 uk-text-small uk-text-truncate">rixsiboev001@gmail.com</p>
        </div>
      </div>

      <button v-else class="uk-button w-full book-primary-btn mr-3">Войти</button>

      <div>
        <ul class="mt-4 uk-nav-default uk-nav-parent-icon" data-uk-nav>
          <li class="uk-active uk-parent uk-open">
            <a href="#1">Parent</a>
            <ul class="uk-nav-sub">
              <li>
                <a href="#2">Sub item</a>
              </li>
              <li>
                <a href="#3">Sub item</a>
              </li>
              <li>
                <a href="#4">Sub item</a>
              </li>
            </ul>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
import Avatar from "vue-avatar";

export default {
  components: {
    Avatar
  },

  data() {
    return {
      isAuth: false
    };
  }
};
</script>

<style>
</style>