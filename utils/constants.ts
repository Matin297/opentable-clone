export const AUTH_COOKIE = "jwt";

export const REQUEST_STATUS = {
  idle: "idle",
  loading: "loading",
  success: "success",
  fail: "fail",
} as const;

export const DATE_FORMAT_OPTIONS = {
  weekday: "short",
  month: "short",
  day: "numeric",
} as const;

export const DATE_LOCALE = "en-US";

export type StatusType = keyof typeof REQUEST_STATUS;

export const TIME = [
  {
    time: "00:00:00.000Z",
    display: "12:00 AM",
  },
  {
    time: "00:30:00.000Z",
    display: "12:30 AM",
  },
  {
    time: "01:00:00.000Z",
    display: "1:00 AM",
  },
  {
    time: "01:30:00.000Z",
    display: "1:30 AM",
  },
  {
    time: "02:00:00.000Z",
    display: "2:00 AM",
  },
  {
    time: "02:30:00.000Z",
    display: "2:30 AM",
  },
  {
    time: "03:00:00.000Z",
    display: "3:00 AM",
  },
  {
    time: "03:30:00.000Z",
    display: "3:30 AM",
  },
  {
    time: "04:00:00.000Z",
    display: "4:00 AM",
  },
  {
    time: "04:30:00.000Z",
    display: "4:30 AM",
  },
  {
    time: "05:00:00.000Z",
    display: "5:00 AM",
  },
  {
    time: "05:30:00.000Z",
    display: "5:30 AM",
  },
  {
    time: "06:00:00.000Z",
    display: "6:00 AM",
  },
  {
    time: "06:30:00.000Z",
    display: "6:30 AM",
  },
  {
    time: "07:00:00.000Z",
    display: "7:00 AM",
  },
  {
    time: "07:30:00.000Z",
    display: "7:30 AM",
  },
  {
    time: "08:00:00.000Z",
    display: "8:00 AM",
  },
  {
    time: "08:30:00.000Z",
    display: "8:30 AM",
  },
  {
    time: "09:00:00.000Z",
    display: "9:00 AM",
  },
  {
    time: "09:30:00.000Z",
    display: "9:30 AM",
  },
  {
    time: "10:00:00.000Z",
    display: "10:00 AM",
  },
  {
    time: "10:30:00.000Z",
    display: "10:30 AM",
  },
  {
    time: "11:00:00.000Z",
    display: "11:00 AM",
  },
  {
    time: "11:30:00.000Z",
    display: "11:30 AM",
  },
  {
    time: "12:00:00.000Z",
    display: "12:00 PM",
  },
  {
    time: "12:30:00.000Z",
    display: "12:30 PM",
  },
  {
    time: "13:00:00.000Z",
    display: "1:00 PM",
  },
  {
    time: "13:30:00.000Z",
    display: "1:30 PM",
  },
  {
    time: "14:00:00.000Z",
    display: "2:00 PM",
  },
  {
    time: "14:30:00.000Z",
    display: "2:30 PM",
  },
  {
    time: "15:00:00.000Z",
    display: "3:00 PM",
  },
  {
    time: "15:30:00.000Z",
    display: "3:30 PM",
  },
  {
    time: "16:00:00.000Z",
    display: "4:00 PM",
  },
  {
    time: "16:30:00.000Z",
    display: "4:30 PM",
  },
  {
    time: "17:00:00.000Z",
    display: "5:00 PM",
  },
  {
    time: "17:30:00.000Z",
    display: "5:30 PM",
  },
  {
    time: "18:00:00.000Z",
    display: "6:00 PM",
  },
  {
    time: "18:30:00.000Z",
    display: "6:30 PM",
  },
  {
    time: "19:00:00.000Z",
    display: "7:00 PM",
  },
  {
    time: "19:30:00.000Z",
    display: "7:30 PM",
  },
  {
    time: "20:00:00.000Z",
    display: "8:00 PM",
  },
  {
    time: "20:30:00.000Z",
    display: "8:30 PM",
  },
  {
    time: "21:00:00.000Z",
    display: "9:00 PM",
  },
  {
    time: "21:30:00.000Z",
    display: "9:30 PM",
  },
  {
    time: "22:00:00.000Z",
    display: "10:00 PM",
  },
  {
    time: "22:30:00.000Z",
    display: "10:30 PM",
  },
  {
    time: "23:00:00.000Z",
    display: "11:00 PM",
  },
  {
    time: "23:30:00.000Z",
    display: "11:30 PM",
  },
];
