// @flow
import { BrowserWindow } from 'electron';

import main from './main';
import edit from './edit';
import view from './view';
import window from './window';

export default (mainWindow, store) => [
  main(mainWindow, store),
  edit(mainWindow, store),
  view(mainWindow, store),
  window(mainWindow, store),
];
