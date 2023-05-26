<template>
  <span class="badge" :class="type">
    {{ text }}
  </span>
</template>

<script>
export default {
  props: ['type', 'title'],
  computed:{
    text(){
      return this.title.toUpperCase();
    }
  }
}
</script>

<style scoped>
.badge {
  background-color: #ccc;
  color: #252525;
  border-radius: 30px;
  padding: 0.5rem 1.5rem;
  display: inline-block;
  margin-right: 0.5rem;
}

.frontend {
  background-color: #00AF91;
  color: white;
}

.backend {
  background-color: #007965;
  color: white;
}

.career {
  background-color: #F58634;
  color: white;
}
@media screen and (max-width: 650px) {
  .badge {
  padding: 0.25rem 0.75rem;
  font-size: 0.75rem;
}
}
</style>