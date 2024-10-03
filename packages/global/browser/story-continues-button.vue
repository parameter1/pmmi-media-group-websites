<template>
  <button
    v-if="showButton"
    class="btn-primary"
    style="margin-bottom: 10px"
    @click="handleClick"
  >
    Story Continues
  </button>
</template>

<script>
export default {
  data: () => ({
    showButton: true,
  }),
  created() {
    this.observer = new IntersectionObserver((event) => {
      if (event[0].isIntersecting) {
        const { dataLayer } = window;
        if (dataLayer) {
          const payload = {
            event: 'story-continues-button-view',
          };
          dataLayer.push(payload);
        }
      }
    });
  },
  mounted() {
    this.observer.observe(this.$el);
  },
  methods: {
    handleClick() {
      this.showButton = false;
      const contentPagePreviewOverlay = document.getElementById('content-page-preview-overlay');
      const bodyPartTwo = document.getElementById('content-body-part-two');
      contentPagePreviewOverlay.style = 'display: none;';
      bodyPartTwo.removeAttribute('style');
      const { dataLayer } = window;
      if (dataLayer) {
        const payload = {
          event: 'story-continues-button-click',
        };
        dataLayer.push(payload);
      }
    },
  },
};
</script>
