import { generateSitemap } from '@forge42/seo-tools/sitemap';
import { getBlogSitemapEntries } from '~/.server/get-blog-feed';
import { getDocsSitemapEntries } from '~/.server/get-docs-feed';

export async function loader() {
  const blogEntries = await getBlogSitemapEntries();
  const docsEntries = await getDocsSitemapEntries();
  const sitemap = await generateSitemap({
    domain: 'https://tickflo.co',
    ignore: [],
    routes: [
      { url: '/', lastmod: '2025-02-27', changefreq: 'monthly', priority: 0.8 },
      ...blogEntries,
      ...docsEntries,
    ],
  });

  return new Response(sitemap, {
    headers: {
      'Content-Type': 'application/xml',
    },
  });
}
