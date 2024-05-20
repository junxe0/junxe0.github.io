// 모달
const img = document.querySelector("#profile > img");
const sname = document.querySelector("p > #sname");
const encounter = document.querySelector("p > #encounter");
const date = document.querySelector(".datebox > #date");
// 날짜 계산
let firstday = new Date("2021-07"); // 시작한 날
const today = new Date(); // 오늘

const skillsInfo = {
  0: { sname: "Python", encounter: "19년도 4월경", firstday: "2019-04" },
  1: { sname: "C", encounter: "24년도 3월", firstday: "2024-03" },
  2: { sname: "HTML", encounter: "21년도 4월경", firstday: "2021-04" },
  3: { sname: "JavaScripts", encounter: "18년도 9월경", firstday: "2018-09" },
  4: { sname: "CSS", encounter: "21년도 4월경", firstday: "2021-04" },
};

function clickcarousel() {
  const skill = skillsInfo[carouseli];
  img.src = `img/Skills/${pics[carouseli]}2.png`;
  firstday = new Date(skill.firstday);

  let passedTime = today - firstday; // 정확한 날짜 차이 계산
  let passedDay = Math.round(passedTime / (1000 * 60 * 60 * 24)); // 밀리초를 일(day)로 변환
  sname.innerText = skill.sname;
  encounter.innerText = skill.encounter;
  
  // 년과 월로 표시
  const years = Math.floor(passedDay / 365);
  const months = Math.floor((passedDay % 365) / 30); // 간단한 근사값 사용
  date.innerText = years > 0 ? `${years}년 ${months}개월` : `${months}개월`;
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