const btnMode = document.querySelector('#theme-toggle');

btnMode.addEventListener("click", () => {
  document.documentElement.classList.toggle("dark");
});
