<template>
    <h1>User List</h1>
    <ul>
        <li v-for="user in userList" :key="user.id">
            {{ user }} |<router-link :to="{ name: 'EditUser', params: { id: user.id } }">EDIT</router-link>
        </li>
    </ul>
    <router-link :to="{name: 'CreateUser'}" custom v-slot="{ goCreateUser }">
        <button @click="goCreateUser" role="link">
            Create new user
        </button>
    </router-link>
</template>
  
<script>
import axios from 'axios';

export default {
    name: 'UserList',
    data() {
        return {
            userList: new Array,
        }
    },
    async created() {
        await axios
            .get('https://reqres.in/api/users')
            .then((response) => {
                console.log(response.data.data)
                this.userList = response.data.data;
            })
    },
    props: {
    }
}
</script>
  
<style scoped lang="scss">

</style>