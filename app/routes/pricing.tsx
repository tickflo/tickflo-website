import { generateMeta } from '@forge42/seo-tools/remix/metadata';
import { Link } from 'react-router';

export function meta() {
  return generateMeta({
    title: 'Tickflo - Pricing',
    description: 'Open-source ticketing system - free to use and self-host',
    url: 'https://tickflo.co/pricing',
  });
}

export default function pricing() {
  return (
    <div className="space-y-8">
      <section className="glass-panel relative overflow-hidden p-8 md:p-10">
        <div className="hero-gradient" />
        <div className="relative grid gap-8 md:grid-cols-[1.2fr_0.8fr] md:items-center">
          <div className="space-y-4">
            <div className="flex flex-wrap items-center gap-3 text-sm text-white/70">
              <span className="pill">Pricing</span>
              <span className="pill">Free forever</span>
              <span className="pill">Self-host</span>
            </div>
            <h1 className="font-bold text-4xl leading-tight">
              Tickflo is open source and free — no seat limits
            </h1>
            <p className="text-lg text-white/80">
              Ship a production-grade help desk without per-user surprises.
              Self-host, extend, and keep your data isolated by design.
            </p>
            <div className="flex flex-wrap gap-3">
              <Link to="/docs" className="btn btn-primary btn-lg rounded-full">
                Read the docs
              </Link>
              <a
                href="https://github.com/tickflo/tickflo"
                className="btn btn-outline btn-lg rounded-full border-white/20 bg-white/5 text-slate-100"
                target="_blank"
                rel="noopener noreferrer"
              >
                Star on GitHub
              </a>
            </div>
          </div>

          <div className="grid gap-3">
            {[
              { label: 'License', value: 'OSS • MIT' },
              { label: 'Workspaces', value: 'Unlimited' },
              { label: 'Users', value: 'Unlimited' },
              { label: 'Storage', value: 'S3-compatible' },
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

      <div className="grid gap-4 md:grid-cols-[1.1fr_0.9fr]">
        <div className="glass-panel p-8">
          <div className="prose prose-invert max-w-none">
            <h2>Open Source Licensing</h2>
            <p>Tickflo is released as open-source software, meaning you can:</p>
            <ul>
              <li>Download and use it for free</li>
              <li>Self-host on your own infrastructure</li>
              <li>Modify the code to suit your needs</li>
              <li>Contribute improvements back to the community</li>
            </ul>

            <h2>Self-Hosting</h2>
            <p>Tickflo is designed to be easy to self-host. You'll need:</p>
            <ul>
              <li>
                <strong>.NET 10.0 SDK</strong> - Runtime for the application
              </li>
              <li>
                <strong>PostgreSQL 18.1+</strong> - Database server
              </li>
              <li>
                <strong>Docker</strong> (optional) - For containerized
                deployment
              </li>
              <li>
                <strong>S3-compatible storage</strong> - For file attachments
                (RustFS or AWS S3)
              </li>
            </ul>
          </div>
        </div>

        <div className="glass-panel space-y-5 p-8">
          <div className="prose prose-invert max-w-none">
            <h3>Estimated Infrastructure Costs</h3>
            <p>When self-hosting, your main costs will be infrastructure:</p>
            <ul>
              <li>
                <strong>Small team (1-10 users)</strong>: $10-20/month for a VPS
              </li>
              <li>
                <strong>Medium team (10-50 users)</strong>: $50-100/month for
                dedicated resources
              </li>
              <li>
                <strong>Large team (50+ users)</strong>: $200+/month depending
                on scale
              </li>
            </ul>
          </div>

          <div className="prose prose-invert max-w-none">
            <h3>Quick Start</h3>
            <p>Get started with Tickflo in minutes:</p>
            <div className="mockup-code">
              <pre data-prefix="$">
                <code>git clone https://github.com/tickflo/tickflo.git</code>
              </pre>
              <pre data-prefix="$">
                <code>cd tickflo</code>
              </pre>
              <pre data-prefix="$">
                <code>docker compose up -d</code>
              </pre>
              <pre data-prefix="$">
                <code>dbmate up</code>
              </pre>
              <pre data-prefix="$">
                <code>dotnet run --project Tickflo.Web</code>
              </pre>
            </div>
          </div>
        </div>
      </div>

      <div className="glass-panel p-8">
        <div className="prose prose-invert max-w-none">
          <h3>Support</h3>
          <p>While Tickflo is free to use, you can get support through:</p>
          <ul>
            <li>
              <strong>Documentation</strong> - Comprehensive guides and API
              references
            </li>
            <li>
              <strong>GitHub Issues</strong> - Report bugs and request features
            </li>
            <li>
              <strong>Community</strong> - Connect with other users and
              contributors
            </li>
          </ul>

          <h3>Contributing</h3>
          <p>
            Help make Tickflo better! We welcome contributions of all kinds:
          </p>
          <ul>
            <li>Bug reports and feature requests</li>
            <li>Code contributions and pull requests</li>
            <li>Documentation improvements</li>
            <li>Translation and localization</li>
          </ul>
          <p>
            Visit our{' '}
            <a
              href="https://github.com/tickflo/tickflo"
              target="_blank"
              rel="noopener noreferrer"
            >
              GitHub repository
            </a>{' '}
            to get started.
          </p>
        </div>
      </div>
    </div>
  );
}
