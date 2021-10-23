<template>
  <v-app>
    <Toolbar />

    <v-main class="main">
      <!-- Provides the application the proper gutter -->
      <MainContainer
        :class="{'py-9': $vuetify.breakpoint.mdAndUp}"
      >
        <Navigation v-if="$vuetify.breakpoint.mdAndUp" />

        <router-view />
      </MainContainer>
    </v-main>
  </v-app>
</template>

<script>
import Toolbar from '@/components/Toolbar.vue';
import Navigation from '@/components/Navigation.vue';
import MainContainer from '@/components/MainContainer.vue';

export default {
  name: 'App',

  components: {
    Toolbar,
    Navigation,
    MainContainer,
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
