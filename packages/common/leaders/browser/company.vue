<template>
  <li class="leaders__item-list-item">
    <a :href="get(company, 'siteContext.path')" :title="get(company, 'name')" @mouseenter="show" @mouseleave="hide">
      {{ get(company, 'name') }}
      <IconYoutube v-if="company.showIcon" />
    </a>
  </li>
</template>

<script>
import { getAsArray, get } from '@base-cms/object-path';
import IconYoutube from '@base-cms/marko-web-icons/browser/youtube.vue';

export default {
  components: {
    IconYoutube,
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
    logoSrc() {
      const src = get(this.company, 'primaryImage.src');
      if (src) return src.replace(/auto=format.*$/, 'auto=format&fill-color=fff&fit=fill&h=100&pad=5&w=100');
    },
    contact() {
      return getAsArray(this.company, 'publicContacts.edges').map(({ node }) => node).shift();
    },
    contactSrc() {
      const src = get(this.contact, 'primaryImage.src');
      if (src) return src.replace(/auto=format.*$/, 'auto=format&h=50&w=50');
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
