<template>
  <div class="app">
    hello {{ name }} - {{ age }}

    <label for="name">Name</label>
    <input id="name" type="text" v-model="newName" />
    <button @click="changeName(newName)">Change name</button>

    <label for="age">Age</label>
    <input id="age" type="text" v-model="newAge" />
    <button @click="changeAge(newAge)">Change age</button>
  </div>
</template>

<script lang="ts">
import { defineComponent, reactive, ref, toRefs } from "vue";

export default defineComponent({
  name: "App",
  components: {},
  setup() {
    const name = ref("Mort");
    const age = ref<number | string>(25);
    const newName = ref("Mort");
    const newAge = ref<number | string>(25);
    return { name, age, newName, newAge };
    /*     const state = reactive({
      name: "Mort",
      newName: "",
      age: 25 as number | string,
      newAge: "" as number | string,
    });

    return { ...toRefs(state) }; */
  },
  /*   data() {
    return {
      name: "Mort",
      newName: "",
      age: 25 as number | string,
    };
  }, */
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
