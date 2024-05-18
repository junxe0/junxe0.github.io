import Config from './config.js';

function getCookie(name) {
  const cookies = document.cookie.split("; ").map(cookie => cookie.split("="));
  const cookie = cookies.find(([cookieName]) => cookieName === name);
  return cookie ? cookie[1] : "None";
}

function gotoindex() {
  location.replace("./index.html");
}

function openJxClipPage() {
  const cookieCheck = getCookie(Config.CookieName);
  if (cookieCheck !== "N") {
    gotoindex();
  }
}

document.addEventListener("DOMContentLoaded", openJxClipPage);