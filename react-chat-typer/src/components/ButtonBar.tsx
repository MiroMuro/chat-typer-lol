import Button from "./Button";
import { useState } from "react";

type ButtonState = "CA" | "CS" | "AK" | "KM";

const ButtonBar = () => {
  const [buttonStates, setButtonStates] = useState<
    Record<ButtonState, boolean>
  >({
    CA: false,
    CS: false,
    AK: false,
    KM: false,
  });
  const [buttonValues, setButtonValues] = useState<Record<ButtonState, string>>(
    {
      CA: "",
      CS: "",
      AK: "",
      KM: "",
    }
  );
  return (
    <div className="button-bar">
      <Button
        text="CA"
        buttonStates={buttonStates}
        setButtonStates={setButtonStates}
        buttonValues={buttonValues}
        setButtonValues={setButtonValues}
      />
      <Button
        text="CS"
        buttonStates={buttonStates}
        setButtonStates={setButtonStates}
        buttonValues={buttonValues}
        setButtonValues={setButtonValues}
      />
      <Button
        text="AK"
        buttonStates={buttonStates}
        setButtonStates={setButtonStates}
        buttonValues={buttonValues}
        setButtonValues={setButtonValues}
      />
      <Button
        text="KM"
        buttonStates={buttonStates}
        setButtonStates={setButtonStates}
        buttonValues={buttonValues}
        setButtonValues={setButtonValues}
      />
    </div>
  );
};
export default ButtonBar;
