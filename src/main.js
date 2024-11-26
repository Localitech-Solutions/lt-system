import { app, BrowserWindow } from "electron";

app.on("ready", () => {
    const win = new BrowserWindow({
        show: false
    });
    win.maximize();
    win.show();
    win.loadFile("./routes/login/login.html");
});

app.on("window-all-closed", () => {
    if (process.platform !== "darwin") app.quit();
});

