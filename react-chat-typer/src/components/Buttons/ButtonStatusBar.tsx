import { useState, useEffect } from "react";
import { ButtonState } from "../../Types/interfaces";

type keyAndStatus = {
  key: string;
  status: boolean;
};

type Button = {
  [K in ButtonState]: keyAndStatus;
};
//(alias) type ButtonState = "EndTypingKey" | "BeginTypingKey" | "OpenCloseChatKey"

const StatusBar = () => {
  const [buttons, setButtons] = useState<Button>({
    EndTypingKey: { key: "", status: false },
    BeginTypingKey: { key: "", status: false },
    OpenCloseChatKey: { key: "", status: false },
  });

  useEffect(() => {
    window.ipcRenderer.receiveStartKey("start-key", (data: keyAndStatus) => {
      setButtons((prev) => {
        return { ...prev, BeginTypingKey: data };
      });
    });
    window.ipcRenderer.receiveStopKey("stop-key", (data: keyAndStatus) => {
      setButtons((prev) => {
        return { ...prev, EndTypingKey: data };
      });
    });
    window.ipcRenderer.receiveChatOpenAndCloseKey(
      "chat-open-and-close-key",
      (data: keyAndStatus) => {
        setButtons((prev) => {
          return { ...prev, OpenCloseChatKey: data };
        });
      }
    );

    return () => {
      window.ipcRenderer.removeStartKeyListener("start-key");
    };
  }, []);

  return (
    <span className="statusBar">
      <ButtonStatus
        buttonState={buttons.BeginTypingKey}
        buttonName="Begin typing key"
      />
      <ButtonStatus
        buttonState={buttons.EndTypingKey}
        buttonName="Stop typing key"
      />
      <ButtonStatus
        buttonState={buttons.OpenCloseChatKey}
        buttonName="Open and close chat key"
      />
    </span>
  );
};

const ButtonStatus = ({
  buttonState,
  buttonName,
}: {
  buttonState: keyAndStatus;
  buttonName: string;
}) => {
  return (
    <>
      <div className="buttonStatus">
        <header>{buttonName} status:</header>
        <p>
          {!buttonState.status ? (
            <div>Not defined</div>
          ) : (
            <div>Set to key: {buttonState.key}</div>
          )}
        </p>
      </div>
    </>
  );
};

export default StatusBar;
