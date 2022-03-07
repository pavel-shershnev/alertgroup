<template>
  <v-app>
    <v-main>
      <router-view/>
    </v-main>
  </v-app>
</template>

<script>
import './assets/css/style.css';

export default {
  name: 'App',
  data: () => ({
    //
  }),
  mounted() {
    this.$store.dispatch('fetchData');
  },
};
</script>
