const actions = {
  WRITE_TITLE: 'writeTitle',
  WRITE: 'writeContent',
  OPEN: 'userOpensStory',
  OPEN_COMPLETE: 'userOpenedStory',
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


export const saveCompleteAction = () => {
  return {
    type: actions.SAVE_COMPLETE,
    // payload,
    // error
  }
};

export const openAction = () => ({
  type: actions.OPEN
});

export const openCompleteAction = (content) => ({
  type: actions.OPEN_COMPLETE,
  payload: content
});
