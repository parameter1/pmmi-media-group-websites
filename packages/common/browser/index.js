import LeadersItem from '../leaders/browser/item.vue';
import LeadersItemStatic from '../leaders/browser/item-static.vue';

const ImageSlider = () => import(/* webpackChunkName: "common-image-slider" */ './image-slider.vue');
const ContactUsForm = () => import(/* webpackChunkName: "common-contact-us" */ './contact-us-form.vue');

export default (Browser) => {
  // @todo this should be removed once contact us is moved to core.
  Browser.registerComponent('CommonContactUsForm', ContactUsForm);
  Browser.registerComponent('CommonImageSlider', ImageSlider);
  Browser.registerComponent('CommonLeadersItem', LeadersItem);
  Browser.registerComponent('CommonLeadersItemStatic', LeadersItemStatic);
};
