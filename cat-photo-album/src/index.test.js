test('test works', () => {
  const element = document.createElement('div');
  element.innerHTML = '<h1>Hello, World</h1>';

  document.body.appendChild(element);

  expect(document.body).toHaveTextContent('Hello, World');
});
