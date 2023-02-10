<template>
    <div class="row justify-center items-center window-height">
        <div class="col-10 col-md-10 col-lg-10">
            <div class="row text-h3 q-my-md">User list</div>
            <q-card class="q-pa-md row">

                <q-table title="Users" class="full-width" :rows="allUsers" :columns="columns" row-key="id"
                    hide-pagination :loading="tableLoading">

                    <template v-slot:top>
                        <q-input standout="bg-grey-5 text-white" placeholder="Search for users..." dense debounce="300"
                            color="primary" v-model="filter">
                            <template v-slot:append>
                                <q-icon name="search" />
                            </template>
                        </q-input>
                        <q-space />
                        <q-btn color="teal" push @click="this.$router.push({'name': 'create_user'})" icon="add" no-caps>
                            Add user
                        </q-btn>
                    </template>

                    <template v-slot:body-cell-avatar="props">
                        <q-td :props="props" class="text-left">
                            <q-avatar>
                                <img :src="props.row.avatar">
                            </q-avatar>
                        </q-td>
                    </template>

                    <template v-slot:body-cell-name="props">
                        <q-td :props="props" class="text-left">
                            {{ props.row.first_name }} {{ props.row.last_name }}
                        </q-td>
                    </template>

                    <template v-slot:body-cell-action="props">
                        <q-td :props="props">
                            <router-link :to="{ name: 'edit_user', params: { id: props.row.id } }">
                                <q-btn color="primary" icon-right="mode" no-caps flat dense />
                            </router-link>
                            <q-btn color="negative" @click="deleteUser(props.row.id)" icon-right="delete" no-caps flat dense />
                        </q-td>
                    </template>

                </q-table>

            </q-card>
            <div class="row justify-start q-mt-md">
                <q-pagination v-model="currentPage" :max="maxPage" direction-links outline color="teal"
                    active-design="unelevated" active-color="teal" active-text-color="white" />
            </div>
        </div>
    </div>
</template>
  
<script>
import axios from 'axios';

export default {
    name: 'ListUser',
    data() {
        return {
            allUsers: new Array,
            currentPage: 1,
            maxPage: new Number,
            tableLoading: false,
            columns: [
                { name: 'avatar', label: '', field: 'email', align: 'left', sortable: false },
                { name: 'name', label: 'Full name', field: 'email', align: 'left', sortable: true },
                { name: 'action', label: 'Action', field: 'action', align: 'right', soratable: false }
            ]
        }
    },
    methods: {
        deleteUser: async function (user_id) {
            await axios
                .delete(process.env.VUE_APP_REST_API_URL + `/api/users/${this.$route.params.id}`, {
                    "id": user_id,
                })
                .then((response) => {
                    console.log(response)
                });
        },
    },
    // Normally speaking, pagination should be implemented via Quasar table built-in functionality.
    // However, this time due to lack of time I decided an alternative approach using a watcher.
    watch: {
        async currentPage() {
            await axios
                .get(process.env.VUE_APP_REST_API_URL + `/api/users?page=${this.currentPage}`)
                .then((response) => {
                    this.allUsers = response.data.data;
                })
        }
    },
    async created() {
        this.tableLoading = true;
        await axios
            .get(process.env.VUE_APP_REST_API_URL + `/api/users`)
            .then((response) => {
                this.maxPage = response.data.total_pages;
                this.allUsers = response.data.data;
            })
        this.tableLoading = false;
    },
    props: {
    }
}
</script>
  
<style scoped lang="scss">

</style>