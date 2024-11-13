import { ButtonState } from "../Types/interfaces";
interface ConfirmButtonProps {
  buttonValues: Record<ButtonState, string>;
}
const ConfirmButton = ({ buttonValues }: ConfirmButtonProps) => {
  const noUnassignedButtons: boolean = Object.values(buttonValues).every(
    (value) => value !== ""
  );

  const isValidKey = (value: string): boolean => {
    const event = new KeyboardEvent("keydown", { key: value });
    return event.key === value;
  };

  const buttonValuesAreValidKeys: boolean =
    Object.values(buttonValues).every(isValidKey);

  const buttonValuesAreUnique: boolean =
    new Set(Object.values(buttonValues)).size ===
    Object.values(buttonValues).length;

  const buttonIsDisabled: boolean =
    noUnassignedButtons && buttonValuesAreValidKeys && buttonValuesAreUnique;

  return (
    <>
      <button disabled={!buttonIsDisabled} className="confirmButton">
        Confirm keys
      </button>
      <div className="keyConfirmationDiv">
        <ul>
          {noUnassignedButtons ? (
            ""
          ) : (
            <li className="keyError">Key values cant be unassigned!</li>
          )}

          {buttonValuesAreValidKeys ? (
            ""
          ) : (
            <li className="keyError">Key value(s) are not valid keys!</li>
          )}

          {buttonValuesAreUnique ? (
            ""
          ) : (
            <li className="keyError">Key values must be unique!</li>
          )}
        </ul>
      </div>
    </>
  );
};

export default ConfirmButton;
