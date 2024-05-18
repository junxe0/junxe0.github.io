document.addEventListener('DOMContentLoaded', function() {

  const HBGbttn = document.querySelector('.HBGbttn');
  const HBGMenu = document.querySelector('.HBGMenu');

  HBGbttn.addEventListener('click', function() {
    if (!HBGbttn.classList.contains('active')) {
      HBGbttn.classList.add('active');
      HBGMenu.style.display = "block"; // 요소를 보이게 설정
      setTimeout(() => {
        HBGMenu.style.width = "20%"; // 너비 변경
      }, 10); // display 설정 후 약간의 지연을 주어 트랜지션 효과를 적용
    } 
    else {
      HBGbttn.classList.remove('active');
      HBGMenu.style.width = "0"; // 너비를 0으로 설정
      setTimeout(() => {
        HBGMenu.style.display = "none"; // 트랜지션 후 요소를 숨김
      }, 1000); // 트랜지션 시간(0.5초) 후에 display를 none으로 설정
    }
  });
});
