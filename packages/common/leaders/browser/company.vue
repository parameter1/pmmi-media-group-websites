<template>
  <li class="leaders__item-list-item" @mouseenter="show" @mouseleave="hide">
    <a :href="get(company, 'siteContext.path')" :title="get(company, 'name')">
      {{ get(company, 'name') }}
      <IconYoutube v-if="company.showIcon" />
    </a>
    <DataCard
      v-if="expanded"
      :logoSrc="get(this.company, 'primaryImage.src')"
      :contact-src="get(this.contact, 'primaryImage.src')"
      :website="website"
      :name="get(company, 'name')"
      :product-summary="get(company, 'productSummary')"
      :promotions="promotions"
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
    website() {
      const url = get(this.company, 'website');
      if (url) return /^http/.test(url) ? url : `https://${url}`;
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
    }
  },
};
</script>
