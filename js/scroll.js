let timeoutId = null; // UI
let sectionPositions = []; // 섹션의 위치
let NowSectionID = ''; // 현재 섹션 ID

const navItems = document.querySelectorAll(".navmenu a > span");
const PortfolioT = document.querySelector('.PortfolioT');
const sections = document.querySelectorAll('.container');
const nowsection = document.querySelector('#nowsection');

// 섹션 위치 계산
function SectionPosition() {
  sectionPositions = Array.from(sections).map(section => ({
    id: section.id,
    top: section.offsetTop,
    bottom: section.offsetTop + section.offsetHeight
  }));
}

// 현재 섹션 표시
function NowSectionUI(scrollPosition) {
  const windowHeight = window.innerHeight;
  const totalHeight = document.documentElement.scrollHeight;
  const middleOfScreen = scrollPosition + (windowHeight / 2);

  let ShowSectionID = '';
  let maxVisibleHeight = 0;

  // 섹션 비율 계산
  for (const {id, top, bottom} of sectionPositions) {
    const visibleTop = Math.max(top, scrollPosition);
    const visibleBottom = Math.min(bottom, scrollPosition + windowHeight);
    const visibleHeight = Math.max(0, visibleBottom - visibleTop);

    if (visibleHeight > maxVisibleHeight) {
      maxVisibleHeight = visibleHeight;
      ShowSectionID = id;
    }

    // 화면 중간 지점이 섹션 안에 있는지 확인
    if (middleOfScreen >= top && middleOfScreen < bottom) {
      ShowSectionID = id;
      break;
    }
  }

  // 스크롤 맨아래
  if (scrollPosition + windowHeight >= totalHeight - 100) {
    ShowSectionID = 'Contact';
  }

  // 현재 강조 및 표시
  if (ShowSectionID) {
    NavSection(ShowSectionID);
    nowsection.innerText = ShowSectionID;
    if (NowSectionID !== ShowSectionID) {
      nowsection.style.opacity = 1;
      clearTimeout(timeoutId);
      timeoutId = setTimeout(() => nowsection.style.opacity = 0, 1000);
      NowSectionID = ShowSectionID;
    }
  } else {
    nowsection.style.opacity = 0;
  }
}

// 상단바 현재 섹션
function NavSection(pageId) {
  navItems.forEach(item => {
    if (item.id == `nav${pageId}`) {
      item.style.opacity = 1;
    }
    else {
      item.style.opacity = 0.5;
    }
  });
}

// 스크롤
function onScroll() {
  requestAnimationFrame(() => {
    const scrollPosition = window.pageYOffset;
    PortfolioT.style.marginRight = `${100 + (scrollPosition * 1.5)}px`;
    NowSectionUI(scrollPosition);
  });
}

// 초기 섹션 위치 계산 및 이벤트 리스너 등록
SectionPosition();
window.addEventListener('resize', SectionPosition); // 창 크기 변경 시 섹션 위치 다시 계산
window.addEventListener('scroll', onScroll);