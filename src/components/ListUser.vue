<template>
    <h1>User List</h1>
    <ul>
        <li v-for="user in allUsers" :key="user.id">
            {{ user }} |<router-link :to="{ name: 'edit_user', params: { id: user.id } }">EDIT</router-link>
        </li>
    </ul>
    <router-link :to="{name: 'create_user'}" custom v-slot="{ goCreateUser }">
        <button @click="goCreateUser" role="link">
            Create new user
        </button>
    </router-link>
</template>
  
<script>
import axios from 'axios';

export default {
    name: 'ListUser',
    data() {
        return {
            allUsers: new Array,
        }
    },
    async created() {
        await axios
            .get(process.env.VUE_APP_REST_API_URL + '/api/users')
            .then((response) => {
                console.log(response.data.data)
                this.allUsers = response.data.data;
            })
    },
    props: {
    }
}
</script>
  
<style scoped lang="scss">

</style>