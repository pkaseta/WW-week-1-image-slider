const photoSlider = document.getElementById("photoSlider");
const photoSliderImages = document.querySelectorAll("img");
const prevButton = document.getElementById("prevImage");
const nextButton = document.getElementById("nextImage");

let counter = 1;

photoSlider.style.transform = "translateX(" + -300 * counter + "px)";

prevButton.addEventListener("click", function () {
  if (counter === 0) {
    return;
  }
  counter--;
  photoSlider.style.transition = "transform 0.5s ease-in-out";
  photoSlider.style.transform = "translateX(" + -300 * counter + "px)";
  console.log("this works");
  console.log(counter);
});

nextButton.addEventListener("click", function () {
  if (counter === 6) {
    return;
  }
  counter++;
  photoSlider.style.transition = "transform 0.5s ease-in-out";
  photoSlider.style.transform = "translateX(" + -300 * counter + "px)";
  console.log("this works");
  console.log(counter);
});

photoSlider.addEventListener("transitionend", function () {
  if (photoSliderImages[counter].id === "lastImageCopy") {
    photoSlider.style.transition = "none";
    counter = photoSliderImages.length - 2;
    photoSlider.style.transform = "translateX(" + -300 * counter + "px)";
  }
  if (photoSliderImages[counter].id === "firstImageCopy") {
    photoSlider.style.transition = "none";
    counter = photoSliderImages.length - counter;
    photoSlider.style.transform = "translateX(" + -300 * counter + "px)";
  }
});
