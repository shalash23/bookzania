export async function getRequest(city) {
  const url = `https://api.opentripmap.com/0.1/en/places/geoname?name=
    ${city}&country=eg&apikey=${import.meta.env.VITE_API_KEY}`;
  const request = await fetch(url);
  const response = await request.json();
  return [response];
}
