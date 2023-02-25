<template>
  <div :class="classes" :data-taxonomy-ids="taxonomyIds.join(',') || null">
    <div v-if="title" class="leaders__header">
      <div class="leaders__header-title">
        {{ title }}
      </div>
    </div>
    <leaders-header
      v-else
      :display="getResponsiveValue('displayHeader')"
      :img-src="headerImgSrc"
      :img-srcset="headerImgSrcset"
      :img-alt="headerImgAlt"
      :display-callout="getResponsiveValue('displayCallout')"
      :callout-prefix="calloutPrefix"
      :callout-value="calloutValue"
    />
    <div class="leaders__body">
      <loading
        v-if="!hasLoaded"
        :is-loading="isLoading"
        :error="error"
        :has-no-results="!sections.length"
        loading-message="Loading sections..."
        no-results-message="No sections were found."
      />
      <leaders-sections-wrapper
        :sections="sections"
        :open="getResponsiveValue('open')"
        :expanded="isExpanded"
        :contextual="isContextual"
        :columns="getResponsiveValue('columns')"
        :offset-top="getResponsiveValue('offsetTop')"
        :offset-bottom="getResponsiveValue('offsetBottom')"
        :promotion-limit="promotionLimit"
        :video-limit="videoLimit"
        :featured-product-label="featuredProductLabel"
        :icon-set="iconSet"
        @action="emitAction"
      />
    </div>
    <div v-if="viewAll" class="leaders__footer">
      <a class="btn btn-primary" :href="viewAll" v-html="viewAllText" />
    </div>
  </div>
</template>

<script>
import Loading from './common/loading.vue';
import LeadersSectionsWrapper from './containers/section-wrapper.vue';
import LeadersHeader from './header.vue';
import getEdgeNodes from './utils/get-edge-nodes';
import getAsObject from './utils/get-as-object';

