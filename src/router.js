import { createRouter, createWebHistory } from 'vue-router'

import CreateUser from './components/CreateUser.vue'
import EditUser from './components/EditUser.vue'
import ListUser from './components/ListUser'

const routes = [
    {
        path: '/',
        redirect: { name: 'list_user' }
    },
    {
        path: '/user/list',
        name: 'list_user',
        component: ListUser
    },
    {
        path: '/user/create',
        name: 'create_user',
        component: CreateUser
    },
    {
        path: '/user/edit/:id',
        name: 'edit_user',
        component: EditUser
    }
]

const router = createRouter({ history: createWebHistory(), routes })
export default router