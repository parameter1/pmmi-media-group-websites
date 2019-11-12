import Leaders from '@base-cms/marko-web-leaders/browser';

const ImageSlider = () => import(/* webpackChunkName: "common-image-slider" */ './image-slider.vue');
const ContactUsForm = () => import(/* webpackChunkName: "common-contact-us" */ './contact-us-form.vue');
const CommonGTMTrackLeaders = () => import(/* webpackChunkName: "common-gtm-track-leaders" */ './gtm-track-leaders.vue');

export default (Browser) => {
  const { EventBus } = Browser;
  Browser.register('CommonGTMTrackLeaders', CommonGTMTrackLeaders, { provide: { EventBus } });
  Leaders(Browser);

  // @todo this should be removed once contact us is moved to core.
  Browser.register('CommonContactUsForm', ContactUsForm);
  Browser.register('CommonImageSlider', ImageSlider);
};
