export interface APIResponse<T> {
  timestamp: string;
  statusCode: number;
  message: string;
  data: T;
}

export interface PageNation<T> {
  content: T[];
  empty: boolean;
  first: boolean;
  last: boolean;
  number: number;
  numberOfElements: number;
  pageable: {
    offset: number;

    pageNumber: number;
    pageSize: number;
    paged: boolean;
    sort: {
      empty: boolean;
      sorted: boolean;
      unsorted: boolean;
    };

    unpaged: boolean;
  };
  size: number;
  sort: {
    empty: boolean;
    sorted: boolean;
    unsorted: boolean;
  };
  totalPages: number;
  totalElements: number;
}

export interface ImageType {
  id: number;
  url: string;
  prompt: string;
  nickname?: string;
  ratio: string;
  createdAt: string;
  likeCount: number;
  isLiked: boolean | null;
  isPosted?: boolean;
}
