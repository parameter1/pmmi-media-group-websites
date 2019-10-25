<template>
  <div :class="classNames">
    <div class="row">
      <div class="ldc-left__logo col-6">
        <img v-if="logoSrc" :src="logoSrc" :title="name" :alt="logoAlt" />
        <h6 v-else>{{ name }}</h6>
      </div>
      <div class="ldc-left__buttons col-6">
        <a v-if="website" :href="website" class="btn btn-block btn-sm btn-primary text-center" target="_blank">Visit Site</a>
        <a :href="path" class="btn btn-block btn-sm btn-secondary text-center">View Profile</a>
      </div>
    </div>
    <hr v-if="showTeaser">
    <div v-if="showTeaser" class="row">
      <div class="col">
        <p v-if="productSummary">
          <strong>{{ productSummary }}</strong>
        </p>
        <p v-if="teaser">{{ teaser }}</p>
      </div>
    </div>
    <hr v-if="contactName">
    <div v-if="contactName" class="row">
      <div v-if="contactSrc" class="col-3 my-auto">
        <img :src="contactSrc" :title="contactName" :alt="contactAlt" />
      </div>
      <div class="ldc-left__contact col">
        <p>
          {{ contactName }}
          <span v-if="contactTitle">{{ contactTitle }}</span>
        </p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    compact: {
      type: Boolean,
      default: false,
    },
    name: {
      type: String,
      required: true,
    },
    logoSrc: {
      type: String,
    },
    path: {
      type: String,
      required: true,
    },
    productSummary: {
      type: String,
    },
    contactName: {
      type: String,
    },
    contactSrc: {
      type: String,
    },
    contactTitle: {
      type: String,
    },
    teaser: {
      type: String,
    },
    website: {
      type: String,
    },
  },
  computed: {
    showTeaser() {
      return this.productSummary || this.teaser;
    },
    logoAlt() {
      return `${this.name} logo`;
    },
    contactAlt() {
      return `${this.contactName} headshot`;
    },
    classNames() {
      const classes = ['ldc-left'];
      if (!this.compact) classes.push('col-lg-4');
      return classes;
    },
  },
};
</script>
