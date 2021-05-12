const screenWidth = screen.width;
const image_slide_list = document.getElementById("image_slide_list");
const slide_list_item01 = document.getElementById("slide_list_item01");
const slide_list_item02 = document.getElementById("slide_list_item02");
const slide_list_item03 = document.getElementById("slide_list_item03");
const slide_list_item04 = document.getElementById("slide_list_item04");
const slide_list_item01_copy = slide_list_item01.cloneNode(true);
image_slide_list.appendChild(slide_list_item01_copy);
const slide_list_item04_copy = slide_list_item04.cloneNode(true);
image_slide_list.insertBefore(slide_list_item04_copy, slide_list_item01);
const button_prev = document.getElementById("button_prev");
const button_next = document.getElementById("button_next");
let currentIndex = 1;
let slide_interval = setInterval(imageSlide, 6000);

function imageSlide() {
  currentIndex++;
  image_slide_list.style.transition = "500ms";
  image_slide_list.style.transform = `translate3d(-${
    screenWidth * currentIndex
  }px, 0px, 0px)`;

  if (currentIndex === 5) {
    setTimeout(function () {
      image_slide_list.style.transition = "";
      image_slide_list.style.transform = `translate3d(-${screenWidth}px, 0px, 0px)`;
    }, 501);
    currentIndex = 1;
  }
}

function slideToPrev() {
  clearInterval(slide_interval);
  currentIndex--;
  image_slide_list.style.transition = "500ms";
  image_slide_list.style.transform = `translate3d(-${
    screenWidth * currentIndex
  }px, 0px, 0px)`;
  button_prev.disabled = "true";
  setTimeout(function () {
    button_prev.disabled = "";
  }, 501);

  if (currentIndex === 0) {
    setTimeout(function () {
      image_slide_list.style.transition = "";
      image_slide_list.style.transform = `translate3d(-${
        screenWidth * 4
      }px, 0px, 0px)`;
      button_prev.disabled = "";
    }, 501);
    image_slide_list.style.transition = "500ms";
    currentIndex = 4;
  }
  slide_interval = setInterval(imageSlide, 6000);
}

function slideToNext() {
  clearInterval(slide_interval);
  image_slide_list.style.transition = "500ms";
  image_slide_list.style.transform = `translate3d(-${
    screenWidth * (currentIndex + 1)
  }px, 0px, 0px)`;
  currentIndex++;
  button_next.disabled = "true";
  setTimeout(function () {
    button_next.disabled = "";
  }, 501);

  if (currentIndex === 5) {
    setTimeout(function () {
      image_slide_list.style.transition = "";
      image_slide_list.style.transform = `translate3d(-${screenWidth}px, 0px, 0px)`;
      button_next.disabled = "";
    }, 501);
    image_slide_list.style.transition = "500ms";
    currentIndex = 1;
  }
  slide_interval = setInterval(imageSlide, 6000);
}

button_prev.addEventListener("click", slideToPrev);
button_next.addEventListener("click", slideToNext);
