export const QUERY_KEY = {
  // home
  IMAGE: {
    LIST: (cursor: string) => ["imageList", cursor] as const,
    DETAIL: (id: number) => ["image", id] as const,
  },
  // image

  // video

  // my
  MY: {
    PROFILE: ["user"] as const,
    PROJECT: (pageSize: number = 20, type: "image" | "video" | "" = "") =>
      ["myProject", "imageList", pageSize, type] as const,
    PROJECT_FOLDER: ["myProject", "folderList"] as const,
    PROJECT_FOLDER_IMAGES: (id: number) => ["myProject", "folder", id] as const,
    ACTIVITY_POST: ["myActivity", "post"] as const,
    ACTIVITY_LIKES: ["myActivity", "likes"] as const,
  },

  // notification
  NOTIFICATION: {
    ALL: ["notification"] as const,
    UNREAD: ["notification", "unread"] as const,
  },
};
