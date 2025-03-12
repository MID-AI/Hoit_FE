export interface APIResponse<T> {
  timestamp: string;
  statusCode: number;
  message: string;
  data: T;
}

export interface PageNation<T> {
  content: T[];
  pageable: {
    pageNumber: number;
    pageSize: number;
    sort: {
      empty: boolean;
      sorted: boolean;
      unsorted: boolean;
    };
    offset: number;
    unpaged: boolean;
    paged: boolean;
  };
  totalPages: number;
  totalElements: number;
  first: boolean;
  last: boolean;
  size: number;
  number: number;
  sort: {
    empty: boolean;
    sorted: boolean;
    unsorted: boolean;
  };
  numberOfElements: number;
  empty: boolean;
}

export interface ImageType {
  id: number;
  url: string;
  prompt: string;
  nickname: string;
  likes: number;
  isLike: boolean;
}
