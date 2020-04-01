window.onscroll = function() {
  myFunction();
};

const navbar = document.getElementById("navbar");
const sticky = navbar.offsetTop;

function myFunction() {
  window.pageYOffset >= sticky
    ? navbar.classList.add("fixed-top")
    : //add bootstrap fixed-top class
      navbar.classList.remove("fixed-top");
}

//play video
const myVideo = document.getElementById("video_background");

setTimeout(function() {
  myVideo.play();
}, 2200);
