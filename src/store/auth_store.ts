import { defineStore } from "pinia";
import Api from "../services";

export const useAuthStore = defineStore("authStore", {
  state: () => ({
    access_token: localStorage.getItem("access_token"),
    refres_token: localStorage.getItem("refresh_token"),
    is_authencicated: Boolean(localStorage.getItem("is_authenticated")),
  }),
  getters: {
    user_authenticated: (state) => {
      return state.is_authencicated;
    },
  },
  actions: {
    async login(username_or_email: string, password: string) {
      const { success } = await Api.auth.getTokens({
        username: username_or_email,
        password: password,
      });

      return success;
    },
    async verify_token(token: string) {
      return token;
    },
    async logout() {
      localStorage.clear();
    },
  },
});
