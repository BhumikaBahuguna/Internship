import { Link, NavLink, useNavigate } from "react-router-dom";
import { Cloud, LogOut, Menu } from "lucide-react";
import toast from "react-hot-toast";

import Button from "../ui/Button";
import { ROUTES } from "../../constants/routes";
import { useAuth } from "../../context/AuthContext";

const navLinkClass = ({ isActive }) =>
  `rounded-md px-3 py-2 text-sm font-medium transition ${isActive ? "bg-slate-900 text-white" : "text-slate-600 hover:bg-slate-100 hover:text-slate-950"}`;

const Navbar = () => {
  const navigate = useNavigate();
  const { isAuthenticated, logout } = useAuth();

  const handleLogout = () => {
    logout();
    toast.success("Logged out");
    navigate(ROUTES.login);
  };

  return (
    <header className="border-b border-slate-200 bg-white">
      <nav className="mx-auto flex min-h-16 max-w-6xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <Link to={ROUTES.home} className="flex items-center gap-2 text-lg font-bold text-slate-950">
          <span className="grid h-9 w-9 place-items-center rounded-md bg-brand-600 text-white">
            <Cloud size={20} aria-hidden="true" />
          </span>
          FS Demo
        </Link>

        <div className="hidden items-center gap-2 md:flex">
          <NavLink to={ROUTES.home} className={navLinkClass}>
            Home
          </NavLink>
          <NavLink to={ROUTES.dashboard} className={navLinkClass}>
            Dashboard
          </NavLink>
        </div>

        <div className="flex items-center gap-2">
          {isAuthenticated ? (
            <Button variant="secondary" onClick={handleLogout} className="px-3">
              <LogOut size={17} aria-hidden="true" />
              Logout
            </Button>
          ) : (
            <>
              <Link to={ROUTES.login}>
                <Button variant="outline">Login</Button>
              </Link>
              <Link to={ROUTES.register} className="hidden sm:block">
                <Button>Register</Button>
              </Link>
            </>
          )}
          <button className="grid h-10 w-10 place-items-center rounded-md border border-slate-200 text-slate-700 md:hidden" aria-label="Open menu">
            <Menu size={20} aria-hidden="true" />
          </button>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
