<script setup lang="ts">
import { computed, onMounted, ref } from 'vue';
import { useAppsStore } from '../store/apps_store'

const apps_store = useAppsStore()

const apps = computed(() => {
    return apps_store.get_apps
})

const search_text = ref<string>("")

const searh_form_submit = (event: Event) => {
    const form = event.target as HTMLFormElement
    form.reset()
}

const form_input = (event: Event) => {
    filter(search_text.value)
}

const filter = (text: string) => {
}
</script>

<template>
    <div class="apps">
        <div class="heading">
            <h2>Заявки</h2>
            <form id="search" @submit:prevent="searh_form_submit" @input="form_input">
                <input class="input" v-model="search_text" type="search" name="search">
            </form>
            <RouterLink class="btn add-btn" :to="{ name: 'new-app' }">Создать</RouterLink>
        </div>
        <div class="apps__list">
            <table cellspacing="0">
                <thead>
                    <td>Ид</td>
                    <td>Тема </td>
                    <td>Статус</td>
                    <td>Дата создания</td>
                    <td>Дата Обнавления</td>
                </thead>
                <tbody>
                    <tr v-for="app in apps">
                        <td>
                            <RouterLink :to="{ name: 'app-detail', params: { 'id': app.id } }">{{ app.id }}</RouterLink>
                        </td>
                        <td>{{ app.theme }}</td>
                        <td>{{ app.status }}</td>
                        <td>{{ app.at_created }}</td>
                        <td>{{ app.at_updated }}</td>
                    </tr>
                </tbody>
            </table>
        </div>
    </div>
</template>

<style lang="scss" scoped>
.apps {
    .heading {
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        align-items: center;
        gap: 2rem;

        #search {
            flex-grow: 1;
        }
    }

    .apps__list {
        table {
            width: 100%;
        }
    }
}
</style>