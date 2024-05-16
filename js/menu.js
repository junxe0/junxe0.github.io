const HBGbttn = document.querySelector('.HBGbttn');

HBGbttn.addEventListener('click', (e) => {
  e.currentTarget.classList.toggle('active');
});

$(document).ready(function(){
  const HBGMenu = document.querySelector('.HBGMenu');
  HBGMenu.style.display = "none";
  $(".HBGbttn").click(function(){
    if(!HBGbttn.classList.contains("clicked")){
      HBGbttn.classList.add("clicked");
      HBGMenu.style.width = "20%";
      HBGMenu.style.display = "block";
    } 
    else {
      HBGbttn.classList.remove("clicked");
      $(".HBGMenu").css("width", "0");
      $(".HbgBg").css("background", "none");
    }
  })
})