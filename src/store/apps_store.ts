import { defineStore } from "pinia";
import App from "../interfaces/App";
import axios from "axios";

export const useAppsStore = defineStore('appsStore', {
    state: () => ({
        apps: <Array<App>>[
            {id: 1, theme: "Починка", status: "Открыто", created: new Date(Date.now())},
            {id: 2, theme: "Ремонт", status: "Открыто", created: new Date(Date.now())},
            {id: 3, theme: "Пиздец", status: "Открыто", created: new Date(Date.now())},
        ]
    }),
    actions: {
        load_apps() {
            axios.get('apps/').then(resp => {
                this.apps = resp.data
            }).catch(err => console.error(err))
        }
    },
    getters: {
        get_apps: (state) => {
            return state.apps
        },
        get_filtered_apps: (state) => {
            return (search_text: string) => state.apps.filter((app) => {
                for (let key in app as Object) {
                    const value = (app[key] as String).toString().toLowerCase()

                    if (value.startsWith(search_text.toLocaleLowerCase())) {
                        return true
                    }
                }
            })
        }
    }
})