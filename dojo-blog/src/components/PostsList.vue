<template>
  <div class="posts-list">
    <h1>Posts List</h1>
    <div v-for="post in posts" :key="post.id" class="post">
      <SinglePost :post="post" />
    </div>
  </div>
</template>

<script>
import { onMounted, onUnmounted, onUpdated } from "vue";
import SinglePost from "./SinglePost.vue";

export default {
  components: { SinglePost },
  props: ["posts"],
  setup(props) {
    /*     console.log(props.posts);
    onMounted(() => {
      console.log("PostsList mounted");
    });
    onUnmounted(() => {
      console.log("PostsList unmounted");
    });
    onUpdated(() => {
      console.log("PostsList updated");
    }); */
  },
  /*   mounted: () => {
    console.log("PostsList mounted using oprions API");
  }, */
};
</script>

<style></style>
