import { useState } from "react";
import CssBaseline from "@mui/material/CssBaseline";
import "./App.css";
import Header from "./components/header/Header";
import List from "./components/list/List";
import Map from "./components/map/Map";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <CssBaseline />
      <Header />
      <div className="grid grid-cols-1 md:grid-cols-2">
        <List />
        <Map />
      </div>
    </>
  );
}

export default App;
