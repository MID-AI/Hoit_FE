export const SSE_STATUS = {
  PENDING: "PENDING",
  ERROR: "ERROR",
  SUCCESS: "SUCCESS",
} as const;

export type SSEStatus = (typeof SSE_STATUS)[keyof typeof SSE_STATUS];

export const SSE_TYPE = {
  IMAGE: "IMAGE",
  VIDEO: "VIDEO",
  ALERT: "ALERT",
} as const;
