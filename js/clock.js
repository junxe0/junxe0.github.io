const Clock = document.querySelector("#Clock");

function getClock(){
  const d = new Date();
  const h = String(d.getHours()).padStart(2,"0");
  const m = String(d.getMinutes()).padStart(2,"0");
  let AMPM = "AM";
  if (h > 12) {
    AMPM = "PM";
  }
  else {
    AMPM = "AM";
  }
  Clock.innerText = `${AMPM} ${h}:${m}`;
}

getClock(); // 처음 실행

setInterval(getClock, 20000); // 20초마다 시간 확인