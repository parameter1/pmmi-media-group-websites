<template>
  <div v-if="lowerLevelSections && lowerLevelSections.length">
    <div @click="expand">
      <b>{{ upperLevelSection.name }}<component :is="icon" /></b>
    </div>
    <div
      v-for="lowerLevelSection, interiorIndex in lowerLevelSections"
      :id="categoryFilterId(interiorIndex, true)"
      :key="categoryFilterId(interiorIndex, true)"
      :class="categoryId"
      style="display: none; word-break: break-word;"
    >
      <input
        :id="categoryFilterId(interiorIndex, false)"
        type="checkbox"
        name="category"
        :value="lowerLevelSection.id"
      >
      <label
        style="padding-top: 5px; padding-left: 5px"
        :for="categoryFilterId(interiorIndex)"
      >
        {{ lowerLevelSection.name }}
      </label>
    </div>
  </div>
  <div v-else>
    <input
      :id="categoryId"
      type="checkbox"
      name="category"
      :value="upperLevelSection.id"
    >
    <label :for="categoryId">{{ upperLevelSection.name }}</label>
  </div>
</template>

<script>
import IconChevronDown from '@mindful-web/marko-web-icons/browser/chevron-down.vue';
import IconChevronUp from '@mindful-web/marko-web-icons/browser/chevron-up.vue';

export default {
  components: {
    IconChevronDown,
    IconChevronUp,
  },
  props: {
    lowerLevelSections: {
      type: Array,
      default: () => [],
    },
    upperLevelSection: {
      type: Object,
      default: () => {},
    },
    index: {
      type: Number,
      required: true,
    },
  },
  data: () => ({
    expanded: false,
    iconName: 'chevron-up',
    expandedIconName: 'chevron-down',
  }),
  computed: {
    categoryId() {
      return `category_filter_${this.index}`;
    },
    icon() {
      if (this.expanded) return `icon-${this.expandedIconName}`;
      return `icon-${this.iconName}`;
    },
  },
  methods: {
    expand() {
      const elements = document.getElementsByClassName(`category_filter_${this.index}`);
      const elementsArray = Array.from(elements);
      elementsArray.forEach((element) => {
        const currentValue = document.getElementById(element.id).style.getPropertyValue('display');
        if (currentValue === 'none') {
          this.expanded = true;
          document.getElementById(element.id).style.setProperty('display', 'flex');
        } else {
          this.expanded = false;
          document.getElementById(element.id).style.setProperty('display', 'none');
        }
      });
    },
    categoryFilterId(interiorIndex, isWrapper) {
      if (isWrapper) {
        return `category_filter_${this.index}_${interiorIndex}_wrapper`;
      }
      return `category_filter_${this.index}_${interiorIndex}`;
    },
  },
};
</script>
