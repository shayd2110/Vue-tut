<template>
  <router-link :to="{ name: 'Details', params: { id: post.id } }">
    <h3>{{ post.title }}</h3>
  </router-link>
  <p>{{ snippet }}</p>
  <span v-for="tag in post.tags" :key="tag" class="tag">#{{ tag }}</span>
</template>

<script>
import { computed } from "vue";

export default {
  name: "SinglePost",
  props: ["post"],
  setup(props) {
    const snippet = computed(() => {
      return props.post.body.substring(0, 100) + "...";
    });
    return { snippet };
  },
};
</script>

<style>
.tag {
  background: #42b983;
  color: white;
  padding: 2px 6px;
  margin-right: 4px;
  border-radius: 4px;
  font-size: 0.8em;
}
</style>
