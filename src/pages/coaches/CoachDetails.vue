<template>
  <div>
    <section>
      <BaseCard>
        <h2>{{ fullName }}</h2>
        <h3>${{ rate }}/hour</h3>
        <BaseBadge
          v-for="area in areas"
          :key="area.id"
          :type="area"
          :title="area"
        ></BaseBadge>
        <p>{{ description }}</p>
        </BaseCard>
    </section>
    <section>
      <BaseCard>
        <header :class="{ 'contacting': $route.path.includes('/contact')}" >
          <h2>Interested? Reach out now:</h2>
          <BaseButton link :to="contactLink">Contact</BaseButton>
        </header>
        <RouterView></RouterView>
      </BaseCard>
    </section>

  </div>
</template>

<script>
import BaseBadge from "@/components/ui/BaseBadge.vue";
import BaseButton from "@/components/ui/BaseButton.vue";
import BaseCard from "@/components/ui/BaseCard.vue";

export default {
  components: {
    BaseButton,
    BaseCard,
    BaseBadge,
  },
  props: ["id"],
  data() {
    return {
      selectedCoach: null,
    };
  },
  computed: {
    fullName() {
      return this.selectedCoach.firstName + " " + this.selectedCoach.lastName;
    },
    areas() {
      return this.selectedCoach.areas;
    },
    rate() {
      return this.selectedCoach.hourlyRate;
    },
    description() {
      return this.selectedCoach.description;
    },
    contactLink() {
      return this.$route.path + "/contact";
    },
  },
  created() {
    this.selectedCoach = this.$store.getters["coaches/coaches"].find(
      (c) => c.id === this.id
    );
  },
};
</script>

<style scoped>
.contacting{
  display:none;
}</style>