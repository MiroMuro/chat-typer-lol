export type ButtonState =
  | "EndTypingKey"
  | "BeginTypingKey"
  | "OpenCloseChatKey";

export interface ipcRenderer {
  sendCopypasta: (copypasta: string) => void;
  sendStartKey: (key: string) => void;
  sendStopKey: (key: string) => void;
  sendChatOpenAndCloseKey: (key: string) => void;
}

declare global {
  interface Window {
    ipcRenderer: ipcRenderer;
  }
}
