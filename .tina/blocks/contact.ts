import { Template } from 'tinacms';

export const contactBlock: Template = {
  label: 'Contact Information',
  name: 'contact',
  ui: {
    defaultItem: {
      address: '2A Franklin Ave',
      locality: 'Pearl River, NY 10965',
      phoneNumber: '(862) 571-7873',
    },
  },
  fields: [
    {
      type: 'string',
      label: 'Street Address',
      name: 'address',
    },
    {
      type: 'string',
      label: 'City, State, Zip',
      name: 'locality',
    },
    {
      type: 'string',
      label: 'Phone Number',
      name: 'phoneNumber',
    },
  ],
};
