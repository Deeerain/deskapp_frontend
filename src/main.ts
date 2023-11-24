import { createApp } from 'vue'
import './assets/scss/style.scss'
import App from './App.vue'
import router from './router'
import { createPinia } from 'pinia'
import axios from 'axios'
import { useAuthStore } from './store/auth_store'

import DefaultLayout from './components/layouts/DefaultLayout.vue'
import EmptyLayout from './components/layouts/EmptyLayout.vue'



axios.defaults.baseURL = 'http://127.0.0.1:8000/api/'



const app = createApp(App)
const pinia = createPinia()

app.use(router)
app.use(pinia)

const auth_store = useAuthStore()

if (auth_store.access_token) {
    axios.defaults.headers.common.Authorization = `Bearer ${auth_store.access_token}`
}


app.component('default-layout', DefaultLayout)
app.component('empty-layout', EmptyLayout)


app.mount('#app')

