<script setup lang="ts">
import { ref } from "vue";

const navbarBurgerToggled = ref(false);

function toggleNavbar(setValue?: boolean) {
  navbarBurgerToggled.value = setValue ?? !navbarBurgerToggled.value;
}
</script>

<template>
  <nav class="navbar is-primary">
    <div class="navbar-brand">
      <a href="/" class="navbar-item" @click.stop="toggleNavbar(false)">
        <h1 class="is-size-5">Vue App</h1>
      </a>
      <a
        class="navbar-burger"
        :class="{ 'is-active': navbarBurgerToggled }"
        @click="toggleNavbar()"
      >
        <span aria-hidden="true" />
        <span aria-hidden="true" />
        <span aria-hidden="true" />
        <span aria-hidden="true" />
      </a>
    </div>
  </nav>
</template>

<style lang="scss" scoped>
.navbar {
  .navbar-brand {
    white-space: nowrap;
    .app-logo {
      height: 100%;
      width: 100%;
    }
  }
}
</style>
