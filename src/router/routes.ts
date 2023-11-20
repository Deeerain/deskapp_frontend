import { RouteRecordRaw } from 'vue-router';

const routes = <RouteRecordRaw[]>[
    {path: '/', component:() => import('../components/HomePage.vue'), name: 'home'}
]

export default routes