const HelloT = document.querySelectorAll(".textbox span");

function TextEffect() {
  let timer = 2000;

  HelloT.forEach((item) => {
    item.style.animation = `fade 500ms ${(timer += 100)}ms forwards`;
  });
}

document.addEventListener("DOMContentLoaded", TextEffect);