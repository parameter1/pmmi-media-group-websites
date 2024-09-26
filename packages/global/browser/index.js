import MonoRail from '@parameter1/base-cms-marko-web-theme-monorail/browser';
import Leaders from '@parameter1/base-cms-marko-web-leaders/browser';

const ImageSlider = () => import(/* webpackChunkName: "global-image-slider" */ './image-slider.vue');
const DynamicSiteMenuPositioner = () => import(/* webpackChunkName: "dynamic-site-menu-positioner" */ './dynamic-site-menu-positioner.vue');
const ReadingProgressBar = () => import(/* webpackChunkName: "cpgnext-reading-progress-bar" */ './reading-progress-bar.vue');

export default (Browser) => {
  MonoRail(Browser);
  Leaders(Browser);

  Browser.register('DynamicSiteMenuPositioner', DynamicSiteMenuPositioner);
  Browser.register('GlobalImageSlider', ImageSlider);
  Browser.register('GlobalReadingProgressBar', ReadingProgressBar);
};
