import { DB_SERVER_URL } from "@/shared/consts";
import { fetchAndDeletTask, fetchAndPatchIsFav, fetchAndPostTask, fetchAndProccess } from "@/utils/fetch";
import { defineStore } from "pinia";

export const useTaskStore = defineStore("taskStore", {
  state: () => ({
    tasks: [],
    loading: false,
  }),
  getters: {
    favs() {
      return this.tasks.filter((t) => t.isFav);
    },

    favCnt() {
      return this.tasks.reduce((prev, curr) => {
        return curr.isFav ? prev + 1 : prev;
      }, 0);
    },

    totalCnt: (state) => {
      return state.tasks.length;
    },
  },

  actions: {
    async getTasks() {
      this.loading = true;
      const data = await fetchAndProccess(DB_SERVER_URL);
      this.tasks = data;
      this.loading = false;
    },

    async addTask(task) {
      this.tasks.push(task);
      await fetchAndPostTask(DB_SERVER_URL, task);
    },

    async deleteTask(id) {
      this.tasks = this.tasks.filter((task) => {
        return task.id !== id;
      });
      await fetchAndDeletTask(DB_SERVER_URL, Number(id));
    },

    async toggleFav(id) {
      const task = this.tasks.find((task) => task.id === id);
      task.isFav = !task.isFav;
      await fetchAndPatchIsFav(DB_SERVER_URL, task);
    },
  },
});
