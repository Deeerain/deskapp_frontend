<script setup lang="ts">
import { reactive, ref } from 'vue';
import router from '../router';
import { useAuthStore } from '../store/auth_store';


const authStore = useAuthStore()
const formData = reactive({
    username: "",
    password: ""
})


const onAuthFormSubmit = async () => {
    if(authStore.is_authencicated) {
        router.back()
    }

    try {
        await authStore.login(formData.username, formData.password)
        router.push({name: 'home'})
    }catch(err) {

    }

}

</script>

<template>
    <form @submit.prevent="onAuthFormSubmit">
        <fieldset>
            <input v-model="formData.username" type="email" autocomplete="email" name="email" required placeholder="Имя пользователя или Email">
            <input v-model="formData.password" type="password" autocomplete="current-password" required placeholder="Пароль" />
        </fieldset>
        <input type="submit" value="Войти">
    </form>
</template>

<style lang="scss" scoped></style>