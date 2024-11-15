import CopyPastaTextForm from "./components/Copypasta/CopypastaTextForm";
import ButtonBar from "./components/Buttons/ButtonBar";
import FavoritesDropdown from "./components/FavoritesDropdown";
import ButtonStatusBar from "./components/Buttons/ButtonStatusBar";
import "./App.css";

function App() {
  return (
    <div className="base-grid">
      <CopyPastaTextForm />
      <ButtonBar />
      <FavoritesDropdown favorites={["CA", "CS", "AK", "KM"]} />
      <ButtonStatusBar />
    </div>
  );
}

export default App;
