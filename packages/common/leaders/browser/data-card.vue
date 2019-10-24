<template>
  <div :class="classNames">
    <div class="row">
      <div class="ldc-left col-lg-4">
        <div class="row">
          <div class="col-6">
            <div class="ldc-left__logo">
              <img v-if="logoSrc" :src="logoSrc" :title="name" :alt="logoAlt" />
              <span v-else>{{ name }}</span>
            </div>
          </div>
          <div class="ldc-left__buttons col-6">
            <a v-if="website" :href="website" class="btn btn-block btn-sm btn-primary text-center" target="_blank">Visit Site</a>
            <a :href="path" class="btn btn-block btn-sm btn-secondary text-center">View Profile</a>
          </div>
        </div>
        <div class="row">
          <div class="col">
            <p v-if="productSummary">
              <strong>{{ productSummary }}</strong>
            </p>
            <p v-if="teaser">{{ teaser }}</p>
          </div>
        </div>
        <div v-if="contactName" class="row">
          <div v-if="contactSrc" class="col-3">
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
      <div class="ldc-right col-lg-8">
        <div class="row">
          <div class="col">
            Featured Products
          </div>
        </div>
        <div class="row">
          <div class="col">
            Featured Videos
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>

export default {
  props: {
    expanded: {
      type: Boolean,
      default: false,
    },
    name: {
      type: String,
      required: true,
    },
    path: {
      type: String,
      required: true,
    },
    logoSrc: {
      type: String,
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
  data() {
    return {};
  },
  computed: {
    logoAlt() {
      return `${this.name} logo`;
    },
    contactAlt() {
      return `${this.contactName} headshot`;
    },
    classNames() {
      const classes = ['ldc-modal'];
      if (this.expanded) classes.push('ldc-modal--expanded');
      return classes;
    }
  },
};
</script>
