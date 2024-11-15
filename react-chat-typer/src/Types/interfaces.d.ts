export type ButtonState =
  | "EndTypingKey"
  | "BeginTypingKey"
  | "OpenCloseChatKey";

export interface ipcRenderer {
  sendCopypasta: (copypasta: string) => void;
  sendStartKey: (key: string) => void;
  sendStopKey: (key: string) => void;
  sendChatOpenAndCloseKey: (key: string) => void;
  receiveStartKey: (
    channel: string,
    func: (data: { key: string; status: boolean }) => void
  ) => void;
  receiveStopKey: (
    channel: string,
    func: (data: { key: string; status: boolean }) => void
  ) => void;
  receiveChatOpenAndCloseKey: (
    channel: string,
    func: (data: { key: string; status: boolean }) => void
  ) => void;
  removeStartKeyListener: (channel: string) => void;
}

declare global {
  interface Window {
    ipcRenderer: ipcRenderer;
  }
}
