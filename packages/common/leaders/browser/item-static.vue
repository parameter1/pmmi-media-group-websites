<template>
  <div class="text-left">
    <p class="mb-1 ml-3 font-weight-bold">{{ name }}:</p>
    <ul class="leaders__item-list">
      <li v-if="loading" class="leaders__item-list-item">
        Loading...
      </li>
      <li v-else-if="error" class="leaders__item-list-item">
        Unable to load items: {{ error.message }}
      </li>
      <li v-else-if="!items.length" class="leaders__item-list-item">
        No results found.
      </li>
      <li
        v-for="content in items"
        v-else
        :key="content.id"
        class="leaders__item-list-item"
      >
        <a :href="content.siteContext.path" :title="content.name">
          {{ content.name }}
          <IconYoutube v-if="content.showIcon" />
        </a>
      </li>
    </ul>
  </div>
</template>

<script>
import { getAsArray } from '@base-cms/object-path';
import IconYoutube from '@base-cms/marko-web-icons/browser/youtube.vue';

export default {
  components: {
    IconYoutube,
  },
  props: {
    id: {
      type: Number,
      required: true,
    },
    name: {
      type: String,
      required: true,
    },
    limit: {
      type: Number,
      default: 20,
    },
  },
  data() {
    return {
      loading: false,
      error: null,
      items: [],
      expanded: false,
      promise: null,
    };
  },
  async mounted() {
    const { limit, id: sectionId } = this;
    try {
      this.loading = true;
      this.error = null;
      const res = await fetch('/__leaders-content', {
        method: 'post',
        body: JSON.stringify({ limit, sectionId }),
        headers: { 'Content-Type': 'application/json' },
      });
      if (!res.ok) {
        this.promise = null;
        throw new Error(res.statusText);
      }
      const items = await res.json();
      this.items = items.map((item) => {
        const showIcon = getAsArray(item, 'socialLinks').some(({ provider }) => provider === 'youtube');
        return { ...item, showIcon };
      });
    } catch (e) {
      this.error = e;
    } finally {
      this.loading = false;
    }
  },
};
</script>
