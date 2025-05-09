export const CREATE_IMAGE_SELECT_MENU = {
  "1:1": { width: "w-14" },
  "3:4": { width: "w-15" },
  "16:9": { width: "w-19" },
} as const;

export type AspectRatio = keyof typeof CREATE_IMAGE_SELECT_MENU;

export const CREATE_VIDEO_SELECT_MENU = {
  "I2V-01": {
    describe: "기본 image-video 모델",
  },
  "I2VI2V-01-Director-01": {
    describe: "세밀한 카메라 컨트롤이 가능한 모델",
  },
  "I2V-01-live": {
    describe: "2D 캐릭터에 최적화된 모델",
  },
} as const;

export type VideoModelKey = keyof typeof CREATE_VIDEO_SELECT_MENU;
