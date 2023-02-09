import { createRouter, createWebHistory } from 'vue-router'

import CreateUser from './components/CreateUser.vue'
import EditUser from './components/EditUser.vue'
import UserList from './components/UserList'

const routes = [
    {
        path: '/',
        name: 'UserList',
        component: UserList
    },
    {
        path: '/user/create',
        name: 'CreateUser',
        component: CreateUser
    },
    {
        path: '/user/edit/:id',
        name: 'EditUser',
        component: EditUser
    }
]

const router = createRouter({ history: createWebHistory(), routes })
export default router