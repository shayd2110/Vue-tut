<template>
  <div class="block" v-if="showBlock" @click="stopTimer">click me</div>
</template>

<script>
export default {
  props: ["delay"],
  data() {
    return {
      showBlock: false,
      trimer: null,
      reactionTime: 0,
    };
  },
  mounted() {
    console.log("component mounted ");
    setTimeout(() => {
      this.showBlock = true;
      this.startTimer();
    }, this.delay);
  },
  methods: {
    startTimer() {
      console.log("Block clicked!");
      this.timer = setInterval(() => {
        this.reactionTime += 10; // Increment reaction time every 10ms
      }, 10);
    },
    stopTimer() {
      clearInterval(this.timer);
      this.$emit("gameOver", this.reactionTime);
    },
  },
};
</script>

<style>
.block {
  width: 400px;
  border-radius: 20px;
  background: #0faf87;
  color: white;
  text-align: center;
  padding: 100px 0;
  margin: 40px auto;
}
</style>
