<template>
  <v-app-bar
    app
    color="white"
    flat
    style="border-bottom: thin solid rgba(0, 0, 0, 0.08) !important;"
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
        id="appTabs"
        v-model="tab"
        right
        height="61"
        color="primary darken-3"
      >
        <v-tab
          :ripple="false"
          class="text-capitalize"
        >
          Products
        </v-tab>
        <v-tab
          :ripple="false"
          class="text-capitalize"
        >
          Discussions
        </v-tab>
        <v-tab
          :ripple="false"
          class="text-capitalize"
        >
          Blog
        </v-tab>
        <v-tab
          :ripple="false"
          class="text-capitalize"
        >
          Our Story
        </v-tab>
      </v-tabs>

      <v-text-field
        class="appSearch pt-3"
        placeholder="Products, brands, discussions"
        background-color="#F9FAFB"
        rounded
        filled
        solo
        dense
        height="30"
        hide-details
        flat
      >
        <template v-slot:prepend-inner>
          <v-icon
            small
            left
          >
            mdi-magnify
          </v-icon>
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

<style lang="scss">
#appTabs {
  .v-tab:before {
    background-color: transparent;
  }
}

.appSearch {
  min-width: 270px;

  .v-input__slot {
    padding-left: 15px !important;

    input {
    font-size: 11px;
  }
  }
}
</style>
