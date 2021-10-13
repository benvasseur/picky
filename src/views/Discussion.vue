<template>
  <v-card
    class="mx-auto my-12"
    max-width="700"
  >
    <v-card-text>
      <v-chip
        small
        label
      >
        {{ discussion.category.label }}
      </v-chip>
    </v-card-text>

    <v-card-text class="pt-0">
      <UserPreview
        :user="discussion.user"
        :date="discussion.createdAt"
        :view-count="discussion.viewCount"
      />
    </v-card-text>

    <v-card-title>{{ discussion.title }}</v-card-title>

    <v-card-text>
      <div class="content-text">
        {{ discussion.content }}
      </div>

      <v-row class="mt-3">
        <v-col
          v-for="n in discussion.image_urls.length"
          :key="n"
          class="d-flex child-flex"
          cols="4"
        >
          <v-img
            :src="discussion.image_urls[n-1]"
            aspect-ratio="1"
          />
        </v-col>
      </v-row>

      <div class="mt-3 d-flex justify-space-between">
        <UpvoteButton :upvote-count="discussion.upvoteCount" />

        <v-btn
          color="grey lighten-2"
          outlined
          small
          style="width: 35px; min-width: 30px;"
        >
          <img
            alt="bookmark"
            height="18px"
            src="@/assets/images/icon-bookmark-14-px@3x.png"
          />
        </v-btn>
      </div>
    </v-card-text>

    <v-card-text class="grey lighten-3 mt-5 font-weight-medium">
      {{ discussion.commentCount }} Comments
    </v-card-text>

    <!-- Comments display -->
    <v-card-text
      v-for="(comment, key) in comments"
      :key="key"
    >
      <Comment :comment="comment" />
    </v-card-text>
  </v-card>
</template>

<script>
import discussionData from '@/assets/data/discussion.json';
import commentsData from '@/assets/data/comments.json';
import UserPreview from '@/components/UserPreview.vue';
import UpvoteButton from '@/components/UpvoteButton.vue';
import Comment from '@/components/Comment.vue';

export default {
  name: 'Discussion',

  components: {
    UserPreview,
    UpvoteButton,
    Comment,
  },

  data: () => ({
    discussion: discussionData,
    comments: commentsData,
  }),
};
</script>
