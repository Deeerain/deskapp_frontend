<script setup lang="ts">
import Account from "./Account.vue"

const props = defineProps<{
  branding: string
}>()
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
          <RouterLink :to="{ name: 'home' }" class="nav-menu__item">Заявки</RouterLink>
        </li>
        <li>
          <RouterLink :to="{ name: 'home' }" class="nav-menu__item">Заявки</RouterLink>
        </li>
        <li>
          <RouterLink :to="{ name: 'home' }" class="nav-menu__item">Заявки</RouterLink>
        </li>
        <li>
          <RouterLink :to="{ name: 'home' }" class="nav-menu__item">Заявки</RouterLink>
        </li>
      </ul>
    </nav>
    <Account username="admin" />
  </aside>
</template>

<style lang="scss"></style>