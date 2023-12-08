<script setup lang="ts">
import { computed, onMounted } from "vue";
import { useAuthStore } from "./store/auth_store";
import { useRoute } from "vue-router";
import { useAppsStore } from "./store/apps_store";
import { useUserStore } from "./store/user_store";

const auth_store = useAuthStore();
const apps_store = useAppsStore();
const user_store = useUserStore();
const route = useRoute();

const layout = computed(() => {
  const layout_name = route.meta.layout || 'default'
  return `${layout_name}-layout`
});

onMounted(() => {
  if (auth_store.user_authenticated) {
    user_store.LoadCurrentUserData();
    apps_store.load_apps();
  }
});

</script>

<template>
  <component :is="layout">
    <RouterView />
  </component>
</template>

<style scoped lang="scss"></style>
