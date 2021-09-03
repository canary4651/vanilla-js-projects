const initialState = {
  count: 0,
};

const reducer = (state, action) => ({
  plus: () => ({ count: state.count + 1 }),
  minus: () => ({ count: state.count - 1 }),
})[action.type]();

const store = {
  updateView: null,
  state: initialState,
  dispatch(action) {
    this.state = reducer(this.state, action);
    this.updateView();
  },
  initiate({ update }) {
    this.updateView = update;
  },
};

export const useStore = () => [
  store.state,
  store.dispatch.bind(store),
];

export default store;
