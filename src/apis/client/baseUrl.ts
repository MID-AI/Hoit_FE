export const SERVER_URL =
  process.env.NEXT_PUBLIC_MODE === "mock"
    ? "http://localhost:9090"
    : "https://api.hoit.my";

export const CLIENT_URL =
  process.env.NODE_ENV === "development"
    ? "https://front.hoit.my:3000"
    : "https://www.hoit.my";
