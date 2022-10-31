import mixpanelPlugin from '@analytics/mixpanel';
import Analytics from 'analytics';

export const analytics = Analytics({
  app: "Rupi's Beauty Studio",
  plugins: [
    mixpanelPlugin({
      token: process.env.NEXT_PUBLIC_MIXPANEL_TOKEN,
    }),
  ],
});
