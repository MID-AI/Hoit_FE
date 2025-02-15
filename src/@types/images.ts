export interface ImageList<T> {
  hasNext: boolean;
  currentPage: number;
  content: T[];
}

export interface Image {
  imgId: string;
  taskId: string;
  imageUrl: string;
}
