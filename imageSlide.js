const screenWidth = screen.width;
const image_slide_list = document.getElementById("image_slide_list");
const image_slide_list_item01 = document.getElementById(
  "image_slide_list_item01"
);
const image_slide_list_item04 = document.getElementById(
  "image_slide_list_item04"
);
const image_slide_list_item01_copy = image_slide_list_item01.cloneNode(true);
image_slide_list.appendChild(image_slide_list_item01_copy);
const image_slide_list_item04_copy = image_slide_list_item04.cloneNode(true);
image_slide_list.insertBefore(
  image_slide_list_item04_copy,
  image_slide_list_item01
);
const image_slide_prev_button = document.getElementById(
  "image_slide_prev_button"
);
const image_slide_next_button = document.getElementById(
  "image_slide_next_button"
);
let currentIndex = 1;
let slide_interval = setInterval(imageSlide, 6000);
image_slide_list.style.transform = `translate3d(-${image_slide_list_item01.clientWidth}px, 0px, 0px)`;

function imageSlide() {
  currentIndex++;
  image_slide_list.style.transition = "500ms";
  image_slide_list.style.transform = `translate3d(-${
    image_slide_list_item01.clientWidth * currentIndex
  }px, 0px, 0px)`;
  // image_slide_list.style.transition = "500ms";
  // image_slide_list.style.transform = `translate3d(-${
  //   image_slide_list_item01.clientWidth * currentIndex
  // }px, 0px, 0px)`;

  if (currentIndex === 5) {
    setTimeout(function () {
      image_slide_list.style.transition = "";
      image_slide_list.style.transform = `translate3d(-${image_slide_list_item01.clientWidth}px, 0px, 0px)`;
    }, 501);
    currentIndex = 1;
    // setTimeout(function () {
    //   image_slide_list.style.transition = "";
    //   image_slide_list.style.transform = `translate3d(-${image_slide_list_item01.clientWidth}px, 0px, 0px)`;
    // }, 501);
    // currentIndex = 1;
  }
}

function slideToPrev() {
  clearInterval(slide_interval);
  currentIndex--;
  image_slide_list.style.transition = "500ms";
  image_slide_list.style.transform = `translate3d(-${
    image_slide_list_item01.clientWidth * currentIndex
  }px, 0px, 0px)`;
  image_slide_prev_button.disabled = "true";
  setTimeout(function () {
    image_slide_prev_button.disabled = "";
  }, 501);

  if (currentIndex === 0) {
    setTimeout(function () {
      image_slide_list.style.transition = "";
      image_slide_list.style.transform = `translate3d(-${
        image_slide_list_item01.clientWidth * 4
      }px, 0px, 0px)`;
      image_slide_prev_button.disabled = "";
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
    image_slide_list_item01.clientWidth * (currentIndex + 1)
  }px, 0px, 0px)`;
  currentIndex++;
  image_slide_next_button.disabled = "true";
  setTimeout(function () {
    image_slide_next_button.disabled = "";
  }, 501);

  if (currentIndex === 5) {
    setTimeout(function () {
      image_slide_list.style.transition = "";
      image_slide_list.style.transform = `translate3d(-${image_slide_list_item01.clientWidth}px, 0px, 0px)`;
      image_slide_next_button.disabled = "";
    }, 501);
    image_slide_list.style.transition = "500ms";
    currentIndex = 1;
  }
  slide_interval = setInterval(imageSlide, 6000);
}

image_slide_prev_button.addEventListener("click", slideToPrev);
image_slide_next_button.addEventListener("click", slideToNext);
