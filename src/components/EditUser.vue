<template>
    <h1>Edit User {{ this.$route.params.id }} </h1>

    <div>
        <label for="name">Name</label>
        <input v-model="name" type="text" name="name" id="name">
    </div>

    <div>
        <label for="surname">Surname</label>
        <input v-model="surname" type="text" name="surname" id="surname">
    </div>

    <img :src="avatar" />

    <button @click="updateUser">SAVE</button>

</template>
  
<script>
import axios from 'axios';

export default {
    name: 'EditUser',
    data() {
        return {
            name: new String,
            surname: new String,
            avatar: new String,
        }
    },
    methods: {
        updateUser: async function () {
            await axios
                .put(process.env.VUE_APP_REST_API_URL + `/api/users/${this.$route.params.id}`, {
                    "first_name": this.name,
                    "last_name": this.surname
                })
                .then((response) => {
                    console.log(response)
                });
        }
    },
    async created() {
        await axios
            .get(process.env.VUE_APP_REST_API_URL + `/api/users/${this.$route.params.id}`)
            .then((response) => {
                this.name = response.data.data.first_name;
                this.surname = response.data.data.last_name;
                this.avatar = response.data.data.avatar;
            })
    },
    props: {
    }
}
</script>
  
<style scoped lang="scss">

</style>