import { createClient } from '@sanity/client';

const client = createClient({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID, // Public Sanity project ID
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET, // Public dataset name 
  useCdn: false, // `false` ensures fresh data; `true` caches data for faster reads
  token: process.env.SANITY_API_TOKEN, // Private Sanity API token
});

export default client;
