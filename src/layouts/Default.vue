<template>
  <div>
    <Navbar />
    <VerticalMenu />
    <div class="container mx-auto uk-flex">
      <div v-if="windowWidth >= 1024" class="uk-width-1-3 category-block p-3 pr-0">
        <ul uk-accordion class="category-list">
          <li class="uk-open">
            <a class="uk-accordion-title" href="#">Item 1</a>
            <div class="uk-accordion-content">
              <ul class="uk-nav uk-nav-default">
                <li>
                  <router-link to="/book-category/1">Category 1</router-link>
                </li>
                <li>
                  <router-link to="/book-category/1">Category 1</router-link>
                </li>
                <li>
                  <router-link to="/book-category/1">Category 1</router-link>
                </li>
              </ul>
            </div>
          </li>
          <li>
            <a class="uk-accordion-title" href="#">Item 2</a>
            <div class="uk-accordion-content">
              <p>Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor reprehenderit.</p>
            </div>
          </li>
        </ul>
      </div>
      <div class="ml-auto uk-width-2-3@m p-3">
        <slot />
      </div>
    </div>
  </div>
</template>

<script>
import Navbar from "../components/Navbar/Navbar.vue";
import VerticalMenu from "../components/Navbar/VerticalMenu.vue";

export default {
  components: {
    Navbar,
    VerticalMenu
  }
};
</script>

<style>
</style>