const actions = {
  WRITE: 'writeContent'
};

export default actions;

export const writeAction = (text) => ({
  type: actions.WRITE,
  text
});
