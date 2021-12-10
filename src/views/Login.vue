<template>
  <div class="uk-flex">
    <div class="w-full md:w-1/2 grid place-items-center bg-white min-h-screen shadow-lg">
      <div class="w-full max-w-400p mx-auto p-6">
        <h3 class="text-3xl font-bold">Sign In</h3>
        <div class="uk-margin">
          <label class="uk-form-label font-semibold" for="email">Email</label>
          <input class="uk-input mt-1 book-input" name="email" type="email" placeholder="Input" />
        </div>
        <div class="uk-margin">
          <div class="flex justify-between mb-1">
            <label class="uk-form-label font-semibold" for="password">Password</label>
            <router-link class="uk-form-label text-blue-600 font-semibold" to="#">Forgot password?</router-link>
          </div>
          <input class="uk-input book-input" type="password" placeholder="Input" />
        </div>
        <div class="uk-margin-medium mb-0">
          <button class="w-full uk-button book-primary-btn mr-3">Login</button>
        </div>
        <hr class="uk-divider-icon" />
        <div class="flex flex-col md:flex-row">
          <button class="w-full uk-button book-primary-btn-o mb-6 md:mb-0 md:mr-3">Google</button>
          <button class="w-full uk-button book-primary-btn">Facebook</button>
        </div>
      </div>
    </div>

    <div v-if="windowWidth >= 768" class="uk-width-expand bg-blue-700 bg-login"></div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss">
.bg-login {
  min-height: 100vh;
  background-position: center center;
  background-size: cover;
  background-repeat: no-repeat;
  background-blend-mode: hard-light;
  background-image: url("~@/assets/img/login.jpeg");
}
.max-w-400p {
  max-width: 400px;
}
</style>