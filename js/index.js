window.onscroll = function() {
  myFunction();
};

const navbar = document.getElementById("navbar");
const sticky = navbar.offsetTop;

function myFunction() {
  if (window.pageYOffset >= sticky) {
    navbar.classList.add("fixed-top");
  } else {
    //add bootstrap fixed-top class
    navbar.classList.remove("fixed-top");
  }
}
