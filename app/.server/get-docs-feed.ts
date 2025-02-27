import type { SitemapRoute } from '@forge42/seo-tools/sitemap';
import { getContentByType } from './content';

export async function getDocsSitemapEntries(): Promise<SitemapRoute[]> {
  const articles = await getContentByType('docs');

  return Object.entries(articles)
    .sort(([a], [b]) => b.localeCompare(a))
    .map(([key, article]) => ({
      url: `/docs/${key}`,
      lastmod: article.lastmod,
      changefreq: 'monthly',
      priority: 0.8,
    }));
}
