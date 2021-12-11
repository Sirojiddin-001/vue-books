<template>
  <ul uk-accordion class="category-list">
    <li class="uk-open">
      <a class="uk-accordion-title" href="#">{{$t("books")}}</a>
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
      <a class="uk-accordion-title" href="#">{{$t("audio_books")}}</a>
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
  </ul>
</template>

<script>
export default {
  name: "CategoryList"
};
</script>

<style>
</style>