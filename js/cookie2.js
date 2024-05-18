function getCookie(name) {
  const cookies = document.cookie.split("; ").map(cookie => cookie.split("="));
  const cookie = cookies.find(([cookieName]) => cookieName === name);
  return cookie ? cookie[1] : null;
}

function gotoportfolio() {
  location.href = "index.html";
}

function openJxClipPage() {
  const cookieCheck = getCookie("JxClipPageYN");
    if (cookieCheck !== "N") {
      gotoportfolio();
    }
}

document.addEventListener("DOMContentLoaded", openJxClipPage);