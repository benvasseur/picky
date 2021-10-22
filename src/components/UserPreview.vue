<template>
  <div class="d-flex">
    <v-avatar size="60">
      <img
        alt="user"
        :src="user.image_url"
      />
    </v-avatar>

    <div class="ml-5">
      <div class="mt-2">
        <span class="text-capitalize text-h6"> {{ user.nick_name }} </span>
        <v-chip
          x-small
          class="ml-1 mt-n1"
          color="grey lighten-3"
        >
          {{ user.skin_type }}
        </v-chip>
      </div>

      <div class="font-weight-light">
        <span v-if="relativeCreationDate">
          {{ relativeCreationDate }}
        </span>
        <span v-if="relativeCreationDate && viewCount">
          &#183;
        </span>
        <span v-if="viewCount">
          {{ viewCount }} Views
        </span>
      </div>
    </div>
  </div>
</template>

<script>
import { formatDistance } from 'date-fns';

export default {
  name: 'UserPreview',

  props: {
    user: {
      type: Object,
      default: null,
    },

    date: {
      type: String,
      default: null,
    },

    viewCount: {
      type: Number,
      default: null,
    },
  },

  computed: {
    relativeCreationDate() {
      return formatDistance(new Date(this.date), new Date(), { addSuffix: true });
    },
  },
};
</script>
