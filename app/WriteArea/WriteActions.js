const actions = {
  WRITE: 'writeContent',
  SHOW_ALL_TEXT: 'userWantsToSeeAll',
  FILTER_BY_SCENE: 'userFiltersByScene',
  FILTER_BY_ACT: 'userFiltersByAct',
  FILTER_BY_OUTLINE: 'userFiltersByOutline',
};

export default actions;

export const writeAction = (text) => ({
  type: actions.WRITE,
  text
});

export const showAllTextAction = () => ({
  type: actions.SHOW_ALL_TEXT
});

export const filterBySceneAction = () => ({
  type: actions.FILTER_BY_SCENE
});

export const filterByActAction = () => ({
  type: actions.FILTER_BY_ACT
});

export const filterByOutlineAction = () => ({
  type: actions.FILTER_BY_OUTLINE
});
