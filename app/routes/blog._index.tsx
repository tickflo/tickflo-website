import { generateMeta } from '@forge42/seo-tools/remix/metadata';
import { getBlogFeed } from '~/.server/get-blog-feed';
import { getClockOffset } from '~/.server/utils/clock-offset';
import { getPrettyDate } from '~/.server/utils/pretty-date';
import { Blog } from '~/components/blog';
import type { Route } from './+types/blog._index';

export function meta() {
  return generateMeta({
    title: 'Tickflo Blog',
    description: 'Simple, open-source helpdesk platform',
    url: 'https://tickflo.co/blog',
  });
}

export async function loader({ request }: Route.LoaderArgs) {
  const articles = await getBlogFeed();

  return {
    articles: articles.map((article) => ({
      ...article,
      localDate: getPrettyDate(article.date, getClockOffset(request)),
    })),
  };
}

export default function Component({ loaderData }: Route.ComponentProps) {
  const { articles } = loaderData;

  return <Blog articles={articles} />;
}
