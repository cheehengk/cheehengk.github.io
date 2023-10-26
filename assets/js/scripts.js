/** @format */

var currentSection = "welcome";

function highlight(e) {
  var elements = document.getElementsByClassName("nav-buttons");
  Array.prototype.forEach.call(elements, (el) =>
    el.classList.remove("selected-nav-button")
  );
  e.classList.add("selected-nav-button");
}

function highlightMobile(e) {
  var elements = document.getElementsByClassName("menu-button");
  Array.prototype.forEach.call(elements, (el) => {
    el.classList.remove("btn-dark");
    el.classList.add("btn-outline-dark");
  });
  e.classList.remove("btn-outline-dark");
  e.classList.add("btn-dark");
}

function openMenu() {
  document.getElementById("menu").style.animationName = "moverightmenu";
  document.getElementById("menu").style.animationDuration = ".5s";
  document.getElementById("menu").style.animationFillMode = "forward";
  document.getElementById("menu").style.transform = "translateX(0px)";
  document.getElementById("overlay").style.display = "block";
}

function closemenu() {
  document.getElementById("menu").style.animationName = "movebackmenu";
  document.getElementById("menu").style.animationDuration = ".5s";
  document.getElementById("menu").style.animationFillMode = "forward";
  document.getElementById("menu").style.transform = "translateX(100vw)";
  document.getElementById("overlay").style.display = "none";
}

// When the user scrolls the page, execute myFunction
window.onscroll = function () {
  myFunction();
};

$(document).ready(function () {
  myFunction();
});

function myFunction() {
  var winScroll = document.body.scrollTop || document.documentElement.scrollTop;
  var height =
    document.documentElement.scrollHeight -
    document.documentElement.clientHeight;
  var scrolled = (winScroll / height) * 100;
  if (scrolled == 0) {
    document.querySelector("nav").style.boxShadow = "none";
    document.querySelector("nav").style.backgroundColor = "#f8f9fa";
    document.querySelector(".progress-container").style.display = "none";
  } else {
    document.querySelector("nav").style.boxShadow =
      "rgb(0 0 0 / 20%) 0px 4px 8px 0px, rgb(0 0 0 / 19%) 0px 6px 20px 0px";
    document.querySelector("nav").style.backgroundColor = "#fefcff";
    document.querySelector(".progress-container").style.display = "block";
  }
  document.getElementById("myBar").style.width = scrolled + "%";
  if (document.getElementById("experience").getBoundingClientRect().top < 15) {
    if (currentSection == "experience") return;
    highlight(document.getElementById("experience-button"));
    highlightMobile(document.getElementById("experience-button-mobile"));
    currentSection = "experience";
  } else if (
    document.getElementById("projects").getBoundingClientRect().top < 15
  ) {
    if (currentSection == "projects") return;
    highlight(document.getElementById("projects-button"));
    highlightMobile(document.getElementById("projects-button-mobile"));
    currentSection = "projects";
  } else if (
    document.getElementById("skills").getBoundingClientRect().top < 15
  ) {
    if (currentSection == "skills") return;
    highlight(document.getElementById("skills-button"));
    highlightMobile(document.getElementById("skills-button-mobile"));
    currentSection = "skills";
  } else if (
    document.getElementById("welcome").getBoundingClientRect().top < 15
  ) {
    if (currentSection == "welcome") return;
    highlight(document.getElementById("about-button"));
    highlightMobile(document.getElementById("about-button-mobile"));
    currentSection = "welcome";
  }
}

function educationSelector(e) {
  $(e).animate({
    borderWidth: "1px"
  }, 75, "swing", () => {
    $(".experience-container").animate({
      borderWidth: "0px"
    }, 75, "swing")
    $(".awards-container").animate({
      borderWidth: "0px"
    }, 75, "swing")
  })

  $("#awards-timeline").animate({
    opacity: 0
  }, 75, "swing")
  $("#experience-timeline").animate({
    opacity: 0
  }, 75, "swing", () => {
    document.querySelector('#experience-timeline').style.display = "none"
    document.querySelector('#awards-timeline').style.display = "none"
    document.querySelector('#education-timeline').style.display = "block"
    $("#education-timeline").animate({
      opacity: 1
    }, 75, "swing")
  })
}

function experienceSelector(e) {
  $(e).animate({
    borderWidth: "1px"
  }, 75, "swing", () => {
    $(".education-container").animate({
      borderWidth: "0px"
    }, 75, "swing")
    $(".awards-container").animate({
      borderWidth: "0px"
    }, 75, "swing")
  })

  $("#awards-timeline").animate({
    opacity: 0
  }, 75, "swing")
  $("#education-timeline").animate({
    opacity: 0
  }, 75, "swing", () => {
    document.querySelector('#education-timeline').style.display = "none"
    document.querySelector('#awards-timeline').style.display = "none"
    document.querySelector('#experience-timeline').style.display = "block"
    $("#experience-timeline").animate({
      opacity: 1
    }, 75, "swing")
  })
}

function awardsSelector(e) {
  $(e).animate({
    borderWidth: "1px"
  }, 75, "swing", () => {
    $(".education-container").animate({
      borderWidth: "0px"
    }, 75, "swing")
    $(".experience-container").animate({
      borderWidth: "0px"
    }, 75, "swing")
  })

  $("#experience-timeline").animate({
    opacity: 0
  }, 75, "swing")
  $("#education-timeline").animate({
    opacity: 0
  }, 75, "swing", () => {
    document.querySelector('#education-timeline').style.display = "none"
    document.querySelector('#awards-timeline').style.display = "block"
    document.querySelector('#experience-timeline').style.display = "none"
    $("#awards-timeline").animate({
      opacity: 1
    }, 75, "swing")
  })
}

window.addEventListener("load", function () {
  const loadingScreen = document.getElementById("loading-screen");
  loadingScreen.style.display = "none";
});