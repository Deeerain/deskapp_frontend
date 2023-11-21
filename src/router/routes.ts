import { RouteRecordRaw } from 'vue-router';

const routes = <RouteRecordRaw[]>[
    {path: '/', component:() => import('../components/AppsPage.vue'), name: 'home'},
    {path: '/auth/', component:() => import('../components/AuthPage.vue'), name: 'auth'},
]

export default routes