<template>
  <div>
    <div v-if="getBook" class="uk-card uk-background-default uk-border-rounded border-500 mb-4">
      <div class="card-header">
        <h4 class="card-title-details">{{getBook.name}}</h4>
      </div>
      <div class="my-2 card-body uk-grid">
        <div class="uk-width-1-3@s">
          <img class="book-details-img" :src="`https://new.book.ru${getBook.cover}`" alt />

          <button class="mt-3 uk-width-1-1 uk-button book-primary-btn">
            <i class="mr-2 far fa-lg fa-eye"></i>
            View
          </button>
          <button class="mt-3 uk-width-1-1 uk-button book-danger-btn">
            <i class="mr-2 far fa-lg fa-heart"></i>
            Save
          </button>
          <button class="mt-3 uk-width-1-1 uk-button book-success-btn">
            <i class="mr-2 far fa-lg fa-download"></i>
            Download
          </button>
        </div>

        <div class="uk-width-2-3@s mt-4 sm:mt-0">
          <div class="p-3 border-500 uk-border-rounded uk-text-small">
            <div class="mb-2">
              <span class="flex flex-col font-semibold">Author</span>
              <span>{{getBook.author}}</span>
            </div>

            <div class="mb-2">
              <span class="flex flex-col font-semibold">Year</span>
              <span>{{getBook.year}}</span>
            </div>

            <div class="mb-2">
              <span class="flex flex-col font-semibold">Public name</span>
              <span>{{getBook.pub_name}}</span>
            </div>
          </div>
          <div class="mt-4 mb-2">
            <ul data-uk-accordion class="category-list">
              <li>
                <a class="uk-accordion-title" href="#books">Description</a>
                <div class="uk-accordion-content p-3 uk-text-small">
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                  Accusantium debitis omnis dignissimos labore error? Pariatur
                  minima mollitia repellendus. Nihil, eaque adipisci. Placeat
                  eligendi dicta, maiores sunt ea quos omnis nostrum! Iure
                  quaerat enim aspernatur reprehenderit ipsa laboriosam ea et,
                  quo harum vel, ratione nulla non, reiciendis illo porro
                  adipisci molestias. Reprehenderit aperiam deserunt eius
                  repellendus ab eligendi consectetur! Est perspiciatis optio,
                  fuga repellendus delectus, fugiat mollitia ea asperiores dolor
                  officia aspernatur ipsum? Reiciendis aut libero ab. Quas quae
                  sequi ea sed ex, labore quod corporis, in minus voluptatem
                  iure asperiores quibusdam quo, eius inventore consequuntur
                  voluptates similique temporibus doloribus fuga.
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
    <BookSlider :title="$t('new_books')" :books="books" />
  </div>
</template>

<script>
import books from "../components/Sliders/books";
import BookSlider from "../components/Sliders/BookSlider.vue";

export default {
  components: {
    BookSlider
  },

  data() {
    return {
      bookId: 0,
      books: books.slice(0, 6)
    };
  },

  computed: {
    getBook() {
      return books.filter(book => book.id === this.bookId)[0];
    }
  },

  watch: {
    "$route.params": {
      handler: function() {
        this.bookId = +this.$route.params.id;
      },
      deep: true,
      immediate: true
    }
  }
};
</script>

<style>
</style>