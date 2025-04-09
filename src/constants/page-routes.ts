const PAGE_ROUTES = {
  HOME: "/",
  USER: "/user",
  IMAGE_CREATE: "/image/create",
  VIDEO_CREATE: "/video/create",

  MY_ACTIVITY: "/my/activity",
  MY_PROJECT: "/my/project",
  MY_PROJECT_FOLDER: (id: number) => `/my/project/folder/${id}`,
};

export default PAGE_ROUTES;
