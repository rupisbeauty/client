import mixpanelPlugin from '@analytics/mixpanel';
import Analytics from 'analytics';

const analytics = Analytics({
  app: "Rupi's Beauty Studio",
  plugins: [
    mixpanelPlugin({
      token: process.env.NEXT_PUBLIC_MIXPANEL_TOKEN,
    }),
  ],
});

export default analytics;
