const api = 'https://api.themoviedb.org/3';

// The api key is ok to be exposed, it's free and only for self study. I know that the corretly way is to store in a .env file.
const key = '1c19385e3a064070d36df768c570062b';

const defaultContent = {
  api_key: key,
  language: 'fr'
};

function queryString(obj) {
  return Object.entries(obj)
    .map(([index, val]) => `${index}=${val}`)
    .join('&');
}

export default async function request(url, content = {}, debug = false) {
  const obj = { ...defaultContent, ...content };

  const response = await fetch(`${api}/${url}?${queryString(obj)}`);
  const data = await (debug ? response.status : response.json());

  return data;
}
