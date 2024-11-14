import { ButtonState } from "../Types/interfaces";

interface ConfirmButtonProps {
  buttonValues: Record<ButtonState, string>;
}
const useConfirm = () => {
  const confirmStartTypeKey = (key: string) => {
    console.log("Start typing key confirmed: ", key);
  };
  const confirmEndTypeKey = (key: string) => {
    console.log("End typing key confirmed: ", key);
  };
  const confirmChatKeyOpenAndCloseKey = (key: string) => {
    console.log("Chat key open and close confirmed: ", key);
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
