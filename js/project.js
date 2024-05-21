const project1 = document.querySelector("#project1");
const project2 = document.querySelector("#project2");
const project3 = document.querySelector("#project3");
const project4 = document.querySelector("#project4");
const project5 = document.querySelector("#project5");
const DiscordBot = document.querySelector(".DiscordBot");
const Busanheng = document.querySelector(".Busanheng");
const PortfolioWeb = document.querySelector(".PortfolioWeb");
const DiscordWebCopy = document.querySelector(".DiscordWebCopy");
const ChromeDinosaurGame = document.querySelector(".ChromeDinosaurGame");

function AllDisplayHidden() {
  DiscordBot.style.cssText = `opacity: 0; visibility: hidden;`;
  Busanheng.style.cssText = `opacity: 0; visibility: hidden;`;
  PortfolioWeb.style.cssText = `opacity: 0; visibility: hidden;`;
  DiscordWebCopy.style.cssText = `opacity: 0; visibility: hidden;`;
  ChromeDinosaurGame.style.cssText = `opacity: 0; visibility: hidden;`;
  project1.classList.remove("active");
  project2.classList.remove("active");
  project3.classList.remove("active");
  project4.classList.remove("active");
  project5.classList.remove("active");
}

project1.addEventListener("click", () => {
  AllDisplayHidden();
  project1.classList.add("active");
  DiscordBot.style.cssText = `display: flex; opacity: 1; visibility: visible;`;
})

project2.addEventListener("click", () => {
  AllDisplayHidden();
  project2.classList.add("active");
  Busanheng.style.cssText = `display: flex; opacity: 1; visibility: visible;`;
})

project3.addEventListener("click", () => {
  AllDisplayHidden();
  project3.classList.add("active");
  PortfolioWeb.style.cssText = `display: flex; opacity: 1; visibility: visible;`;
})

project4.addEventListener("click", () => {
  AllDisplayHidden();
  project4.classList.add("active");
  DiscordWebCopy.style.cssText = `display: flex; opacity: 1; visibility: visible;`;
})

project5.addEventListener("click", () => {
  AllDisplayHidden();
  project5.classList.add("active");
  ChromeDinosaurGame.style.cssText = `display: flex; opacity: 1; visibility: visible;`;
})