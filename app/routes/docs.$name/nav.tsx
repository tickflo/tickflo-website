import { useMemo, useState } from 'react';
import { NavLink as RouterNavLink } from 'react-router';

export const DOCS_LINKS = [
  {
    section: 'Getting Started',
    hint: 'Kickoff fast with zero friction.',
    items: [
      { title: 'Welcome', link: '/docs/welcome' },
      { title: 'Overview', link: '/docs/overview' },
      {
        title: 'Installation & Deployment',
        link: '/docs/installation-deployment',
      },
    ],
  },
  {
    section: 'Core Features',
    hint: 'Everything your crew touches daily.',
    items: [
      { title: 'Workspace Management', link: '/docs/workspace-management' },
      { title: 'Ticket Workflows', link: '/docs/ticket-workflows' },
      { title: 'Users & Permissions', link: '/docs/users-permissions' },
      { title: 'Dashboard & Reports', link: '/docs/dashboard-reports' },
    ],
  },
  {
    section: 'Advanced Features',
    hint: 'Level up control and automation.',
    items: [
      { title: 'Team Management', link: '/docs/team-management' },
      { title: 'Contact Management', link: '/docs/contact-management' },
      { title: 'Location Management', link: '/docs/location-management' },
      { title: 'Inventory Management', link: '/docs/inventory-management' },
      { title: 'Client Portal', link: '/docs/client-portal' },
    ],
  },
  {
    section: 'Operations',
    hint: 'Stay reliable, compliant, and calm.',
    items: [
      { title: 'Notifications', link: '/docs/notifications' },
      {
        title: 'Settings & Configuration',
        link: '/docs/settings-configuration',
      },
      { title: 'API Documentation', link: '/docs/api-documentation' },
      { title: 'Integrations', link: '/docs/integrations' },
      { title: 'Troubleshooting', link: '/docs/troubleshooting' },
    ],
  },
] as const;

function Nav() {
  const [query, setQuery] = useState('');

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    if (!q) return DOCS_LINKS;

    return DOCS_LINKS.map((section) => ({
      ...section,
      items: section.items.filter((item) =>
        item.title.toLowerCase().includes(q),
      ),
    })).filter((section) => section.items.length > 0);
  }, [query]);

  const _totalMatches = filtered.reduce(
    (sum, section) => sum + section.items.length,
    0,
  );

  return (
    <nav className="docs-nav" aria-label="Documentation">
      <div className="rounded-2xl border border-white/10 bg-slate-900/70 p-4 shadow-black/20 shadow-inner backdrop-blur">
        <div>
          <p className="font-semibold text-[11px] text-slate-300 uppercase tracking-[0.2em]">
            Docs
          </p>
          <p className="text-slate-200 text-sm">Guides & API usage</p>
        </div>
        <label className="mt-3 flex items-center gap-2 rounded-xl border border-white/10 bg-white/5 px-3 py-2 text-sm text-white shadow-black/10 shadow-inner">
          <span className="text-slate-400 text-xs">⌕</span>
          <input
            type="search"
            value={query}
            onChange={(event) => setQuery(event.target.value)}
            placeholder="Search docs and API"
            className="h-8 w-full bg-transparent text-sm text-white placeholder:text-slate-500 focus:outline-none"
          />
        </label>
      </div>

      <div className="menu menu-sm rounded-2xl border border-white/10 bg-slate-900/50 p-2 shadow-2xl backdrop-blur">
        {filtered.length === 0 ? (
          <div className="px-3 py-2 text-slate-400 text-sm">
            No matches. Try a different term.
          </div>
        ) : (
          filtered.map(({ section, hint, items }) => (
            <div key={section} className="mb-1 rounded-xl">
              <div className="px-3 py-2 font-semibold text-[11px] text-slate-400 uppercase tracking-[0.2em]">
                <span className="flex items-center gap-2">
                  <span
                    className="h-2 w-2 rounded-full bg-sky-400 shadow-[0_0_0_6px_rgba(56,189,248,0.12)]"
                    aria-hidden
                  />
                  {section}
                </span>
              </div>
              <ul className="space-y-1">
                {items.map(({ title, link }) => (
                  <li key={title}>
                    <RouterNavLink
                      prefetch="intent"
                      className={({ isActive }) =>
                        `${
                          isActive
                            ? 'bg-white/10 text-white ring-1 ring-white/15'
                            : 'text-slate-300 hover:bg-white/5 hover:text-white'
                        } flex items-center justify-between rounded-lg px-3 py-2 text-sm transition`
                      }
                      to={link}
                    >
                      {title}
                      <span className="text-slate-400 text-xs">↗</span>
                    </RouterNavLink>
                  </li>
                ))}
              </ul>
              <p className="px-3 pt-1 pb-2 text-[11px] text-slate-500">
                {hint}
              </p>
            </div>
          ))
        )}
      </div>
    </nav>
  );
}

export { Nav };
