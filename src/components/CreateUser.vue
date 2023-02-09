<template>
    <h1>Create User</h1>

    <div>
        <label for="name">Name</label>
        <input v-model="name" type="text" name="name" id="name">
    </div>

    <div>
        <label for="surname">Surname</label>
        <input v-model="surname" type="text" name="surname" id="surname">
    </div>

    <img :src="avatar" />

    <button @click="createUser">CREATE</button>

</template>
  
<script>
import axios from 'axios';

export default {
    name: 'CreateUser',
    data() {
        return {
            name: new String,
            surname: new String,
            avatar: new String,
        }
    },
    methods: {
        createUser: async function () {
            await axios
                .post(`https://reqres.in/api/users/`, {
                    "first_name": this.name,
                    "last_name": this.surname
                })
                .then((response) => {
                    console.log(response)
                });
        }
    },
    props: {
    }
}
</script>
  
<style scoped lang="scss">

</style>