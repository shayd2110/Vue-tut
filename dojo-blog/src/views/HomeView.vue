<template>
  <div class="home">
    <h1>Home</h1>
    <p>{{ name }} is {{ age }} years old.</p>
    <button @click="handleClick">Click me</button>
  </div>
</template>

<script>
export default {
  name: "HomeView",
  setup: () => {
    console.log("setup");
    let name = "mort";
    let age = 9;

    const handleClick = () => {
      console.log("you clicked me");
    };

    return { name, age, handleClick };
  },
};
</script>
