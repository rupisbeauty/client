import { Template } from 'tinacms';

export const logoBlock: Template = {
  label: 'Rupi Full Logo',
  name: 'logo',
  ui: {
    defaultItem: {
      title: 'Rupi Beauty Studio Logo',
    },
  },
  fields: [
    {
      type: 'string',
      label: 'Title',
      name: 'title',
      isTitle: true,
      required: true,
    },
  ],
};
