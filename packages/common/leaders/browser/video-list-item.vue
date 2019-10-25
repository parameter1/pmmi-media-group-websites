<template>
  <a v-if="url" target="_blank" :href="url" :title="text">
    <img v-if="src" :src="src" :alt="text" />
    <span>{{ text }}</span>
  </a>
  <div v-else>
    <img v-if="src" :src="src" :alt="text" />
    <span>{{ text }}</span>
  </div>
</template>

<script>

export default {
  props: {
    text: {
      type: String,
      required: true,
    },
    url: {
      type: String,
    },
    src: {
      type: String,
    },
  },
  data() {
    return {};
  },
};
</script>
