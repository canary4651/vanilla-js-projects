import { fromEvent } from './counter.js';

const root = document.getElementById('root');

const element = document.createElement('div');

let number = 50;

const plusNumber = () => {
  number += 1;
};

const minusNumber = () => {
  number -= 1;
};

const view = () => `
  <h1>Counter</h1>
  <input id="simple-input" />
  <p>${number}</p>
  <p>
    <button id="plus-button">plus</button>
    <button id="minus-button">minus</button>
  </p>
  `;

function bind({ update }) {
  const plusButton = document.getElementById('plus-button');
  const minusButton = document.getElementById('minus-button');
  const input = document.getElementById('simple-input');

  const plusClicks = fromEvent(plusButton, 'click');
  const minusClicks = fromEvent(minusButton, 'click');
  const inputs = fromEvent(input, 'input');

  plusClicks.subscribe(() => {
    plusNumber();
    update();
  });

  minusClicks.subscribe(() => {
    minusNumber();
    update();
  });

  inputs
    .map(({ target: { value } }) => value)
    .subscribe((value) => {
      console.log(value);
    });
}

const update = () => {
  element.innerHTML = '';
  element.innerHTML = view();
  bind({ update });
};

root.appendChild(element);

update();
