import { defineConfig, defineSchema, Template } from 'tinacms';
import { schema } from './schema';

// Your hosting provider likely exposes this as an environment variable
const branch =
  process.env.HEAD || //  netlify branch
  process.env.NEXT_PUBLIC_TINA_BRANCH || // @TODO: Must update this to a preview branch in vercel
  process.env.VERCEL_GIT_COMMIT_REF ||
  'main';

export default defineConfig({
  branch,
  clientId: String(process.env.NEXT_PUBLIC_TINA_CLIENT_ID) ?? undefined, // Get this from tina.io
  token: String(process.env.NEXT_PUBLIC_TINA_READ_ONLY_TOKEN) ?? undefined, // Get this from tina.io
  build: {
    publicFolder: 'public', // The public asset folder for your framework
    outputFolder: 'admin', // within the public folder
  },
  media: {
    tina: {
      mediaRoot: 'uploads',
      publicFolder: 'public',
    },
  },
  schema,
});
