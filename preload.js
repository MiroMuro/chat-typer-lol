// See the Electron documentation for details on how to use preload scripts:
// https://www.electronjs.org/docs/latest/tutorial/process-model#preload-scripts
const { contextBridge, ipcRenderer } = require("electron");

contextBridge.exposeInMainWorld("ipcRenderer", {
  sendCopyPasta: (message) => ipcRenderer.send("copy-pasta", message),
  sendStartKey: (key) => ipcRenderer.send("start-key", key),
  sendStopKey: (key) => ipcRenderer.send("stop-key", key),
  sendChatOpenAndCloseKey: (key) => ipcRenderer.send("chat-open-key", key),
  sendChatTypingSpeed: (speed) => ipcRenderer.send("chat-typing-speed", speed),
});
