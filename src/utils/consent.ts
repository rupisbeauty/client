import { eventbus } from './event-bus';

// @TODO: add granular control for each cookie type
export function cookieConsent() {
  const consentChannel = eventbus<{
    'on-accept': (consent: boolean) => boolean;
    'on-deny': (consent: boolean) => boolean;
  }>();
  return {
    consentChannel,
  };
}
