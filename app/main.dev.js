import { createStore, applyMiddleware, compose } from 'redux';
import { forwardToRenderer, triggerAlias, replayActionMain } from 'electron-redux';
import { app, BrowserWindow } from 'electron';
import MenuBuilder from './menu';

import RootReducer from './RootReducer';

let mainWindow = null;

if (process.env.NODE_ENV === 'production') {
  const sourceMapSupport = require('source-map-support');
  sourceMapSupport.install();
}

if (process.env.NODE_ENV === 'development' || process.env.DEBUG_PROD === 'true') {
  require('electron-debug')();
  const path = require('path');
  const p = path.join(__dirname, '..', 'app', 'node_modules');
  require('module').globalPaths.push(p);
}

const installExtensions = async () => {

  const installer = require('electron-devtools-installer');
  const forceDownload = !!process.env.UPGRADE_EXTENSIONS;
  const extensions = [
    'REACT_DEVELOPER_TOOLS',
    'REDUX_DEVTOOLS'
  ];

  return Promise
    .all(extensions.map(name => installer.default(installer[name], forceDownload)))
    .catch(console.log);
};

const store = createStore(
  RootReducer,
  {}, // optional
  applyMiddleware(
    triggerAlias, // optional, see below
    // ...otherMiddleware,
    forwardToRenderer,
  ),
);

replayActionMain(store);

app.on('window-all-closed', () => {
  // Respect the OSX convention of having the application in memory even
  // after all windows have been closed
  if (process.platform !== 'darwin') {
    app.quit();
  }
});


app.on('ready', async () => {

  // EXTENSIONS
  if (process.env.NODE_ENV === 'development' || process.env.DEBUG_PROD === 'true') {
    await installExtensions();
  }

  // WINDOW
  mainWindow = new BrowserWindow({
    show: false,
    width: 1024,
    height: 728
  });

  mainWindow.loadURL(`file://${__dirname}/app.html`);

  mainWindow.webContents
    .on('did-finish-load', () => {
      if (!mainWindow) {
        throw new Error('"mainWindow" is not defined');
      }
      mainWindow.show();
      mainWindow.focus();
    });

  mainWindow.on('closed', () => {
    mainWindow = null;
  });

  // MENU
  const menuBuilder = new MenuBuilder(mainWindow, store);
  menuBuilder.buildMenu();
});
