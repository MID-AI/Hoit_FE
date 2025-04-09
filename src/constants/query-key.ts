export const QUERY_KEY = {
  // home
  IMAGE: {
    LIST: ["imageList"] as const,
    DETAIL: (id: string) => ["image", id] as const,
  },
  // image

  // video

  // my
  MY: {
    PROFILE: ["user"] as const,
    PROJECT: ["myProject", "imageList"] as const,
    PROJECT_FOLDER: ["myProject", "folderList"] as const,
    ACTIVITY_POST: ["myActivity", "post"] as const,
    ACTIVITY_LIKES: ["myActivity", "likes"] as const,
  },
};
