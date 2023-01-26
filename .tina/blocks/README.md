## Blocks handling.

anytime a new block is added, there are several things we must do.

- [ ] Ensure the block schema is created in `.tina/blocks` and export it from the barrel file.
- [ ] import schema and register it for which ever collection or field it belongs to in `.tina/schema.ts`
- [ ] create a zod schema for the type `/src/schema/tina.schema.ts`
- [ ] use that schema to parse the props using `z.TypeOf<typeof {blockSchema}>`
