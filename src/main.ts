import { createApp } from 'vue'
import './assets/scss/style.scss'
import App from './App.vue'
import router from './router'
import { createPinia } from 'pinia'
import axios from 'axios'

axios.defaults.baseURL = 'http://127.0.0.1:8000/api/'

const app = createApp(App)
const pinia = createPinia()

app.use(router)
app.use(pinia)
app.mount('#app')
