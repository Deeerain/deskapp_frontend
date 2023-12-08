<script setup lang="ts">
import { computed, ref } from 'vue';
import { useUserStore } from '../../store/user_store';
import { useAuthStore } from '../../store/auth_store';
import Sidebar from '../aside/Sidebar.vue';
import ContentWrapper from '../content/ContentWrapper.vue';
import { useRouter } from 'vue-router';

const router = useRouter();
const userStore = useUserStore();
const authStore = useAuthStore();
const sidebarCollapsed = ref<boolean>(false);
const user = computed(() => {
  return userStore.get_user;
});

const onVisibleButtonClickHandler = () => {
  sidebarCollapsed.value = !sidebarCollapsed.value;
}

const logoutButtonClickHandler = () => {

  authStore.logout().catch(() => {
    authStore.$reset();
  })

  router.push({ name: 'auth' });
}

</script>

<template>
  <Sidebar branding="helpdesk" :collapsed="sidebarCollapsed" @on-control-button-click="onVisibleButtonClickHandler">
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
    <ContentWrapper :visible-sidebar-button="sidebarCollapsed"
      @on-visible-sidebar-button-click="onVisibleButtonClickHandler" @on-logout-button-click="logoutButtonClickHandler">
      <slot></slot>
    </ContentWrapper>
  </main>
</template>

<style scoped lang="scss">
main {
  .content {
    height: 100%;
  }
}
</style>