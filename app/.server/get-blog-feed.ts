import type { SitemapRoute } from '@forge42/seo-tools/sitemap';
import { getContentByType } from './content';

export async function getBlogFeed() {
  const articles = await getContentByType('blog');

  return Object.entries(articles)
    .sort(([a], [b]) => b.localeCompare(a))
    .map(([key, article]) => ({
      key,
      title: article.title,
      description: article.description,
      date: article.date,
    }));
}

export async function getBlogSitemapEntries(): Promise<SitemapRoute[]> {
  const articles = await getContentByType('blog');

  return Object.entries(articles)
    .sort(([a], [b]) => b.localeCompare(a))
    .map(([key, article]) => ({
      url: `/blog/${key}`,
      lastmod: article.lastmod,
      changefreq: 'monthly',
      priority: 0.8,
    }));
}
