import createImageUrlBuilder from '@sanity/image-url';
import { dataset, projectId } from '../env';

const imageBuilder = createImageUrlBuilder({ projectId, dataset });

export function urlForImage(source) {
  if (!source?.asset?._ref) return null;
  return imageBuilder.image(source).auto('format').fit('max');
}
