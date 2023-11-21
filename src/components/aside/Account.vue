<script setup lang="ts">
const props = defineProps<{
    username: string
}>()

</script>

<template>
    <div class="account-wrapper">
        <div class="account">
            <div class="account__username">
                <span>{{ username }}</span>
            </div>
            <a href="" class="btn">o</a>
            <a href="" class="btn">close</a>
        </div>
    </div>
</template>

<style lang="scss" scoped>
.account-wrapper {
    .account {
        display: flex;
        flex-direction: row;
        justify-content: space-between;

        &__username {
            flex-grow: 1;
        }
    }
}
</style>