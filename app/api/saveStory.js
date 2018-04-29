import fs from 'fs';
import { head, isNil } from 'ramda';

export default (projectName, content) => {
  return new Promise((resolve, reject) => {

    const dialog = require('electron').remote.dialog
    let dialogDirectory = dialog.showOpenDialog({
      properties: ['openDirectory', 'openFile']
    });

    if (isNil(dialogDirectory)) {
      reject({});
    } else {
      let path = head(dialogDirectory)+`/${projectName}.txt`;
      console.log(path);
      fs.writeFile(
        path,
        content,
        (error) => error ? reject(error) : resolve({ path, content })
      );
    }
  });
};
