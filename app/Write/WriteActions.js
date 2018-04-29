const actions = {
  WRITE_TITLE: 'writeTitle',
  WRITE: 'writeContent',
  SAVE: 'userSavesStory',
  SAVE_COMPLETE: 'userSavedAStory',
};

export default actions;

export const writeTitleAction = (title) => ({
  type: actions.WRITE_TITLE,
  payload: title
});

export const writeAction = (text) => ({
  type: actions.WRITE,
  payload: text
});

export const saveAction = () => ({
  type: actions.SAVE,
});

export const saveCompleteAction = (wut) => {
  console.log(wut);
  return {
    type: actions.SAVE_COMPLETE,
    // payload,
    // error
  }
};
