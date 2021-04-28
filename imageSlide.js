const screenWidth = screen.width;
const image_slide_list = document.getElementById("image_slide_list");
const slide_list_item01 = document.getElementById("slide_list_item01");
const slide_list_item02 = document.getElementById("slide_list_item02");
const slide_list_item03 = document.getElementById("slide_list_item03");
const slide_list_item04 = document.getElementById("slide_list_item04");
const slide_list_item01_copy = slide_list_item01.cloneNode(true);
image_slide_list.appendChild(slide_list_item01_copy);
const button_prev = document.getElementById("button_prev");
const button_next = document.getElementById("button_next");

let currentIndex = 1;

function slide() {
  image_slide_list.style.transition = "500ms";
  image_slide_list.style.transform = `translate3d(-${
    screenWidth * currentIndex
  }px, 0px, 0px)`;
  currentIndex++;

  if (currentIndex === 5) {
    setTimeout(function () {
      image_slide_list.style.transition = "";
      image_slide_list.style.transform = "translate3d(0px, 0px, 0px)";
    }, 501);
    currentIndex = 1;
  }
}

function controlSlide(event) {
  if (event.currentTarget === button_prev) {
  }

  if (event.currentTarget === button_next) {
  }
}

setInterval(slide, 7000);
button_prev.addEventListener("click", controlSlide);
button_next.addEventListener("click", controlSlide);
