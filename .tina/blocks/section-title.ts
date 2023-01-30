import { Template } from 'tinacms';

export const sectionTitleBlock: Template = {
  label: 'Section Title',
  name: 'sectionTitle',
  ui: {
    defaultItem: {
      title: 'This is a Section Title',
    },
  },
  fields: [
    {
      type: 'string',
      label: 'Section Title',
      name: 'title',
      isTitle: true,
      required: true,
    },
  ],
};
