// 캐러셀
const carousel = document.querySelector(".carousel"); // 캐러셀 영역
const pics = ["Python", "C", "Html", "JavaScripts", "CSS"]; // 이미지 배열
carousel.style.backgroundImage = `url(/img/Skills/${pics[0]}.png)`; // 기본 이미지 설정
const hoverbox = document.querySelector(".hoverbox"); // 캐러셀 hover시 검정 박스
const hoverarea = document.querySelector(".hoverarea"); // 캐러셀 hover 영억
const arrows = document.querySelectorAll(".arrow"); // 화살표

// 모달
const img = document.querySelector("#profile > img");
const name = document.querySelector("#name");
const encounter = document.querySelector("#encounter");
const date = document.querySelector("#date");
// 날짜 계산
let firstday = new Date("2021-07"); // 시작한 날
const today = new Date(); // 오늘
let sname = "";
let sencounter = "";
let i = 0; // 배열 인덱스

arrows.forEach(arrow => {
  arrow.addEventListener("click", (e) => {
    if(e.target.id === "left") { // 왼쪽 화살표 클릭했다면?
      i--; // 이전 이미지로 이동
      if (i < 0) { // 첫번쨰 이미지라면?
        i = pics.length -1; // 맨 마지막 이미지로 이동
      }
    }
    else if (e.target.id === "right") { // 오른쪽 화살표 클릭했다면?
      i++; // 다음 이미지로 이동
      if (i >= pics.length) { // 마지막 이미지라면?
        i = 0; // 첫번째 페이지로 이동
      }
    }
    carousel.style.backgroundImage = `url(/img/Skills/${pics[i]}.png)`; // 현재 이미지 표시
  });
});


function clickcarousel() {
  img.src = `img/Skills/${pics[i]}2.png`;
  if (i == 0) {
    sname = "파이썬";
    sencounter = "19년도 4월경";
    firstday = new Date("2019-04");
  }
  else if (i == 1) {
    sname = "C언어";
    sencounter = "24년도 3월";
    firstday = new Date("2024-03");
  }
  else if (i == 2) {
    sname = "HTML";
    sencounter = "21년도 4월경";
    firstday = new Date("2021-04");
  }
  else if (i == 3) {
    sname = "JavaScripts";
    sencounter = "18년도 9월경";
    firstday = new Date("2018-09");
  }
  else if (i == 4) {
    sname = "CSS";
    sencounter = "21년도 4월경";
    firstday = new Date("2021-04");
  }
  let passedTime = today.getTime() - firstday.getTime(); // 시직한 날부터 오늘까지 흐른 시간
  let passedDay = Math.round(passedTime / (1000 * 60 * 60 * 24 * 30)); // 밀리초를 달(month)로 변환;
  name.innerText = `${sname}`;
  encounter.innerText = `${sencounter}`;
  if (passedDay / 12 >= 1) {
    date.innerText = `${parseInt(passedDay / 12)}년 ${passedDay % 12}개월`;
  }
  else {
    date.innerText = `${passedDay}개월`;
  }
}

const modalBox = document.querySelector("#modal-box");
const close = document.querySelector("#close");
const des = document.querySelector(".des"); // 돋보기

des.addEventListener("click", () => {
  modalBox.classList.add("active"); // 버튼 클릭시 클래스 추가
  clickcarousel();
});

close.addEventListener("click", () => {
  modalBox.classList.remove("active"); // 버튼 클릭시 클래스 삭제
});

hoverarea.onmouseover = function() {
  hoverbox.style.opacity = 1;
  des.style.opacity = 1;
}

hoverarea.onmouseout = function() {
  hoverbox.style.opacity = 0;
  des.style.opacity = 0;
}