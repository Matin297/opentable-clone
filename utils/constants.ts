export const AUTH_COOKIE = "jwt";

export const REQUEST_STATUS = {
  idle: "idle",
  loading: "loading",
  success: "success",
  fail: "fail",
} as const;

export type StatusType = keyof typeof REQUEST_STATUS;
