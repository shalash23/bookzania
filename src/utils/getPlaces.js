export async function getPlaces(lon, lat, category = "interesting_places") {
  const url = `https://api.opentripmap.com/0.1/en/places/radius?radius=1000&lon=${lon}&lat=${lat}&kinds=${category}&apikey=${
    import.meta.env.VITE_API_KEY
  }`;
  const data = await fetch(url);
  const response = await data.json();
  return response;
}

console.log(getPlaces(34.32995, 27.91582));
