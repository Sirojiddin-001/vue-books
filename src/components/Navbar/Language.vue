<template>
  <div class="mr-3">
    <span class="language" tabindex="0">
      <img :src="require(`@/assets/img/${$i18n.locale}.svg`)" />
    </span>
    <div
      class="uk-border-rounded border-500 bg-100 p-3"
      uk-dropdown="mode: click; boundary: .language"
    >
      <ul class="uk-nav uk-dropdown-nav language-select">
        <li class="uk-nav-header text-center font-semibold normal-case">Change language</li>
        <li class="uk-nav-divider"></li>
        <li
          :key="language.path"
          :class="{active: $i18n.locale === language.path}"
          v-for="language in languages"
          @click="changeLocale(language.path)"
        >
          <a :href="`#${language.path}`">
            <img :src="require(`@/assets/img/${language.path}.svg`)" />
            <span>{{language.name}}</span>
          </a>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      languages: [
        {
          name: "UZ",
          path: "uz"
        },
        {
          name: "RU",
          path: "ru"
        }
      ]
    };
  },
  methods: {
    changeLocale(locale) {
      this.$i18n.locale = locale;
    }
  }
};
</script>

<style>
</style>