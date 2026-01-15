import { generateMeta } from '@forge42/seo-tools/remix/metadata';
import {
  FaArrowRight,
  FaBolt,
  FaCheckCircle,
  FaShieldAlt,
  FaSignal,
} from 'react-icons/fa';
import { Link } from 'react-router';

export function meta() {
  return generateMeta({
    title: 'Tickflo',
    description: 'Simple, open-source helpdesk platform',
    url: 'https://tickflo.co',
  });
}

export default function index() {
  return (
    <div className="space-y-10">
      <section className="glass-panel relative overflow-hidden px-6 py-10 md:px-12">
        <div className="hero-gradient" />
        <div className="relative grid items-center gap-10 md:grid-cols-[1.1fr_0.9fr]">
          <div className="space-y-6">
            <div className="flex flex-wrap gap-3">
              <span className="pill">Open Source</span>
              <span className="pill">Multi-tenant</span>
              <span className="pill">Self-hosted</span>
            </div>

            <h1 className="font-bold text-4xl leading-tight md:text-5xl">
              Modern help desk and ticketing for teams that need control
            </h1>

            <p className="text-lg text-slate-200/90">
              Tickflo is a complete ticketing system built for multi-tenant
              operations. Isolate workspaces, manage permissions, automate
              workflows, and collaborate in real-time—all on infrastructure you
              own.
            </p>

            <div className="flex flex-wrap gap-3">
              <Link
                to="/docs"
                className="btn btn-primary btn-lg gap-2 rounded-full"
              >
                Get started
                <FaArrowRight />
              </Link>
              <a
                className="btn btn-outline btn-lg rounded-full border-white/20 bg-white/5 text-slate-100"
                href="https://app.tickflo.co/login"
              >
                Try demo
              </a>
              <a
                href="https://github.com/tickflo/tickflo"
                className="btn btn-ghost btn-lg rounded-full text-slate-200 hover:bg-white/5"
                target="_blank"
                rel="noopener noreferrer"
              >
                View on GitHub
              </a>
            </div>

            <div className="grid gap-3 sm:grid-cols-3">
              {[
                { label: 'Architecture', value: '.NET 10 + PostgreSQL' },
                { label: 'Real-time', value: 'SignalR + webhooks' },
                { label: 'Isolation', value: 'Multi-tenant workspaces' },
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

          <div className="relative">
            <span className="glow-ring -left-10 -top-10 h-40 w-40" />
            <span className="glow-ring -right-8 bottom-12 h-32 w-32" />
            <div className="glass-panel border-white/15 bg-neutral-900/70 p-6 shadow-2xl">
              <div className="flex items-center justify-between border-white/10 border-b pb-4">
                <div>
                  <p className="text-white/60 text-xs uppercase tracking-wide">
                    Workspace
                  </p>
                  <h3 className="font-semibold text-xl">Ticket Dashboard</h3>
                </div>
                <span className="badge badge-outline badge-sm rounded-full">
                  Live
                </span>
              </div>

              <div className="mt-5 grid gap-3 sm:grid-cols-2">
                {[
                  {
                    title: 'Open Tickets',
                    value: '124',
                    badge: 'badge-primary',
                    bar: 'bg-primary',
                    width: '58%',
                  },
                  {
                    title: 'Resolved',
                    value: '312',
                    badge: 'badge-success',
                    bar: 'bg-success',
                    width: '72%',
                  },
                  {
                    title: 'Avg. Response',
                    value: '2m',
                    badge: 'badge-info',
                    bar: 'bg-info',
                    width: '42%',
                  },
                  {
                    title: 'SLA Risk',
                    value: '3',
                    badge: 'badge-warning',
                    bar: 'bg-warning',
                    width: '30%',
                  },
                ].map((card) => (
                  <div
                    key={card.title}
                    className="glass-panel border-white/10 bg-neutral-900/80 p-4"
                  >
                    <div className="flex items-center justify-between text-sm text-white/70">
                      <span>{card.title}</span>
                      <span
                        className={`${card.badge} badge-soft badge-sm rounded-full`}
                      >
                        Now
                      </span>
                    </div>
                    <div className="mt-2 font-bold text-2xl">{card.value}</div>
                    <div className="mt-1 h-1.5 rounded-full bg-white/10">
                      <span
                        className={`block h-1.5 rounded-full ${card.bar}`}
                        style={{ width: card.width }}
                      />
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-5 rounded-2xl border border-white/10 bg-white/5 p-4">
                <div className="flex items-center justify-between text-sm text-white/70">
                  <span className="font-semibold text-white">Active queue</span>
                  <span className="badge badge-primary badge-sm rounded-full">
                    6 waiting
                  </span>
                </div>
                <div className="mt-4 space-y-3">
                  {[
                    {
                      title: 'VPN outage in region-2',
                      tag: 'P1',
                      badge: 'badge-error',
                    },
                    {
                      title: 'New onboarding automation',
                      tag: 'Task',
                      badge: 'badge-info',
                    },
                    {
                      title: 'Customer portal file uploads',
                      tag: 'Bug',
                      badge: 'badge-warning',
                    },
                  ].map((ticket) => (
                    <div
                      key={ticket.title}
                      className="flex items-center justify-between rounded-xl border border-white/5 bg-neutral-900/70 px-3 py-2"
                    >
                      <div>
                        <div className="font-semibold text-sm text-white">
                          {ticket.title}
                        </div>
                        <div className="text-white/60 text-xs">
                          Workspace · Assigned
                        </div>
                      </div>
                      <span
                        className={`${ticket.badge} badge-soft rounded-full`}
                      >
                        {ticket.tag}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="grid gap-4 md:grid-cols-3">
        {[
          {
            icon: <FaBolt className="text-primary" />,
            title: 'Complete ticketing system',
            text: 'Tickets, statuses, priorities, assignments, comments, attachments, and full audit trails out of the box.',
          },
          {
            icon: <FaSignal className="text-info" />,
            title: 'Real-time updates',
            text: 'SignalR powers live notifications, ticket updates, and team collaboration without page refreshes.',
          },
          {
            icon: <FaShieldAlt className="text-success" />,
            title: 'Multi-tenant workspaces',
            text: 'Complete data isolation per workspace with role-based access control and separate settings.',
          },
        ].map((feature) => (
          <div key={feature.title} className="stat-card">
            <div className="flex items-center gap-3 font-semibold text-lg">
              <span className="rounded-2xl bg-white/10 p-2">
                {feature.icon}
              </span>
              <span>{feature.title}</span>
            </div>
            <p className="mt-2 text-sm text-white/70">{feature.text}</p>
          </div>
        ))}
      </section>

      <section className="grid items-start gap-4 md:grid-cols-2">
        <div className="stat-card">
          <h3 className="font-semibold text-xl">Core features</h3>
          <p className="mt-2 text-white/70">
            Everything you need to run a professional help desk right out of the
            box.
          </p>
          <div className="mt-4 space-y-3">
            {[
              'Multi-tenant workspaces with full data isolation',
              'Ticket management with priorities, statuses, and types',
              'Team collaboration and assignment workflows',
              'Contact and location management',
              'Client portal for self-service',
              'Email notifications and integrations',
            ].map((item) => (
              <div
                key={item}
                className="flex items-start gap-2 text-sm text-white/80"
              >
                <FaCheckCircle className="mt-0.5 text-success" />
                <span>{item}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="stat-card">
          <h3 className="font-semibold text-xl">Built on proven technology</h3>
          <div className="mt-4 grid gap-3">
            {[
              {
                title: 'ASP.NET Core 10.0',
                copy: 'Modern, high-performance backend with Entity Framework Core for data access.',
              },
              {
                title: 'PostgreSQL 18.1',
                copy: 'Battle-tested relational database with excellent performance and reliability.',
              },
              {
                title: 'React + TypeScript',
                copy: 'Type-safe frontend with modern React patterns and component design.',
              },
              {
                title: 'S3-compatible storage',
                copy: 'Scalable file attachment handling with RustFS or any S3-compatible provider.',
              },
            ].map((item) => (
              <div
                key={item.title}
                className="rounded-2xl border border-white/10 bg-white/5 p-3"
              >
                <div className="font-semibold text-sm text-white">
                  {item.title}
                </div>
                <div className="text-white/70 text-xs">{item.copy}</div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
