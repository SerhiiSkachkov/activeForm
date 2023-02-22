export const fetchApi = (url, options) => {
  return fetch(`/api/${url?.trim()}`, options).then(res => res.json());
};
