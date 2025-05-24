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

  console.log({ url, options });

  return fetch(url, options);
};

export const getGameList = ({ numberOfResults = 25 }) => {
  return call({ endpoint: "/games", params: { page_size: numberOfResults } });
};
