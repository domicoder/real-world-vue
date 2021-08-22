<template>
  <div class="event-card--center">
    <div class="event-card" v-if="event">
      <h2>
        <strong> {{ event.title }} </strong>
      </h2>
      <span>@ {{ event.time }} on {{ event.date }}</span>
      <h4>{{ event.title }}</h4>
    </div>
  </div>
</template>

<script>
import EventService from "@/services/EventService.js";

export default {
  name: "EventDetails",
  props: {
    id: String,
  },
  data() {
    return {
      event: null,
    };
  },
  async created() {
    await EventService.getEvent(this.id)
      .then((response) => {
        this.event = response.data;
      })
      .catch((error) => {
        console.log("error", error);
      });
  },
};
</script>

<style scoped lang="scss">
.event-card {
  padding: 20px;
  width: 250px;
  border: 1px solid #39495c;
  margin-bottom: 18px;
  &--center {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
}
</style>
