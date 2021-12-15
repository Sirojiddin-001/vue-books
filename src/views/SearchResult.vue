<template>
  <div class="uk-card uk-background-default uk-border-rounded border-500">
    <div class="card-header">
      <h4 class="card-title uk-text-truncate">{{ $t("search_result") }}</h4>
      <!--      <div class="ml-auto flex">-->
      <!--        <button-->
      <!--          class="uk-button uk-button-small text-white normal-case bg-blue-600 rounded"-->
      <!--          href="#"-->
      <!--          data-uk-slider-item="previous"-->
      <!--        >-->
      <!--          <span class="far fa-filter"></span>-->
      <!--          Filters-->
      <!--        </button>-->
      <!--      </div>-->
    </div>

    <div
      v-if="books.length > 0"
      class="my-2 card-body uk-child-width-1-2 uk-child-width-1-4@s"
      data-uk-grid
    >
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

    <p v-else class="text-center font-semibold py-12">
      {{ $t("nothing_found") }}
    </p>

    <div v-if="books.length > 0" class="card-footer flex justify-between">
      <p v-if="windowWidth > 640" class="font-semibold text-sm">
        {{ $t("total") }}: {{ books.length }}
      </p>
      <Paginate
        v-if="windowWidth > 640 && books.length > 0"
        :page-count="20"
        container-class="flex items-center"
        page-class="mw-7 h-7 mx-1 border-2 border-blue-600 rounded-full grid place-items-center pi"
        page-link-class="uk-text-decoration-none text-blue-600"
        active-class="active"
      />
      <div
        v-if="windowWidth < 640"
        class="flex justify-between items-center w-full"
      >
        <a class="slider-btn mr-2" href="#prev" data-uk-slider-item="previous">
          <span class="far fa-arrow-left"></span>
        </a>
        <p class="font-semibold text-sm">
          {{ $t("total") }}: {{ books.length }}
        </p>

        <a class="slider-btn" href="#next" data-uk-slider-item="next">
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
    Paginate,
  },

  created() {
    this.searchBook();
  },

  data() {
    return {
      books: [],
      search: "",
    };
  },

  methods: {
    searchBook() {
      this.books = books.filter((book) =>
        book["name"].toLowerCase().includes(this.search.toLowerCase())
      );
    },
  },

  watch: {
    "$route.params": {
      handler: function () {
        this.search = this.$route.params.string;
        this.searchBook();
      },
      deep: true,
      immediate: true,
    },
  },
};
</script>

<style lang="scss">
.mw-7 {
  min-width: 1.75rem;
}

.pi {
  padding: 0 4px;
  transition: 0.25s ease-in-out;

  & a {
    transition: 0.25s ease-in-out;
  }

  &:hover {
    background-color: #0058ff;

    & a {
      color: #fff;
    }
  }

  &.active {
    background-color: #0058ff;

    & a {
      color: #fff;
    }
  }
}
</style>
