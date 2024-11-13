import { useState, useEffect, useCallback } from "react";

interface ButtonProps<T extends string> {
  text: T;
  buttonStates: Record<T, boolean>;
  setButtonStates: React.Dispatch<React.SetStateAction<Record<T, boolean>>>;
  buttonValues: Record<T, string>;
  setButtonValues: React.Dispatch<React.SetStateAction<Record<T, string>>>;
  label: string;
}

const Button = <T extends string>({
  text,
  buttonStates,
  setButtonStates,
  buttonValues,
  setButtonValues,
  label,
}: ButtonProps<T>) => {
  const [listening, setListening] = useState(false);

  const keyDownHandler = useCallback(
    (event: KeyboardEvent) => {
      event.preventDefault();
      console.log("Keydown event:", event.key, "for button: ", text);
      setButtonValues((prevValues) => ({ ...prevValues, [text]: event.key }));
      //setPressedButton(event.key);
      setListening(false);
    },
    [text, setButtonValues]
  );

  const handleButtonClick = () => {
    console.log("Button clicked:", text);
    setButtonValues((prevValues) => ({ ...prevValues, [text]: "" }));

    //Can listen multiple buttons at once, not intended behavior.
    //setButtonStates((prevStates) => ({ ...prevStates, [text]: true }));

    setButtonStates((prevStates) => ({
      ...Object.keys(prevStates).reduce(
        (acc, key) => ({ ...acc, [key]: key === text }),
        { [text]: true } as Record<T, boolean>
      ),
    }));

    console.log("Button states:", buttonStates);
    setListening(true);
  };

  useEffect(() => {
    if (listening && buttonStates[text]) {
      console.log("Adding event listener for button:", text);
      window.addEventListener("keydown", keyDownHandler);
    }
    //Remove event listener when unmounting, or dependencies change.
    return () => {
      //setListening(false);
      console.log("Removing event listener for button:", text);
      window.removeEventListener("keydown", keyDownHandler);
    };
  }, [listening, buttonStates, text, keyDownHandler]);

  return (
    <div className="buttonAndLabelDiv">
      <label htmlFor={`button-${text}`} className="label">
        {label}
      </label>
      <button
        id={`button-${text}`}
        className="button"
        onClick={handleButtonClick}
        // Add visual feedback for active state
        style={{
          backgroundColor: listening && buttonStates[text] ? "gray" : "black",
          border:
            listening && buttonStates[text]
              ? "2px solid green"
              : "2px solid black",
        }}
      >
        {buttonValues[text] ||
          (listening && buttonStates[text] ? "Listening..." : "")}
      </button>
    </div>
  );
};

export default Button;
