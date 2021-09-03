import store from './store.js';

import App from './App.js';

const root = document.getElementById('root');

const update = () => {
  root.innerHTML = '';
  root.appendChild(App());
};

store.initiate({ updateView: update });

(() => {
  update();
})();
