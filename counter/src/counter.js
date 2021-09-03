export function fromEvent(element, event) {
  const handlers = [];
  const mappers = [];

  element.addEventListener(event, (e) => {
    const value = mappers.reduce((a, f) => f(a), e);

    handlers.forEach((handler) => {
      handler(value);
    });
  });

  return {
    subscribe(callback) {
      handlers.push(callback);
    },
    map(mapper) {
      mappers.push(mapper);
      return this;
    },
  };
}

export const xx = '';
