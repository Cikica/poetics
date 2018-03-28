// @flow
import { BrowserWindow } from 'electron';

import main from './main';
import edit from './edit';
import view from './view';
import window from './window';

export default (mainWindow: BrowserWindow) => [
  main(mainWindow),
  edit(mainWindow),
  view(mainWindow),
  window(mainWindow),
];
