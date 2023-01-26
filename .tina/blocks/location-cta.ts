import { Template } from 'tinacms';

export const locationCTABlock: Template = {
  label: 'Location CTA',
  name: 'locationCTA',
  ui: {
    defaultItem: {
      cta: 'Come Visit Us At Our Newest Location',
      // address: '2A Franklin Ave Pearl River, NY 10965',
    },
  },
  fields: [
    {
      type: 'string',
      label: 'CTA Message',
      name: 'cta',
    },
    // {
    //   type: 'string',
    //   label: 'Location Address',
    //   name: 'address',
    // },
  ],
};
