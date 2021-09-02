import { fireEvent, getByText } from '@testing-library/dom';

import $ from './elements';

describe('elements', () => {
  function render(element) {
    document.body.appendChild(element);
    return element;
  }

  beforeEach(() => {
    document.body.innerHTML = '';
  });

  test('element with text content', () => {
    const element = render($.h1({}, ['Hello, World']));

    expect(element).toHaveTextContent('Hello, World');
  });

  test('element with child node', () => {
    const element = render(
      $.div({}, [
        $.h1({}, ['Hello, World!']),
      ]),
    );

    expect(element).toHaveTextContent('Hello, World');
  });

  test('element with grand child node', () => {
    const element = render(
      $.div({}, [
        $.h1({}, ['Hello, World!']),
        $.div({}, [
          $.h1({}, ['Hi']),
        ]),
      ]),
    );

    expect(element).toHaveTextContent('Hi');
  });

  test('element with props', () => {
    const handleClick = jest.fn();

    const element = render(
      $.div({}, [
        $.h1({}, ['Hello, World!']),
        $.button({ onClick: handleClick }, ['click me']),
      ]),
    );

    fireEvent.click(getByText(element, 'click me'));

    expect(handleClick).toBeCalled();
  });
});
