const buttonDiv = document.getElementById("btn-above");
const photosBtn = document.getElementById("photos-btn");
const videosBtn = document.getElementById("videos-btn");
const wholeImg = document.getElementById("pix");
const wholeVid = document.getElementById("vids");
const photosContainer = document.getElementsByClassName("gallery-container");
const videosContainer = document.getElementsByClassName("video-gallery");
const photoIcon = document.getElementById("photo");
const videoIcon = document.getElementById("video");

for(let i = 0;
i < photosContainer.length &&
i < videosContainer.length;
i++    
){
    photosBtn.addEventListener("click", ()=>{
        videosBtn.classList.remove("done");
        photosBtn.classList.add("do");
        photosBtn.style.backgroundColor = "white"
        photosBtn.style.border = "1px solid white"
        photosBtn.style.color = "#62af2f"
        wholeImg.classList.add("flip")
        wholeImg.style.display = 'block';
        videosContainer[i].style.display = "none";
        wholeVid.classList.remove("flip");
        photoIcon.style.color = "#62af2f"
        videoIcon.style.color = "white"
    })

    videosBtn.addEventListener("click", ()=>{
        videosBtn.classList.add("done");
        photosBtn.style.backgroundColor = "#62af2f"
        photosBtn.style.border = "1px solid #62af2f"
        photosBtn.style.color = "white"
        wholeImg.style.display = "none";
        videosContainer[i].style.display = "flex";
        wholeVid.classList.add("flip");
        videoIcon.style.color = "#62af2f"
        photoIcon.style.color = "white"
    })
}