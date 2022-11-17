(() => {
  const button = document.querySelector("#button");
  const boczny = document.querySelector("#boczny");
  button.addEventListener("click", () => {
    boczny.classList.toggle("open");
  });
})();
