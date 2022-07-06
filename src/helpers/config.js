const baseUrl =
  process.env.NODE_ENV === "development"
    ? "http://teecode-001-site4.etempurl.com/api/v1"
    : // @ts-ignore
    "http://teecode-001-site4.etempurl.com/api/v1";

const CONFIG = {
  BASE_URL: baseUrl,
};
export default CONFIG;
