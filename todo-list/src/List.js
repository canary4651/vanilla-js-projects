import $ from './elements.js';

export default function List({ tasks, onClickDelete, onClickComplete }) {
  return (
    $.ul({}, tasks.map(({ id, title, complete }) => (
      $.li({ id }, [
        `${complete ? `${title} [완료]` : title}`,
        $.button({ onClick: () => onClickDelete(id) }, ['삭제']),
        $.button({ onClick: () => onClickComplete(id) }, ['완료']),
      ])
    )))
  );
}
