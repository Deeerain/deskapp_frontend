<script setup lang="ts">
import { useUserStore } from '../../store/user_store'
import { computed, onMounted } from 'vue';

const user_store = useUserStore()
const user = computed(() => user_store.get_user)
import Account from "./Account.vue"

const props = defineProps<{
  branding: string
}>()

onMounted(async () => {
  await user_store.LoadCurrentUserData()
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
            Заявки</RouterLink>
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
    <Account :user="user" />
  </aside>
</template>

<style lang="scss"></style>../../store/user_store