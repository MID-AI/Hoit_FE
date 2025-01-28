import { apiClient } from "./client/APIClient";
import API_ROUTES from "./constants/routes";

export const getUser = () => apiClient.get(API_ROUTES.USER);
