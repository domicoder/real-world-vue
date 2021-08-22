<template>
  <div>
    <div>
      <img src="../assets/404_not_found.png" alt="Not found" height="600" />
      <p>
        Not found. Back to
        <router-link :to="{ name: 'EventList' }">Home page</router-link>.
      </p>
    </div>
  </div>
</template>

<script>
export default {
  name: "NotFound",
};
</script>

<style scoped lang="scss"></style>
