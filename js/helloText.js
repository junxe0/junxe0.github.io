const HelloT = document.querySelectorAll(".textbox span");

function TextEffect() {
  let timer = 2000;
  HelloT.forEach((item) => {
    item.style.animation = `fadein 500ms ${(timer += 50)}ms forwards`;
  });
}

document.addEventListener("DOMContentLoaded", TextEffect);