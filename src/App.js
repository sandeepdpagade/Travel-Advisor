import "./App.css";
import CssBaseline from "@mui/material/CssBaseline";
import Header from "./components/header/Header";
import List from "./components/list/List";
import Map from "./components/map/Map";

function App() {
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
