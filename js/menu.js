document.addEventListener('DOMContentLoaded', function() {
  const HBGbttn = document.querySelector('.HBGbttn');
  const HBGMenu = document.querySelector('.HBGMenu');

  HBGbttn.addEventListener('click', function() {
    HBGbttn.classList.toggle('active');
    HBGMenu.classList.toggle('active');
  });
});