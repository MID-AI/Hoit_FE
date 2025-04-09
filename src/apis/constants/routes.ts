const API_ROUTES = {
  TEST: "test",

  //auth
  LOGIN: "oauth2/authorization/google",
  REFRESH_TOKEN: "auth/token/verify",
  USER: "api/user/profile",

  // home
  SHARED_IMAGES: "api/shared-images",

  // mypage
  MY_IMAGES: "api/mypage",
} as const;

export default API_ROUTES;
