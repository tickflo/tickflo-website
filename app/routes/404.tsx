import { Link } from 'react-router';

export default function index() {
  return (
    <div className="flex w-full justify-center">
      <div className="prose">
        <h2>Not found</h2>
        <p className="text-center">
          Click <Link to="/">here</Link> to go home
        </p>
      </div>
    </div>
  );
}
