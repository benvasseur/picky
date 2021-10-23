<template>
  <v-container
    class="d-flex justify-space-between pa-0"
    :class="{
      'pa-0': $vuetify.breakpoint.mdAndUp,
      'pa-2': !$vuetify.breakpoint.mdAndUp
    }"
    style="max-width: 980px"
  >
    <slot></slot>
  </v-container>
</template>
