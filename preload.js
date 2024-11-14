// See the Electron documentation for details on how to use preload scripts:
// https://www.electronjs.org/docs/latest/tutorial/process-model#preload-scripts
const { contextBridge, ipcRenderer } = require("electron");

contextBridge.exposeInMainWorld("ipcRenderer", {
  sendCopyPasta: (message) => ipcRenderer.send("copy-pasta", message),
  sendStartKey: (key) => ipcRenderer.send("start-key", key),
  sendStopKey: (key) => ipcRenderer.send("stop-key", key),
  sendChatOpenAndCloseKey: (key) =>
    ipcRenderer.send("chat-open-and-close-key", key),
  sendChatTypingSpeed: (speed) => ipcRenderer.send("chat-typing-speed", speed),
  receiveCopyPasta: (channel, func) =>
    ipcRenderer.on(channel, (event, ...args) => func(...args)),
  receiveStartKey: (channel, func) =>
    ipcRenderer.on(channel, (event, ...args) => func(...args)),
  receiveStopKey: (channel, func) =>
    ipcRenderer.on(channel, (event, ...args) => func(...args)),
  receiveChatOpenAndCloseKey: (channel, func) =>
    ipcRenderer.on(channel, (event, ...args) => func(...args)),
  receiveChatTypingSpeed: (channel, func) =>
    ipcRenderer.on(channel, (event, ...args) => func(...args)),
});
