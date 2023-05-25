<template>
  <div>
    <base-dialog
      :show="!!error"
      title="An error occurred!"
      @close="handleError"
    >
      <p>{{ error }}</p>
    </base-dialog>
    <section><CoachFilter @change-filter="setFilters" /></section>
    <section>
      <BaseCard>
        <div class="controls">
          <BaseButton mode="outline" @click="loadCoaches(true)"
            >Refresh</BaseButton
          >
          <BaseButton v-if="!isCoach && !isLoading" link to="/register"
            >Register as Coach</BaseButton
          >
        </div>
        <div v-if="isLoading"><BaseSpinner /></div>
        <ul v-else-if="hasCoaches">
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
  </div>
</template>

<script>
import BaseCard from "@/components/ui/BaseCard.vue";
import CoachItem from "../../components/coaches/CoachItem.vue";
import BaseButton from "@/components/ui/BaseButton.vue";
import CoachFilter from "@/components/coaches/CoachFilter.vue";
import BaseSpinner from "@/components/ui/BaseSpinner.vue";

export default {
  components: {
    CoachItem,
    BaseCard,
    BaseButton,
    CoachFilter,
    BaseSpinner,
  },
  data() {
    return {
      isLoading: false,
      error: null,
      activeFilters: {
        frontend: true,
        backend: true,
        career: true,
      },
    };
  },
  computed: {
    isCoach() {
      return this.$store.getters["coaches/isCoach"];
    },
    filteredCoaches() {
      const coaches = this.$store.getters["coaches/coaches"];
      return coaches.filter((c) => {
        if (this.activeFilters.frontend && c.areas.includes("frontend")) {
          return true;
        }
        if (this.activeFilters.backend && c.areas.includes("backend")) {
          return true;
        }
        if (this.activeFilters.career && c.areas.includes("career")) {
          return true;
        }
        return false;
      });
    },
    hasCoaches() {
      return !this.isLoading && this.$store.getters["coaches/hasCoaches"];
    },
  },
  created() {
    this.loadCoaches();
  },
  methods: {
    setFilters(updatedFilters) {
      this.activeFilters = updatedFilters;
    },
    async loadCoaches(refresh = false) {
      this.isLoading = true;
      try {
        await this.$store.dispatch("coaches/loadCoaches", {
          forceRefresh: refresh,
        });
      } catch (error) {
        this.error = error.message || "Something went wrong, try again later!";
      }
      this.isLoading = false;
    },
    handleError() {
      this.error = null;
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
