<template>
  <p>Reaction time: {{ score }} ms</p>
  <p class="rank">Rank: {{ rank }}</p>
</template>
<script>
export default {
  name: "Results",
  props: ["score"],
  data() {
    return {
      rank: null,
    };
  },
  methods: {
    calculateRank() {
      if (this.score < 250) {
        this.rank = "Ninja Fingers";
      } else if (this.score < 400) {
        this.rank = "Rapid Reflexes";
      } else {
        this.rank = "snail pace...";
      }
    },
  },
  mounted() {
    this.calculateRank();
  },
};
</script>
<style>
.rank {
  font-weight: bold;
  font-size: 1.4em;
  color: #0faf87;
  margin-top: 20px;
}
</style>
