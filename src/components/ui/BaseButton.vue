<template>
  <button v-if="!link" :class="mode">
    <slot></slot>
  </button>
  <RouterLink :to="to" :class="mode" v-else><slot></slot></RouterLink>
</template>

<script>
export default {
  props: {
    mode: {
      type: String,
      required: false,
      default: null
    },
    link: {
      type: Boolean,
      required: false,
      default: false,
    },
    to: {
      type: String,
      required: false,
      default: "/",
    },
  },
};
</script>

<style scoped>
button,
a {
  text-decoration: none;
  padding: 0.75rem 1.5rem;
  font: inherit;
  background-color: #00AF91;
  border: 1px solid #00AF91;
  color: white;
  cursor: pointer;
  border-radius: 30px;
  margin-right: 0.5rem;
  display: inline-block;
}

a:hover,
a:active,
button:hover,
button:active {
  background-color: #007965;
  border-color: #007965;
}

.flat {
  background-color: transparent;
  color: #00AF91;
  border: none;
}

.outline {
  background-color: transparent;
  border-color: #007965;
  color: #007965;
}

.flat:hover,
.flat:active,
.outline:hover,
.outline:active {
  background-color: #d1ebe6;
}
@media screen and (max-width: 650px) {
  button,
a {
  padding: 0.5rem 0.75rem;
}
}
</style>
