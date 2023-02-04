import { Field,Template } from 'tinacms';

import { fields } from '../fields';
import { defaults } from './_defaults';

// single out only the related services field
const relatedServices = fields?.services?.length ? [fields?.services[1]] : [];

export const coreServicesBlock: Template = {
  label: 'Core Services',
  name: 'coreServices',
  ui: {
    defaultItem: defaults.coreServices,
    previewSrc: '/blocks/preview-core-services.webp',
  },
  fields: [...(relatedServices as Template['fields'])],
};
