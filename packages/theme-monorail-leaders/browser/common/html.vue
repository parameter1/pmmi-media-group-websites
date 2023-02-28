<template>
  <component :is="tag" v-if="canDisplay">
    <div v-html="value" />
  </component>
</template>

<script>
export default {
  props: {
    tag: {
      type: String,
      default: 'div',
    },
    value: {
      type: String,
      default: null,
    },
    collapsible: {
      type: Boolean,
      default: true,
    },
  },

  computed: {
    canDisplay() {
      if (!this.collapsible) return true;
      return Boolean(this.value);
    },
  },
};
</script>
