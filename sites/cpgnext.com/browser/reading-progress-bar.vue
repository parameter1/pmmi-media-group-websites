<template>
  <div id="reading-progress-bar" class="reading-progress-bar" />
</template>

<script>
export default {
  created() {
    window.addEventListener('scroll', this.setProgress);
  },
  methods: {
    setProgress() {
      const { body } = document;
      const html = document.documentElement;
      const height = Math.max(
        body.scrollHeight,
        body.offsetHeight,
        html.clientHeight,
        html.scrollHeight,
        html.offsetHeight,
      );
      const progress = document.getElementById('reading-progress-bar');
      const scrollFromTop = (html.scrollTop || body.scrollTop) + html.clientHeight;
      const width = `${(scrollFromTop / height) * 100}%`;
      progress.style.width = width;
    },
  },
};
</script>

<style>
</style>
