const PAGE_ROUTES = {
  HOME: "/",
  USER: "/user",
  IMAGE_CREATE: "/create/image",
  VIDEO_CREATE: "/create/video",
  MEDIA_ID: (id: number) => `/media/${id}`,

  MY_ACTIVITY_POST: "/my/activity/post",
  MY_ACTIVITY_LIKE: "/my/activity/like",
  MY_PROJECT_ALL: "/my/project/all",
  MY_PROJECT_FOLDER: "/my/project/folder",
  MY_PROJECT_FOLDER_IMAGE: (id: number) => `/my/project/folder/${id}`,
};

export default PAGE_ROUTES;
