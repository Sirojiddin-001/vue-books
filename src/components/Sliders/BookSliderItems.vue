<template>
  <div class="bsi">
    <router-link :to="`/book/${id}`">
      <div class="bsi-body">
        <img :src="`https://new.book.ru${cover}`" :alt="title" />
        <div class="absolute right-2 bottom-3 z-10">
          <span class="p-1 px-2 border border-gray-300 bg-white rounded text-sm">
            <i class="fa text-blue-600 fa-bookmark"></i>
          </span>
        </div>
      </div>

      <div class="bsi-footer">
        <ul>
          <li>{{title}}</li>
          <li>{{author}}</li>
          <li>{{year}}</li>
        </ul>
      </div>
    </router-link>
  </div>
</template>

<script>
export default {
  props: {
    id: Number,
    cover: String,
    title: String,
    author: String,
    year: [Number, String]
  }
};
</script>

<style>
</style>