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

    <!-- <PostsList :posts="posts" v-if="showPosts" /> -->
    <div v-if="error">{{ error }}</div>
    <div v-if="posts.length">
      <PostsList :posts="posts" />
    </div>
    <div v-else>Loading...</div>
    <!-- <button @click="showPosts = !showPosts">toggle posts</button> -->
    <!-- <button @click="posts.pop()">delete a post</button> -->
  </div>
</template>

<script>
import { computed, reactive, ref, watch, watchEffect } from "vue";
import PostsList from "@/components/PostsList.vue";
import { getPosts } from "@/composables/getPosts";

export default {
  name: "HomeView",
  components: { PostsList },
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
    const loremBody =
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Hic eos ut delectus unde! Quae nulla nisi sed quasi dolorum quod doloribus cum commodi, ex dolores iure enim consequatur numquam iste expedita deserunt omnis perferendis pariatur eligendi natus tenetur ullam nobis asperiores. Aliquam nihil, enim, magni maiores saepe rerum, assumenda at libero reprehenderit aperiam provident in veniam explicabo laborum quaerat architecto dolor et corrupti quas error culpa? Voluptas sint odit quisquam doloribus incidunt quae facere ipsa illum consequatur natus, molestiae eligendi quam quasi, officiis suscipit dolores distinctio non. Animi vero consectetur officia, autem sequi impedit rerum aliquid sunt at vel voluptatum.";

    // haedcoded posts data
    /*     const posts = ref([
      { title: "welcome to the blog", body: loremBody, id: 1 },
      { title: "top 5 CSS tricks", body: loremBody, id: 2 },
    ]); */
    // const posts = ref([]);
    // const error = ref(null);
    const { posts, error, load } = getPosts();
    load();
    // const showPosts = ref(true);

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

    /*     const load = async () => {
      try {
        let data = await fetch("http://localhost:3000/posts");
        console.log(data);
        if (!data.ok) {
          throw Error("no data available");
        }
        posts.value = await data.json();
      } catch (err) {
        error.value = err.message;
        console.log(error.value);
      }
    }; */
    // load();

    return {
      /* name, age, handleClick  , p */
      /* ninjaOne, updateNinjaOne, ninjaTwo, updateNinjaTwo, nameTwo */
      /*       names,
      search,
      matchedNames,
      handleClick, */
      posts,
      // showPosts,
      error,
    };
  },
};
</script>
