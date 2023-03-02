export async function getObject(features) {
  const responses = await features.map((feature, i) => {
    if (i > 5) return;
    setTimeout(() => {
      console.log("delayed for 0.5 second");
    }, 500);
    return feature.properties.xid;
  });
  const objectProperties = await responses.map((xid) => {
    setTimeout(() => {
      console.log("delayed for 0.5 second");
    }, 500);

    return Promise.resolve(getXid(xid));
  });
  console.log(objectProperties);
  return objectProperties;
}

async function getXid(xid) {
  if (!xid) return;
  const url = `https://api.opentripmap.com/0.1/en/places/xid/${xid}?apikey=${
    import.meta.env.VITE_API_KEY
  }`;

  const data = await fetch(url);
  const response = await data.json();
  return response;
}
