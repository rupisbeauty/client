import { z } from 'zod';
import { imageSchema } from '../validators/image';

/**
 * takes a tina schema field config and returns a zod schema
 *
 * @export
 * @param {*} config
 * @return {*}
 */
export function schemaToZod(config) {
  const schema = config.reduce((acc, obj) => {
    if (obj.type === 'rich-text') {
      acc[obj.name] = z.string();
      return acc;
    }

    if (obj.type === 'image') {
      acc[obj.name] = imageSchema;
    } else {
      acc[obj.name] = z[obj.type]();
    }
    return acc;
  }, {});
  return z.object(schema);
}
