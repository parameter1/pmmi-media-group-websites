import MonoRail from '@pmmi-media-group/package-theme-monorail/browser';
import MonoRailLeaders from '@pmmi-media-group/package-theme-monorail-leaders/browser';

const ImageSlider = () => import(/* webpackChunkName: "global-image-slider" */ './image-slider.vue');

export default (Browser) => {
  MonoRail(Browser);
  MonoRailLeaders(Browser);

  Browser.register('GlobalImageSlider', ImageSlider);
};
