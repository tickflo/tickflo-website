import { generateMeta } from '@forge42/seo-tools/remix/metadata';
import { FaArrowRight } from 'react-icons/fa';
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
    <div className="flex justify-center">
      <div className="flex max-w-xl flex-col items-center gap-6 text-center">
        <h1 className="font-bold text-5xl">
          Simple, open-source help desk platform
        </h1>

        <span>
          Empower your team with our open-source help desk platform—efficient
          ticket management, seamless inventory tracking, and powerful
          automation, all in one place. Take control of your support workflow
          with ease. 🚀
        </span>

        <div className="flex gap-4">
          <Link to="/docs/getting-started" className="btn btn-primary">
            Get started
            <FaArrowRight />
          </Link>
        </div>
      </div>
    </div>
  );
}
