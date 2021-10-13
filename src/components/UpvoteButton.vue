<template>
  <v-btn
    color="grey lighten-2"
    outlined
    small
  >
    <img
      class="ml-n1 mr-2"
      alt="upvote"
      height="18px"
      src="@/assets/images/icon-upvote-14-px@3x.png"
    />
    <span class="grey--text">{{ upvoteCount }}</span>
  </v-btn>
</template>

<script>

export default {
  name: 'UpvoteButton',

  props: {
    upvoteCount: {
      type: Number,
      default: null,
    },
  },
};
</script>
