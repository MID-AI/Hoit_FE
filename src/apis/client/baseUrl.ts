const SERVER_URL =
  process.env.NEXT_PUBLIC_MODE === "mock"
    ? "http://localhost:9090"
    : "https://api.hoit.my";

export default SERVER_URL;
