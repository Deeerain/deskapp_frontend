import { defineStore } from "pinia";
import Api from "../services";
import { ref } from "vue";
import {
  Application,
  CreateApplicationData,
} from "../services/applications/types";

export const useAppsStore = defineStore("appsStore", {
  state: () => ({
    apps: ref<Array<Application>>([]),
  }),
  actions: {
    async load_apps() {
      const { success, content } = await Api.apps.GetList();

      if (success && content) {
        this.apps = content;
      }
    },

    async create(data: CreateApplicationData) {
      const { success, content } = await Api.apps.CreateApplication(data);

      if (success && content) {
        this.$state.apps.push(content);
      }
    },
  },
  getters: {
    get_apps: (state) => {
      return state.apps;
    },
    get_filtered_apps: (state) => {
      return state.apps;
    },
    get_app_by_id(state) {
      return (id: number) => {
        const app = state.apps.find((v) => v.id === id);

        return app;
      };
    },
  },
});
