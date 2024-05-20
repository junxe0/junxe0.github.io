// 캐러셀
const carousel = document.querySelector(".carousel"); // 캐러셀 영역
const pics = ["Python", "C", "Html", "JavaScripts", "CSS"]; // 이미지 배열
const hoverbox = document.querySelector(".hoverbox"); // 캐러셀 hover시 검정 박스
const hoverarea = document.querySelector(".hoverarea"); // 캐러셀 hover 영억
const arrows = document.querySelectorAll(".arrow"); // 화살표

let carouseli = 0; // 배열 인덱스

carousel.style.backgroundImage = `url(/img/Skills/${pics[0]}.png)`; // 기본 이미지 설정
arrows.forEach(arrow => {
  arrow.addEventListener("click", (e) => {
    if(e.target.id === "left") { // 왼쪽 화살표 클릭했다면?
      carouseli--; // 이전 이미지로 이동
      if (carouseli < 0) { // 첫번쨰 이미지라면?
        carouseli = pics.length -1; // 맨 마지막 이미지로 이동
      }
    }
    else if (e.target.id === "right") { // 오른쪽 화살표 클릭했다면?
      carouseli++; // 다음 이미지로 이동
      if (carouseli >= pics.length) { // 마지막 이미지라면?
        carouseli = 0; // 첫번째 페이지로 이동
      }
    }
    carousel.style.backgroundImage = `url(/img/Skills/${pics[carouseli]}.png)`; // 현재 이미지 표시
  });
});