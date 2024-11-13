import Button from "./Button";
import { useState } from "react";
import ConfirmButton from "./ConfirmButton";
import { ButtonState } from "../Types/interfaces";

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
    <>
      <div className="button-bar-firstline">
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
      </div>
      <div className="button-bar-secondline">
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
      <ConfirmButton buttonValues={buttonValues} />
    </>
  );
};
export default ButtonBar;
