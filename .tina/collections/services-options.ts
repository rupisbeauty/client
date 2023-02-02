import type { Field, SchemaField, Template } from 'tinacms';
import { fields } from '../fields';

export const servicesOptions: { fields: SchemaField[] } = {
  fields: [
    ...fields.page,
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
    fields.services[0],
  ],
};
