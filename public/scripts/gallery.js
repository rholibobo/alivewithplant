const box = document.getElementsByClassName("gallery-container");
const boxText = document.getElementsByClassName("main-display");
const boxText2 = document.getElementsByClassName("recipee-display");
const button = document.getElementsByClassName("btnGallery");

for (
  let i = 0;
  i < boxText.length && i < boxText.length && i < button.length && i < box.length;
  i++
) {
  button[i].addEventListener("click", turnFlip);
  function turnFlip() {
    if (boxText[i].style.display === "block") {
      box[i].classList.add("flip");
      boxText[i].style.display = "none";
      boxText2[i].style.display = "block";
      button[i].innerText = "Back";
    } else {
      box[i].classList.remove("flip");
      boxText[i].style.display = "block";
      boxText2[i].style.display = "none";
      button[i].innerText = "Click for Recipee";
    }
  }
}