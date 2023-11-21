<script setup lang="ts">
import { onMounted } from "vue";
import Sidebar from "./components/aside/Sidebar.vue"
import { useAuthStore } from "./store/auth_store";
import { useRouter } from "vue-router";

const auth_store = useAuthStore()
const router = useRouter()


onMounted(() => {
  if (!auth_store.is_authencicated)  {
    router.push({name: 'auth'})
  }
})
</script>

<template>
  <Sidebar branding="helpdesk" />
  <main>
    <header>

    </header>
    <div class="content">
      <RouterView />
    </div>
  </main>
</template>

<style scoped lang="scss">
</style>
