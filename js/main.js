//////////////////// Start Header
let headerlisa = document.querySelectorAll("header .container .collapse .navbar-nav .nav-item .nav-link")

headerlisa.forEach((el) => {
  el.addEventListener("click", removelisa)
});

function removelisa() {
  headerlisa.forEach((el) => {
    el.classList.remove("active2");
    this.classList.add("active2");
  });
}
//////////////////// End Header
//////////////////// Start PORTFOLIO
let shuffle = document.querySelectorAll(".shuffle li")
let imgs = document.querySelectorAll(".portfolio .col-lg-3");

shuffle.forEach((el) => {
  el.addEventListener("click", remove)
  el.addEventListener("click", manageImgs)
});

function remove() {
  shuffle.forEach((el) => {
    el.classList.remove("active");
    this.classList.add("active");
  });
}

function manageImgs() {
  imgs.forEach((img) => {
    img.style.display = "none";
  });
  document.querySelectorAll(this.dataset.cat).forEach((el) => {
    el.style.display = "block";
  });
}
//////////////////// End PORTFOLIO

//////////////////// Start Count And Skills
let header = document.querySelector("header")
let aActive = document.querySelector("header .container .collapse .navbar-nav .nav-item a.active")
let services = document.getElementById("Services")

let countspan = document.querySelectorAll(".count .box span");
let sectioncount = document.querySelector(".count");
let started = false; // Function Started ? No

let about = document.querySelector(".about");
let spans = document.querySelectorAll(".box .prog span");

window.onscroll = function () {
  ///////////////// count
  if (window.scrollY >= sectioncount.offsetTop - 200) {
    if (!started) {
      countspan.forEach((span) => startCount(span));
    }
    started = true;
  }
  //////////////// Skills
  if (window.scrollY >= about.offsetTop) {
    spans.forEach((span) => {
      span.style.width = span.dataset.width;
    });
  }
  //////////////// Header
  if (window.scrollY >= 500) {
    header.style.cssText = "background-color: #19c8fa !important;"
    aActive.style.cssText = "color: #fff !important;border-bottom: 1px solid #fff;"
  } if (window.scrollY < services.offsetTop) {
    header.style.cssText = "background-color: transparent !important;"
    aActive.style.cssText = "color: #19c8fa !important;border-bottom: 1px solid #19c8fa;"
  }
}




function startCount(el) {
  let goal = el.dataset.goal;
  let count = setInterval(() => {
    el.textContent++;
    if (el.textContent == goal) {
      clearInterval(count);
    }
  }, 2000 / goal);
}
//////////////////// End Count And Skills

//////////////////// Start TESTIMONIALS
let lis = document.querySelectorAll(".bullets li");
let boxs = document.querySelector(".about .test .boxs");
let boxsparent = document.querySelector(".about .test .boxs .parent");

lis.forEach((li) => {
  li.addEventListener("click", removeActive)
  li.addEventListener("click", scroll)
});

function removeActive() {
  lis.forEach((li) => {
    li.classList.remove("active");
    this.classList.add("active");
  });
}

lis[0].onclick = function () {
  currentSlide = parseInt(lis[0].getAttribute("data-index"));
}

lis[1].onclick = function () {
  currentSlide = parseInt(lis[1].getAttribute("data-index"));
}

lis[2].onclick = function () {
  currentSlide = parseInt(lis[2].getAttribute("data-index"));
}

function scroll() {
  boxs.scrollLeft = currentSlide
};
//////////////////// End TESTIMONIALS
