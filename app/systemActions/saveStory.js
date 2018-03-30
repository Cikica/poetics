import fs from 'fs';
import { dialog } from 'electron';
import { head } from 'ramda';

const writeFile = (path, content) => {
  fs.writeFile(path, content, (error) => {
    if (error) {
      console.log('we fucked up', error);
    } else {
      console.log('we good');
    }
  });
}

export default () => {
  let saveDirectory = head(dialog.showOpenDialog({ properties: ['openDirectory'] }));
  let projectName = 'whoYou.txt';
  writeFile(
    `${saveDirectory}/${projectName}`,
    'yes yes moustache'
  );
};
