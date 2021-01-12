window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
    document.getElementById("header").style.fontSize = "30px";
    document.getElementById("header").style.padding = "30px 10px";
    document.getElementById("header").style.position = "fixed";
    document.getElementById("header").style.opacity = ".85";
  } else {
    document.getElementById("header").style.fontSize = "90px";
    document.getElementById("header").style.padding = "280px 10px";
    document.getElementById("header").style.position = "relative";
    document.getElementById("header").style.opacity = ".2";
  }
}
