export const errorHandler = (error) => {
  if (!error) {
    return "Unable to connect.";
  }

  if (typeof error === "string") {
    return error;
  }

  if (
    error &&
    error.message &&
    error.message.toLowerCase() === "network error"
  ) {
    return "Unable to connect.";
  }
  if (error && error.response) {
    return error.response.data;
  } else if (error.request) {
    return error.request;
  } else {
    return "Unable to connect.";
  }
};
