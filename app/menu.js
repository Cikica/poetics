// @flow
import { app, Menu, shell, BrowserWindow } from 'electron';

import MenuRoot from './Menu/root';

export default class MenuBuilder {

  constructor(mainWindow, store) {
    this.mainWindow = mainWindow;
    this.store = store;
  }

  buildMenu() {

    if (process.env.NODE_ENV === 'development' || process.env.DEBUG_PROD === 'true') {
      this.setupDevelopmentEnvironment();
    }

    const template = MenuRoot(this.mainWindow, this.store);
    const menu = Menu.buildFromTemplate(template);
    Menu.setApplicationMenu(menu);

    return menu;
  }

    setupDevelopmentEnvironment() {
    this.mainWindow.openDevTools();
    this.mainWindow.webContents
      .on('context-menu', (e, props) => {
        const { x, y } = props;
        Menu
          .buildFromTemplate([{
            label: 'Inspect element',
            click: () => {
              this.mainWindow.inspectElement(x, y);
            }
          }])
          .popup(this.mainWindow);
      });
  }
}
