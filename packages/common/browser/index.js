import Leaders from '@parameter1/base-cms-marko-web-leaders/browser';

const ImageSlider = () => import(/* webpackChunkName: "common-image-slider" */ './image-slider.vue');
const ContactUsForm = () => import(/* webpackChunkName: "common-contact-us" */ './contact-us-form.vue');
const CommonGTMTrackLeaders = () => import(/* webpackChunkName: "common-gtm-track-leaders" */ './gtm-track-leaders.vue');
const CommonLeadersCompanyWebsiteLink = () => import(/* webpackChunkName: "common-leaders-company-website-link" */ './leaders-company-website-link.vue');
const CommonLeadersCompanySocialLink = () => import(/* webpackChunkName: "common-leaders-company-social-link" */ './leaders-company-social-link.vue');

export default (Browser) => {
  const { EventBus } = Browser;
  Browser.register('CommonGTMTrackLeaders', CommonGTMTrackLeaders, { provide: { EventBus } });
  Browser.register('CommonLeadersCompanyWebsiteLink', CommonLeadersCompanyWebsiteLink, {
    on: { action: (...args) => EventBus.$emit('leaders-action', ...args) },
  });
  Browser.register('CommonLeadersCompanySocialLink', CommonLeadersCompanySocialLink, {
    on: { action: (...args) => EventBus.$emit('leaders-action', ...args) },
  });
  Leaders(Browser);

  // @todo this should be removed once contact us is moved to core.
  Browser.register('CommonContactUsForm', ContactUsForm);
  Browser.register('CommonImageSlider', ImageSlider);
};
