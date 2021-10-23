<template>
  <v-card
    :max-width="$vuetify.breakpoint.mdAndUp ? '720' : '100%'"
    outlined
  >
    <v-card-text>
      <v-chip
        small
        label
        color="grey lighten-3"
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

      <v-row
        class="mt-3"
        dense
      >
        <v-col
          v-for="(image, key) in discussion.image_urls"
          :key="key"
          class="d-flex child-flex"
          cols="12"
          sm="6"
          md="4"
        >
          <v-img
            :src="image"
            aspect-ratio="1"
            style="cursor: pointer;"
            @click="openGallery(key)"
          />
        </v-col>
      </v-row>

      <LightBox
        v-if="formattedImages.length > 0"
        ref="lightbox"
        :media="formattedImages"
        :show-light-box="false"
      />

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

  computed: {
    formattedImages() {
      return this.discussion.image_urls.map((el) => ({
        thumb: el,
        src: el,
      }));
    },
  },

  methods: {
    openGallery(index) {
      this.$refs.lightbox.showImage(index);
    },
  },
};
</script>
