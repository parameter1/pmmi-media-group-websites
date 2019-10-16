<template>
  <li class="leaders__item">
    <button class="btn btn-link btn-block text-left" label="Click to view items" @click="toggle">
      <component :is="icon" />
      {{ name }}
    </button>
    <ul v-if="expanded" class="leaders__item-list">
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
  </li>
</template>

<script>
import { getAsArray } from '@base-cms/object-path';
import IconDash from '@base-cms/marko-web-icons/browser/dash.vue';
import IconPlus from '@base-cms/marko-web-icons/browser/plus.vue';
import IconYoutube from '@base-cms/marko-web-icons/browser/youtube.vue';

export default {
  components: {
    IconDash,
    IconPlus,
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
    };
  },
  computed: {
    icon() {
      return this.expanded ? 'icon-dash' : 'icon-plus';
    },
  },
  methods: {
    toggle() {
      this.expanded = !this.expanded;
      if (!this.items.length) this.loadItems();
    },
    async loadItems() {
      const { limit, id: sectionId } = this;
      try {
        this.loading = true;
        this.error = null;
        const res = await fetch('/__leaders-content', {
          method: 'post',
          body: JSON.stringify({ limit, sectionId }),
          headers: { 'Content-Type': 'application/json' },
        });
        if (!res.ok) throw new Error(res.statusText);
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
  },
};
</script>
