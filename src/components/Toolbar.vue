<template>
  <v-app-bar
    id="appBar"
    app
    color="white"
    flat
    style="border-bottom: thin solid rgba(0, 0, 0, 0.08) !important;"
  >
    <v-slide-x-transition>
      <div
        v-show="mobileSearch && !$vuetify.breakpoint.mdAndUp"
        class="mobileSearchWrapper"
      >
        <v-text-field
          ref="mobileSearch"
          v-model="search"
          placeholder="Products, brands, discussions"
          hide-details
          class="mt-2 mx-2"
          autofocus
        >
          <template v-slot:append-outer>
            <v-btn
              class="mt-n3 ml-n2"
              icon
              @click="mobileSearch = false"
            >
              <v-icon>mdi-close</v-icon>
            </v-btn>
          </template>
        </v-text-field>
      </div>
    </v-slide-x-transition>

    <MainContainer>
      <div class="d-flex">
        <v-app-bar-nav-icon
          v-if="!$vuetify.breakpoint.mdAndUp"
          @click="drawer = true"
        />

        <div class="d-flex align-center">
          <v-img
            alt="Picky Logo"
            class="shrink mr-2"
            src="@/assets/images/icon-picky@3x.png"
            style="border-radius: 8px;"
          />
        </div>
      </div>

      <v-tabs
        v-if="$vuetify.breakpoint.mdAndUp"
        id="appTabs"
        v-model="tab"
        right
        height="61"
        color="primary darken-3"
      >
        <v-tab
          v-for="(item, key) in menuItemsDesktop"
          :key="key"
          :ripple="false"
          class="text-capitalize"
        >
          {{ item.label }}
        </v-tab>
      </v-tabs>

      <v-text-field
        v-if="$vuetify.breakpoint.mdAndUp"
        v-model="search"
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

      <div
        v-if="!$vuetify.breakpoint.mdAndUp"
        class="d-flex"
      >
        <v-btn
          class="mt-1"
          rounded
          color="primary darken-2"
          dark
          link
          target="_blank"
          href="https://play.google.com/store/apps/details?id=care.jivaka.picky"
        >
          Use App
        </v-btn>

        <v-btn
          icon
          @click="mobileSearch = true"
        >
          <v-icon>mdi-magnify</v-icon>
        </v-btn>
      </div>

      <v-navigation-drawer
        v-if="!$vuetify.breakpoint.mdAndUp"
        v-model="drawer"
        absolute
        app
      >
        <v-list-item class="mt-6 mb-3">
          <v-list-item-content>
            <v-list-item-title class="text-h6 primary--text text--darken-3">
              Picky
            </v-list-item-title>
          </v-list-item-content>
        </v-list-item>

        <v-list
          nav
          dense
        >
          <v-list-item
            v-for="(item, key) in menuItems"
            :key="key"
          >
            <v-list-item-icon>
              <v-icon>{{ item.icon }}</v-icon>
            </v-list-item-icon>
            <v-list-item-title>{{ item.label }}</v-list-item-title>
          </v-list-item>
        </v-list>
      </v-navigation-drawer>
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
    drawer: false,
    search: '',
    mobileSearch: false,
    menuItems: [
      {
        label: 'Home',
        desktop: false,
        icon: 'mdi-home-outline',
      },
      {
        label: 'Products',
        desktop: true,
        icon: 'mdi-bottle-tonic-outline',
      },
      {
        label: 'Discussions',
        desktop: true,
        icon: 'mdi-chat-processing-outline',
      },
      {
        label: 'Blog',
        desktop: true,
        icon: 'mdi-post-outline',
      },
      {
        label: 'Our Story',
        desktop: true,
        icon: 'mdi-heart-outline',
      },
      {
        label: 'Privacy Policy',
        desktop: false,
        icon: 'mdi-shield-check-outline',
      },
      {
        label: 'Terms of service',
        desktop: false,
        icon: 'mdi-text-box-check-outline',
      },
    ],
  }),

  computed: {
    menuItemsDesktop() {
      return this.menuItems.filter((el) => el.desktop);
    },
  },

  watch: {
    // eslint-disable-next-line func-names
    '$vuetify.breakpoint.mdAndUp': function (mdAndUp) {
      if (mdAndUp) {
        this.drawer = false;
      }
    },
  },
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

#appBar .v-overlay {
  height: 100vh;
}

.mobileSearchWrapper {
  position: absolute;
  width: 100%;
  height: 50px;
  background-color: white;
  z-index: 1;
}
</style>
