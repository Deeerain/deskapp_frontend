<script setup lang="ts">
import { computed } from 'vue';
import { useUserStore } from '../../store/user_store';
import Sidebar from '../aside/Sidebar.vue'

const userStore = useUserStore();
const user = computed(() => {
  return userStore.get_user;
});

</script>

<template>
  <Sidebar branding="helpdesk" :collapsed="true">
    <div class="nav">
      <ul>
        <li>
          <RouterLink :to="{ name: 'home' }">Главная</RouterLink>
        </li>
        <li>
          <RouterLink :to="{ name: 'home' }">Пользователи</RouterLink>
        </li>
      </ul>
    </div>
    <template v-slot:footer>
      <div class="account">
        <h3>{{ user?.first_name }} {{ user?.last_name }}</h3>
        <h5>{{ user?.position.departament.name }}, {{ user?.position.name }}</h5>
      </div>
    </template>
  </Sidebar>
  <main>
    <div class="content">
      <slot></slot>
    </div>
  </main>
</template>

<style scoped lang="scss"></style>