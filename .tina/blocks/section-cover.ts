import { Template } from 'tinacms';
import { fields } from '../fields';

export const sectionCoverBlock: Template = {
  label: 'Cover Image',
  name: 'sectionCover',
  ui: {
    previewSrc: '/blocks/preview-section-cover.jpg',
  },
  fields: fields?.image as Template['fields'],
};
