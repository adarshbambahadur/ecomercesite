import client from '@sanity/client';
import config from '../utils/config';

export default client({
  projectId: config.projectId,
  dataset: config.dataset,
  useCdn: true,
});
