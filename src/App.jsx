import { useEffect, useState } from "react";
import CssBaseline from "@mui/material/CssBaseline";
import "./App.css";
import Header from "./components/header/Header";
import List from "./components/list/List";
import Map from "./components/map/Map";
import { getPlacesData } from "./api";

function App() {
  const [places, setPlaces] = useState([]);

  useEffect(() => {
    getPlacesData().then((data) => {
      console.log(data);
      setPlaces(data);
    });
  },[]);
  return (
    <>
      <CssBaseline />
      <Header />
      <div className="grid grid-cols-1 md:grid-cols-3">
        <List />
        <div className="col-span-2">
          <Map />
        </div>
      </div>
    </>
  );
}

export default App;
