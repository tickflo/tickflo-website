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
      <body className="relative min-h-screen">
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
      <div className="relative">
        <nav className="navbar glass-panel sticky top-4 z-40 mx-auto mt-4 max-w-6xl px-4">
          <div className="flex-1">
            <Link to="/" className="flex items-center gap-3 text-lg font-semibold">
              <img
                src="https://app.tickflo.co/img/logo.png"
                alt="Tickflo logo"
                className="h-8 w-auto"
              />
            </Link>
          </div>

          <div className="dropdown dropdown-end sm:hidden">
            {/* biome-ignore lint/a11y/useSemanticElements: fix mobile menu */}
            <div tabIndex={0} role="button" className="btn btn-ghost">
              <FaBars />
            </div>

            <ul
              // biome-ignore lint/a11y/noNoninteractiveTabindex: fix mobile menu
              tabIndex={0}
              className="dropdown-content menu z-[1] w-64 gap-3 rounded-2xl border border-white/10 bg-slate-900/90 p-6 shadow-2xl backdrop-blur"
            >
              <li>
                <NavLink
                  to="/docs"
                  reloadDocument
                  className={({ isActive }) =>
                    `rounded-xl px-3 py-2 ${isActive ? 'bg-white/10 text-white' : 'hover:bg-white/5'}`
                  }
                >
                  Docs
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/about"
                  reloadDocument
                  className={({ isActive }) =>
                    `rounded-xl px-3 py-2 ${isActive ? 'bg-white/10 text-white' : 'hover:bg-white/5'}`
                  }
                >
                  About
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/pricing"
                  reloadDocument
                  className={({ isActive }) =>
                    `rounded-xl px-3 py-2 ${isActive ? 'bg-white/10 text-white' : 'hover:bg-white/5'}`
                  }
                >
                  Pricing
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/blog"
                  reloadDocument
                  className={({ isActive }) =>
                    `rounded-xl px-3 py-2 ${isActive ? 'bg-white/10 text-white' : 'hover:bg-white/5'}`
                  }
                >
                  Blog
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/contact"
                  reloadDocument
                  className={({ isActive }) =>
                    `rounded-xl px-3 py-2 ${isActive ? 'bg-white/10 text-white' : 'hover:bg-white/5'}`
                  }
                >
                  Contact
                </NavLink>
              </li>
              <a
                className="btn btn-primary"
                href="https://app.tickflo.co/login"
              >
                Open the app
              </a>
            </ul>
          </div>

          <div className="hidden items-center gap-2 sm:flex">
            <NavLink
              to="/docs"
              className={({ isActive }) =>
                `btn btn-ghost btn-sm rounded-full ${isActive ? 'bg-white/10 text-white' : 'text-slate-200 hover:bg-white/5'}`
              }
            >
              Docs
            </NavLink>
            <NavLink
              to="/about"
              className={({ isActive }) =>
                `btn btn-ghost btn-sm rounded-full ${isActive ? 'bg-white/10 text-white' : 'text-slate-200 hover:bg-white/5'}`
              }
            >
              About
            </NavLink>
            <NavLink
              to="/pricing"
              className={({ isActive }) =>
                `btn btn-ghost btn-sm rounded-full ${isActive ? 'bg-white/10 text-white' : 'text-slate-200 hover:bg-white/5'}`
              }
            >
              Pricing
            </NavLink>
            <NavLink
              to="/blog"
              className={({ isActive }) =>
                `btn btn-ghost btn-sm rounded-full ${isActive ? 'bg-white/10 text-white' : 'text-slate-200 hover:bg-white/5'}`
              }
            >
              Blog
            </NavLink>
            <NavLink
              to="/contact"
              className={({ isActive }) =>
                `btn btn-ghost btn-sm rounded-full ${isActive ? 'bg-white/10 text-white' : 'text-slate-200 hover:bg-white/5'}`
              }
            >
              Contact
            </NavLink>
            <a
              className="btn btn-primary btn-sm rounded-full"
              href="https://app.tickflo.co/login"
            >
              Open the app
            </a>
          </div>
        </nav>
      </div>
      <main className="mx-auto max-w-6xl px-4 pb-16 pt-8">
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
