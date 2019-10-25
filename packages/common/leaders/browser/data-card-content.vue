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
import { get, getAsArray } from '@base-cms/object-path';

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
    },
    youtube: {
      type: Object,
    },
    youtubeVideos: {
      type: Object,
    },
  },
  data() {
    return {};
  },
  computed: {
    videos() {
      const videos = getAsArray(this.youtubeVideos, 'items');
      return videos.map((video) => {
        const id = get(video, 'snippet.resourceId.videoId');
        const linkUrl = `https://youtu.be/${id}`;
        return {
          linkText: get(video, 'snippet.title'),
          linkUrl,
          imageSrc: get(video, 'snippet.thumbnails.default.url'),
        }
      })
    },
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
    getAsArray(object, path) {
      return getAsArray(object, path);
    },
  },
};
</script>
