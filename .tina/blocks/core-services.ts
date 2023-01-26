import { Template } from 'tinacms';

export const coreServicesBlock: Template = {
  label: 'Core Services',
  name: 'coreServices',
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
