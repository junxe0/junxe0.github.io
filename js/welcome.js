const Wtext = document.querySelector(".Wtext");

function Wtextr() {
  const container = document.querySelector(".container");
  document.querySelectorAll(".Wbody").forEach((Wt) => {
    Wt.classList.add("active");
  });
  setTimeout(function() {
    container.style.display = "flex";
  }, 1000)
}

Wtext.addEventListener("click", Wtextr);