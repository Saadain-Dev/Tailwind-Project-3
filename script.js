// NAV //
let navBtn = document.getElementById("nav-btn");
let mobileNav = document.getElementById("nav");

navBtn.onclick = () => {
  mobileNav.style.maxHeight = mobileNav.style.maxHeight ? null : mobileNav.scrollHeight + "px";
};
// NAV //
let text = document.querySelector(".text-center");
let words = ["Front-End Developer", "Responsive Expert"];
let wordIndex = 0, charIndex = 0;

function type() {
  text.textContent = words[wordIndex].slice(0, ++charIndex) + "|";
  if (charIndex < words[wordIndex].length) {
    setTimeout(type, 100);
  } else {
    setTimeout(erase, 1000);
  }
}

function erase() {
  text.textContent = words[wordIndex].slice(0, --charIndex) + "|";
  if (charIndex > 0) {
    setTimeout(erase, 100);
  } else {
    wordIndex = (wordIndex + 1) % words.length;
    setTimeout(type, 500);
  }
}

type();