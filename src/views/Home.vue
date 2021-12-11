<template>
  <div class="home">
    <BookSlider :title="$t('new_books')" :books="books" />
    <BookSlider :title="$t('new_books')" :books="books" />
    <BookSlider :title="$t('new_books')" :books="books" />
    <BookSlider :title="$t('new_books')" :books="books" />
  </div>
</template>

<script>
import BookSlider from "../components/Sliders/BookSlider.vue";
import books from "../components/Sliders/books";

export default {
  name: "Home",
  components: {
    BookSlider
  },
  data() {
    return {
      books: books.slice(0, 6)
    };
  }
};
</script>
