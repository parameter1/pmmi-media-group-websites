import MonoRail from '@pmmi-media-group/package-theme-monorail/browser';

const ImageSlider = () => import(/* webpackChunkName: "global-image-slider" */ './image-slider.vue');

export default (Browser) => {
  MonoRail(Browser);

  Browser.register('GlobalImageSlider', ImageSlider);
};
