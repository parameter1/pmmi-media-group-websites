<template>
  <form name="Category Filters" onsubmit="event.preventDefault()">
    <div class="row" style="padding-bottom: 5px">
      <div class="col-6">
        <button
          class="btn btn-primary"
          type="submit"
          style="text-wrap: nowrap; font-size: 12px; padding: 5px 12px"
          @click="applyFilters"
        >
          Apply Filters
        </button>
      </div>
      <div class="col-6">
        <button
          class="btn btn-primary"
          type="submit"
          style="text-wrap: nowrap; font-size: 12px; padding: 5px 12px"
          @click="clearFilters"
        >
          Clear Filters
        </button>
      </div>
    </div>
    <div>
      <b style="font-size: 24px">Categories</b>
    </div>
    <div v-for="dropdownOption, index in dropdownOptions" :key="index">
      <dropdown
        :index="index"
        :lower-level-sections="dropdownOption.lowerLevelSections"
        :upper-level-section="dropdownOption.upperLevelSection"
      />
    </div>
  </form>
</template>

<script>
import Dropdown from './dropdown.vue';

export default {
  components: {
    Dropdown,
  },
  props: {
    dropdownOptions: {
      type: Array,
      default: () => [],
    },
  },
  methods: {
    applyFilters() {
      const checkboxes = document.forms['Category Filters'].category;
      const checkedBoxes = Array.from(checkboxes).filter((category) => category.checked);
      const categoryIdStringsAsArray = checkedBoxes.map((category) => category.value);
      const categoryIdString = categoryIdStringsAsArray.join(',');
      if (categoryIdString) {
        window.location.href = `${window.location.origin + window.location.pathname}?assignedToWebsiteSectionIds=${categoryIdString}`;
      }
    },
    clearFilters() {
      window.location.href = window.location.origin + window.location.pathname;
    },
  },
};
</script>
