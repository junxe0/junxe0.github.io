let timeoutId = null;

const navItems = document.querySelectorAll(".navmenu a > span");
const imageBox = document.querySelector('.imagebox');
const sections = document.querySelectorAll('.container');
const nowsection = document.querySelector('#nowsection');

function highlightCurrentNav(pageId) {
  navItems.forEach(item => {
    item.style.opacity = item.id === `nav${pageId}` ? "1" : "0.5";
  });
}

window.addEventListener('scroll', () => {
  const scrollPosition = window.pageYOffset;
  imageBox.style.marginLeft = `${scrollPosition}px`;

  let foundSection = false;

  for (let section of sections) {
    const sectionTop = section.offsetTop;
    const sectionBottom = sectionTop + section.offsetHeight;
    
    if (scrollPosition >= sectionTop && scrollPosition < sectionBottom) {
      highlightCurrentNav(section.id);
      nowsection.innerText = section.id;
      nowsection.style.opacity = 1;
      clearTimeout(timeoutId);
      timeoutId = setTimeout(() => nowsection.style.opacity = 0, 1000);
      foundSection = true;
      break;
    }
  }

  if (!foundSection) {
    nowsection.style.opacity = 0;
  }
});
