import Browser from '@parameter1/base-cms-marko-web/browser';
import DefaultTheme from '@parameter1/base-cms-marko-web-theme-default/browser';
import GTM from '@parameter1/base-cms-marko-web-gtm/browser';
import GAM from '@parameter1/base-cms-marko-web-gam/browser';
import GCSE from '@parameter1/base-cms-marko-web-gcse/browser';
import RevealAd from '@parameter1/base-cms-marko-web-reveal-ad/browser';
import P1Events from '@parameter1/base-cms-marko-web-p1-events/browser';
import Common from '@pmmi-media-group/package-common/browser';
import Shared from '@pmmi-media-group/package-shared/browser';

P1Events(Browser);
Shared(Browser);
DefaultTheme(Browser);
GTM(Browser);
GAM(Browser);
GCSE(Browser);
RevealAd(Browser);
Common(Browser);

export default Browser;
