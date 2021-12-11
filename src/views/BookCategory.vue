<template>
  <div class="uk-card uk-background-default uk-border-rounded border-500">
    <div class="card-header">
      <h4 class="card-title uk-text-truncate">Category 1</h4>
      <div class="ml-auto flex">
        <button
          class="uk-button uk-button-small text-white normal-case bg-blue-600 rounded"
          href="#"
          data-uk-slider-item="previous"
        >
          <span class="far fa-filter"></span>
          Filters
        </button>
      </div>
    </div>

    <div class="my-2 card-body uk-child-width-1-2 uk-child-width-1-3@s" data-uk-grid>
      <div v-for="book in books" :key="book.id">
        <BookSliderItems
          :id="book.id"
          :cover="book.cover"
          :title="book.name"
          :author="book.author"
          :year="book.year"
        />
      </div>
    </div>

    <div class="card-footer">
      <Paginate
        v-if="windowWidth > 640"
        :page-count="20"
        container-class="uk-pagination"
        active-class="uk-active"
      />
      <div v-else class="flex justify-between w-full">
        <a class="slider-btn mr-2" href="#" data-uk-slider-item="previous">
          <span class="far fa-arrow-left"></span>
        </a>
        <a class="slider-btn" href="#" data-uk-slider-item="next">
          <span class="far fa-arrow-right"></span>
        </a>
      </div>
    </div>
  </div>
</template>

<script>
import BookSliderItems from "../components/Sliders/BookSliderItems.vue";
import books from "../components/Sliders/books";
import Paginate from "../components/Ui/Paginate.vue";

export default {
  components: {
    BookSliderItems,
    Paginate
  },

  data() {
    return {
      books: books.slice(0, 30)
    };
  }
};
</script>

<style>
</style>