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

function gotoindex() {
  location.href = "index.html";
}

function openJxClipPage() {
  const cookieCheck = getCookie();
  console.log(cookieCheck);
  if (cookieCheck == "N") {
    gotoindex();
  }
}

document.addEventListener("DOMContentLoaded", openJxClipPage);