import sanityClient from '@sanity/client';
import config from '../utils/config';

const client = sanityClient({
  projectId: config.projectId,
  dataset: config.dataset,
  useCdn: true,
});

export default client;
