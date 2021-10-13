<template>
  <div>
    <UserPreview
      :user="comment.user"
      :date="comment.createdAt"
      :view-count="comment.viewCount"
    />

    <div class="mt-3">
      {{ comment.content }}
    </div>

    <v-row class="mt-3">
      <v-col
        v-for="n in comment.image_urls.length"
        :key="n"
        class="d-flex child-flex"
        cols="4"
      >
        <v-img
          :src="comment.image_urls[n-1]"
          aspect-ratio="1"
        />
      </v-col>
    </v-row>

    <div class="mt-2 d-flex">
      <UpvoteButton :upvote-count="comment.upvoteCount" />

      <v-btn
        class="ml-2"
        color="grey lighten-2"
        outlined
        small
      >
        <img
          class="ml-n1 mr-2"
          alt="upvote"
          height="18px"
          src="@/assets/images/icon-comment-14-px@3x.png"
        />
        <span class="grey--text">Reply</span>
      </v-btn>
    </div>

    <!-- Replies -->
    <div
      v-if="comment.commentCount > 0"
      class=" pl-12"
    >
      <div
        v-for="(reply, rKey) in comment.replies"
        :key="rKey"
        class="mt-4"
      >
        <Comment :comment="reply" />
      </div>
    </div>
  </div>
</template>

<script>
import UserPreview from '@/components/UserPreview.vue';
import UpvoteButton from '@/components/UpvoteButton.vue';

export default {
  name: 'Comment',

  components: {
    UserPreview,
    UpvoteButton,
  },

  props: {
    comment: {
      type: Object,
      default: null,
    },
  },
};
</script>
