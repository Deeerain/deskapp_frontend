<script setup lang="ts">
import { computed } from 'vue';
import { useAppsStore } from '../store/apps_store';
import { useRoute } from 'vue-router';


const route = useRoute();
const appId: number = Number(route.params.id);
const appsStore = useAppsStore();
const app = computed(() => {
    return appsStore.get_app_by_id(appId);
});

console.log(appsStore.get_app_by_id(appId));


</script>

<template>
    {{ app }}
</template>

<style scoped lang="scss"></style>