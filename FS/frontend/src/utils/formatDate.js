import { format } from "date-fns";

export const formatDateTime = (date) => {
  if (!date) {
    return "Not available";
  }

  return format(new Date(date), "dd MMM yyyy, hh:mm a");
};
