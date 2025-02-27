import { NavLink as RouterNavLink } from 'react-router';

export const DOCS_LINKS = [
  {
    section: 'Getting Started',
    items: [{ title: 'Welcome', link: '/docs/welcome' }],
  },
] as const;

function Nav() {
  return (
    <ul className="grid">
      {DOCS_LINKS.map(({ section, items }) => (
        <>
          <NavGroupHeader key={section} title={section} />
          {items.map(({ title, link }) => (
            <NavLink key={title} title={title} link={link} />
          ))}
        </>
      ))}
    </ul>
  );
}

function NavGroupHeader({ title }: { title: string }) {
  return (
    <li className="pt-6 pb-3 font-bold text-lg text-sand-12 first:pt-0">
      {title}
    </li>
  );
}

function NavLink({ title, link }: { title: string; link: string }) {
  return (
    <li>
      <RouterNavLink
        prefetch="intent"
        className={({ isActive }) =>
          `block border-l-4 py-1 pl-3 transition hover:border-l-amber-6 hover:text-amber-11 ${
            isActive
              ? 'border-l-amber-7 font-bold text-amber-11 tracking-wide'
              : 'border-l-sand-4 text-sand-11'
          }`
        }
        to={link}
      >
        {title}
      </RouterNavLink>
    </li>
  );
}

export { Nav };
