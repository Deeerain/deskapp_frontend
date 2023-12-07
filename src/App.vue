<script setup lang="ts">
import { computed, onMounted } from "vue";
import { useAuthStore } from "./store/auth_store";
import { useRoute, useRouter } from "vue-router";
import { useAppsStore } from "./store/apps_store";
import { useUserStore } from "./store/user_store";

const auth_store = useAuthStore();
const apps_store = useAppsStore();
const user_store = useUserStore();
const router = useRouter();
const route = useRoute();

const layout = computed(() => {
  const layout_name = route.meta.layout || 'default'
  return `${layout_name}-layout`
});


onMounted(async () => {
  if (!auth_store.is_authencicated) {
    router.push({ name: 'auth' });
  }

  user_store.LoadCurrentUserData();
  apps_store.load_apps();
});
</script>

<template>
  <component :is="layout">
    <RouterView />
  </component>
</template>

<style scoped lang="scss"></style>
