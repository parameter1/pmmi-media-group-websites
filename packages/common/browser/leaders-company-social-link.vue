<template>
  <a
    :href="href"
    :target="target"
    class="social-icon-link"
    :title="title"
    :rel="rel"
    @click="emitAction"
  >
    <component :is="icon" :modifiers="modifiers" />
  </a>
</template>

<script>
import IconYoutube from '@base-cms/marko-web-icons/browser/youtube.vue';
import IconLinkedin from '@base-cms/marko-web-icons/browser/linkedin.vue';
import IconFacebook from '@base-cms/marko-web-icons/browser/facebook.vue';
import IconTwitter from '@base-cms/marko-web-icons/browser/twitter.vue';

export default {
  components: {
    IconYoutube,
    IconLinkedin,
    IconFacebook,
    IconTwitter,
  },
  props: {
    companyId: {
      type: Number,
      required: true,
    },
    companyName: {
      type: String,
      required: true,
    },
    href: {
      type: String,
      required: true,
    },
    provider: {
      type: String,
      required: true,
    },
  },
  data: () => ({
    target: '_blank',
    rel: 'nofollow',
    modifiers: ['dark', 'lg'],
  }),
  computed: {
    icon() {
      return `icon-${this.provider}`;
    },
    title() {
      return `Visit us on ${this.provider.charAt(0).toUpperCase()}${this.provider.slice(1)}`;
    },
  },
  methods: {
    emitAction() {
      const payload = {
        category: 'Leaders Company Profile',
        type: 'click',
        label: `Company Social - ${this.provider}`,
      };
      const data = {
        companyId: this.companyId,
        companyName: this.companyName,
      };
      this.$emit('action', payload, data);
    },
  },
};
</script>
