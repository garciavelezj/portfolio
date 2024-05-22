function toggleMenu() {
  const menu = document.querySelector(".menu-links");
  const icon = document.querySelector(".hamburger-icon");
  menu.classList.toggle("open");
  icon.classList.toggle("open");
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
