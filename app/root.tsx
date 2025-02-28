import {
  Link,
  Links,
  Meta,
  NavLink,
  Outlet,
  Scripts,
  ScrollRestoration,
  isRouteErrorResponse,
} from 'react-router';

import type { Route } from './+types/root';
import './app.css';
import { FaBars } from 'react-icons/fa';

export const links: Route.LinksFunction = () => [];

export function Layout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <Meta />
        <Links />
      </head>
      <body>
        {children}
        <ScrollRestoration />
        <Scripts />
      </body>
    </html>
  );
}

export default function App() {
  return (
    <>
      <nav className="navbar justify-between bg-base-100 shadow-sm">
        <Link to="/" className="btn btn-ghost text-lg">
          Tickflo
        </Link>

        <div className="dropdown dropdown-end sm:hidden">
          {/* biome-ignore lint/a11y/useSemanticElements: fix mobile menu */}
          <div tabIndex={0} role="button" className="btn btn-ghost">
            <FaBars />
          </div>

          <ul
            // biome-ignore lint/a11y/noNoninteractiveTabindex: fix mobile menu
            tabIndex={0}
            className="dropdown-content menu z-[1] w-56 gap-2 rounded-box bg-base-200 p-6 shadow"
          >
            <li>
              <NavLink
                to="/docs"
                reloadDocument
                className={({ isActive }) => (isActive ? 'menu-active' : '')}
              >
                Docs
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/about"
                reloadDocument
                className={({ isActive }) => (isActive ? 'menu-active' : '')}
              >
                About
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/pricing"
                reloadDocument
                className={({ isActive }) => (isActive ? 'menu-active' : '')}
              >
                Pricing
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/blog"
                reloadDocument
                className={({ isActive }) => (isActive ? 'menu-active' : '')}
              >
                Blog
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/contact"
                reloadDocument
                className={({ isActive }) => (isActive ? 'menu-active' : '')}
              >
                Contact
              </NavLink>
            </li>
            <a
              className="btn btn-sm btn-primary"
              href="https://app.tickflo.co/login"
            >
              Log in
            </a>
          </ul>
        </div>

        <ul className="menu sm:menu-horizontal hidden gap-2">
          <li>
            <NavLink
              to="/docs"
              className={({ isActive }) => (isActive ? 'menu-active' : '')}
            >
              Docs
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/about"
              className={({ isActive }) => (isActive ? 'menu-active' : '')}
            >
              About
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/pricing"
              className={({ isActive }) => (isActive ? 'menu-active' : '')}
            >
              Pricing
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/blog"
              className={({ isActive }) => (isActive ? 'menu-active' : '')}
            >
              Blog
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/contact"
              className={({ isActive }) => (isActive ? 'menu-active' : '')}
            >
              Contact
            </NavLink>
          </li>
          <a
            className="btn btn-sm btn-primary"
            href="https://app.tickflo.co/login"
          >
            Log in
          </a>
        </ul>
      </nav>
      <main className="p-4">
        <Outlet />
      </main>
    </>
  );
}

export function ErrorBoundary({ error }: Route.ErrorBoundaryProps) {
  let message = 'Oops!';
  let details = 'An unexpected error occurred.';
  let stack: string | undefined;

  if (isRouteErrorResponse(error)) {
    message = error.status === 404 ? '404' : 'Error';
    details =
      error.status === 404
        ? 'The requested page could not be found.'
        : error.statusText || details;
  } else if (import.meta.env.DEV && error && error instanceof Error) {
    details = error.message;
    stack = error.stack;
  }

  return (
    <main className="container mx-auto p-4 pt-16">
      <h1>{message}</h1>
      <p>{details}</p>
      {stack && (
        <pre className="w-full overflow-x-auto p-4">
          <code>{stack}</code>
        </pre>
      )}
    </main>
  );
}
