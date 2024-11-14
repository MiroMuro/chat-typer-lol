import { ButtonState } from "../Types/interfaces";

interface ConfirmButtonProps {
  buttonValues: Record<ButtonState, string>;
}
const useConfirm = () => {
  const confirmStartTypeKey = (key: string) => {
    window.ipcRenderer.sendStartKey(key);
  };
  const confirmEndTypeKey = (key: string) => {
    window.ipcRenderer.sendStopKey(key);
  };
  const confirmChatKeyOpenAndCloseKey = (key: string) => {
    window.ipcRenderer.sendChatOpenAndCloseKey(key);
  };

  const confirmKeys = ({ buttonValues }: ConfirmButtonProps) => {
    const { EndTypingKey, BeginTypingKey, OpenCloseChatKey } = buttonValues;
    confirmStartTypeKey(BeginTypingKey);
    confirmEndTypeKey(EndTypingKey);
    confirmChatKeyOpenAndCloseKey(OpenCloseChatKey);
  };

  return { confirmKeys };
};

export default useConfirm;
