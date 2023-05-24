<template>
  <TheHeader />
  <RouterView />
  <TheFooter />
</template>

<script>
import { RouterView } from "vue-router";
import TheHeader from "./components/nav/TheHeader.vue";
import TheFooter from "./components/nav/TheFooter.vue";

export default {
  components: {
    TheHeader,
    RouterView,
    TheFooter,
  },
};
</script>

<style>
@import url("https://fonts.googleapis.com/css2?family=Bebas+Neue&family=Wix+Madefor+Display&display=swap");

* {
  box-sizing: border-box;
}

html {
  font-family: "Wix Madefor Display", sans-serif;
}

body {
  margin: 0;
}
</style>
