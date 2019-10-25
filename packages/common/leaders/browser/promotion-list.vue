<template>
  <div class="ldc-content">
    <div class="ldc-content__header">
      Featured {{ name }} Products
      <a :href="path" title="View more products" class="ldc-content__more">View more products &gt;</a>
    </div>
    <div class="ldc-content__list">
      <PromotionListItem
        v-for="promotion in promotions"
        :key="promotion.id"
        class="ldc-content__list-item"
        :url="promotion.linkUrl"
        :text="promotion.linkText"
        :src="get(promotion, 'primaryImage.src')"
      />
    </div>
  </div>
</template>

<script>
import { get } from '@base-cms/object-path';
import PromotionListItem from './promotion-list-item.vue';

export default {
  components: {
    PromotionListItem,
  },
  props: {
    name: {
      type: String,
      required: true,
    },
    path: {
      type: String,
      required: true,
    },
    promotions: {
      type: Array,
    },
  },
  data() {
    return {};
  },
  methods: {
    get(object, path) {
      return get(object, path);
    }
  },
};
</script>
