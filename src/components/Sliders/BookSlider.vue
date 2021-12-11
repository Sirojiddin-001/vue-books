<template>
  <div
    v-if="books && books.length > 0"
    class="uk-card uk-background-default uk-border-rounded border-500 mb-4"
    data-tabindex="-1"
    data-uk-slider="finite: true; sets: true"
  >
    <div class="card-header">
      <h4 class="card-title uk-text-truncate">{{title}}</h4>
      <div class="ml-auto flex">
        <a class="slider-btn mr-2" href="#" data-uk-slider-item="previous">
          <span class="far fa-arrow-left"></span>
        </a>
        <a class="slider-btn" href="#" data-uk-slider-item="next">
          <span class="far fa-arrow-right"></span>
        </a>
      </div>
    </div>
    <div class="my-2 card-body">
      <ul class="uk-slider-items uk-child-width-1-2 uk-child-width-1-3@s uk-grid">
        <li v-for="book in books" :key="book.id">
          <BookSliderItems
            :id="book.id"
            :cover="book.cover"
            :title="book.name"
            :author="book.author"
            :year="book.year"
          />
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import BookSliderItems from "./BookSliderItems.vue";

export default {
  props: {
    title: String,
    books: Array
  },

  components: {
    BookSliderItems
  }
};
</script>

