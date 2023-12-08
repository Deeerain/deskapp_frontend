<script setup lang="ts">
import { onMounted, reactive } from 'vue';
import router from '../router';
import { useAuthStore } from '../store/auth_store';
import { useUserStore } from '../store/user_store';
import { useAppsStore } from '../store/apps_store';


const authStore = useAuthStore();
const userStore = useUserStore();
const appsStore = useAppsStore();
const formData = reactive({
    username: "",
    password: ""
});


const onAuthFormSubmit = async () => {
    const auth_result = await authStore.login(formData.username, formData.password)

    if (auth_result) {
        await loadData();
        router.push({ name: 'home' });
    }
}

onMounted(async () => {
    if (authStore.user_authenticated) {
        await loadData();
        router.back();
    }
});

const loadData = async () => {
    await userStore.LoadCurrentUserData();
    await appsStore.load_apps();
}

</script>

<template>
    <form @submit.prevent="onAuthFormSubmit" id="authForm">
        <fieldset>
            <input v-model="formData.username" class="input" type="text" autocomplete="email" name="email" required
                placeholder="Имя пользователя или Email">
            <input v-model="formData.password" class="input" type="password" autocomplete="current-password" required
                placeholder="Пароль" />
        </fieldset>
        <input class="btn" type="submit" value="Войти">
    </form>
</template>

<style lang="scss" scoped>
#authForm {
    margin: auto auto;
}
</style>