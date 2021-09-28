document.querySelectorAll("nav ul li a").forEach((d) => {
  d.onclick = function (e) {
    e.preventDefault();
  };
});
let links = document.querySelectorAll("nav ul li");
links.forEach((item, index) => {
  item.addEventListener("click", function () {
    let top = document.getElementById(`${this.dataset.scroll}`).offsetTop;

    document.documentElement.scrollTop = top - 60;
  });
});

//
window.onscroll = function () {
  if (document.documentElement.scrollTop >= 60) {
    $("nav").addClass("grow");
  } else {
    $("nav").removeClass("grow");
  }
};
$(document).ready(function () {
  // $("body").niceScroll({});
  $("nav .btn-menu").click(function () {
    $("nav ul").toggleClass("active");
  });
});

// selider Text
let index = 0;
let boxs = document.querySelectorAll(".OurClient .box");
let allP = document.querySelectorAll(".OurClient .sliderText p");
//add active in box and p

function addActive(index) {
  clear();
  allP[index].classList.add("active");
  boxs[index].classList.add("active");
}
// clear all classes in all p and box
function clear() {
  allP.forEach((p) => {
    p.classList.remove("active");
  });
  boxs.forEach((d) => {
    d.classList.remove("active");
  });
}
// move icon to under word active

function checkline(index) {
  let elementActive = document.querySelectorAll(".OurClient .box");

  let space = elementActive[index].offsetLeft;

  let classActive = document.querySelectorAll(".OurClient .cuser")[0];

  let allspace = boxs[index].clientWidth / 2 + space;

  classActive.style.left = `${allspace - 60}px`;
}

// set index varibal and add active in box clicked

boxs.forEach((box) => {
  box.addEventListener("click", function () {
    addActive(this.dataset.number);
    index = this.dataset.number;
  });
  box.addEventListener("click", function () {
    clear();
    this.classList.add("active");
  });
});

// make slider auto

function auto() {
  setInterval(() => {
    if (index < boxs.length) {
      checkline(index);
      addActive(index);
      ++index;
    } else {
      index = 0;
    }
  }, 2500);
}
auto();
