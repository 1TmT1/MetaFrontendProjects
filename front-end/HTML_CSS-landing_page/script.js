const downArrow = document.querySelector("#down-arrow");
const mainCover = document.querySelector("#main-cover");
const scrollable = document.querySelector(".scrollable");
const mainSection = document.querySelector(".main-section");
const mainImage = document.querySelector(".header-image");

const ease = 0.1;
let current = 0;
let target = 0;

function lerp(start, end, t) {
  return start * (1 - t) + end * t;
}

function init() {
  document.body.style.height = `${scrollable.getBoundingClientRect().height}`;
  window.scrollTo(0, 0);
  document.body.classList.add("stop-scrolling");
  setTimeout(() => {
    document.body.classList.remove("stop-scrolling");
  }, 4000);
}

window.addEventListener("scroll", () => {
  let num = window.scrollY / (window.innerHeight / 4);

  if (num > 0) {
    downArrow.style.animation = "none";
  } else {
    downArrow.style.animation = "";
    downArrow.style.animationDelay = "0s";
  }
  mainCover.style.background = `linear-gradient(lightyellow ${(1 - num) * 100}%, rgba(255, 255, 224, 0.2))`;

  if (
    !mainImage.style.top ||
    parseInt(mainImage.style.top.slice(0, -2)) < 0 ||
    (1 - num) * 100 > 0
  ) {
    mainSection.style.top = `${Math.max(40, 50 - num * 0.1 * 100)}%`;
    mainImage.style.top = `${Math.min(num * 100 - 200, 0)}px`;
  }

  if (parseInt(mainImage.style.top.slice(0, -2)) >= 0) {
  }
});

init();
