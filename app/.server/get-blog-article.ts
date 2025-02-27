import { getContentByKey } from './content';

export async function getBlogArticle(slug: string) {
  return await getContentByKey(`blog/${slug}`);
}
