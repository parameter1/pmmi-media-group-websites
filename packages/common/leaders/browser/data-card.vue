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
        :videos="videos"
        :promotions="promotions"
      />
    </div>
  </div>
</template>

<script>
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
      default: null,
    },
    productSummary: {
      type: String,
      default: null,
    },
    contactName: {
      type: String,
      default: null,
    },
    contactSrc: {
      type: String,
      default: null,
    },
    contactTitle: {
      type: String,
      default: null,
    },
    teaser: {
      type: String,
      default: null,
    },
    website: {
      type: String,
      default: null,
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
    compact() {
      return !this.videos.length && !this.promotions.length;
    },
    classNames() {
      const classes = ['ldc-modal', `ldc-modal--grow-${this.grow}`];
      if (this.expanded) classes.push('ldc-modal--expanded');
      if (this.compact) classes.push('ldc-modal--compact');
      return classes;
    },
  },
};
</script>
