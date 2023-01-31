import type { SchemaField } from 'tinacms';
import { fields } from '../fields-config';

export const servicesOptions: { fields: SchemaField[] } = {
  fields: [
    ...fields?.page,
    {
      name: 'slug',
      label: 'Service Slug',
      type: 'string',
      required: true,
      isTitle: true,
    },
    {
      // @TODO: add advanced session pricing via template block
      name: 'price',
      label: 'Price',
      type: 'number',
    },
    {
      name: 'duration',
      label: 'Duration',
      type: 'number',
    },
    ...fields.image,
    fields?.services[1], // reference to service-categories
    // ...fields?.settings,
  ],
};
