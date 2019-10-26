<template>
  <div class="ldc-right col-lg-8">
    <div v-if="promotions.length" class="row">
      <div class="col">
        <PromotionList :promotions="promotions" :path="path" :name="name" />
      </div>
    </div>
    <hr v-if="videos.length">
    <div v-if="videos.length" class="row">
      <div class="col">
        <VideoList :videos="videos" :path="videosPath" :name="name" />
      </div>
    </div>
  </div>
</template>

<script>
import { get } from '@base-cms/object-path';

import PromotionList from './promotion-list.vue';
import VideoList from './video-list.vue';

export default {
  components: {
    PromotionList,
    VideoList,
  },
  props: {
    name: {
      type: String,
      required: true,
    },
    path: {
      type: String,
      required: true,
    },
    promotions: {
      type: Array,
      default: () => ([]),
    },
    videos: {
      type: Array,
      default: () => ([]),
    },
    youtube: {
      type: Object,
      default: () => ({}),
    },
  },
  data() {
    return {};
  },
  computed: {
    videosPath() {
      const username = get(this.youtube, 'username');
      if (username) return `https://youtube.com/user/${username}`;
      const channelId = get(this.youtube, 'channelId');
      if (channelId) return `https://youtube.com/channel/${channelId}`;
      return this.path;
    },
  },
  methods: {
    get(object, path) {
      return get(object, path);
    },
  },
};
</script>
