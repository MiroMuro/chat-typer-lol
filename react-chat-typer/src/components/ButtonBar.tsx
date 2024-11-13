import Button from "./Button";
import { useState } from "react";
import ConfirmButton from "./ConfirmButton";
import { ButtonState } from "../Types/interfaces";

const ButtonBar = () => {
  const [buttonStates, setButtonStates] = useState<
    Record<ButtonState, boolean>
  >({
    EndTypingKey: false,
    BeginTypingKey: false,
    OpenCloseChatKey: false,
  });
  const [buttonValues, setButtonValues] = useState<Record<ButtonState, string>>(
    {
      EndTypingKey: "",
      BeginTypingKey: "",
      OpenCloseChatKey: "",
    }
  );

  return (
    <>
      <div className="button-bar-firstline">
        <Button
          text="OpenCloseChatKey"
          label="Open and close chat key:"
          buttonStates={buttonStates}
          setButtonStates={setButtonStates}
          buttonValues={buttonValues}
          setButtonValues={setButtonValues}
        />
        <Button
          text="BeginTypingKey"
          label="Begin typing key:"
          buttonStates={buttonStates}
          setButtonStates={setButtonStates}
          buttonValues={buttonValues}
          setButtonValues={setButtonValues}
        />
        <Button
          text="EndTypingKey"
          label="End typing key:"
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
