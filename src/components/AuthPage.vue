<script setup lang="ts">
import { onMounted, reactive } from 'vue';
import router from '../router';
import { useAuthStore } from '../store/auth_store';


const authStore = useAuthStore()
const formData = reactive({
    username: "",
    password: ""
})


const onAuthFormSubmit = async () => {
    const auth_result = await authStore.login(formData.username, formData.password)

    console.log(auth_result)
    if (auth_result) {
        router.push({ name: 'home' })
    }
}

onMounted(() => {
    if (authStore.is_authencicated) {
        router.back()
    }
})

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