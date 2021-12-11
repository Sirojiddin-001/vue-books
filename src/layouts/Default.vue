<template>
  <div>
    <Navbar />
    <VerticalMenu />
    <div class="container mx-auto uk-flex" uk-height-viewport="expand: true">
      <div v-if="windowWidth >= 1024" class="uk-width-1-3 category-block p-3 pr-0">
        <CategoryList />
      </div>
      <div class="ml-auto uk-width-2-3@m p-3">
        <slot />
      </div>
    </div>
    <div class="book-footer bottom-0">
      <div class="container">
        <p>2021 Book.uz || BrandName Ltd.</p>
      </div>
    </div>
  </div>
</template>

<script>
import Navbar from "../components/Navbar/Navbar.vue";
import VerticalMenu from "../components/Navbar/VerticalMenu.vue";
import CategoryList from "../components/Ui/CategoryList.vue";

export default {
  components: {
    Navbar,
    VerticalMenu,
    CategoryList
  }
};
</script>

<style>
</style>