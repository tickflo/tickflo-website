import { useMemo, useState } from 'react';
import { NavLink as RouterNavLink } from 'react-router';

export const DOCS_LINKS = [
  {
    section: 'Getting Started',
    hint: 'Kickoff fast with zero friction.',
    items: [
      { title: 'Welcome', link: '/docs/welcome' },
      { title: 'Overview', link: '/docs/overview' },
      { title: 'Installation & Deployment', link: '/docs/installation-deployment' },
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
      { title: 'Settings & Configuration', link: '/docs/settings-configuration' },
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
      items: section.items.filter((item) => item.title.toLowerCase().includes(q)),
    })).filter((section) => section.items.length > 0);
  }, [query]);

  const totalMatches = filtered.reduce((sum, section) => sum + section.items.length, 0);

  return (
    <nav className="docs-nav" aria-label="Documentation">
      <div className="rounded-2xl border border-white/10 bg-slate-900/70 p-4 shadow-inner shadow-black/20 backdrop-blur">
        <div className="flex items-center justify-between">
          <div>
            <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-slate-300">Docs</p>
            <p className="text-sm text-slate-200">Guides & API usage</p>
          </div>
          <span className="badge badge-sm badge-primary">Live</span>
        </div>
        <label className="mt-3 flex items-center gap-2 rounded-xl border border-white/10 bg-white/5 px-3 py-2 text-sm text-white shadow-inner shadow-black/10">
          <span className="text-slate-400 text-xs">⌕</span>
          <input
            type="search"
            value={query}
            onChange={(event) => setQuery(event.target.value)}
            placeholder="Search docs and API"
            className="h-8 w-full bg-transparent text-sm text-white placeholder:text-slate-500 focus:outline-none"
          />
          <span className="rounded-full bg-white/10 px-2 py-0.5 text-[10px] font-semibold uppercase tracking-wide text-slate-200/80">
            {totalMatches}
          </span>
        </label>
      </div>

      <div className="menu menu-sm rounded-2xl border border-white/10 bg-slate-900/50 p-2 shadow-2xl backdrop-blur">
        {filtered.length === 0 ? (
          <div className="px-3 py-2 text-sm text-slate-400">No matches. Try a different term.</div>
        ) : (
          filtered.map(({ section, hint, items }) => (
            <div key={section} className="mb-1 rounded-xl">
              <div className="flex items-center justify-between px-3 py-2 text-[11px] font-semibold uppercase tracking-[0.2em] text-slate-400">
                <span className="flex items-center gap-2">
                  <span className="h-2 w-2 rounded-full bg-sky-400 shadow-[0_0_0_6px_rgba(56,189,248,0.12)]" aria-hidden />
                  {section}
                </span>
                <span className="badge badge-ghost badge-xs text-[10px] text-slate-300">{items.length}</span>
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
                      <span className="flex items-center gap-2">
                        <span className="kbd kbd-xs bg-white/5 text-[10px] uppercase text-slate-200">Go</span>
                        {title}
                      </span>
                      <span className="text-xs text-slate-400">↗</span>
                    </RouterNavLink>
                  </li>
                ))}
              </ul>
              <p className="px-3 pb-2 pt-1 text-[11px] text-slate-500">{hint}</p>
            </div>
          ))
        )}
      </div>
    </nav>
  );
}

export { Nav };
