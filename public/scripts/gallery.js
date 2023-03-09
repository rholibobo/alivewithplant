const buttonDiv = document.getElementById("btn-above");
const photosBtn = document.getElementById("photos-btn");
const videosBtn = document.getElementById("videos-btn");
const box = document.getElementsByClassName("container");
const boxText = document.getElementsByClassName("main-display");
const boxText2 = document.getElementsByClassName("recipee-display");
const boxText3 = document.getElementsByClassName("video-display");
const button = document.getElementsByClassName("btnGallery");
const buttonBelow = document.getElementsByClassName("btnBelow");
const videoDiv = document.getElementsByClassName("video-div");
const videoViewDiv = document.getElementsByClassName("view-video");
const videos = document.getElementsByClassName("videos");
const videoViewBtn = document.getElementsByClassName("btnVideo");
const videoBackBtn = document.getElementsByClassName("btnBelowVideo");




photosBtn.addEventListener("click", ()=>{
  photosBtn.classList.add("swap")
})

for (
  let i = 0;
  i < boxText.length &&
  i < boxText2.length &&
  i < boxText3.length &&
  i < button.length &&
  i < buttonBelow.length &&
  i < videoDiv.length &&
  i < videoViewDiv.length &&
  i < videoViewBtn.length &&
  i < videoBackBtn.length &&
  i < videos.length &&
  i < box.length;
  i++
) {
  button[i].addEventListener("click", turnFlip);
  function turnFlip() {
    box[i].classList.add("flip");
    boxText[i].style.display = "none";
    boxText2[i].style.display = "block";
    button[i].innerText = "Back";
  }
  buttonBelow[i].addEventListener("click", () => {
    box[i].classList.add("flip");
    boxText[i].style.display = "block";
    boxText2[i].style.display = "none";
    button[i].innerText = "Click to view Recipee";
  });

  // Video Gallery
  videoViewBtn[i].addEventListener("click", ()=>{
    videoDiv[i].classList.add("flipper");
    videoViewDiv[i].style.display = "none";
    boxText3[i].style.display = "block";
    videoViewBtn[i].innerText = "Back";
  })

  videoBackBtn[i].addEventListener("click", ()=>{
    videoDiv[i].classList.remove("flipper");
    videoViewDiv[i].style.display = "block";
    boxText3[i].style.display = "none";
    videoViewBtn[i].innerText = "View Recipee";
  })
  
}





