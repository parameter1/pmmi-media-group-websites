<template>
  <li class="leaders__item-list-item" @mouseenter="show" @mouseleave="hide">
    <a :href="get(company, 'siteContext.path')" :title="get(company, 'name')">
      {{ get(company, 'name') }}
      <IconYoutube v-if="showIcon" />
    </a>
    <DataCard
      v-if="expanded"
      :grow="grow"
      :logo-src="get(company, 'primaryImage.src')"
      :contact-src="get(contact, 'primaryImage.src')"
      :website="website"
      :name="get(company, 'name')"
      :product-summary="get(company, 'productSummary')"
      :youtube="get(company, 'youtube')"
      :promotions="promotions"
      :videos="videos"
      :contact-name="get(contact, 'name')"
      :contact-title="get(contact, 'title')"
      :path="get(company, 'siteContext.path')"
      :teaser="get(company, 'teaser')"
    />
  </li>
</template>

<script>
import { getAsArray, get } from '@base-cms/object-path';
import IconYoutube from '@base-cms/marko-web-icons/browser/youtube.vue';
import DataCard from './data-card.vue';

export default {
  components: {
    IconYoutube,
    DataCard,
  },
  props: {
    company: {
      type: Object,
      required: true,
    },
    grow: {
      type: String,
      default: 'right',
    },
  },
  data() {
    return {
      expanded: false,
    };
  },
  computed: {
    contact() {
      return getAsArray(this.company, 'publicContacts.edges').map(({ node }) => node).shift();
    },
    promotions() {
      return getAsArray(this.company, 'promotions.edges').map(({ node }) => node);
    },
    videos() {
      return getAsArray(this.company, 'videos.edges').map(({ node }) => node);
    },
    website() {
      const url = get(this.company, 'website');
      return /^http/.test(url) ? url : `https://${url}`;
    },
    showIcon() {
      return get(this.company, 'youtube.username') || get(this.company, 'youtube.channelId');
    },
  },
  methods: {
    get(object, path) {
      return get(object, path);
    },
    show() {
      this.expanded = true;
    },
    hide() {
      this.expanded = false;
    },
  },
};
</script>
