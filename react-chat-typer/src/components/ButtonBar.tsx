import Button from "./Button";
import { useState } from "react";
const ButtonBar = () => {
  const [buttonStates, setButtonStates] = useState({
    CA: false,
    CS: false,
    AK: false,
    KM: false,
  });
  const [buttonValues, setButtonValues] = useState({
    CA: "",
    CS: "",
    AK: "",
    KM: "",
  });
  return (
    <div className="button-bar">
      <Button
        text="CA"
        buttonStates={buttonStates}
        setButtonStates={setButtonStates}
      />
      <Button
        text="CS"
        buttonStates={buttonStates}
        setButtonStates={setButtonStates}
      />
      <Button
        text="AK"
        buttonStates={buttonStates}
        setButtonStates={setButtonStates}
      />
      <Button
        text="KM"
        buttonStates={buttonStates}
        setButtonStates={setButtonStates}
      />
    </div>
  );
};
export default ButtonBar;
