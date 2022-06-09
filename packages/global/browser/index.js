import MonoRail from '@parameter1/base-cms-marko-web-theme-monorail/browser';
import Leaders from '@parameter1/base-cms-marko-web-leaders/browser';

const ImageSlider = () => import(/* webpackChunkName: "global-image-slider" */ './image-slider.vue');

export default (Browser) => {
  MonoRail(Browser);
  Leaders(Browser);

  Browser.register('GlobalImageSlider', ImageSlider);
};
