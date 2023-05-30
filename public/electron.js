process.env.ELECTRON_ENABLE_SECURITY_WARNINGS = true;
const { app, BrowserWindow,Menu,ipcMain,nativeTheme  } = require('electron');
const path = require('path');
const isDev = require('electron-is-dev');

function createWindow() {
  // Create the browser window.
  const win = new BrowserWindow({
    icon: path.join(__dirname, 'imagens', 'logo.png'),
    width: 700,
    height: 500,
    minWidth: 550, 
    minHeight: 500, 
    webPreferences: {
      nodeIntegration: true,
      contextIsolation: false,
      enableremotemodule:true,
    },
  });


  win.loadURL(
    isDev
      ? 'http://localhost:3000'
      : `file://${path.join(__dirname, 'index.html')}`
  );
  
  win.center();

  if (isDev) {
    win.webContents.openDevTools({ mode: 'detach' });
  }
}

const mainMenu = Menu.buildFromTemplate([]);
Menu.setApplicationMenu(mainMenu);

app.whenReady().then(createWindow);

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit();
  }
});

ipcMain.on("changewindowsize", (event, width, height) => {
  const janelaAtual = BrowserWindow.getFocusedWindow();
  janelaAtual.setSize(width, height);
});

ipcMain.on("changePositionWindow", (event, x, y) => {
  const janelaAtual = BrowserWindow.getFocusedWindow();
  janelaAtual.setPosition(x, y);
});

ipcMain.on("changewindowcolor", (event, cor) => {
  if (nativeTheme.shouldUseDarkColors) {
    nativeTheme.themeSource = 'system'; 
  }

  // Obter a janela atual
  const janelaAtual = BrowserWindow.getFocusedWindow();

  // Definir a cor de fundo da janela
  janelaAtual.setBackgroundColor(cor);
});


app.on('activate', () => {
  if (BrowserWindow.getAllWindows().length === 0) {
    createWindow();
  }

  




});