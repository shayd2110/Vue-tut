<template>
  <div class="home">
    <h1>Home</h1>
    <p ref="p">{{ name }} is {{ age }} years old.</p>
    <button @click="handleClick">Click me</button>
    <button @click="age++">inc. age</button>
    <input type="text" v-model="name" />
  </div>
</template>

<script>
import { ref } from "vue";

export default {
  name: "HomeView",
  setup: () => {
    /* declare p here to use it in setup()     
    console.log("setup");
    console.log("this", this); // undefined

    const p = ref("hello"); // works
    console.log(p, p.value); // p is a ref object, p.value is the DOM element
 */
    const name = ref("mort");
    const age = ref(9);

    const handleClick = () => {
      /*       
      console.log(p, p.value);
      p.value.classList.add("test");
      p.value.textContent = "clicked!"; */
      name.value = "morty";
    };

    return { name, age, handleClick /* , p */ };
  },
};
</script>
