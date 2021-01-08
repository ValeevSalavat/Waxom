
var video = document.querySelector("#video"),
button = document.querySelector(".video-presentation__btn-play");

button.addEventListener("click", function() {
    video.play()
    video.setAttribute("controls","controls");
}, false);

