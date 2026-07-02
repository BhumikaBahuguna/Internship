import { AlertCircle } from "lucide-react";

const ErrorMessage = ({ message }) => {
  if (!message) {
    return null;
  }

  return (
    <div className="flex items-start gap-2 rounded-md border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-700">
      <AlertCircle size={18} className="mt-0.5 shrink-0" aria-hidden="true" />
      <p>{message}</p>
    </div>
  );
};

export default ErrorMessage;
