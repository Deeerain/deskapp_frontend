<script setup lang="ts">
import { computed } from 'vue';
import { useAppsStore } from '../store/apps_store';
import { useRoute } from 'vue-router';
import Application from './apps/Application.vue';
import { useUserStore } from '../store/user_store';


const route = useRoute();
const appId: number = Number(route.params.id);
const appsStore = useAppsStore();
const userStore = useUserStore();
const app = computed(() => {
    return appsStore.get_app_by_id(appId);
});

console.log(appsStore.get_app_by_id(appId));


</script>

<template>
    <Application :app_id="app?.id" :user_id="app?.user.id" :user_first_name="app?.user.first_name"
        :user_last_name="app?.user.last_name" :app_theme="app?.theme" :app_text="app?.text"
        :show_edit_button="userStore.get_user?.is_staff" :readonly="true">

    </Application>
</template>

<style scoped lang="scss"></style>