<template>
  <div v-if="windowWidth >= 768" class="mr-3">
    <span class="language profile" tabindex="0">
      <Avatar backgroundColor="#0058ff" color="#fff" :size="38" username="Sirojiddin R" />
    </span>

    <div
      class="uk-border-rounded border-500 bg-100 uk-box-shadow-medium"
      uk-drop="mode: click; boundary: .profile"
    >
      <div class="p-3">
        <div class="flex flex-nowrap profile-block">
          <div>
            <Avatar backgroundColor="#0058ff" color="#fff" :size="50" username="Sirojiddin R" />
          </div>
          <div class="uk-width-1-1 ml-3 mt-1 mb-3 profile-info">
            <p class="m-0 p-0 font-semibold uk-text-truncate">Sirojiddin Rixsiboyev</p>
            <p class="m-0 p-0 uk-text-small uk-text-truncate">rixsiboev001@gmail.com</p>
          </div>
        </div>

        <ul class="uk-nav uk-dropdown-nav language-select">
          <li>
            <a href="#setting">
              <span>Settings</span>
            </a>
          </li>

          <li>
            <a href="#logout">
              <span>Log Out</span>
            </a>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
import Avatar from "vue-avatar";

export default {
  components: {
    Avatar
  }
};
</script>

<style>
</style>