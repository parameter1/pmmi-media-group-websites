import MonoRail from '@mindful-web/marko-web-theme-monorail/browser';
import Leaders from '@mindful-web/marko-web-leaders/browser';

const ImageSlider = () => import(/* webpackChunkName: "global-image-slider" */ './image-slider.vue');
const DynamicSiteMenuPositioner = () => import(/* webpackChunkName: "dynamic-site-menu-positioner" */ './dynamic-site-menu-positioner.vue');
const ReadingProgressBar = () => import(/* webpackChunkName: "cpgnext-reading-progress-bar" */ './reading-progress-bar.vue');
const StoryContinuesButton = () => import(/* webpackChunkName: "story-continues-button" */ './story-continues-button.vue');
const CompanySearch = () => import(/* webpackChunkName: "company-search" */ './company-search.vue');

export default (Browser) => {
  const { EventBus } = Browser;
  MonoRail(Browser);
  Leaders(Browser);

  Browser.register('DynamicSiteMenuPositioner', DynamicSiteMenuPositioner);
  Browser.register('GlobalImageSlider', ImageSlider);
  Browser.register('GlobalReadingProgressBar', ReadingProgressBar);
  Browser.register('GlobalStoryContinuesButton', StoryContinuesButton);
  Browser.register('GlobalCompanySearch', CompanySearch, {
    provide: { EventBus },
  });
};
