<template>
  <section><CoachFilter @change-filter="setFilters" /></section>
  <section>
    <BaseCard>
      <div class="controls">
        <BaseButton mode="outline">Refresh</BaseButton>
        <BaseButton link to="/register">Register as Coach</BaseButton>
      </div>
      <ul v-if="hasCoaches">
        <CoachItem
          v-for="coach in filteredCoaches"
          :key="coach.id"
          :id="coach.id"
          :firstName="coach.firstName"
          :lastName="coach.lastName"
          :rate="coach.hourlyRate"
          :areas="coach.areas"
        >
          {{ coach }}
        </CoachItem>
      </ul>
      <h3 v-else>No coaches yet!</h3>
    </BaseCard>
  </section>
</template>

<script>
import BaseCard from "@/components/ui/BaseCard.vue";
import CoachItem from "../../components/coaches/CoachItem.vue";
import BaseButton from "@/components/ui/BaseButton.vue";
import CoachFilter from "@/components/coaches/CoachFilter.vue";

export default {
  components: {
    CoachItem,
    BaseCard,
    BaseButton,
    CoachFilter,
  },
  data() {
    return {
      activeFilters: {
        frontend: true,
        backend: true,
        career: true,
      },
    };
  },
  computed: {
    filteredCoaches() {
      const coaches = this.$store.getters["coaches/coaches"];
      return coaches.filter(c => {
        if(this.activeFilters.frontend && c.areas.includes('frontend')){
          return true;
        }
        if(this.activeFilters.backend && c.areas.includes('backend')){
          return true;
        }
        if(this.activeFilters.career && c.areas.includes('career')){
          return true;
        }
        return false;
      });
    },
    hasCoaches() {
      return this.$store.getters["coaches/hasCoaches"];
    },
  },
  methods: {
    setFilters(updatedFilters) {
      this.activeFilters = updatedFilters;
    },
  },
};
</script>

<style scoped>
ul {
  list-style: none;
  margin: 0;
  padding: 0;
}

.controls {
  display: flex;
  justify-content: space-between;
}
</style>
