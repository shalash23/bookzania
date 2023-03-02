const url = `https://api.opentripmap.com/0.1/en/places/geoname?name=cairo&country=eg&apikey=${process.env.API_KEY}`;

export default async function getRequest() {
  const request = await fetch(url);
  const response = await request.json();
  console.log(response);
  return response;
}
