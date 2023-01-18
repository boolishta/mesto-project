export function listenOutsideClick(element) {
  let tempFunction;
  let close;
  const promise = new Promise((resolve) => {
    close = resolve;
    tempFunction = function (event) {
      if (element && !element.contains(event.target)) {
        resolve();
      }
    };
    setTimeout(() => {
      document.addEventListener("click", tempFunction);
    }, 0);
  }).then(() => document.removeEventListener("click", tempFunction));

  return { promise, close };
}
