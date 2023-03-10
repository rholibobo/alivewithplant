const buttonDiv = document.getElementById("btn-above");
const photosBtn = document.getElementById("photos-btn");
const videosBtn = document.getElementById("videos-btn");
const wholeImg = document.getElementById("pix");
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
        pix.style.display = 'block';
        videosContainer[i].style.display = "none";
    })
    videosBtn.addEventListener("click", ()=>{
        videosBtn.classList.add("done");
        photosBtn.classList.remove("do");
        pix.style.display = "none";
        videosContainer[i].style.display = "flex";
    })
}