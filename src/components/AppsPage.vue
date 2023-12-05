<script setup lang="ts">
import { computed, onMounted, ref } from 'vue';
import { useAppsStore } from '../store/apps_store'
import { useRouter } from 'vue-router';

const apps_store = useAppsStore()

const apps = ref<Array<App>>(apps_store.get_apps)

const search_text = ref<string>("")

const searh_form_submit = (event: Event) => {
    const form = event.target as HTMLFormElement
    form.reset()
}

const form_input = (event: Event) => {
    filter(search_text.value)
}

const filter = (text: string) => {
    const new_apps = apps_store.get_filtered_apps(text)

    apps.value = new_apps
}

onMounted(() => apps_store.load_apps())

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
                </thead>
                <tbody>
                    <tr v-for="app in apps">
                        <td>{{ app.id }}</td>
                        <td>{{ app.theme }}</td>
                        <td>{{ app.status }}</td>
                        <td>{{ app.created.toLocaleString() }}</td>
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