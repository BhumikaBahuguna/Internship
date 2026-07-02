import { Link } from "react-router-dom";

import Button from "../components/ui/Button";
import { ROUTES } from "../constants/routes";

const NotFound = () => {
  return (
    <section className="mx-auto flex max-w-2xl flex-col items-center px-4 py-20 text-center sm:px-6 lg:px-8">
      <p className="text-sm font-semibold uppercase tracking-wide text-brand-600">404</p>
      <h1 className="mt-3 text-4xl font-bold text-slate-950">Page not found</h1>
      <p className="mt-4 text-slate-600">The page you are looking for does not exist or has been moved.</p>
      <Link to={ROUTES.home} className="mt-8">
        <Button>Back to Home</Button>
      </Link>
    </section>
  );
};

export default NotFound;
