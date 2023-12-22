<script setup lang="ts">
import { reactive } from 'vue';
import { ApplicationStatus } from '../../services/applications/types';

const props = defineProps<{
    app_id?: number,
    user_first_name?: string,
    user_last_name?: string,
    user_id?: string,
    app_theme?: string,
    app_text?: string,
    app_status?: ApplicationStatus,
    readonly: boolean,
    show_edit_button?: boolean,
}>();

const data = reactive({
    readonly: props.readonly,
    show_edit_button: props.show_edit_button,
    user_first_name: props.user_first_name,
    user_last_naem: props.user_last_name,
    app_theme: props.app_theme,
    app_text: props.app_text,
    app_status: props.app_status,
});

const onShoweditButtonClick = () => {
    data.readonly = !data.readonly;
}

</script>

<template>
    <div class="application">
        <div class="application__header">
            <h2>Заявка #{{ app_id }},</h2>
            <h2>Заказчик: <a :href="`/users/${user_id}/`">{{ user_first_name }} {{ user_last_name }}</a></h2>
        </div>
        <div class="application__body">
            <form id="application-form">
                <fieldset>
                    <label to="app-theme">Тема:</label>
                    <input type="text" name="theme" id="app-theme" v-model="data.app_theme" :readonly="data.readonly">
                </fieldset>
                <fieldset>
                    <label to="app-text">Текст обращения:</label>
                    <textarea name="text" id="app-text" v-model="data.app_text" :readonly="data.readonly"></textarea>
                </fieldset>
                <fieldset>
                    <label to="app-status">Статус:</label>
                    <select name="status" id="app-status" :disabled="data.readonly">
                        <option v-for="s, v in ApplicationStatus" :value="v" :selected="data.app_status == s">{{ s }}
                        </option>
                    </select>
                </fieldset>
            </form>
        </div>
        <div class="application__footer">
            <slot name="footer"></slot>
            <button v-if="data.show_edit_button" class="btn" @click="onShoweditButtonClick"
                value="edit-application">Редактировать</button>
        </div>
    </div>
</template>

<style scoped lang="scss">
.application {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    gap: 1rem;

    &__header {
        display: flex;
        flex-direction: row;
        align-items: center;
        flex-grow: 1;
        gap: 1rem;
    }

    &__body {
        display: flex;
        flex-direction: column;
        gap: 1rem;
    }

    &__footer {
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        gap: 1rem;
    }
}
</style>