<template>
  <div v-if="job">
    <h1>{{ job.title }}</h1>
    <p>The job id is {{ id }}</p>
    <p>{{ job.description }}</p>
  </div>
  <div v-else>Loading...</div>
</template>

<script>
export default {
  props: ["id"],
  /*   data() {
    return {
      id: this.$route.params.id,
    };
  }, */
  data() {
    return {
      // Using local db.json file with json-server
      job: null,
    };
  },
  mounted() {
    fetch("http://localhost:3000/jobs/" + this.id)
      .then((response) => response.json())
      .then((data) => {
        this.job = data;
      })
      .catch((error) => {
        console.error("Error fetching jobs:", error);
      });
  },
};
</script>

<style></style>
