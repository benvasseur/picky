<template>
  <v-app-bar
    app
    color="white"
  >
    <MainContainer>
      <div class="d-flex align-center">
        <v-img
          alt="Picky Logo"
          class="shrink mr-2"
          src="@/assets/images/icon-picky@3x.png"
          style="border-radius: 8px;"
        />
      </div>

      <v-tabs
        v-model="tab"
        right
      >
        <v-tab>Products</v-tab>
        <v-tab>Discussions</v-tab>
        <v-tab>Blog</v-tab>
        <v-tab>Our Story</v-tab>
      </v-tabs>

      <v-text-field
        class="search"
        placeholder="Products, brands, discussions"
        background-color="#F9FAFB"
        rounded
        filled
        solo
        dense
        hide-details
      >
        <template v-slot:prepend-inner>
          <v-img
            alt="Search Icon"
            class="shrink mr-2"
            width="20px"
            src="@/assets/images/search@3x.png"
          />
        </template>
      </v-text-field>
    </MainContainer>
  </v-app-bar>
</template>

<script>
import MainContainer from '@/components/MainContainer.vue';

export default {
  name: 'Toolbar',

  components: {
    MainContainer,
  },

  data: () => ({
    tab: 1,
  }),
};
</script>

<style lang="scss" scoped>
.search {
  width: 420px;
}
</style>
