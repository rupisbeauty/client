import { isBrowser } from '@/utils';
import mixpanelPlugin from '@analytics/mixpanel';
import Analytics from 'analytics';

// @TODO: Add ability to disable tracking:
// @link: https://getanalytics.io/plugins/do-not-track/

export const analytics = Analytics({
  app: "Rupi's Beauty Studio",
  plugins: [
    mixpanelPlugin({
      token: process.env.NEXT_PUBLIC_MIXPANEL_TOKEN,
      enabled:
        isBrowser && JSON.parse(String(localStorage.getItem('rbs-consent'))),
    }),
  ],
});
