import { eventbus } from './event-bus';

export function cookieConsent() {
  const consentChannel = eventbus<{
    'on-accept': (consent: boolean) => boolean;
    'on-deny': (consent: boolean) => boolean;
  }>();
  return {
    consentChannel,
  };
}
