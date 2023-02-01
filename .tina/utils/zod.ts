import { z } from 'zod';
import { imageSchema } from '../validators/image';

/**
 * takes a tina schema field config and returns a zod schema
 *
 * @export
 * @param {*} config
 * @return {*}
 */
export function schemaToZod(config: any[]) {
  const schema = config.reduce(
    (
      acc: { [x: string]: any },
      obj: { type: string; name: string; required?: boolean }
    ) => {
      const isRequired = obj?.required;
      if (obj.type === 'rich-text') {
        if (isRequired) {
          acc[obj.name] = z.string();
        } else {
          acc[obj.name] = z.string().nullable();
        }
        return acc;
      }

      if (obj.type === 'image') {
        acc[obj.name] = imageSchema;
      } else {
        if (isRequired) {
          // @ts-expect-error @FIXME: type issue
          acc[obj.name] = z[obj.type]();
        } else {
          // @ts-expect-error @FIXME: type issue
          acc[obj.name] = z[obj.type]().nullable();
        }
      }
      return acc;
    },
    {}
  );
  return z.object(schema);
}
