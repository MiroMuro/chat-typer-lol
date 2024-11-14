import { useState, useEffect } from "react";
import { ButtonState } from "../Types/interfaces";
interface StatusBarProps {
  status: string;
}

type keyAndStatus = {
  key: string;
  status: boolean;
};

type Button<T> = {
  [K in keyof T]: keyAndStatus;
};

const StatusBar = ({ status }: StatusBarProps) => {
  const [buttons, setButtons] = useState<Button<ButtonState>>(
    () => ({} as Button<ButtonState>)
  );

  useEffect(() => {});

  return (
    <span className="statusBar">
      {!status && <p>No status yet</p>} : {status}
    </span>
  );
};

export default StatusBar;
