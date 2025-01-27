import { apiClient } from "../client/APIClient";

export const getTest = () => apiClient.get("/test");
export const postTest = () => apiClient.post("/test", {});
