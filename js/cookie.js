import Config from './config.js';

const Wbody = document.querySelector(".Wbody");
const Wtext = document.querySelector(".Wtext");

function getCookie(name) {
  const cookies = document.cookie.split("; ").map(cookie => cookie.split("="));
  const cookie = cookies.find(([cookieName]) => cookieName === name);
  return cookie ? decodeURIComponent(cookie[1]) : null;
}

function gotoportfolio() {
  location.replace("./portfolio.html");
}

function openJxClipPage() {
  const cookieCheck = getCookie(Config.CookieName);
  if (cookieCheck == "N") {
    gotoportfolio();
  }
}

function setCookie(name, value) {
  const date = new Date();
  date.setMinutes(date.getMinutes() + Config.CookieDeleteTime);
  document.cookie = `${encodeURIComponent(name)}=${encodeURIComponent(value)}; expires=${date.toUTCString()}; path=/`;
}

document.addEventListener("DOMContentLoaded", openJxClipPage);

function Wtextr() {
  Wbody.classList.add("active");
  setTimeout(() => {
    gotoportfolio();
    setCookie(Config.CookieName, "N");
  }, 1000); // 1초 후 실행
}

Wtext.addEventListener("click", Wtextr);