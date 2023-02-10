<template>
    <div class="row justify-center items-center window-height">
        <div class="col-10 col-md-10 col-lg-10">
            <div class="row text-h3 q-my-md">Add user</div>
            <div class="row q-col-gutter-md">
                <div class="col-12 col-md-8 col-lg-8 q-pa-md">
                    <q-card class="full-height row">
                        <div class="row col-12">
                            <div class="q-pa-sm col-6">
                                <q-input outlined v-model="name" label="Name" />
                            </div>

                            <div class="q-pa-sm  col-6">
                                <q-input outlined v-model="surname" label="Surname" />
                            </div>
                        </div>
                        <div class="row q-pa-sm col-12 items-end">
                            <q-btn @click="createUser" color="green" class="q-pa-md q-ma-s small-button" no-caps>Create user</q-btn>
                        </div>
                    </q-card>

                </div>

                <div class="col-12 col-md-4 col-lg-4 q-pa-md">
                    <q-card>
                        <div class="row justify-center q-pa-md">
                            <q-avatar size="256px">
                                <img src="https://cdn.pixabay.com/photo/2016/08/08/09/17/avatar-1577909_960_720.png" />
                            </q-avatar>
                        </div>
                        <div class="row justify-center">
                            <div class="full-width q-pa-md">
                                <q-btn outline color="grey" label="Change photo" icon="photo_camera" class="full-width"/>
                            </div>
                        </div>
                    </q-card>
                </div>

            </div>
        </div>
    </div>

</template>
  
<script>
import axios from 'axios';

export default {
    name: 'CreateUser',
    data() {
        return {
            name: new String,
            surname: new String,
        }
    },
    methods: {
        createUser: async function () {
            await axios
                .post(process.env.VUE_APP_REST_API_URL + `/api/users/`, {
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