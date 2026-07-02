import { Loader2 } from "lucide-react";

const variants = {
  primary: "bg-brand-600 text-white hover:bg-brand-700 focus:ring-brand-200",
  secondary: "bg-slate-100 text-slate-900 hover:bg-slate-200 focus:ring-slate-200",
  outline: "border border-slate-300 bg-white text-slate-800 hover:bg-slate-50 focus:ring-slate-200",
  danger: "bg-red-600 text-white hover:bg-red-700 focus:ring-red-200"
};

const Button = ({
  children,
  type = "button",
  variant = "primary",
  loading = false,
  disabled = false,
  className = "",
  ...props
}) => {
  return (
    <button
      type={type}
      disabled={disabled || loading}
      className={`inline-flex min-h-11 items-center justify-center gap-2 rounded-md px-4 py-2 text-sm font-semibold transition focus:outline-none focus:ring-4 disabled:cursor-not-allowed disabled:opacity-60 ${variants[variant]} ${className}`}
      {...props}
    >
      {loading && <Loader2 size={18} className="animate-spin" aria-hidden="true" />}
      {children}
    </button>
  );
};

export default Button;
