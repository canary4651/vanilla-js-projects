import $ from './elements.js';

export default function Form({ onClick }) {
  const handleClick = () => {
    const input = document.getElementById('input-todo');

    onClick(input.value);
  };

  return (
    $.form({}, [
      $.label({ for: 'input-todo' }, ['할 일']),
      $.input({ id: 'input-todo' }, []),
      $.button({
        type: 'button',
        onClick: handleClick,
      }, ['등록']),
    ])
  );
}
