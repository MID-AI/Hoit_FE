import { QUERY_KEY } from "./query-key";

export const CACHE_KEY_MAP = {
  home: QUERY_KEY.IMAGE.LIST,
  project: QUERY_KEY.MY.PROJECT(),
  like: QUERY_KEY.MY.ACTIVITY_LIKES,
  post: QUERY_KEY.MY.ACTIVITY_POST,
} as const;

export type CacheContext = keyof typeof CACHE_KEY_MAP;
