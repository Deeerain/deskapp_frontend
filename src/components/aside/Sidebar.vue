<script setup lang="ts">
import { useUserStore } from '../../store/user_store'
import { computed } from 'vue';

import Account from "./Account.vue"

const props = defineProps<{
  branding: string
}>()
const user_store = useUserStore()
const user = computed(() => {
  return user_store.get_user
})

</script>

<template>
  <aside>
    <div class="branding">
      <h1>
        <RouterLink :to="{ name: 'home' }">{{ branding }}</RouterLink>
      </h1>
    </div>
    <nav>
      <ul class="nav-menu">
        <li>
          <RouterLink :to="{ name: 'home' }" class="nav-menu__item">
            <img src="../../assets/img/event-icon.svg" alt="">
            Заявки
          </RouterLink>
        </li>
        <li>
          <RouterLink :to="{ name: 'home' }" class="nav-menu__item">Пользователи</RouterLink>
        </li>
        <li>
          <RouterLink :to="{ name: 'home' }" class="nav-menu__item">Заявки</RouterLink>
        </li>
        <li>
          <RouterLink :to="{ name: 'home' }" class="nav-menu__item">Заявки</RouterLink>
        </li>
      </ul>
    </nav>
    <Account v-if="user" :user="user" />
  </aside>
</template>

<style lang="scss"></style>