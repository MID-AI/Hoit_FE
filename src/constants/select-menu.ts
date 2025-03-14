export const CREATE_IMAGE_SELECT_MENU = {
  "1": { content: "1:1", width: "w-14" },
  "2": { content: "3:4", width: "w-15" },
  "3": { content: "16:9", width: "w-19" },
} as const;

export const CREATE_VIDEO_SELECT_MENU = {
  "1": { content: "I2V-01", describe: "기본 image-video 모델" },
  "2": {
    content: "I2VI2V-01-Director-01",
    describe: "세밀한 카메라 컨트롤이 가능한 모델",
  },
  "3": { content: "I2V-01-live", describe: "2D 캐릭터에 최적화된 모델" },
};
