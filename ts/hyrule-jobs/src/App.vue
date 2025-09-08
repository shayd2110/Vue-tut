<template>
  <div class="app">
    hello {{ name }} - {{ age }}

    <input type="text" v-model="newName" />
    <button @click="changeName(newName)">Change name</button>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "App",
  components: {},
  data() {
    return {
      name: "Mort",
      newName: "",
      age: 25 as number | string,
    };
  },
  methods: {
    changeName(newName: string) {
      this.name = newName;
      return name;
    },
    changeAge(newAge: number | string) {
      this.age = newAge;
      return newAge;
    },
  },
});
</script>

<style>
#app {
}
</style>
