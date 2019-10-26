<template>
  <div class="ldc-content">
    <div class="ldc-content__header">
      Featured {{ name }} Videos
      <a
        :href="path"
        title="View more videos"
        target="_blank"
        class="ldc-content__more"
      >
        View more videos &gt;
      </a>
    </div>
    <div class="ldc-content__list">
      <VideoListItem
        v-for="video in videos"
        :key="video.id"
        class="ldc-content__list-item"
        :url="video.linkUrl"
        :text="video.linkText"
        :src="video.imageSrc"
      />
    </div>
  </div>
</template>

<script>
import { get } from '@base-cms/object-path';
import VideoListItem from './promotion-list-item.vue';

export default {
  components: {
    VideoListItem,
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
    videos: {
      type: Array,
      default: () => ([]),
    },
  },
  data() {
    return {};
  },
  methods: {
    get(object, path) {
      return get(object, path);
    },
  },
};
</script>
