import {
  fireEvent,
  getByText,
  getByLabelText,
} from '@testing-library/dom';

import Form from './Form';

describe('Form', () => {
  const handleClick = jest.fn();

  function renderForm() {
    const form = Form({ onClick: handleClick });

    document.body.appendChild(form);

    return form;
  }

  beforeEach(() => {
    document.body.innerHTML = '';
  });

  it('listens click event', () => {
    const app = renderForm();

    fireEvent.change(getByLabelText(app, '할 일'), {
      target: { value: '밥 먹기' },
    });

    fireEvent.click(getByText(app, '등록'));

    expect(handleClick).toBeCalled();
  });
});
