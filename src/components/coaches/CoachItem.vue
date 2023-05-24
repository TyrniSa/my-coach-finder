<template>
  <li>
    <h3>{{ fullName }}</h3>
    <h4>${{ rate }}/hour</h4>
    <div>
      <BaseBadge v-for="area in areas" :key="area" :type="area" :title="area">
      </BaseBadge>
    </div>
    <div class="actions">
      <BaseButton mode="outline" link :to="coachContactLink">Contact</BaseButton>
      <BaseButton link :to="coachDetailsLink">View Details</BaseButton>
    </div>
  </li>
</template>

<script>
import BaseBadge from '../ui/BaseBadge.vue';
import BaseButton from '../ui/BaseButton.vue';

export default {
    props: ["id", "firstName", "lastName", "rate", "areas"],
    computed: {
        fullName() {
            return this.firstName + " " + this.lastName;
        },
        coachContactLink() {
            return this.$route.path + "/" + this.id + "/contact";
        },
        coachDetailsLink() {
            return this.$route.path + "/" + this.id;
        }
    },
    components: { BaseButton, BaseBadge }
};
</script>

<style scoped>
li {
  margin: 1rem 0;
  border: 1px solid #424242;
  border-radius: 12px;
  padding: 1rem;
}

h3 {
  font-size: 1.5rem;
}

h3,
h4 {
  margin: 0.5rem 0;
}

div {
  margin: 0.5rem 0;
}

.actions {
  display: flex;
  justify-content: flex-end;
}
</style>
