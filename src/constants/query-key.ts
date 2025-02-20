export const QUERY_KEY = {
  IMAGE: {
    LIST: (sort?: string, maintag?: number, subtag?: number) =>
      ["imageList", sort, maintag, subtag] as const,
    DETAIL: (id: string) => ["image", id] as const,
  },
};
