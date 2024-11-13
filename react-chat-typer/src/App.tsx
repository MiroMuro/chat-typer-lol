import TextArea from "./components/TextArea";
import { useState } from "react";
import ButtonBar from "./components/ButtonBar";
import FavoritesDropdown from "./components/FavoritesDropdown";
import StatusBar from "./components/StatusBar";
import "./App.css";

function App() {
  /*const buttonStatuses = {
    CA: "",
    CS: "",
    AK: "",
    KM: ""
  }*/

  return (
    <div className="base-grid">
      <TextArea />
      <ButtonBar />
      <FavoritesDropdown favorites={["CA", "CS", "AK", "KM"]} />
      <StatusBar status="Connected" />
    </div>
  );
}

export default App;
