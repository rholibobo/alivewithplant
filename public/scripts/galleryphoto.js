
const box = document.getElementsByClassName("container");
const boxText = document.getElementsByClassName("main-display");
const boxText2 = document.getElementsByClassName("recipee-display");
const button = document.getElementsByClassName("btnGallery");
const buttonBelow = document.getElementsByClassName("btnBelow");




photosBtn.addEventListener("click", ()=>{
  photosBtn.classList.add("swap")
})

for (
  let i = 0;
  i < boxText.length &&
  i < boxText2.length &&
  i < button.length &&
  i < buttonBelow.length &&
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

}





