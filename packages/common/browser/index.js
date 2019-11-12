const LeadersProgram = () => import(/* webpackChunkName: "leaders-program" */ '@base-cms/leaders-program');
const ImageSlider = () => import(/* webpackChunkName: "common-image-slider" */ './image-slider.vue');
const ContactUsForm = () => import(/* webpackChunkName: "common-contact-us" */ './contact-us-form.vue');
const TrackLeaders = () => import(/* webpackChunkName: "common-gtm-track-leaders" */ './track-leaders.vue');

export default (Browser) => {
  const { EventBus } = Browser;
  Browser.register('TrackLeaders', TrackLeaders, { provide: { EventBus } });
  Browser.register('LeadersProgram', LeadersProgram, { withApollo: true, provide: { EventBus } });

  // @todo this should be removed once contact us is moved to core.
  Browser.register('CommonContactUsForm', ContactUsForm);
  Browser.register('CommonImageSlider', ImageSlider);
};
