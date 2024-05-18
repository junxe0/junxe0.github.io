import Config from './config.js';

const Wbody = document.querySelector("Wbody");

function getCookie() {
  let cookies = document.cookie.split(";");

  for (let cookie of cookies) {
    let trimmedCookie = cookie.trim();
    if (trimmedCookie.startsWith(Config.CookieName + "=")) {
      return trimmedCookie.substring(
        Config.CookieName.length + 1
      );
    }
  }

  return null; // Cookie not found
}

function gotoportfolio() {
  location.href = "portfolio.html";
}

function openJxClipPage() {
  const cookieCheck = getCookie();
  console.log(cookieCheck);
  if (cookieCheck == "N") {
    gotoportfolio();
  }
}

function setCookie() {
  const date = new Date();
  date.setMinutes(date.getMinutes() + Config.CookieDeleteTime); // 설정 파일에서 분 설정
  document.cookie = `${Config.CookieName}="N"; expires=${date.toUTCString()}`;
}

document.addEventListener("DOMContentLoaded", openJxClipPage);

const Wtext = document.querySelector(".Wtext");

function Wtextr() {
  Wbody.classList.add("active");
  setCookie();

  setInterval(gotoindex, 1000); // 1초 후 함수 실행
}

Wtext.addEventListener("click", Wtextr);