//for scroll button

let mybutton = document.getElementById("myBtn");

window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

function topFunction() {
  document.body.scrollTop = 0; 
  document.documentElement.scrollTop = 0; 
}

//for my work buttons

let all = document.getElementById("all");
let design = document.getElementById("design");
let dev = document.getElementById("dev");

function showDesign() {
  design.style.display = "block";
  dev.style.display = "none";
  design.style.display = "block";
}

function showDev() {
    dev.style.display = "block";
    design.style.display = "none";
    design2.style.display = "none";
}

function showAll() {
    dev.style.display = "block";
    design.style.display = "block";
    design2.style.display = "block";
}
