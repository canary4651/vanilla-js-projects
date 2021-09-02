/* eslint-disable no-param-reassign */

let update = null;
let proxy = null;

const state = {
  tasks: [],
};

const handler = {
  set: (target, prop, newValue) => {
    if (target[prop] !== newValue) {
      target[prop] = newValue;
      update();
    }
  },
};

const getStateProxy = () => {
  if (!proxy) {
    proxy = new Proxy(state, handler);
  }

  return proxy;
};

const store = {
  getState() {
    return getStateProxy();
  },
  initiate({ updateView }) {
    update = updateView;
  },
};

export default store;

export const useSelector = (selector) => selector(state);
