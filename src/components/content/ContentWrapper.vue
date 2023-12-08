<script setup lang="ts">
defineProps<{
    visibleSidebarButton?: boolean,
}>();
defineEmits<{
    (event: 'onVisibleSidebarButtonClick'): void,
    (event: 'onLogoutButtonClick'): void,
}>();
</script>

<template>
    <div class="content">
        <header class="content__header">
            <div v-if="visibleSidebarButton" class="sidebar-controller">
                <button @click="$emit('onVisibleSidebarButtonClick')" class="btn">
                    <img src="../../assets/img/menu-icon.svg" alt="">
                </button>
            </div>
            <div class="logout-button">
                <button @click="$emit('onLogoutButtonClick')">
                    <img src="../../assets/img/logout-icon.svg" alt="">
                </button>
            </div>
        </header>
        <div class="content__body">
            <slot></slot>
        </div>
    </div>
</template>

<style scoped lang="scss">
.content {
    display: flex;
    flex-direction: column;
    gap: 1rem;

    &__header {
        min-height: 40px;
        border-bottom: 1px solid rgb(216, 216, 216);
        display: flex;
        align-items: center;
        flex-direction: row;
        padding: 0 5px;

        .logout-button {
            margin-left: auto;

            button {
                border: none;
                background: none;
            }
        }
    }

    &__body {
        flex-grow: 1;
        overflow-y: scroll;
        padding: 5px;
    }
}
</style>