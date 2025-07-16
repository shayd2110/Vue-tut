<template>
  <h1>{{ title }}</h1>
  <!-- <input type="text" ref="name" /> -->
  <p>Welcome...</p>
  <teleport to=".modals" v-if="showModal">
    <Model :header="header" :text="text" theme="sale" @close="toggleModal">
      <template v-slot:links>
        <a href="#">Sign Up now!</a>
        <a href="#">More info</a>
      </template>
      <h1>Mort!</h1>
      <p>Grab your Mort swag for half price!</p>
    </Model>
    <!-- Uncomment to use props -->
    <!-- <Model :header="header" :text="text" theme="sale" @close="toggleModal" /> -->
  </teleport>
  <teleport to=".modals" v-if="showNettaModal">
    <Model theme="sale" @close="toggleNettaModal">
      <h1>Netta!</h1>
      <p>Grab your Netta swag for half price!</p>
      <template v-slot:links>
        <a href="#">Sign Up now!</a>
        <a href="#">More info</a>
      </template>
    </Model>
  </teleport>
  <div class="buttons">
    <button @click="toggleModal">open modal</button>
    <button @click="toggleNettaModal">open Netta modal</button>
  </div>
</template>
<!-- Challenge
 1: create an extra button to open a different modal
 2: use the same  modal component but pass in different template (slot)
 3: use a different method to open the modal
  -->

<script>
// import HelloWorld from './components/HelloWorld.vue'
import Model from "./components/Model.vue";

export default {
  name: "App",
  data() {
    return {
      title: "Hello Vue!",
      // Uncomment to use props
      // header: "Sign up for Giveaway!",
      // text: "Grab your Mort swag for half price!",
      name: "Mort",
      showModal: false,
      showNettaModal: false,
    };
  },
  methods: {
    handleClick() {
      console.log(this.$refs.name);
      this.$refs.name.classList.add("active");
      this.$refs.name.focus();
    },
    toggleModal() {
      this.showModal = !this.showModal;
    },
    toggleNettaModal() {
      this.showNettaModal = !this.showNettaModal;
    },
  },
  // Uncomment the following lines if you want to use HelloWorld component
  // components: {
  //   HelloWorld
  // }
  components: {
    Model,
  },
};
</script>

<style>
#app,
.modals {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
h1 {
  border-bottom: 1px solid #ddd;
  display: inline-block;
  padding-bottom: 10px;
}
.buttons {
  display: flex;
  flex-direction: row;
  justify-content: center;
  gap: 20px;
}
</style>
