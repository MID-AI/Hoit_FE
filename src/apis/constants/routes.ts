const API_ROUTES = {
  TEST: "test",

  //auth
  AUTH: {
    LOGIN: "oauth2/authorization/google",
    LOGOUT: "api/auth/logout",
    REFRESH_TOKEN: "auth/token/verify",
  },

  // 유저
  USER: {
    PROFILE: "api/user/profile",
    EDIT_PROFILE: "api/user/profile",
    DELETE_ACCOUNT: "api/user",
    SSE: (memberId: number) => `/sse/${memberId}`,
  },

  // 알림
  NOTIFICATION: {
    ALL: "api/notification",
    SINGLE: (notificationId: number) => `api/notification/${notificationId}`,
    UNREAD: "api/notification/unread",
    AS_READ: (notificationId: number) =>
      `api/notification/${notificationId}/read`,
  },

  // 생성
  CREATE: {
    // 이미지
    IMAGE: "api/images/create",
    IMAGE_REFERENCE: "api/reference/images",
    UPSCALE: "api/upscale-images/create",

    // 비디오
    VIDEO: "api/videos/create",
    VIDEO_REFERENCE: "api/reference/videos",
  },

  // 내 활동
  ACTIVITY: {
    POSTS: "api/mypage/shared-images",
    LIKES: "api/mypage/like",
  },

  // 내 프로젝트
  PROJECT: {
    IMAGES: "api/images/mypage",
    FOLDERS: "api/folder",
    DELETE_FOLDER: (folderId: number) => `api/folder/${folderId}`,
    FOLDER_EDIT_NAME: (folderId: number) => `api/folder/${folderId}`,
    FOLDER_IMAGES: (folderId: number) => `api/folder/${folderId}/images`,
  },

  // 이미지
  IMAGE: {
    SHARED: "api/shared-images",
    DETAIL: (imageId: number) => `api/shared-images/${imageId}`,

    LIKE: (imageId: number) => `api/${imageId}/like`,
    POSTING: (imageId: number) => `api/shared-images/${imageId}`,
  },
} as const;

export default API_ROUTES;
