<template>
  <div
    v-show="windowWidth <= 1024"
    id="vertical-menu"
    uk-offcanvas="overlay: true"
  >
    <div class="uk-offcanvas-bar">
      <div v-if="isAuth && windowWidth < 768" class="flex flex-nowrap">
        <div>
          <Avatar
            backgroundColor="#0058ff"
            color="#fff"
            :size="50"
            username="Sirojiddin R"
          />
        </div>
        <div class="uk-width-1-1 ml-3 mt-1 mb-3 profile-info">
          <p class="m-0 p-0 font-semibold uk-text-truncate">
            Sirojiddin Rixsiboyev
          </p>
          <p class="m-0 p-0 uk-text-small uk-text-truncate">
            rixsiboev001@gmail.com
          </p>
        </div>
      </div>

      <router-link
        to="/login"
        v-if="!isAuth"
        class="uk-button w-full book-primary-btn mr-3"
      >
        {{ $t("sign_in") }}
      </router-link>

      <ClickDropdown
        v-if="windowWidth < 768"
        placement="left"
        width-class="w-full"
      >
        <template v-slot:button>
          <div
            class="flex rounded-md border border-gray-500 font-medium w-full p-2 text-white text-sm items-center justify-start hover:bg-gray-600 mb-4"
          >
            <img
              class="w-6 mr-2"
              :src="require(`@/assets/img/${$i18n.locale}.svg`)"
              alt="UZ"
            />
            <span>
              {{ languages.filter((el) => el.path === $i18n.locale)[0].name }}
            </span>
          </div>
        </template>

        <template v-slot:content>
          <ul class="uk-nav uk-dropdown-nav language-select">
            <li
              :key="language.path"
              :class="{ active: $i18n.locale === language.path }"
              v-for="language in languages"
              @click="changeLocale(language.path)"
              class="m-1"
            >
              <a :href="`#${language.path}`">
                <img :src="require(`@/assets/img/${language.path}.svg`)" />
                <span>{{ language.name }}</span>
              </a>
            </li>
          </ul>
        </template>
      </ClickDropdown>

      <div>
        <ul class="mt-4 uk-nav-default uk-nav-parent-icon" data-uk-nav>
          <li class="uk-active uk-parent uk-open">
            <a href="#">{{ $t("books") }}</a>
            <ul class="uk-nav-sub">
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
          </li>
          <li class="uk-active uk-parent">
            <a href="#1">{{ $t("audio_books") }}</a>
            <ul class="uk-nav-sub">
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
          </li>
          <li v-if="windowWidth < 768" class="flex items-center my-2">
            <router-link to="/saved">
              <i class="mr-2 far fa-lg fa-bookmark"></i>
              {{ $t("saved") }}
            </router-link>
          </li>
          <li v-if="windowWidth < 768" class="text-red-600 flex items-center">
            <i class="mr-2 far fa-lg fa-sign-out"></i>
            {{ $t("logout") }}
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
import Avatar from "vue-avatar";
import ClickDropdown from "@/components/Ui/ClickDropdown";

export default {
  components: {
    Avatar,
    ClickDropdown,
  },

  data() {
    return {
      isAuth: true,
      languages: [
        {
          name: "UZ",
          path: "uz",
        },
        {
          name: "RU",
          path: "ru",
        },
      ],
    };
  },
  methods: {
    changeLocale(locale) {
      this.$i18n.locale = locale;
      localStorage.setItem("lang", locale);
    },
  },
};
</script>

<style></style>
