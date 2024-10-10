// NAV //
let navBtn = document.getElementById("nav-btn");
let mobileNav = document.getElementById("nav");

navBtn.onclick = () => {
  mobileNav.style.maxHeight = mobileNav.style.maxHeight ? null : mobileNav.scrollHeight + "px";
};
// NAV //
// header //
let text = document.querySelector(".name");
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
// header //
const iconContainer = document.querySelector(".icon");
const iconData = [
  {icon: "fa-brands fa-whatsapp", link: ""},
  {icon: "fa-brands fa-linkedin", link: "https://www.linkedin.com/in/saadain-hussain-arif-58332a31b/"},
  {icon: "fa-brands fa-github", link: "https://github.com/Saadain-Dev"},
  {icon: "fa-brands fa-facebook", link: "https://www.facebook.com/saadainhussainarif.shaikh"},
  {icon: "fa-brands fa-instagram", link: "https://www.instagram.com/_saadain_shaikh/"}
]
const iconCard = (item) =>{return `<a href="${item.link}" class="text-3xl text-white"><i class="${item.icon}"></i></a>`}
// MAIN FUNCATION //
const renderData = (data, container, fun) => {
  container.innerHTML = `${data.map(fun).join("")}`;};
// MAIN FUNCATION //
renderData(iconData, iconContainer, iconCard);


const FrontendData = [
  {icon: "fab fa-html5 text-4xl", desc: "HTML"},
  {icon: "fab fa-css3-alt text-4xl", desc: "Css"},
  {icon: "fab fa-bootstrap text-4xl", desc: "Bootstrap"},
  {icon: "fas fa-wind text-4xl", desc: "Tailwind"},
  {icon: "fab fa-js text-4xl", desc: "Javascript"},
]

const FrontendContainer = document.querySelector(".frontend");
const FrontendCard = (item) =>{
  return `
  <div class="w-28 h-28 rounded-md bg-gray-900 text-white flex flex-col gap-2 justify-center items-center">
<i class="${item.icon}"></i>
<p>${item.desc}</p>
</div>
  `}
  renderData(FrontendData, FrontendContainer, FrontendCard);
  

