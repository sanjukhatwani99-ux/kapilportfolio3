import { createClient } from 'next-sanity';
import { apiVersion, dataset, projectId } from '../env';

export const client = createClient({
  projectId,
  dataset,
  apiVersion,
  // "published" content only, cached at build/request time.
  // Switching this to false + using revalidation lets edits show
  // up without a full redeploy (see README "Live updates" section).
  useCdn: true
});
