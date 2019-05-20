const electron = require('electron')

const { app, BrowserWindow } = electron;

const { MetaData } = require('fluent-ffmpeg')

app.on('ready', () => {
    const mainWindow = new BrowserWindow({
        webPreferences: {
            nodeIntegration: true
        }
    })
    mainWindow.loadURL(`file://${ __dirname }/index.html`)
})



