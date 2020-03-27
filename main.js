const {app, BrowserWindow} = require('electron');

let mainWindow;

app.on('ready', function() {
  mainWindow = new BrowserWindow({x: 180, y: 180, width: 500, height: 500, webPreferences: {nodeIntegration: true}});
  mainWindow.loadURL('file://' + __dirname + '/index.html');
  mainWindow.on('close', () => {
    for (let window of BrowserWindow.getAllWindows()) {
      if (window != mainWindow)
        window.close();
    }
  })
});
