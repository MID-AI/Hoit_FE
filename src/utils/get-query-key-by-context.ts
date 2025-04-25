import { QUERY_KEY } from "@/constants/query-key";
import { CACHE_KEY_MAP, type CacheContext } from "@/constants/query-cache-map";

export function getQueryKeyByContext(context: string, folderId?: number) {
  if (context === "") return null;

  if (context === "folder" && folderId) {
    return QUERY_KEY.MY.PROJECT_FOLDER_IMAGES(folderId);
  }

  if (context in CACHE_KEY_MAP) {
    return CACHE_KEY_MAP[context as CacheContext];
  }

  return null;
}
