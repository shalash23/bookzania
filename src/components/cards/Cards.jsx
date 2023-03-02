import { getPlaces } from "../../utils/getPlaces";
import { getObject } from "../../utils/getObject";
import { useState, useEffect } from "react";
import LoadingButtons from "../helpers/LoadingSpinner";
export default function Cards({ lon, lat, category }) {
  const [places, setPlaces] = useState();
  const [placeProperties, setPlacesProperties] = useState();
  const [features, setFeatures] = useState();
  useEffect(() => {
    (async () => {
      if (!lat || !lon) return;
      try {
        const data = await getPlaces(lon, lat);
        setPlaces(data);
        setFeatures(places.features);
      } catch (e) {
        console.log(e);
      }
    })();
  }, [lon, lat, category]);
  useEffect(() => {
    (async () => {
      if (!features) return;
      try {
        const data = await getObject(features);
        setPlacesProperties(data);
      } catch (e) {
        console.log(e);
      }
    })();
  }, [places]);
  return (
    <div>
      {!placeProperties && <LoadingButtons />}
      {placeProperties &&
        placeProperties.map((place) => {
          return <li key={place.xid}>{place.name}</li>;
        })}
    </div>
  );
}
