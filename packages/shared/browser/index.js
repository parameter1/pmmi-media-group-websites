import Inquiry from '@parameter1/base-cms-marko-web-inquiry/browser';
import Leaders from '@parameter1/base-cms-marko-web-leaders/browser';
import IdentityX from '@parameter1/base-cms-marko-web-identity-x/browser';
import P1Events from '@parameter1/base-cms-marko-web-p1-events/browser';
import SocialSharing from '@parameter1/base-cms-marko-web-social-sharing/browser';
import OmedaIdentityX from '@parameter1/base-cms-marko-web-omeda-identity-x/browser';


export default (Browser) => {
  Inquiry(Browser);
  Leaders(Browser);
  IdentityX(Browser);
  P1Events(Browser);
  SocialSharing(Browser);
  OmedaIdentityX(Browser);
};
