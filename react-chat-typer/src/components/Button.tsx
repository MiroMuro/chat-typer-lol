import { useState, useEffect, useCallback } from "react";

interface ButtonProps<T extends string> {
  text: T;
  buttonStates: Record<T, boolean>;
  setButtonStates: React.Dispatch<React.SetStateAction<Record<T, boolean>>>;
  buttonValues: Record<T, string>;
  setButtonValues: React.Dispatch<React.SetStateAction<Record<T, string>>>;
}

const Button = <T extends string>({
  text,
  buttonStates,
  setButtonStates,
  buttonValues,
  setButtonValues,
}: ButtonProps<T>) => {
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
    setPressedButton("");
    setButtonStates((prevStates) => ({ ...prevStates, [text]: true }));

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
          backgroundColor: buttonStates[text] ? "#e0e0e0" : "black",
          border: listening ? "2px solid green" : "2px solid black",
        }}
      >
        {pressedButton || (listening ? "Listening..." : "")}
      </button>
    </>
  );
};

export default Button;
