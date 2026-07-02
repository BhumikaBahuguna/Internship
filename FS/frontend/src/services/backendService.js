import { API_ENDPOINTS } from "../constants/api";
import api from "./api";

export const backendService = {
  getHealth: async () => {
    const { data } = await api.get(API_ENDPOINTS.health);
    return data;
  },
  getTestConnection: async () => {
    const { data } = await api.get(API_ENDPOINTS.test);
    return data;
  }
};
