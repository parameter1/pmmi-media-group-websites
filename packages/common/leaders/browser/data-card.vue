<template>
  <div :class="classNames">
    <div class="row">
      <Profile
        :compact="compact"
        :logo-src="logoSrc"
        :contact-src="contactSrc"
        :website="website"
        :name="name"
        :product-summary="productSummary"
        :contact-name="contactName"
        :contact-title="contactTitle"
        :path="path"
        :teaser="teaser"
      />
      <Content
        v-if="!compact"
        :name="name"
        :path="path"
        :youtube="youtube"
        :youtube-videos="youtubeVideos"
        :promotions="promotions"
      />
    </div>
  </div>
</template>

<script>
import { get, getAsArray } from '@base-cms/object-path';

import Profile from './data-card-profile.vue';
import Content from './data-card-content.vue';

export default {
  components: {
    Profile,
    Content,
  },
  props: {
    expanded: {
      type: Boolean,
      default: false,
    },
    grow: {
      type: String,
      default: 'right',
    },
    name: {
      type: String,
      required: true,
    },
    path: {
      type: String,
      required: true,
    },
    logoSrc: {
      type: String,
    },
    productSummary: {
      type: String,
    },
    contactName: {
      type: String,
    },
    contactSrc: {
      type: String,
    },
    contactTitle: {
      type: String,
    },
    teaser: {
      type: String,
    },
    website: {
      type: String,
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
    compact() {
      return !getAsArray(this.youtubeVideos, 'items').length && !this.promotions.length;
    },
    classNames() {
      const classes = ['ldc-modal', `ldc-modal--grow-${this.grow}`];
      if (this.expanded) classes.push('ldc-modal--expanded');
      if (this.compact) classes.push('ldc-modal--compact');
      return classes;
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
