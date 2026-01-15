import { generateMeta } from '@forge42/seo-tools/remix/metadata';
import { Link } from 'react-router';

export function meta() {
  return generateMeta({
    title: 'Tickflo - About',
    description:
      'Modern, multi-tenant help desk and ticketing system for teams',
    url: 'https://tickflo.co/about',
  });
}

export default function about() {
  return (
    <div className="space-y-8">
      <section className="glass-panel relative overflow-hidden p-8 md:p-10">
        <div className="hero-gradient" />
        <div className="relative flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
          <div className="max-w-2xl space-y-4">
            <div className="flex flex-wrap items-center gap-3 text-sm text-white/70">
              <span className="pill">About</span>
              <span className="pill">Built for teams</span>
              <span className="pill">App parity</span>
            </div>
            <h1 className="font-bold text-4xl leading-tight">
              The helpdesk built to mirror your production app
            </h1>
            <p className="text-lg text-white/80">
              Tickflo keeps the product and marketing experience cohesive: glass
              panels, gradients, and a navigation model that reflects how real
              support teams work across workspaces.
            </p>
            <div className="flex flex-wrap gap-3">
              <Link to="/docs" className="btn btn-primary btn-lg rounded-full">
                Explore docs
              </Link>
              <a
                href="https://github.com/tickflo/tickflo"
                className="btn btn-outline btn-lg rounded-full border-white/20 bg-white/5 text-slate-100"
                target="_blank"
                rel="noopener noreferrer"
              >
                GitHub
              </a>
            </div>
          </div>
          <div className="grid w-full max-w-md gap-3">
            {[
              { label: 'Workspaces', value: 'Isolated, role-aware' },
              { label: 'Collaboration', value: 'Live SignalR updates' },
              { label: 'Deploys', value: 'Docker + Postgres' },
              { label: 'Attachments', value: 'S3-compatible' },
            ].map((item) => (
              <div key={item.label} className="stat-card">
                <div className="text-white/60 text-xs uppercase tracking-wide">
                  {item.label}
                </div>
                <div className="font-semibold text-lg text-white">
                  {item.value}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <div className="grid gap-4 md:grid-cols-[1.15fr_0.85fr]">
        <div className="glass-panel p-8">
          <div className="prose prose-invert max-w-none">
            <h2>What is Tickflo?</h2>
            <p>
              Tickflo is a modern, multi-tenant help desk and ticketing system
              designed for teams that need isolated workspaces, flexible
              permissions, and real-time collaboration. Built with ASP.NET Core
              10.0 and modern web technologies, Tickflo provides a robust
              platform for managing support tickets, tracking issues, and
              coordinating team responses.
            </p>

            <h3>Key Features</h3>
            <ul>
              <li>
                <strong>Multi-Tenant Workspaces</strong> - Complete data
                isolation with separate workspace environments
              </li>
              <li>
                <strong>Ticket Management</strong> - Full-featured ticketing
                with priorities, statuses, types, and assignments
              </li>
              <li>
                <strong>Team Collaboration</strong> - Real-time updates via
                SignalR for instant notifications
              </li>
              <li>
                <strong>Role-Based Access Control</strong> - Customizable
                permissions and roles for fine-grained security
              </li>
              <li>
                <strong>Smart Notifications</strong> - Email and in-app
                notification system
              </li>
              <li>
                <strong>File Attachments</strong> - S3-compatible storage
                powered by RustFS
              </li>
              <li>
                <strong>Client Portal</strong> - Secure client-facing portal for
                ticket submission and tracking
              </li>
              <li>
                <strong>Contact &amp; Location Tracking</strong> - Manage
                contacts, locations, and service inventory
              </li>
              <li>
                <strong>Modern UI</strong> - Glass panels, gradients, and
                responsive design matched to the app
              </li>
            </ul>
          </div>
        </div>

        <div className="glass-panel space-y-5 p-8">
          <div className="prose prose-invert max-w-none">
            <h3>Architecture</h3>
            <p>
              Tickflo follows clean architecture principles with a clear
              separation of concerns:
            </p>
            <ul>
              <li>
                <strong>Tickflo.Web</strong> - Razor Pages web application
              </li>
              <li>
                <strong>Tickflo.Core</strong> - Business logic and data access
                layer
              </li>
              <li>
                <strong>Tickflo.API</strong> - REST API for integrations
              </li>
              <li>
                <strong>PostgreSQL 18.1</strong> - Robust, reliable database
              </li>
              <li>
                <strong>Entity Framework Core 9.0</strong> - Modern ORM
              </li>
            </ul>
          </div>

          <div className="prose prose-invert max-w-none">
            <h3>Technology Stack</h3>
            <p>Built on proven, enterprise-grade technologies:</p>
            <ul>
              <li>ASP.NET Core 10.0</li>
              <li>PostgreSQL 18.1</li>
              <li>Entity Framework Core 9.0</li>
              <li>SignalR for real-time communication</li>
              <li>Tailwind CSS and DaisyUI for modern UI</li>
              <li>RustFS for S3-compatible file storage</li>
            </ul>
          </div>
        </div>
      </div>

      <div className="glass-panel p-8">
        <div className="prose prose-invert max-w-none">
          <h3>Open Source</h3>
          <p>
            Tickflo is fully open source and available on{' '}
            <a
              href="https://github.com/tickflo/tickflo"
              target="_blank"
              rel="noopener noreferrer"
            >
              GitHub
            </a>
            . We welcome contributions from the community and keep product
            parity between the app and site.
          </p>

          <h3>Use Cases</h3>
          <p>Tickflo is perfect for:</p>
          <ul>
            <li>IT help desk and support teams</li>
            <li>Customer service departments</li>
            <li>Managed service providers (MSPs)</li>
            <li>Internal IT support</li>
            <li>Project and task tracking</li>
            <li>Service delivery management</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
