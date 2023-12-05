import { defineStore } from "pinia";
import Api from "../services";
import { ref } from "vue";
import { User } from "../services/users/types";

export const useUserStore = defineStore("userStore", {
  state: () => ({
    user: ref<User>(),
  }),
  actions: {
    async LoadCurrentUserData() {
      const { success, content } = await Api.users.GetMe();

      if (content && success) {
        this.user = content;
      }
    },
  },
  getters: {
    get_user: (state) => {
      return state.user;
    },
  },
});
