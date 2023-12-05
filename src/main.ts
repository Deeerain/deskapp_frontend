import { createApp } from "vue";
import "./assets/scss/style.scss";
import App from "./App.vue";
import router from "./router";
import { createPinia } from "pinia";

import DefaultLayout from "./components/layouts/DefaultLayout.vue";
import EmptyLayout from "./components/layouts/EmptyLayout.vue";

const app = createApp(App);
const pinia = createPinia();

app.use(router);
app.use(pinia);

app.component("default-layout", DefaultLayout);
app.component("empty-layout", EmptyLayout);

app.mount("#app");
