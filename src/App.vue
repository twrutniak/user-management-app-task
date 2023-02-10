<template>
<q-layout view="hHh lpR fFf">

  <q-page-container class="window-height">
    <router-view />
  </q-page-container>

</q-layout> 
</template>

<script>
import { RouterView } from 'vue-router';

export default {
  name: 'App',
  components: {
    RouterView
  }
}
</script>

<style>
.small-button {
  height: 50px !important;
}
</style>
