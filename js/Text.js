// const HelloT = document.querySelectorAll(".textbox span");

// function TextEffect() {
//   let timer = 2000;
//   HelloT.forEach((item, index) => {
//     requestAnimationFrame(() => {
//       item.classList.add('animated');
//       item.style.animationDelay = `${timer + index * 50}ms`;
//     });
//   });
// }
const h2 = document.querySelector(".PortfolioT h2");

function PortfolioText() {
  h2.classList.remove("active");
  setTimeout(function() {
    h2.classList.add("active");
  }, 3000);
}

document.addEventListener("DOMContentLoaded", PortfolioText);