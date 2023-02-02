import { Template } from 'tinacms';
import { fields } from '../fields';

export const sectionCoverBlock: Template = {
  label: 'Cover Image',
  name: 'sectionCover',
  fields: fields?.image as Template['fields'],
};
