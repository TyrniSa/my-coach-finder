<template>
  <base-dialog :show="!!error" title="An error occurred!" @close="handleError">
    <p>{{ error }}</p>
  </base-dialog>
  <section>
    <BaseCard>
      <header>
        <h2>Requests Received</h2>
      </header>
      <base-spinner v-if="isLoading"></base-spinner>
      <ul v-else-if="hasRequests && !isLoading">
        <RequestItem
          v-for="item in receivedRequests"
          :key="item.id"
          :email="item.userEmail"
          :message="item.message"
        >
          {{ item }}
        </RequestItem>
      </ul>
      <h3 v-else>You haven't received any requests yet!</h3>
    </BaseCard>
  </section>
</template>

<script>
import RequestItem from "@/components/requests/RequestItem.vue";
import BaseCard from "@/components/ui/BaseCard.vue";

export default {
  data() {
    return {
      isLoading: false,
      error: null,
    };
  },
  components: { BaseCard, RequestItem },
  computed: {
    receivedRequests() {
      return this.$store.getters["requests/requests"];
    },
    hasRequests() {
      return this.$store.getters["requests/hasRequests"];
    },
  },
  methods: {
    async loadRequests() {
      try {
        this.isLoading = true;
        await this.$store.dispatch("requests/fetchRequests");
      } catch (error) {
        this.error = error.message || "Something went wrong, try again later!";
      }
      this.isLoading = false;
    },
    handleError(){
      this.error = null;
    }
  },
  created(){
    this.loadRequests();
  }
};
</script>

<style scoped>
header {
  text-align: center;
}

ul {
  list-style: none;
  margin: 2rem auto;
  padding: 0;
  max-width: 30rem;
}

h3 {
  text-align: center;
}
</style>
