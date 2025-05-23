export const API_URL = "https://picsum.photos/v2";

export const endpoints = {
  list: "/list",
  search: "/search",
  photo: (id) => `/id/${id}`,
};
