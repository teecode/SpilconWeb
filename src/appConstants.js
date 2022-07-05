export const BASE_URL =
  process.env.NODE_ENV === "development"
    ? "http://teecode-001-site1.etempurl.com/api"
    : window.env?.baseUrl ?? "http://teecode-001-site1.etempurl.com/api";
