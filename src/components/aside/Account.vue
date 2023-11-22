<script setup lang="ts">
import Employee from '../../interfaces/state/Employee';

const props = defineProps<{
    employee: Employee
}>()

</script>

<template>
    <div class="account-wrapper">
        <div class="account">
            <div class="account__information">
                <small>{{ employee.username }}</small>
                <h4>{{ employee.first_name }} {{ employee.last_name }}</h4>
                <h5>{{ employee.position.name }}, {{ employee.position.department.name }}</h5>
            </div>
            <div class="account__buttons">
                <button class="btn">
                    <img src="../../assets/img/logout-icon.svg" alt="">
                </button>
                <button class="btn">
                    <img src="../../assets/img/settings-icon.svg" alt="">
                </button>
            </div>
        </div>
    </div>
</template>

<style lang="scss" scoped>
.account-wrapper {
    margin-top: auto;

    .account {
        display: flex;
        flex-direction: column;
        gap: 1rem;
        justify-content: space-between;

        &__buttons {
            display: flex;
            flex-direction: row;
            justify-content: space-between;
            flex-wrap: wrap;
        }
    }
}
</style>