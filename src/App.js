import "./App.css";
import { useState } from "react";
import {
  documentaries,
  Horror,
  action,
  comedy,
  originals,
  romance,
} from "./components/url";
// Importing components
import Navbar from "./components/Navbar/Navbar";
import Banner from "./components/Banner/Banner";
import RowPoster from "./components/RowPoster/RowPoster";

function App() {
  const [movie, setMovie] = useState({});
  return (
    <div className="App">
      <Navbar />
      <Banner movie={movie} setMovie={setMovie} />
      <RowPoster url={action} title="Action" />
      <RowPoster url={originals} title="Netflix Originals" isSmall />
      <RowPoster url={comedy} title="Comedy" isSmall />
      <RowPoster url={Horror} title="Horror" isSmall />
      <RowPoster url={documentaries} title="Documentaries" isSmall />{" "}
      <RowPoster url={romance} title="Romance" isSmall />
    </div>
  );
}

export default App;
