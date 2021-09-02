function createElement(tag, props, childern) {
  const element = document.createElement(tag);

  Object.entries(props || {}).forEach(([key, value]) => {
    if (typeof value === 'string') {
      element.setAttribute(key, value);
      return;
    }

    element[key.toLocaleLowerCase()] = value;
  });

  childern.forEach((child) => {
    if (child instanceof Node) {
      element.appendChild(child);
      return;
    }

    element.appendChild(
      document.createTextNode(child),
    );
  });

  return element;
}

const factory = (tagName) => (...args) => createElement(tagName, ...args);

const elements = {
  h1: factory('h1'),
  div: factory('div'),
  button: factory('button'),
  form: factory('form'),
  label: factory('label'),
  input: factory('input'),
  ul: factory('ul'),
  li: factory('li'),
};

export default elements;
