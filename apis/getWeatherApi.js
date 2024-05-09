const KEY = "70a46b11e1062622a66182a543d9e214";

export default async function getWeatherApi(query) {
  const res = await fetch(
    `http://api.weatherstack.com/current?access_key=${KEY}&query=${query}`
  );
  const data = await res.json();
  return data;
}
