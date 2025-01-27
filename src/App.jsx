import { useEffect, useState } from "react";
import CssBaseline from "@mui/material/CssBaseline";
import "./App.css";
import Header from "./components/header/Header";
import List from "./components/list/List";
import Map from "./components/map/Map";
import { getPlacesData } from "./api";

function App() {
  const [places, setPlaces] = useState([]);
  const [coordinates, setCoordinates] = useState({});
  const [bounds, setBounds] = useState(null);

  // Get current location once on component mount
  useEffect(() => {
    const successCallback = (position) => {
      const { latitude, longitude } = position.coords;
      setCoordinates({ lat: latitude, lng: longitude });
    };

    const errorCallback = (error) => {
      console.error("Error getting location", error);
    };

    // Check for geolocation support
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(successCallback, errorCallback);
    }
  }, []); // Empty dependency array ensures this runs once on mount

  useEffect(() => {
    console.log("Fetching places data");

    getPlacesData().then((data) => {
      console.log(data);
      setPlaces(data);
    });
  }, [coordinates, bounds]); // Fetch new places when coordinates or bounds change

  return (
    <>
      <CssBaseline />
      <Header />
      <div className="grid grid-cols-1 md:grid-cols-3">
        <List />
        <div className="col-span-2">
          <Map
            setCoordinates={setCoordinates}
            setBounds={setBounds}
            coordinates={coordinates}
          />
        </div>
      </div>
    </>
  );
}

export default App;
