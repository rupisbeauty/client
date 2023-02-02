## Blocks handling.

anytime a new block is added, there are several things we must do.

- [ ] Ensure the block schema is created in `.tina/blocks/*` and export it from the 'index' barrel file.
- [ ] import schema and register it for which ever collection or field it belongs to
  - [ ] either in `.tina/schema.ts`
  - [ ] or into the body field of a specific block template
- [ ] create a zod schema for the type `.tina/validators/*`
- [ ] use that schema to parse the props using `z.infer<typeof {blockSchema}>`

if the block has a specific component used to register it, then

- [ ] add block to component map in `src/hooks/use-components.ts` where there are two groups `page` | `section`
- [ ] then each `TinaMarkdown` can borrow from either a `page` | `section` component block group
