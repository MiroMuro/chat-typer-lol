// See the Electron documentation for details on how to use preload scripts:
// https://www.electronjs.org/docs/latest/tutorial/process-model#preload-scripts
const { contextBridge, ipcRenderer } = require("electron");
console.log("Load script running");

contextBridge.exposeInMainWorld("ipcRenderer", {
  //Send methods
  sendCopyPasta: (message) => ipcRenderer.send("copy-pasta", message),
  sendStartKey: (key) => ipcRenderer.send("start-key", key),
  sendStopKey: (key) => ipcRenderer.send("stop-key", key),
  sendChatOpenAndCloseKey: (key) =>
    ipcRenderer.send("chat-open-and-close-key", key),
  sendChatTypingSpeed: (speed) => ipcRenderer.send("chat-typing-speed", speed),

  //Receive methods
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

  //Stop listening methods.
  removeCopyPastaListener: (channel) =>
    ipcRenderer.removeListener(channel, () => {}),
  removeStartKeyListener: (channel) =>
    ipcRenderer.removeListener(channel, () => {}),
});
