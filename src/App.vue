<template>
  <div id="app">
    <component :is="layout">
      <transition name="fade" mode="out-in">
        <router-view></router-view>
      </transition>
    </component>
  </div>
</template>

<script>
export default {
  computed: {
    layout() {
      return (this.$route.meta.layout || "default") + "-layout";
    }
  }
};
</script>

<style lang="scss">
@import "./assets/fontawesome/css/all.css";
@import "./assets/style/base.scss";
</style>
