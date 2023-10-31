import Browser from '@parameter1/base-cms-marko-web/browser';
import RevealAd from '@parameter1/base-cms-marko-web-reveal-ad/browser';
import Global from '@pmmi-media-group/package-global/browser';

const ReadingProgressBar = () => import(/* webpackChunkName: "cpgnext-reading-progress-bar" */ './reading-progress-bar.vue');

RevealAd(Browser);
Global(Browser);
Browser.register('CPGNextReadingProgressBar', ReadingProgressBar);

export default Browser;
