import { Loader2 } from "lucide-react";

const Loader = ({ text = "Loading..." }) => {
  return (
    <div className="flex items-center gap-2 text-sm font-medium text-slate-600" role="status">
      <Loader2 size={18} className="animate-spin text-brand-600" aria-hidden="true" />
      <span>{text}</span>
    </div>
  );
};

export default Loader;
