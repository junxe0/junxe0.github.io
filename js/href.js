const DBGithub = document.querySelector("#DBGithub"); // 디코봇 깃허브
const DBDiscordPy = document.querySelector("#DBDiscordPy"); // Discord.py 2.0
const BSHGithub = document.querySelector("#BSHGithub"); // 부산헹 깃허브
const PTFLOGithub = document.querySelector("#PTFLOGithub"); // 포트폴리오 깃허브
const DWCGithub = document.querySelector("#DWCGithub"); // 디코 웹사이트 카피 깃허브
const DWCWebSite = document.querySelector("#DWCWebSite"); // 디코 웹사이트 카피 웹사이트
const GDGGithub = document.querySelector("#GDGGithub"); // 크롬 공룡 게임 카피 깃허브
const GDGGameCopySite = document.querySelector("#GDGGameCopySite"); // 크롬 공룡 게임 카피 사이트

function gotopage(link) {
  setTimeout(() => {
    window.open(link);
  }, 3000);
}

DBGithub.addEventListener("click", () => {
  showAlert("현재 비활성화 되어있는 메뉴입니다!");
})

DBDiscordPy.addEventListener("click", () => {
  showAlert("3초 후 창이 열립니다.");
  gotopage("https://discordpy.readthedocs.io/en/stable/#");
})

BSHGithub.addEventListener("click", () => {
  showAlert("3초 후 창이 열립니다.");
  gotopage("https://github.com/junxe0/Busanheng");
})

PTFLOGithub.addEventListener("click", () => {
  showAlert("3초 후 창이 열립니다.");
  gotopage("https://github.com/junxe0/junxe0.github.io");
})

DWCGithub.addEventListener("click", () => {
  showAlert("현재 비활성화 되어있는 메뉴입니다!");
})

DWCWebSite.addEventListener("click", () => {
  showAlert("3초 후 창이 열립니다.");
  gotopage("https://discord.com/");
})

GDGGithub.addEventListener("click", () => {
  showAlert("현재 비활성화 되어있는 메뉴입니다!");
})

GDGGameCopySite.addEventListener("click", () => {
  showAlert("3초 후 창이 열립니다.");
  gotopage("https://dinorunner.com/ko/");
})