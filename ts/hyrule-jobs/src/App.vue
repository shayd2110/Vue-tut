<template>
  <div class="app">
    <JobsList :jobs="jobs" />
    <!-- 
    hello {{ name }} - {{ age }}
    <label for="name">Name</label>
    <input id="name" type="text" v-model="newName" />
    <button @click="changeName(newName)">Change name</button>

    <label for="age">Age</label>
    <input id="age" type="text" v-model="newAge" />
    <button @click="changeAge(newAge)">Change age</button> -->
  </div>
</template>

<script lang="ts">
import { defineComponent, reactive, ref, toRefs } from "vue";
import { Job } from "@/types/jobs";
import JobsList from "@/components/JobsList.vue";

export default defineComponent({
  name: "App",
  components: { JobsList },
  setup() {
    const jobs = ref<Job[]>([
      { title: "farm worker", location: "lon lon ranch", salary: 30000, id: "1" },
      { title: "quarryman", location: "death mountain", salary: 40000, id: "2" },
      { title: "flute player", location: "the lost woods", salary: 35000, id: "3" },
      { title: "fisherman", location: "lake hylia", salary: 21000, id: "4" },
      { title: "prison guard", location: "gerudo valley", salary: 32000, id: "5" },
    ]);
    return { jobs };
    /*     const name = ref("Mort");
    const age = ref<number | string>(25);
    const newName = ref("");
    const newAge = ref<number | string>("");
    return { name, age, newName, newAge }; */
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
    /*     changeName(newName: string) {
      this.name = newName;
      return name;
    },
    changeAge(newAge: number | string) {
      this.age = newAge;
      return newAge;
    }, */
  },
});
</script>

<style>
#app {
}
</style>
