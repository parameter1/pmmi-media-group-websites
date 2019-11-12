<template>
  <div class="common-track-leaders" />
</template>

<script>
import { get } from 'object-path';

const getAsObject = (obj, path) => {
  const v = get(obj, path, {});
  return v && typeof v === 'object' ? v : {};
};

export default {
  inject: ['EventBus'],
  props: {
    name: {
      type: String,
      default: 'dataLayer',
    },
    event: {
      type: String,
      default: 'action',
    },
  },
  mounted() {
    this.EventBus.$on('action', (event, payload) => {
      const { type, label, category } = getAsObject(event);
      const data = {
        type,
        label,
        category,
        ...getAsObject(payload),
      };
      const dataLayer = window[this.name];
      if (dataLayer) dataLayer.push({ ...data, event: this.event });
    });
  },
};
</script>
