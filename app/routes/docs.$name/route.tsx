import { generateMeta } from '@forge42/seo-tools/remix/metadata';
import { redirect } from 'react-router';
import { getDocsPage } from '~/.server/get-docs-page';
import { ProseContainer } from '~/components/prose-container';
import type { Route } from './+types/route';
import { Nav } from './nav';

export function meta({ data, params }: Route.MetaArgs) {
  const page = data as any;
  return generateMeta({
    title: `Tickflo Docs - ${page.title}`,
    description: page.description,
    url: `https://tickflo.co/docs/${params.name}`,
  });
}

export async function loader({ params }: Route.LoaderArgs) {
  const page = await getDocsPage(params.name);

  if (!page) {
    throw redirect('/404');
  }

  return page;
}

export default function Component({ loaderData }: Route.ComponentProps) {
  const page = loaderData as any;
  const description = page.description || 'Learn how to configure and use this feature effectively.';

  return (
    <div className="docs-shell">
      <div className="docs-shell-glow" aria-hidden />
      <div className="docs-grid">
        <aside className="docs-nav-card">
          <div className="flex flex-col gap-3 pb-4">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.28em] text-slate-400">Tickflo</p>
              <h2 className="text-2xl font-semibold text-white">Every workflow, mapped</h2>
              <p className="text-slate-300 text-sm">Curated paths to configure, launch, and grow.</p>
            </div>
          </div>
          <Nav />
        </aside>

        <section className="space-y-6">
          <div className="docs-hero">
            <div className="docs-hero-overlay" aria-hidden />
            <div className="space-y-4">
              <h1 className="text-3xl font-semibold sm:text-4xl text-white">{page.title}</h1>
              {description && (
                <p className="max-w-3xl text-base text-slate-200/90 sm:text-lg leading-relaxed">{description}</p>
              )}
            </div>
          </div>

          <div className="docs-article glass-panel">
            <ProseContainer className="docs-prose">
              <div
                className="pb-2"
                // biome-ignore lint/security/noDangerouslySetInnerHtml: this markdown content isn't user submitted
                dangerouslySetInnerHTML={{ __html: page.content }}
              />
            </ProseContainer>
          </div>
        </section>
      </div>
    </div>
  );
}