export default {
  components: {
    Loading,
    LeadersHeader,
    LeadersSectionsWrapper,
  },

  props: {
    sectionAlias: {
      type: String,
      required: true,
    },
    contentId: {
      type: Number,
      default: null,
    },
    sectionIds: {
      type: Array,
      default: () => ([]),
    },
    open: {
      type: String,
      default: 'left',
    },
    expanded: {
      type: Boolean,
      default: null,
    },
    contextual: {
      type: Boolean,
      default: null,
    },
    columns: {
      type: Number,
      default: 1,
    },
    mediaQueries: {
      type: Array,
      default: () => [],
      validator: (values) => values.every((value) => {
        if (!value || typeof value !== 'object') return false;
        const props = ['open', 'columns', 'expanded', 'displayHeader', 'displayCallout', 'offsetTop', 'offsetBottom'];
        if (!props.includes(value.prop)) return false;
        if (!value.query) return false;
        return Object.prototype.hasOwnProperty.call(value, 'value');
      }),
    },
    viewAllHref: {
      type: String,
      default: null,
    },
    viewAllText: {
      type: String,
      default: 'View All Companies &gt;',
    },
    displayHeader: {
      type: Boolean,
      default: true,
    },
    headerImgSrc: {
      type: String,
      default: null,
    },
    headerImgSrcset: {
      type: String,
      default: null,
    },
    headerImgAlt: {
      type: String,
      default: null,
    },
    displayCallout: {
      type: Boolean,
      default: true,
    },
    calloutPrefix: {
      type: String,
      default: 'Browse these',
    },
    calloutValue: {
      type: String,
      default: 'leading suppliers',
    },
    title: {
      type: String,
      default: null,
    },
    offsetTop: {
      type: Number,
      default: 0,
    },
    offsetBottom: {
      type: Number,
      default: 0,
    },
    promotionLimit: {
      type: Number,
      default: 4,
    },
    videoLimit: {
      type: Number,
      default: 3,
    },
    useContentPrimarySection: {
      type: Boolean,
      default: false,
    },
    displayViewAll: {
      type: Boolean,
      default: true,
    },
    featuredProductLabel: {
      type: String,
      default: 'Featured Products',
    },
    iconSet: {
      type: String,
      default: null,
    },
  },

  data: () => ({
    loadType: null,
    taxonomyIds: [],
    sections: [],
    isLoading: false,
    hasLoaded: false,
    error: null,
    mqProps: {
      open: undefined,
      columns: undefined,
      displayHeader: undefined,
      displayCallout: undefined,
      offsetTop: undefined,
      offsetBottom: undefined,
    },
  }),

  computed: {
    viewAll() {
      if (!this.displayViewAll) return false;
      return this.viewAllHref || `/${this.sectionAlias}`;
    },
    isExpanded() {
      const { expanded } = this;
      if (expanded != null) return expanded;
      return this.isContextual;
    },
    isContextual() {
      const { contextual } = this;
      if (contextual != null) return contextual;
      return this.loadType === 'contextual';
    },
    classes() {
      const { loadType } = this;
      const blockName = 'leaders';
      const classes = [blockName];
      if (loadType) classes.push(`${blockName}--${loadType}`);
      return classes;
    },
    canLoad() {
      return !this.isLoading || !this.hasLoaded;
    },
  },

  created() {
    this.createMediaQueryListeners();
  },

  mounted() {
    this.load();
  },

  methods: {
    emitAction(...args) {
      this.$emit('action', ...args);
    },

    createMediaQueryListeners() {
      this.mediaQueries.forEach((media) => {
        const listener = (query) => {
          const { prop, value } = media;
          this.mqProps[prop] = query.matches ? value : undefined;
        };
        const query = window.matchMedia(media.query);
        listener(query);
        query.addListener(listener);
      });
    },

    getResponsiveValue(prop) {
      const value = this[prop];
      const mqValue = this.mqProps[prop];
      if (mqValue === undefined) return value;
      return mqValue;
    },

    async load() {
      if (this.canLoad) {
        this.isLoading = true;
        this.error = null;
        try {
          this.sections = await this.loadSections();
          this.hasLoaded = true;
        } catch (e) {
          this.error = e;
        } finally {
          this.isLoading = false;
        }
      }
    },

    async loadSections() {
      const { sectionIds } = this;
      if (sectionIds && sectionIds.length) {
        const url = `/__sections-from-ids?sectionIds=${this.sectionids}`;
        const res = await fetch(url);
        const json = await res.json();
        const sections = getEdgeNodes(json, 'websiteSections')
          .filter((s) => s.hierarchy.some(({ alias }) => alias === this.sectionAlias));
        if (sections.length) return sections;
      }
      const fromContent = await this.loadContentSections();
      if (fromContent.length) {
        this.loadType = 'contextual';
        return fromContent;
      }
      return this.loadAllSections();
    },

    async loadContentSections() {
      if (!this.contentId) return [];
      const leaderByIdUrl = `/__leader-by-id?id=${this.contentId}`;
      const res = await fetch(leaderByIdUrl);
      const json = await res.json();
      const taxonomyIds = getEdgeNodes(json, 'content.taxonomy').map((t) => t.id);
      const sectionIds = [];
      this.taxonomyIds = taxonomyIds;
      if (this.useContentPrimarySection) {
        const primarySection = getAsObject(json, 'content.primarySection');
        if (primarySection.id) sectionIds.push(primarySection.id);
      }
      if (!taxonomyIds.length && !sectionIds.length) return [];
      const sectionFromContentUrl = `/__sections-from-content?sectionIds=${sectionIds}&taxonomyIds=${taxonomyIds}`;
      const sectionFromContentRes = await fetch(sectionFromContentUrl);
      const sectionFromContentJson = await sectionFromContentRes.json();
      const sections = getEdgeNodes(sectionFromContentJson, 'websiteSections');
      return sections
        .filter((s) => s.hierarchy.some(({ alias }) => alias === this.sectionAlias));
    },

    async loadAllSections() {
      const url = `/__all-sections?alias=${encodeURIComponent(this.sectionAlias)}`;
      const res = await fetch(url);
      const json = await res.json();
      this.loadType = 'all';
      return getEdgeNodes(json, 'websiteSectionAlias.children');
    },
  },
};
</script>
