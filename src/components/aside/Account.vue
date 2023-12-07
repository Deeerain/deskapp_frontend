<script setup lang="ts">
import { User } from '../../services/users/types';

const props = defineProps<{
    user: User
}>()
</script>

<template>
    <div class="account-wrapper">
        <div class="account">
            <div class="account__information">
                <small>{{ user.username }}</small>
                <h4>{{ user.first_name }} {{ user.last_name }}</h4>
                <div v-if="user.position" class="position-info">
                    <h5>{{ user.position.name }}, {{ user.position.departament.name }}</h5>
                </div>
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