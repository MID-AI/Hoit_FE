const BASE_URL =
  process.env.NEXT_PUBLIC_API_MOCKING === "enabled"
    ? "http://localhost:9090"
    : "";

export default BASE_URL;
