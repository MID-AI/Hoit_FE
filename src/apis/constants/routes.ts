const API_ROUTES = {
  test: "/test",
} as const;

export const pathGenerator = {
  test: (url: string) => `${API_ROUTES.test}/${url}`,
};

export default API_ROUTES;
