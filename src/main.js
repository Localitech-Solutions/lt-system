import { app, BrowserWindow } from "electron";

app.on("ready", () => {
    const win = new BrowserWindow({
        width: 800,
        height: 600
    });

    win.loadFile("./routes/login/login.html");
});

app.on("window-all-closed", () => {
    if (process.platform !== "darwin") app.quit();
});

