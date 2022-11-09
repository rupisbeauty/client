import { isBrowser } from '@/utils';
import mixpanelPlugin from '@analytics/mixpanel';
import Analytics from 'analytics';

function getConsent(): boolean {
  if (!isBrowser) return false;
  const consent = localStorage.getItem('rbs-consent');
  if (consent !== null) return JSON.parse(consent);
  localStorage.setItem('rbs-consent', 'false');
  return false;
}

function crispPlugin(userConfig: { crispId: string; enabled: boolean }) {
  // return object for analytics to use
  return {
    name: 'crisp-plugin',
    config: {
      crispId: userConfig.crispId,
      enabled: userConfig.enabled,
    },
    initialize: ({ config }: any) => {
      // load your script here.
      if (!config.enabled) return;
      (<any>window).$crisp = [];
      (<any>window).CRISP_WEBSITE_ID = config.crispId;
      (function () {
        const d = document;
        const s = d.createElement('script');
        s.src = 'https://client.crisp.chat/l.js';
        // s.async = 1;
        s.async = true;
        d?.getElementsByTagName('head')[0]?.appendChild(s);
      })();
    },
  };
}

// @TODO: Add ability to disable tracking:
// @link: https://getanalytics.io/plugins/do-not-track/

export const analytics = Analytics({
  app: "Rupi's Beauty Studio",
  plugins: [
    mixpanelPlugin({
      token: process.env.NEXT_PUBLIC_MIXPANEL_TOKEN,
      enabled: getConsent(),
    }),
    crispPlugin({
      crispId: String(process.env.NEXT_PUBLIC_CRISP_WEBSITE_ID),
      enabled: getConsent(),
    }),
  ],
});
