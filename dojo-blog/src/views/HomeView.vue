<template>
  <div class="home">
    <h1>Home</h1>
    <!--  
    <p ref="p">{{ name }} is {{ age }} years old.</p>
    <button @click="handleClick">Click me</button>
    <button @click="age++">inc. age</button>
    <input type="text" v-model="name" />
     -->
    <!--     <h2>Refs</h2>
    <p>{{ ninjaOne.name }} - {{ ninjaOne.age }}</p>
    <button @click="updateNinjaOne">Update ninjaOne</button>
    <h2>Reactive</h2>
    <p>{{ ninjaTwo.name }} - {{ ninjaTwo.age }} - {{ nameTwo }}</p>
    <button @click="updateNinjaTwo">Update ninjaTwo</button>
    -->
    <!-- <input type="text" placeholder="search..." v-model="search" /> -->
    <!-- <p>search term: {{ search }}</p> -->
    <!-- <div v-for="name in names" :key="name">{{ name }}</div> -->
    <!-- <h3>Matched Names:</h3> -->
    <!-- <div v-for="name in matchedNames" :key="name">{{ name }}</div> -->
    <!-- <button @click="handleClick">Stop Watches</button> -->
  </div>
</template>

<script>
import { computed, reactive, ref, watch, watchEffect } from "vue";

export default {
  name: "HomeView",
  setup: () => {
    /* declare p here to use it in setup()
    console.log("setup");
    console.log("this", this); // undefined

    const p = ref("hello"); // works
    console.log(p, p.value); // p is a ref object, p.value is the DOM element
 */
    /*     const name = ref("mort");
    const age = ref(9); */
    /*     const ninjaOne = ref({ name: "mort", age: 9 });
    const ninjaTwo = reactive({ name: "netta", age: 0.1 });

    const nameOne = ref("mort");
    const nameTwo = reactive("netta");
 */

    /*     // computed values
    const names = ref(["mort", "netta", "yossi", "dana", "itay", "dorit", "yoni"]);
    const search = ref("");

    // watchers

    const stopWatch = watch(search, () => {
      console.log("watch: search changed");
    });

    const stopWatchEffect = watchEffect(() => {
      console.log("watchEffect: search is now:", search.value);
    });

    

    const matchedNames = computed(() => {
      return names.value.filter((name) => name.toLowerCase().includes(search.value.toLowerCase()));
    }); */
    const posts = ref([
      { title: "welcome to the blog", body: "lorem ipsum dolor sit amet...", id: 1 },
      { title: "top 5 CSS tricks", body: "lorem ipsum dolor sit amet...", id: 2 },
    ]);

    // const handleClick = () => {
    //   /*
    //   console.log(p, p.value);
    //   p.value.classList.add("test");
    //   p.value.textContent = "clicked!"; */
    //   name.value = "morty";
    // };

    // const updateNinjaOne = () => {
    //   ninjaOne.value.age = 40;
    // };

    // const updateNinjaTwo = () => {
    //   ninjaTwo.age = 1;
    //   // nameTwo = "netta the great"; /* won't work, nameTwo is not an object */
    // };

    /*     const handleClick = () => {
      stopWatch();
      stopWatchEffect();
    }; */

    return {
      /* name, age, handleClick  , p */
      /* ninjaOne, updateNinjaOne, ninjaTwo, updateNinjaTwo, nameTwo */
      /*       names,
      search,
      matchedNames,
      handleClick, */
      posts,
    };
  },
};
</script>
