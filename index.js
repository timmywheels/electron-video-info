const electron = require('electron')
const ffmpeg = require('fluent-ffmpeg')

const { app, BrowserWindow, ipcMain } = electron;

const { MetaData } = require('fluent-ffmpeg')

let mainWindow;

app.on('ready', () => {
    mainWindow = new BrowserWindow({
        webPreferences: {
            nodeIntegration: true
        }
    })
    mainWindow.loadURL(`file://${ __dirname }/index.html`)
})

ipcMain.on('video:submit', (event, path) => {
    ffmpeg.ffprobe(path, (err, metadata) => {
        if (err) {
            console.log(`Error: ${err}`)
        } else {
            const { duration } = metadata.format;
            mainWindow.webContents.send('video:metadata', duration)
            // console.log(`Video duration is: ${metadata.format.duration} seconds`)
        }
    })
})



