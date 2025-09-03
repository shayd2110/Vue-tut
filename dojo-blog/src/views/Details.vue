<template>
  <div v-if="error">{{ error }}</div>
  <div v-if="post" class="post">
    <h2>{{ post.title }}</h2>
    <p class="pre">{{ post.body }}</p>
    <span v-for="tag in post.tags" :key="tag" class="tag">#{{ tag }}</span>
  </div>
  <div v-else>Loading...</div>
</template>

<script>
import { getSinglePost } from "@/composables/getSinglePost";

export default {
  props: ["id"],
  setup(props) {
    console.log("Details setup, id:", props.id);
    const { post, error, load } = getSinglePost(props.id);
    load();

    return { post, error };
  },
};
</script>

<style>
.post {
  max-width: 1200px;
  margin: 0 auto;
}
.post p {
  color: #444;
  line-height: 1.5em;
  margin-top: 40px;
}
.pre {
  white-space: pre-wrap;
}
</style>
