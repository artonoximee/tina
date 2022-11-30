var logo = document.getElementById("logo");
    
window.addEventListener("scroll", function() {
  logo.style.transform = "rotate("+(window.pageYOffset/2)+"deg)";
});