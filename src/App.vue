<template>
  <v-app>
    <Toolbar />

    <!-- <Navigation /> -->

    <v-main class="main">
      <router-view />
    </v-main>
  </v-app>
</template>

<script>
import Toolbar from '@/components/Toolbar.vue';
// import Navigation from '@/components/Navigation.vue';

export default {
  name: 'App',

  components: {
    Toolbar,
    // Navigation,
  },

  data: () => ({
    //
  }),
};
</script>

<style lang="scss" scoped>
.main {
  background-color:#F9FAFB;
}
</style>
