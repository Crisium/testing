const electron = require("electron");
const url = require("url");
const path = require("path");

const { app, BrowserWindow } = electron;

let main_window;

// Listen for the app to be ready
app.on("ready", () => {

	// create new window
	main_window = new BrowserWindow({
		webPreferences: {
			nodeIntegration: true,
			contextIsolation: false
		}
	});

	// load html into window
	main_window.loadURL(url.format({
		pathname: path.join(__dirname, "index.html"),
		protocal: "file:",
		slashes: true
	}));

   // main_window.webContents.openDevTools();
});