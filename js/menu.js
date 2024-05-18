document.addEventListener('DOMContentLoaded', function() {

  const HBGbttn = document.querySelector('.HBGbttn');
  const HBGMenu = document.querySelector('.HBGMenu');

  HBGbttn.addEventListener('click', function() {
    if (!HBGbttn.classList.contains('active')) {
      HBGbttn.classList.add('active');
      HBGMenu.style.visibility = "visible"; // visibility 속성을 사용하여 요소를 보이게 설정
      HBGMenu.style.opacity = "1"; // opacity를 1로 설정하여 요소를 완전히 불투명하게 만듦
      setTimeout(() => {
        HBGMenu.style.width = "20%"; // 너비 변경
      }, 10); // visibility 및 opacity 설정 후 약간의 지연을 주어 트랜지션 효과를 적용
    } 
    else {
      HBGbttn.classList.remove('active');
      HBGMenu.style.width = "0"; // 너비를 0으로 설정
      HBGMenu.style.opacity = "0"; // opacity를 0으로 설정하여 요소를 투명하게 만듦
      setTimeout(() => {
        HBGMenu.style.visibility = "hidden"; // 트랜지션 후 요소를 숨김
      }, 1000); // 트랜지션 시간(1초) 후에 visibility를 hidden으로 설정
    }
  });
});