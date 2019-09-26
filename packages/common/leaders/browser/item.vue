<template>
  <li class="leaders__item">
    <button class="btn btn-link btn-block text-left" @click="toggle" label="Click to view items">
      <component :is="icon" :modifiers="iconModifiers" />
      {{ name }}
    </button>
    <ul v-if="expanded" class="leaders__item-list">
      <li v-if="loading" class="leaders__item-list-item">
        Loading...
      </li>
      <li v-else-if="error" class="leaders__item-list-item">
        Unable to load items: {{ error }}
      </li>
      <li v-else-if="!items.length" class="leaders__item-list-item">
        No results found.
      </li>
      <li v-else v-for="content in items" :key="content.id" class="leaders__item-list-item">
        <a :href="content.canonicalPath" :title="content.name">
          {{ content.name }}
        </a>
      </li>
    </ul>
  </li>
</template>

<script>
import IconDash from '@base-cms/marko-web-icons/browser/dash.vue';
import IconPlus from '@base-cms/marko-web-icons/browser/plus.vue';

export default {
  components: {
    IconDash,
    IconPlus,
  },
  props: {
    id: {
      type: Number,
      required: true,
    },
    name: {
      type: String,
    },
    limit: {
      type: Number,
      default: 20,
    },
  },
  data() {
    return {
      loading: false,
      error: false,
      items: [],
      expanded: false,
    };
  },
  computed: {
    icon() {
      return this.expanded ? 'icon-dash' : 'icon-plus';
    },
    iconModifiers() {
      if (this.loading) return ['spin'];
      return ['spin'];
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
        const res = await fetch('/__leaders-content', {
          method: 'post',
          body: JSON.stringify({ limit, sectionId }),
          headers: { 'Content-Type': 'application/json' },
        });
        if (res.ok) {
          const items = await res.json();
          // this.items = items;
        } else {
          // throw new Error(res.statusText);
        }
      } catch (e) {
        this.error = e.message;
      } finally {
        // this.loading = false;
      }
    }
  },
};
</script>
