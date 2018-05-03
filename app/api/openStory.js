import fs from 'fs';
import { head, isNil } from 'ramda';

export default (projectName, content) => {
  return new Promise((resolve, reject) => {
    console.log('do it');
    const dialog = require('electron').remote.dialog
    let dialogFile = dialog.showOpenDialog({
      properties: ['openDirectory', 'openFile']
    });

    if (isNil(dialogFile)) {
      reject({});
    } else {
      fs.readFile(
        head(dialogFile),
        'utf8',
        (error, data) => {
          if (error) {
            reject(error);
          } else {
            resolve(data);
          }
        }
      );
    }
  });
};
