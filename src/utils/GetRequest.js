const url = `https://api.opentripmap.com/0.1/en/places/geoname?name=cairo&country=eg&apikey=${
  import.meta.env.VITE_API_KEY
}`;

export default async function getRequest() {
  const request = await fetch(url);
  const response = await request.json();
  return response;
}
