<template>
  <div v-if="lowerLevelSections && lowerLevelSections.length">
    <div @click="expand">
      <b>{{ upperLevelSection.name }}</b>
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
export default {
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
  computed: {
    categoryId() {
      return `category_filter_${this.index}`;
    },
  },
  mounted() {
    console.log(this);
  },
  methods: {
    expand() {
      const elements = document.getElementsByClassName(`category_filter_${this.index}`);
      const elementsArray = Array.from(elements);
      elementsArray.forEach((element) => {
        const currentValue = document.getElementById(element.id).style.getPropertyValue('display');
        if (currentValue === 'none') {
          document.getElementById(element.id).style.setProperty('display', 'flex');
        } else {
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
