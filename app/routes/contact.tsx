import { generateMeta } from '@forge42/seo-tools/remix/metadata';

export function meta() {
  return generateMeta({
    title: 'Tickflo - Contact',
    description: 'Simple, open-source helpdesk software',
    url: 'https://tickflo.co/contact',
  });
}

export default function contact() {
  return (
    <div className="space-y-6">
      <div className="glass-panel p-8">
        <div className="flex flex-wrap items-center gap-3 text-sm text-white/70">
          <span className="pill">Contact</span>
          <span className="pill">Support</span>
        </div>
        <div className="prose prose-invert max-w-none">
          <h2>Contact us</h2>
          <p>
            Have a question about the Tickflo app, onboarding, or contributing? Drop us a note and we’ll get back to you. We keep the same dark, focused interface for the help site so you know you’re in the right place.
          </p>
          <p>
            Email: <a href="mailto:hello@tickflo.co">hello@tickflo.co</a>
          </p>
          <p>
            GitHub: <a href="https://github.com/tickflo/tickflo" target="_blank" rel="noopener noreferrer">github.com/tickflo/tickflo</a>
          </p>
          <p>
            Community: Join discussions, file issues, or propose ideas on our repository. We respond quickly and ship changes that keep the product and website aligned.
          </p>
        </div>
      </div>
    </div>
  );
}
