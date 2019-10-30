import ContactUsForm from './contact-us-form.vue';
import ImageSlider from './image-slider.vue';
import LeadersItem from '../leaders/browser/item.vue';
import LeadersItemStatic from '../leaders/browser/item-static.vue';

export default (Browser) => {
  // @todo this should be removed once contact us is moved to core.
  Browser.registerComponent('CommonContactUsForm', ContactUsForm);
  Browser.registerComponent('CommonImageSlider', ImageSlider);
  Browser.registerComponent('CommonLeadersItem', LeadersItem);
  Browser.registerComponent('CommonLeadersItemStatic', LeadersItemStatic);
};
