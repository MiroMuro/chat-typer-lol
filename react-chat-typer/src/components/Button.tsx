import { useState, useEffect, useCallback } from "react";

interface ButtonProps {
  onClick?: () => void;
  text: ButtonState;
  buttonStates: {
    CA: boolean;
    CS: boolean;
    AK: boolean;
    KM: boolean;
  };
  setButtonStates: React.Dispatch<
    React.SetStateAction<{
      CA: boolean;
      CS: boolean;
      AK: boolean;
      KM: boolean;
    }>
  >;
  buttonValues: {
    CA: string;
    CS: string;
    AK: string;
    KM: string;
  };
  setButtonValues: React.Dispatch<
    React.SetStateAction<{
      CA: string;
      CS: string;
      AK: string;
      KM: string;
    }>
  >;
}

type ButtonState = "CA" | "CS" | "AK" | "KM";

const Button = ({
  text,
  buttonStates,
  setButtonStates,
  buttonValues,
  setButtonValues,
}: ButtonProps) => {
  const [pressedButton, setPressedButton] = useState("");
  const [listening, setListening] = useState(false);

  const keyDownHandler = useCallback(
    (event: KeyboardEvent) => {
      event.preventDefault();
      console.log("Keydown event:", event.key, "for button: ", text);
      setPressedButton(event.key);
      setListening(false);
    },
    [text]
  );

  const handleButtonClick = () => {
    console.log("Button clicked:", text);

    // First, update button states
    const newStates = {
      CA: false,
      CS: false,
      AK: false,
      KM: false,
    };
    newStates[text] = true;
    setButtonStates(newStates);

    // Then set up listening
    //setPressedButton("");
    setListening(true);
  };

  // Clean up effect
  useEffect(() => {
    if (listening && buttonStates[text]) {
      console.log("Adding event listener for button:", text);
      window.addEventListener("keydown", keyDownHandler);
    }
    //Remove event listener when unmounting, or dependencies change.
    return () => {
      console.log("Removing event listener for button:", text);
      window.removeEventListener("keydown", keyDownHandler);
    };
  }, [listening, buttonStates, text, keyDownHandler]);

  return (
    <>
      <label htmlFor={`button-${text}`} className="label">
        {text}
      </label>
      <button
        id={`button-${text}`}
        className="button"
        onClick={handleButtonClick}
        // Add visual feedback for active state
        style={{
          backgroundColor: buttonStates[text] ? "#e0e0e0" : "white",
          border: listening ? "2px solid blue" : "1px solid black",
        }}
      >
        {pressedButton || (listening ? "Listening..." : "")}
      </button>
    </>
  );
};

export default Button;
