import ContactUsForm from './contact-us-form.vue';
import LeadersItem from '../leaders/browser/item.vue';
import LeadersItemStatic from '../leaders/browser/item-static.vue';

export default (Browser) => {
  // @todo this should be removed once contact us is moved to core.
  Browser.registerComponent('CommonContactUsForm', ContactUsForm);
  Browser.registerComponent('CommonLeadersItem', LeadersItem);
  Browser.registerComponent('CommonLeadersItemStatic', LeadersItemStatic);
};
