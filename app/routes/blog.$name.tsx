import { generateMeta } from '@forge42/seo-tools/remix/metadata';
import { redirect } from 'react-router';
import { getBlogArticle } from '~/.server/get-blog-article';
import { getClockOffset } from '~/.server/utils/clock-offset';
import { getPrettyDate } from '~/.server/utils/pretty-date';
import { ProseContainer } from '~/components/prose-container';
import type { Route } from './+types/blog.$name';

export function meta({ data, params }: Route.MetaArgs) {
  const { article } = data;
  return generateMeta({
    title: `Tickflo Blog - ${article.title}`,
    description: article.description,
    url: `https://tickflo.co/blog/${params.name}`,
  });
}

export async function loader({ params, request }: Route.LoaderArgs) {
  const article = await getBlogArticle(params.name);

  if (!article) {
    throw redirect('/404');
  }

  return {
    article: {
      ...article,
      localDate: getPrettyDate(article.date, getClockOffset(request)),
    },
  };
}

export default function Component({ loaderData }: Route.ComponentProps) {
  const { article } = loaderData;

  return (
    <div className="flex justify-center">
      <ProseContainer>
        <header id="top">
          <time dateTime={article.date} className="mb-4 block text-sand-10">
            {article.localDate}
          </time>
          <h1 className="mb-0">{article.title}</h1>
          <p className="lead mt-4">{article.description}</p>
        </header>
        <div
          // biome-ignore lint/security/noDangerouslySetInnerHtml: this markdown content isn't user submitted
          dangerouslySetInnerHTML={{ __html: article.content }}
        />
      </ProseContainer>
    </div>
  );
}
