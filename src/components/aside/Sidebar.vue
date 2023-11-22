<script setup lang="ts">
import { useEmployeeStore } from "../../store/employee_store";
import { Employee } from '../../interfaces/state/Employee'
import Account from "./Account.vue"
import { ref } from "vue";

const props = defineProps<{
  branding: string
}>()

const employee_store = useEmployeeStore()
const employee = ref<Employee>(employee_store.get_employee)

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
    <Account :employee="employee" />
  </aside>
</template>

<style lang="scss"></style>