const app = Vue.createApp({
  //   template: `<h2>Welcome to Vue.js!</h2>`,
  data() {
    return {
      url: "https://google.com",
      showBooks: true,
      books: [
        { title: "Name of the wind", author: "Patrick Rothfuss", img: "assets/1.jpg", isFav: true },
        { title: "The way of kings", author: "Brandon Sanderson", img: "assets/2.jpg", isFav: false },
        { title: "The final empire", author: "Brandon Sanderson", img: "assets/3.jpg", isFav: true },
      ],

      // age: 45,
      x: 0,
      y: 0,
    };
  },
  methods: {
    changeTitle(title) {
      // this.title = "Welcome to Vue.js - Updated!";
      this.title = title;
    },
    toggleBooks() {
      this.showBooks = !this.showBooks;
    },
    handleEvent(e, data) {
      console.log(e);
      console.log(e.type);
      if (data) {
        console.log(data);
      }
    },
    handleMousemove(e) {
      this.x = e.offsetX;
      this.y = e.offsetY;
      // console.log(this.x, this.y);
    },
    toggleFav(book) {
      book.isFav = !book.isFav;
    },
  },
  computed: {
    filteredBooks() {
      return this.books.filter((book) => book.isFav);
    },
  },
});

app.mount("#app");
