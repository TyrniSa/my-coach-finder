<template>
  <BaseCard>
    <h2>Register as a Coach now!</h2>
    <section>
      <CoachForm @save-data="saveData" />
    </section>
  </BaseCard>
</template>

<script>
import CoachForm from "@/components/coaches/CoachForm.vue";
import BaseCard from "@/components/ui/BaseCard.vue";

export default {
  components: { CoachForm, BaseCard },
  methods: {
    saveData(data) {
      this.$store.dispatch("coaches/registerCoach", data);
      this.$router.replace('/coaches');
    },
  },
};
</script>
