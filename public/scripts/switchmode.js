const buttonDiv = document.getElementById("btn-above");
const photosBtn = document.getElementById("photos-btn");
const videosBtn = document.getElementById("videos-btn");
const wholeImg = document.getElementById("pix");
const wholeVid = document.getElementById("vids");
const photosContainer = document.getElementsByClassName("gallery-container");
const videosContainer = document.getElementsByClassName("video-gallery");

for(let i = 0;
i < photosContainer.length &&
i < videosContainer.length;
i++    
){
    photosBtn.addEventListener("click", ()=>{
        videosBtn.classList.remove("done");
        photosBtn.classList.add("do");
        photosBtn.style.animation = "shift 1s ease-in-out infinite";
        pix.classList.add("flip")
        pix.style.display = 'block';
        videosContainer[i].style.display = "none";
        vids.classList.remove("flip");
    })
    videosBtn.addEventListener("click", ()=>{
        videosBtn.classList.add("done");
        photosBtn.classList.remove("do");
        photosBtn.style.animation = "none"
        pix.style.display = "none";
        videosContainer[i].style.display = "flex";
        vids.classList.add("flip");
    })
}