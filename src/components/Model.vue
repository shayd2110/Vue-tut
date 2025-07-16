<template>
  <div class="backdrop" @click.self="closeModal">
    <div class="modal" :class="{ sale: theme === 'sale' }">
      <div class="modal-header">
        <!-- Uncomment to use props -->
        <!-- <h1>{{ header }}</h1>
        <p>{{ text }}</p> -->
        <slot>default content </slot>
        <div class="actions">
          <slot name="links"></slot>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  // Define props to accept data from parent component
  props: ["theme"],
  // Uncomment to use props
  // props: ["header", "text", "theme"],
  methods: {
    // You can add methods here if needed
    closeModal() {
      // Logic to close the modal can be added here
      this.$emit("close");
    },
  },
};
</script>

<style>
.backdrop {
  top: 0;
  position: fixed;
  background-color: rgba(0, 0, 0, 0.5);
  width: 100%;
  height: 100%;
}
.modal {
  width: 400px;
  padding: 20px;
  margin: 100px auto;
  background-color: white;
  border-radius: 10px;
}
.modal h1 {
  color: #03cfb4;
  border: none;
  padding: 0%;
}
.modal p {
  font-style: normal;
}
.modal .actions {
  text-align: center;
  margin: 30px 0 10px 0;
}
.modal .actions a {
  color: #333;
  padding: 8px;
  border: 1px solid #eee;
  border-radius: 5px;
  text-decoration: none;
  margin: 10px;
}
.modal.sale {
  background-color: crimson;
  color: white;
}
.modal.sale h1 {
  color: white;
}
.modal.sale .actions a {
  color: white;
  border: 1px solid #fff;
}
</style>
