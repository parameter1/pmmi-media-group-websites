import Leaders from '@base-cms/marko-web-leaders/browser';

const ImageSlider = () => import(/* webpackChunkName: "common-image-slider" */ './image-slider.vue');
const ContactUsForm = () => import(/* webpackChunkName: "common-contact-us" */ './contact-us-form.vue');

export default (Browser) => {
  Leaders(Browser);

  // @todo this should be removed once contact us is moved to core.
  Browser.register('CommonContactUsForm', ContactUsForm);
  Browser.register('CommonImageSlider', ImageSlider);
};
