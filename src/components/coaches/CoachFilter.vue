<template>
  <BaseCard>
    <h2>Find your Coach!</h2>
    <span class="filter-option">
      <label class="container" for="frontend">Frontend
      <input type="checkbox" id="frontend" checked @change="setFilter" />
      <span class="checkmark"></span>
      </label>

      <label class="container" for="backend">Backend
      <input type="checkbox" id="backend" checked @change="setFilter"  />
      <span class="checkmark"></span>
      </label>

      <label class="container" for="career">Career
      <input type="checkbox" id="career" checked @change="setFilter"  />
      <span class="checkmark"></span>
      </label>
    </span>
  </BaseCard>
</template>

<script>
import BaseCard from "../ui/BaseCard.vue";

export default {
  components: { BaseCard },
  emits: ['change-filter'],
  data() {
    return {
      filters: {
        frontend: true,
        backend: true,
        career: true
      }
    }
  },
  methods: {
    setFilter(e){
    const inputId = e.target.id;
    const isActive = e.target.checked;
    const updatedFilters = {
      ...this.filters,
      [inputId]: isActive
    };
    this.filters = updatedFilters;
    this.$emit('change-filter', updatedFilters);
    }
  }
};
</script>

<style scoped>
h2 {
  margin: 0.5rem 0;
}

.container {
  display: block;
  position: relative;
  padding-left: 2rem;
  margin-bottom: 1rem;
  cursor: pointer;
  font-size: 1rem;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
}
.container input {
  position: absolute;
  opacity: 0;
  cursor: pointer;
  height: 0;
  width: 0;
}
.checkmark {
  position: absolute;
  top: 0;
  left: 0;
  height: 25px;
  width: 25px;
  background-color: #eee;
}

.container:hover input ~ .checkmark {
  background-color: #ccc;
}

.container input:checked ~ .checkmark {
  background-color: #007965;
}

.checkmark:after {
  content: "";
  position: absolute;
  display: none;
}

.container input:checked ~ .checkmark:after {
  display: block;
}

.container .checkmark:after {
  left: 9px;
  top: 5px;
  width: 5px;
  height: 10px;
  border: solid white;
  border-width: 0 3px 3px 0;
  -webkit-transform: rotate(45deg);
  -ms-transform: rotate(45deg);
  transform: rotate(45deg);
}
</style>
