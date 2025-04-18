const API_ROUTES = {
  TEST: "test",

  //auth
  LOGIN: "oauth2/authorization/google",
  REFRESH_TOKEN: "auth/token/verify",
  USER: "api/user/profile",
  EDIT_NICKNAME: "api/user/nickname",
  DELETE_ACCOUNT: "",

  // 홈
  SHARED_IMAGES: "api/shared-images",

  // 이미지 생성
  CREATE_IMAGE: "api/images/create",

  // 내 활동
  MY_ACTIVITY_POSTS: "api/mypage/shared-images",
  MY_ACTIVITY_LIKES: "api/mypage/like",

  // 내 프로젝트(전체)
  MY_IMAGES: "api/images/mypage",
  DELETE_MY_IMAGE: (id: number) => `api/images/mypage/${id}`,

  // 내 프로젝트(폴더)
  MY_PROJECT_FOLDER: "api/folder",
  DELETE_MY_PROJECT_FOLDER: (id: number) => `api/folder/${id}`,
  MY_PROJECT_FOLDER_EDIT_NAME: (id: number) => `api/folder/${id}`,
  MY_PROJECT_FOLDER_IMAGES: (id: number) => `api/folder/${id}/images`,

  // 좋아요
  IMAGE_LIKED: (id: number) => `api/${id}/like`,
} as const;

export default API_ROUTES;
