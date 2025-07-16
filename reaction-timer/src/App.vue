<template>
  <h1>Reaction Timer</h1>
  <button @click="start" :disabled="isPlaying">play</button>
  <Block v-if="isPlaying" :delay="delay" />
</template>

<script>
import Block from "./components/Block.vue";
export default {
  name: "App",
  components: { Block },
  data() {
    return {
      isPlaying: false,
      delay: null,
    };
  },
  methods: {
    start() {
      // Logic to start the reaction timer game
      console.log("Game started!");
      // Set a random delay between 2 and 7 seconds
      this.delay = Math.floor(Math.random() * 5000) + 2000;
      // Simulate a delay before the game starts
      this.isPlaying = true;
      console.log(`Wait for ${this.delay} milliseconds...`);
    },
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #444;
  margin-top: 60px;
}
</style>
