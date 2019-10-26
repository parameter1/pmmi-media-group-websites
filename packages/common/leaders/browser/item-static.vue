<template>
  <div class="text-left">
    <p class="mb-1 ml-3 font-weight-bold">
      {{ name }}:
    </p>
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
      <Company
        v-for="content in items"
        v-else
        :key="content.id"
        :company="content"
        grow="right"
      />
    </ul>
  </div>
</template>

<script>
import Company from './company.vue';

export default {
  components: {
    Company,
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
      this.items = items;
    } catch (e) {
      this.error = e;
    } finally {
      this.loading = false;
    }
  },
};
</script>
