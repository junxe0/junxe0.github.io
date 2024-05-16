function getCookie(name) {
  var cookie = document.cookie;
  
  if (document.cookie != "") {
      var cookie_array = cookie.split("; ");
      for ( var index in cookie_array) {
          var cookie_name = cookie_array[index].split("=");
          
          if (cookie_name[0] == "JxClipPageYN") {
              return cookie_name[1];
          }
      }
  }
  return ;
}

function openJxClipPage() {
  var container = document.querySelector(".container");
  var Wbody =  document.querySelector(".Wbody");
  var cookieCheck = getCookie("JxClipPageYN");
  if (cookieCheck != "N") {
    Wbody.style.display = "block";
    container.style.display = "none";
  }
  else {
    Wbody.style.display = "none";
    container.style.display = "flex";
  }
}

function setCookie(name, value, expiredays) {
  var date = new Date();
  date.setDate(date.getDate() + expiredays);
  document.cookie = escape(name) + "=" + escape(value) + "; expires=" + date.toUTCString();
}

window.addEventListener("DOMContentLoaded", function(){
  openJxClipPage();
})

const Wtext = document.querySelector(".Wtext");

function Wtextr() {
  var container = document.querySelector(".container");
  document.querySelectorAll(".Wbody").forEach((Wt) => {
    Wt.classList.add("active");
    setCookie("JxClipPageYN", "N", 1);
  });
  setTimeout(function() {
    container.style.display = "flex";
  }, 1000)
}

Wtext.addEventListener("click", Wtextr);
