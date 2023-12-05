<script setup lang="ts">
import { computed, onMounted } from "vue";
import { useAuthStore } from "./store/auth_store";
import { useRoute, useRouter } from "vue-router";

const auth_store = useAuthStore()
const router = useRouter()
const route = useRoute()

const layout = computed(() => {
  const layout_name = route.meta.layout || 'default'
  return `${layout_name}-layout`
})


onMounted(async () => {
  console.error(auth_store.is_authencicated);
  

  if (!auth_store.is_authencicated) {
    router.push({ name: 'auth' })
  }
})
</script>

<template>
  <component :is="layout">
    <RouterView />
  </component>
</template>

<style scoped lang="scss"></style>
