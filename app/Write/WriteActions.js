const actions = {
  WRITE: 'writeContent',
  SAVE: 'userSavesStory',
  SAVE_COMPLETE: 'userSavedAStory',
};

export default actions;

export const writeAction = (text) => ({
  type: actions.WRITE,
  text
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
