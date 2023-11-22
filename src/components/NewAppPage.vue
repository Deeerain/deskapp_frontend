<script setup lang="ts">
import { reactive } from 'vue';


const form_data = reactive({
    theme: "",
    text: ""
})


</script>

<template>
    <div class="heading">
        <h2>Новое обращение</h2>
    </div>
    <div class="new-app">
        <div class="new-app__form">
            <form id="newapp">
                <fieldset>
                    <input class="input" v-model="form_data.theme" type="text" name="theme" id="" placeholder="Тема обращения">
                    <textarea class="input" v-model="form_data.text" required placeholder="Текст обращения"></textarea>
                </fieldset>

                <input class="btn" type="submit" value="Создать">
            </form>
        </div>
    </div>
</template>

<style lang="scss" scoped>
</style>