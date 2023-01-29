import { Template } from 'tinacms';

export const aboutBlock: Template = {
  label: 'About Section',
  name: 'about',
  ui: {
    defaultItem: {
      title: 'About',
      heading: 'Your Neighborhood Beauty Experts',
      subheading: 'This is a subheading',
      caption: 'This is a caption',
      description: 'This a a full description',
      showLicenses: false,
    },
  },
  fields: [
    {
      type: 'string',
      label: 'Title',
      name: 'title',
    },
    {
      type: 'string',
      label: 'Heading',
      name: 'heading',
    },
    {
      type: 'string',
      label: 'Subheading',
      name: 'subheading',
    },
    {
      type: 'string',
      label: 'Caption',
      name: 'caption',
    },
    {
      type: 'string',
      label: 'Description',
      name: 'description',
      ui: {
        component: 'textarea',
      },
    },
    {
      type: 'image',
      label: 'Image',
      name: 'image',
    },
    {
      type: 'boolean',
      label: 'Show Licenses?',
      name: 'licenses',
    },
  ],
};
