import Inquiry from '@parameter1/base-cms-marko-web-inquiry/browser';
import Leaders from '@parameter1/base-cms-marko-web-leaders/browser';
import P1Events from '@parameter1/base-cms-marko-web-p1-events/browser';

export default (Browser) => {
  Inquiry(Browser);
  Leaders(Browser);
  P1Events(Browser);
};
