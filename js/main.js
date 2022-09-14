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
let spanPlus = document.querySelectorAll(".portfolio .col-lg-3 .box .plus");

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

spanPlus.forEach(span => {
  span.addEventListener("click", (e) => {

    let overlay = document.createElement("div");
    overlay.className = "overlay";
    document.body.appendChild(overlay);
    
    let parent = document.createElement("div");
    parent.className = "popup";
    let parentH3 = document.createElement("h3");
    let parentH3Text = document.createTextNode(span.previousElementSibling.alt);
    let parentImg = document.createElement("img");
    parentImg.src = span.previousElementSibling.src;
    let parentSpan = document.createElement("span");
    parentSpan.className = "out";
    let parentSpanText = document.createTextNode("x");
    
    document.body.appendChild(parent);
    parent.appendChild(parentH3);
    parentH3.appendChild(parentH3Text);
    parent.appendChild(parentImg);
    parent.appendChild(parentSpan);
    parentSpan.appendChild(parentSpanText);
  })
});

document.addEventListener("click", function (e) {

  if (e.target.className == 'out') {
    e.target.parentNode.remove();
    document.querySelector(".overlay").remove();
  }
  
})
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
  if (window.scrollY >= about.offsetTop - 300) {
    spans.forEach((span) => {
      span.style.width = span.dataset.width;
    });
  } if (window.scrollY < about.offsetTop - 300) {
    spans.forEach((span) => {
      span.style.width = "0";
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
