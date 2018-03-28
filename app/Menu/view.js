// @flow
import { app, BrowserWindow } from 'electron';

const subMenuViewDev = (mainWindow: BrowserWindow) => ({
  label: 'View',
  submenu: [
    { label: 'Reload', accelerator: 'Command+R', click: () => { mainWindow.webContents.reload(); } },
    { label: 'Toggle Full Screen', accelerator: 'Ctrl+Command+F', click: () => { mainWindow.setFullScreen(!mainWindow.isFullScreen()); } },
    { label: 'Toggle Developer Tools', accelerator: 'Alt+Command+I', click: () => { mainWindow.toggleDevTools(); } }
  ]
});

const subMenuViewProd = (mainWindow: BrowserWindow) => ({
  label: 'View',
  submenu: [
    { label: 'Toggle Full Screen', accelerator: 'Ctrl+Command+F', click: () => { mainWindow.setFullScreen(!mainWindow.isFullScreen()); } }
  ]
});

export default (
  process.env.NODE_ENV === 'development'
    ? subMenuViewDev
    : subMenuViewProd
);
