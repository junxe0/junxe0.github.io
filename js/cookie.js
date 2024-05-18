import Config from 'config.js';

const Wbody = document.querySelector("Wbody");

function getCookie(name) {
  const cookies = document.cookie.split("; ").map(cookie => cookie.split("="));
  const cookie = cookies.find(([cookieName]) => cookieName === name);
  return cookie ? cookie[1] : null;
}

function gotoindex() {
  location.href = "portfolio.html";
}

function openJxClipPage() {
  const cookieCheck = getCookie("JxClipPageYN");
    if (cookieCheck == "N") {
      gotoindex();
    }
}

function setCookie(name, value) {
  const date = new Date();
  date.setMinutes(date.getMinutes() + Config.CookieDeleteTime); // 설정 파일에서 분 설정
  document.cookie = `${escape(name)}=${escape(value)}; expires=${date.toUTCString()}`;
}

document.addEventListener("DOMContentLoaded", openJxClipPage);

const Wtext = document.querySelector(".Wtext");

function Wtextr() {
  Wbody.classList.add("active");
  setCookie("JxClipPageYN", "N");

  setInterval(gotoindex, 1000); // 1초 후 함수 실행
}

Wtext.addEventListener("click", Wtextr);