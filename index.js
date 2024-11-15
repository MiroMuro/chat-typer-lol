const { app, BrowserWindow, ipcMain } = require("electron");
const path = require("node:path");
const url = require("url");

// Handle creating/removing shortcuts on Windows when installing/uninstalling.
if (require("electron-squirrel-startup")) {
  app.quit();
}

const createWindow = () => {
  // Create the browser window.
  const mainWindow = new BrowserWindow({
    width: 1200,
    height: 900,
    webPreferences: {
      preload: path.join(__dirname, "preload.js"),
    },
  });

  // Open the DevTools.
  mainWindow.webContents.openDevTools();

  const prodUrl = url.format({
    pathname: path.join(__dirname, "./react-chat-type/build/index.html"),
    protocol: "file",
  });

  const devUrl = "http://localhost:5173/";

  mainWindow.loadURL(devUrl);
};

app.whenReady().then(() => {
  createWindow();

  // On OS X it's common to re-create a window in the app when the
  // dock icon is clicked and there are no other windows open.
  app.on("activate", () => {
    if (BrowserWindow.getAllWindows().length === 0) {
      createWindow();
    }
  });
});

// Quit when all windows are closed, except on macOS. There, it's common
// for applications and their menu bar to stay active until the user quits
// explicitly with Cmd + Q.
app.on("window-all-closed", () => {
  if (process.platform !== "darwin") {
    app.quit();
  }
});

ipcMain.on("start-key", (event, key) => {
  event.reply("start-key", { key: key, status: true });
});

ipcMain.on("stop-key", (event, key) => {
  event.reply("stop-key", { key: key, status: true });
});

ipcMain.on("chat-open-and-close-key", (event, key) => {
  event.reply("chat-open-and-close-key", { key: key, status: true });
});

ipcMain.on("copy-pasta", (event) => {
  console.log("Copy pasta event received");
  event.reply("copy-pasta", { status: true });
});
