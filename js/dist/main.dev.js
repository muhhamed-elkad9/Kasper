"use strict";

//////////////////// Start Header
var headerlisa = document.querySelectorAll("header .container .collapse .navbar-nav .nav-item .nav-link");
headerlisa.forEach(function (el) {
  el.addEventListener("click", removelisa);
});

function removelisa() {
  var _this = this;

  headerlisa.forEach(function (el) {
    el.classList.remove("active2");

    _this.classList.add("active2");
  });
} //////////////////// End Header
//////////////////// Start PORTFOLIO


var shuffle = document.querySelectorAll(".shuffle li");
var imgs = document.querySelectorAll(".portfolio .col-lg-3");
var spanPlus = document.querySelectorAll(".portfolio .col-lg-3 .box .plus");
shuffle.forEach(function (el) {
  el.addEventListener("click", remove);
  el.addEventListener("click", manageImgs);
});

function remove() {
  var _this2 = this;

  shuffle.forEach(function (el) {
    el.classList.remove("active");

    _this2.classList.add("active");
  });
}

function manageImgs() {
  imgs.forEach(function (img) {
    img.style.display = "none";
  });
  document.querySelectorAll(this.dataset.cat).forEach(function (el) {
    el.style.display = "block";
  });
}

spanPlus.forEach(function (span) {
  span.addEventListener("click", function (e) {
    var overlay = document.createElement("div");
    overlay.className = "overlay";
    document.body.appendChild(overlay);
    var parent = document.createElement("div");
    parent.className = "popup";
    var parentH3 = document.createElement("h3");
    var parentH3Text = document.createTextNode(span.previousElementSibling.alt);
    var parentImg = document.createElement("img");
    parentImg.src = span.previousElementSibling.src;
    var parentSpan = document.createElement("span");
    parentSpan.className = "out";
    var parentSpanText = document.createTextNode("x");
    document.body.appendChild(parent);
    parent.appendChild(parentH3);
    parentH3.appendChild(parentH3Text);
    parent.appendChild(parentImg);
    parent.appendChild(parentSpan);
    parentSpan.appendChild(parentSpanText);
  });
});
document.addEventListener("click", function (e) {
  if (e.target.className == 'out') {
    e.target.parentNode.remove();
    document.querySelector(".overlay").remove();
  }
}); //////////////////// End PORTFOLIO
//////////////////// Start Count And Skills

var header = document.querySelector("header");
var aActive = document.querySelector("header .container .collapse .navbar-nav .nav-item a.active");
var services = document.getElementById("Services");
var countspan = document.querySelectorAll(".count .box span");
var sectioncount = document.querySelector(".count");
var started = false; // Function Started ? No

var about = document.querySelector(".about");
var spans = document.querySelectorAll(".box .prog span");

window.onscroll = function () {
  ///////////////// count
  if (window.scrollY >= sectioncount.offsetTop - 200) {
    if (!started) {
      countspan.forEach(function (span) {
        return startCount(span);
      });
    }

    started = true;
  } //////////////// Skills


  if (window.scrollY >= about.offsetTop - 300) {
    spans.forEach(function (span) {
      span.style.width = span.dataset.width;
    });
  }

  if (window.scrollY < about.offsetTop - 300) {
    spans.forEach(function (span) {
      span.style.width = "0";
    });
  } //////////////// Header


  if (window.scrollY >= 500) {
    header.style.cssText = "background-color: #19c8fa !important;";
    aActive.style.cssText = "color: #fff !important;border-bottom: 1px solid #fff;";
  }

  if (window.scrollY < services.offsetTop) {
    header.style.cssText = "background-color: transparent !important;";
    aActive.style.cssText = "color: #19c8fa !important;border-bottom: 1px solid #19c8fa;";
  }
};

function startCount(el) {
  var goal = el.dataset.goal;
  var count = setInterval(function () {
    el.textContent++;

    if (el.textContent == goal) {
      clearInterval(count);
    }
  }, 2000 / goal);
} //////////////////// End Count And Skills