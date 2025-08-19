<template>
  <h1>Reaction Timer</h1>
  <button @click="start" :disabled="isPlaying">play</button>
  <Block v-if="isPlaying" :delay="delay" @gameOver="endGame" />
  <Results v-if="showResult" :score="score" />
</template>

<script>
import Block from "./components/Block.vue";
import Results from "./components/Results.vue";
export default {
  name: "App",
  components: { Block, Results },
  data() {
    return {
      isPlaying: false,
      delay: null,
      score: null,
      showResult: false,
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
      this.showResult = false; // Reset result display
    },
    endGame(reactionTime) {
      // Logic to handle the end of the game
      console.log(`Game over! Your reaction time was ${reactionTime} ms`);
      this.score = reactionTime;
      // Reset the game state
      this.isPlaying = false;
      this.delay = null; // Reset delay for next game
      this.showResult = true;
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
button {
  background-color: #0faf87;
  color: white;
  border: none;
  padding: 8px 20px;
  border-radius: 5px;
  cursor: pointer;
  font-size: 16px;
  letter-spacing: 1px;
  margin: 10px;
}
button[disabled] {
  cursor: not-allowed;
  opacity: 0.2;
}
</style>
