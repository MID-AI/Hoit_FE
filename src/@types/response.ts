export interface APIResponse<T> {
  timestamp: string;
  statusCode: number;
  message: string;
  data: T;
}

export interface PageNation<T> {
  content: T[];
  previousPageCursor: string | null;
  nextPageCursor: string | null;
}
