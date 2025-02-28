import { generateMeta } from "@forge42/seo-tools/remix/metadata";

export function meta() {
  return generateMeta({
    title: "Tickflo - About",
    description: "Simple, open-source helpdesk software",
    url: "https://Tickflo.co/about",
  });
}

export default function about() {
  return (
    <div className="flex w-full justify-center">
      <div className="prose">
        <h2>About us</h2>
        <p>
          At Tickflo, we believe that efficient ticket management is the
          backbone of productivity. That’s why we built an open-source ticketing
          system that is not only powerful but also flexible, user-friendly, and
          completely customizable. Whether you're handling customer support,
          managing internal IT requests, or tracking routine tasks, Tickflo
          provides a streamlined and intuitive solution tailored to your needs
        </p>
        <h2> Our Mission</h2><p>
        Our mission is simple: to empower teams with a modern, open-source
        ticketing system that eliminates bottlenecks, improves communication,
        and enhances workflow automation. We recognize that every organization
        has unique processes, which is why Tickflo is designed to be fully
        adaptable—allowing you to configure it to match your exact requirements
        without vendor lock-in or excessive costs.
        </p>
        <h2>Community-Driven Development</h2>
        <p>
          Tickflo is more than just software—it’s a collaborative effort driven
          by developers, IT professionals, and businesses around the world. As
          an open-source project, it thrives on contributions, feedback, and
          shared innovation. Our community works together to ensure Tickflo
          remains modern, efficient, and secure, providing a reliable solution
          that evolves with the needs of its users.
        </p>
        <h2>Join the Tickflo Community</h2>
        <p>
          We’re dedicated to building a better, more accessible support and
          issue-tracking system—one that puts control back in the hands of its
          users. Whether you want to contribute code, request new features, or
          simply find a dependable tool for your team, Tickflo welcomes you.
        </p>
        <p>
          Experience the freedom of open-source ticketing with Tickflo—where
          efficiency meets flexibility.
        </p>
      </div>
    </div>
  );
}
