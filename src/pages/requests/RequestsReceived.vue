<template>
  <section>
    <BaseCard>
      <header>
        <h2>Requests Received</h2>
      </header>
      <ul v-if="hasRequests">
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
  components: { BaseCard, RequestItem },
  computed: {
    receivedRequests() {
      return this.$store.getters["requests/requests"];
    },
    hasRequests() {
      return this.$store.getters["requests/hasRequests"];
    },
  },
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
