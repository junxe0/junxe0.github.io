const HelloT = document.querySelectorAll(".textbox span");

function TextEffect() {
  let timer = 2000;
  HelloT.forEach((item, index) => {
    requestAnimationFrame(() => {
      item.classList.add('animated');
      item.style.animationDelay = `${timer + index * 50}ms`;
    });
  });
}

document.addEventListener("DOMContentLoaded", TextEffect);