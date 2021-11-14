import Inquiry from '@parameter1/base-cms-marko-web-inquiry/browser';
import Leaders from '@parameter1/base-cms-marko-web-leaders/browser';
import P1Events from '@parameter1/base-cms-marko-web-p1-events/browser';
import SocialSharing from '@parameter1/base-cms-marko-web-social-sharing/browser';
import OmedaIdentityX from '@parameter1/base-cms-marko-web-omeda-identity-x/browser';

const setP1EventsIdentity = ({ p1events, brandKey, encryptedId }) => {
  if (!p1events || !brandKey || !encryptedId) return;
  p1events('setIdentity', `omeda.${brandKey}.customer*${encryptedId}~encrypted`);
};

export default (Browser) => {
  const { EventBus } = Browser;
  EventBus.$on('identity-x-logout', () => {
    if (window.p1events) window.p1events('setIdentity', null);
  });
  EventBus.$on('omeda-identity-x-authenticated', ({ brandKey, encryptedId }) => {
    setP1EventsIdentity({ p1events: window.p1events, brandKey, encryptedId });
  });
  EventBus.$on('omeda-identity-x-rapid-identify-response', ({ brandKey, encryptedId }) => {
    setP1EventsIdentity({ p1events: window.p1events, brandKey, encryptedId });
  });

  Inquiry(Browser);
  Leaders(Browser);
  P1Events(Browser);
  SocialSharing(Browser);
  OmedaIdentityX(Browser);
};
