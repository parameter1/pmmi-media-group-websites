import Inquiry from '@parameter1/base-cms-marko-web-inquiry/browser';
import P1Events from '@parameter1/base-cms-marko-web-p1-events/browser';
import Leaders from '@parameter1/base-cms-marko-web-leaders/browser';

export default (Browser) => {
  Inquiry(Browser);
  P1Events(Browser);
  Leaders(Browser);
};
