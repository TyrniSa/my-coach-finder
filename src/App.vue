<template>
  <TheNavigation />
  <main>
    <RouterView />
  </main>
</template>

<script>
import { RouterView } from "vue-router";
import TheNavigation from "./components/nav/TheNavigation.vue";

export default {
  components: {
    TheNavigation,
    RouterView,
  },
};
</script>

<style>
* {
  box-sizing: border-box;
}

html {
  font-family: sans-serif;
}

body {
  margin: 0;
}
</style>
