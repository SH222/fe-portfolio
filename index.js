let white = new IntersectionObserver((e) => {
  e.forEach((box) => {
    if (box.isIntersecting) {
      box.target.style.opacity = 1;
    }
  });
});

let yellow = new IntersectionObserver((e) => {
  e.forEach((box) => {
    if (box.isIntersecting) {
      // box가 화면에 보일때만
      box.target.style.opacity = 1;
      box.target.style.background = "rgb(255, 215, 38)";
      box.target.style.transform = "rotate(0deg)";
    } else {
      box.target.style.background = "white";
    }

    // box.intersectionRatio 얼마나 보이는지도 확인 가능
  });
});

let Top = new IntersectionObserver((e) => {
  e.forEach((box) => {
    if (box.isIntersecting) {
      document.querySelector("#top").style.display = "none";
      // console.log();
    } else {
      document.querySelector("#top").style.display = "block";
    }
  });
});

let aboutDiv = new IntersectionObserver((e) => {
  let sec3_1 = document.querySelectorAll(".sec3_1");
  let sec3_2 = document.querySelectorAll(".sec3_2");
  e.forEach((box, i) => {
    if (box.isIntersecting) {
      sec3_1[0].classList.add("display_block1");
      sec3_1[1].classList.add("display_block2");
      sec3_1[2].classList.add("display_block3");
      sec3_1[3].classList.add("display_block4");
      sec3_2[0].classList.add("sec3_2_transition");
    } else {
      sec3_1.forEach((item) => item.classList.remove("display_block"));
    }
  });
});

let skillDiv = new IntersectionObserver((e) => {
  let skillDivList = document.querySelectorAll(".skill_div_list");
  e.forEach((box, i) => {
    if (box.isIntersecting) {
      skillDivList[0].classList.add("sec4_move");
      skillDivList[1].classList.add("sec4_move");
      skillDivList[2].classList.add("sec4_move");
      skillDivList[3].classList.add("sec4_move");
    } else {
      skillDivList[0].classList.remove("sec4_move");
      skillDivList[1].classList.remove("sec4_move");
      skillDivList[2].classList.remove("sec4_move");
      skillDivList[3].classList.remove("sec4_move");
    }
  });
});

let section = document.querySelectorAll("section");

Top.observe(section[0]);
white.observe(section[0]);
yellow.observe(section[1]);
aboutDiv.observe(section[2]);
white.observe(section[2]);
yellow.observe(section[3]);
skillDiv.observe(section[3]);
white.observe(section[4]);
yellow.observe(section[5]);

let housewarmingBtn = document.getElementById("housewarmingBtn");
let archiveBtn = document.getElementById("archiveBtn");
let momentumBtn = document.getElementById("momentumBtn");
let tomatoBtn = document.getElementById("tomatoBtn");
let housewarming = document.querySelector(".housewarming");
let archive = document.querySelector(".archive");
let momentum = document.querySelector(".momentum");
let tomato = document.querySelector(".tomato");

housewarmingBtn.addEventListener("click", function () {
  housewarming.classList.add("display_block");
  archive.classList.remove("display_block");
  momentum.classList.remove("display_block");
  tomato.classList.remove("display_block");
});

archiveBtn.addEventListener("click", function () {
  archive.classList.add("display_block");
  housewarming.classList.remove("display_block");
  momentum.classList.remove("display_block");
  tomato.classList.remove("display_block");
});

momentumBtn.addEventListener("click", function () {
  housewarming.classList.remove("display_block");
  archive.classList.remove("display_block");
  momentum.classList.add("display_block");
  tomato.classList.remove("display_block");
});

tomatoBtn.addEventListener("click", function () {
  housewarming.classList.remove("display_block");
  archive.classList.remove("display_block");
  momentum.classList.remove("display_block");
  tomato.classList.add("display_block");
});
