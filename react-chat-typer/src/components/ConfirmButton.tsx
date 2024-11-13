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
          <li>{noUnassignedButtons ? "" : "Some keys are unassigned!"}</li>
          <li>
            {buttonValuesAreValidKeys ? "" : "Key value(s) are not valid keys!"}
          </li>
          <li>
            {buttonValuesAreUnique ? "" : "Every key needs to be unique!"}
          </li>
        </ul>
      </div>
    </>
  );
};

export default ConfirmButton;
