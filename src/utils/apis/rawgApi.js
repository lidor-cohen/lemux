const baseUrl = "/api";

const call = ({ endpoint, method = "GET", body = {}, params = {} }) => {
  let url = `${baseUrl}${endpoint}?key=${import.meta.env.VITE_RAWG_API_KEY}`;
  const options = {
    method,
    headers: {
      "Content-type": "application/json",
      Authorization: "Bearer " + import.meta.env.VITE_RAWG_API_KEY,
    },
  };

  if (Object.keys(body).length > 0) options.body = JSON.stringify(body);
  if (Object.keys(params).length > 0)
    url += `&${new URLSearchParams(params).toString()}`;

  return fetch(url, options);
};

export const getGameList = ({ page = 1, sort, genre, search }) => {
  const params = { page, page_size: 12 };

  if (sort) params.ordering = sort;
  if (genre) params.genres = genre.toLowerCase();
  if (search) {
    params.search = search;
    params.ordering = "-added";
  }

  return call({ endpoint: "/games", params });
};

export const getGenreList = () => {
  return call({ endpoint: "/genres", params: { page_size: 6 } });
};

export const getStores = () => {
  return call({ endpoint: "/stores" });
};

export const getGameDetails = ({ id }) => {
  return call({ endpoint: `/games/${id}` });
};

export const getGameStores = ({ id }) => {
  return call({ endpoint: `/games/${id}/stores` });
};

export const getGameTrailers = ({ id }) => {
  return call({ endpoint: `/games/${id}/movies` });
};
