<template>
  <div>
    {{ translate('firstNameLabel') }}
  </div>
</template>

<script>
import i18n from '../utils/i18n-vue';

export default {
  props: {
    lang: {
      type: String,
      default: 'en',
    },
  },
  methods: {
    translate(key) {
      return i18n(this.lang, key);
    },
  },
};
</script>
