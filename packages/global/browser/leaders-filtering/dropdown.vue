<template>
  <div v-if="lowerLevelSections && lowerLevelSections.length" style="padding-bottom: 8px">
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
        @change="applyFilters"
      >
      <div style="padding-top: 5px; padding-left: 5px">
        <label
          :for="categoryFilterId(interiorIndex)"
        >
          {{ lowerLevelSection.name }}
        </label>
      </div>
    </div>
  </div>
  <div v-else>
    <div style="display: flex; word-break: break-word">
      <input
        :id="categoryId"
        type="checkbox"
        name="category"
        :value="upperLevelSection.id"
      >
      <div style="padding-top: 5px; padding-left: 5px">
        <label
          :for="categoryId"
        >
          {{ upperLevelSection.name }}
        </label>
      </div>
    </div>
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
  mounted() {
    if (window.location.search) {
      const queryParams = new URLSearchParams(window.location.search);
      const currentlyChecked = queryParams.get('assignedToWebsiteSectionIds');
      if (currentlyChecked) {
        const currentlyCheckedArray = currentlyChecked.split(',').map((v) => Number(v));
        const elements = document.getElementsByName('category');
        const elementsArray = Array.from(elements);
        elementsArray.forEach((element) => {
          const value = element.getAttribute('value');
          if (currentlyCheckedArray.includes(Number(value))) {
            element.setAttribute('checked', 'checked');
            const lowerLevelSectionIds = this.lowerLevelSections.map((v) => Number(v.id));
            if (lowerLevelSectionIds.includes(Number(value)) && !this.expanded) {
              this.expand();
            }
          }
        });
      }
    }
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
    applyFilters() {
      const checkboxes = document.forms['Category Filters'].category;
      const checkedBoxes = Array.from(checkboxes).filter((category) => category.checked);
      const categoryIdStringsAsArray = checkedBoxes.map((category) => category.value);
      const categoryIdString = categoryIdStringsAsArray.join(',');
      if (categoryIdString) {
        window.location.href = `${window.location.origin + window.location.pathname}?assignedToWebsiteSectionIds=${categoryIdString}`;
      }
    },
  },
};
</script>
