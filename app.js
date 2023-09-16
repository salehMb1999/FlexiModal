const $ = document;
let openBtn = $.querySelector("button");
let modal = $.querySelector(".modalWrapper");
let section = $.querySelector("section");
let times = $.querySelector(".fa-times");
openBtn.addEventListener("click", () => {
  modal.style.top = "20rem";
  section.style.filter = "blur(5px)";
});
times.addEventListener("click", () => {
  modal.style.top = "-20rem";
  section.style.filter = "blur(0px)";
});
document.body.addEventListener("keydown", (event) => {
  if ((event.key = "Escape")) {
    modal.style.top = "-20rem";
    section.style.filter = "blur(0px)";
  }
});
