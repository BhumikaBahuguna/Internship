import { useCallback, useState } from "react";

import { getErrorMessage } from "../utils/errorHandler";

export const useApi = (apiFunction) => {
  const [data, setData] = useState(null);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const execute = useCallback(
    async (...params) => {
      setLoading(true);
      setError("");

      try {
        const response = await apiFunction(...params);
        setData(response);
        return response;
      } catch (apiError) {
        const message = getErrorMessage(apiError);
        setError(message);
        throw apiError;
      } finally {
        setLoading(false);
      }
    },
    [apiFunction]
  );

  return { data, error, loading, execute };
};
