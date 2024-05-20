const alertbox = document.querySelector(".alertbox");
const alerts = document.querySelector('#alerts');

const copyTel = document.querySelector('#copyTel');
const copyMail = document.querySelector('#copyMail');

function showAlert(message) {
  alerts.innerText = message;
  alertbox.style.opacity = 1;
  setTimeout(() => {
    alertbox.style.opacity = 0;
  }, 2000);
}

copyTel.addEventListener("click", () => {
  window.navigator.clipboard.writeText("01064394775").then(() => {
    showAlert("전화번호가 클립보드에 복사되었습니다!");
  });
});

copyMail.addEventListener("click", () => {
  window.navigator.clipboard.writeText("juneinyunei@naver.com").then(() => {
    showAlert("이메일이 클립보드에 복사되었습니다!");
  });
});