let iw = document.querySelector(".innerWidth");
let ih = document.querySelector(".innerHeight");

iw.textContent = `${window.innerWidth}px`;
ih.textContent = `${window.innerHeight}px`;

window.addEventListener("resize", () => {
  iw.textContent = `${window.innerWidth}px`;
  ih.textContent = `${window.innerHeight}px`;
});
