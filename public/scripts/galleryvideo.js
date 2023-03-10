const boxText3 = document.getElementsByClassName("video-display");
const videoDiv = document.getElementsByClassName("video-div");
const videoViewDiv = document.getElementsByClassName("view-video");
const videos = document.getElementsByClassName("videos");
const videoViewBtn = document.getElementsByClassName("btnVideo");
const videoBackBtn = document.getElementsByClassName("btnBelowVideo");

for (let i = 0; 
    i < boxText3.length &&
    i < videoDiv.length &&
    i < videoViewDiv.length &&
    i < videoViewBtn.length &&
    i < videoBackBtn.length &&
    i < videos.length;
    i++   
) {
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

