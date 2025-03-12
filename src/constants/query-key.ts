export const QUERY_KEY = {
  IMAGE: {
    LIST: ["imageList"] as const,
    DETAIL: (id: string) => ["image", id] as const,
  },
};
