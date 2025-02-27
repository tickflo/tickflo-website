import { Link } from 'react-router';

type BlogProps = {
  articles: Array<{
    title: string;
    key: string;
    description: string;
    date: string;
    localDate: string;
  }>;
};

export function Blog({ articles }: BlogProps) {
  return (
    <>
      <div className="flex justify-center">
        <ul className="max-h-screen w-full max-w-xl space-y-4 overflow-y-auto p-4">
          {articles.map((article) => (
            <li key={article.key}>
              <article className="card bg-base-200 shadow-lg transition-shadow duration-200 hover:shadow-xl">
                <div className="card-body">
                  <time
                    dateTime={article.date}
                    className="text-gray-500 text-sm"
                  >
                    {article.localDate}
                  </time>
                  <Link
                    to={`/${article.key}`}
                    className="group"
                    prefetch="intent"
                  >
                    <h2 className="card-title font-semibold text-lg transition-colors group-hover:text-primary">
                      {article.title}
                    </h2>
                    <p className="text-gray-600">{article.description}</p>
                  </Link>
                </div>
              </article>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}
