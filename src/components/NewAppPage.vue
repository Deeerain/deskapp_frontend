<script setup lang="ts">
import { reactive } from 'vue';
import { useAppsStore } from '../store/apps_store';
import { useRouter } from 'vue-router';


const apps_store = useAppsStore();
const router = useRouter();

const form_data = reactive({
    theme: "",
    text: "",
});

const onFormSubmit = async (event: Event) => {
    const form = event.target as HTMLFormElement;

    apps_store.create({
        theme: form_data.theme,
        text: form_data.text,
    });

    form.reset();
    router.back();
}


</script>

<template>
    <div class="heading">
        <h2>Новое обращение</h2>
    </div>
    <div class="new-app">
        <div class="new-app__form">
            <form id="newapp" @submit.prevent="onFormSubmit">
                <fieldset>
                    <input class="input" v-model="form_data.theme" type="text" name="theme" id=""
                        placeholder="Тема обращения">
                    <textarea class="input" v-model="form_data.text" required placeholder="Текст обращения"></textarea>
                </fieldset>

                <input class="btn" type="submit" value="Создать">
            </form>
        </div>
    </div>
</template>

<style lang="scss" scoped></style>