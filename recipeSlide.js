const recipe_sec = document.getElementById("recipe_sec");
const recipe_sec_width = recipe_sec.offsetWidth;
const recipe_slide_list = document.getElementById("recipe_slide_list");
const recipe_slide_list_item01 = document.getElementById(
  "recipe_slide_list_item01"
);
const recipe_slide_list_item01_copy = recipe_slide_list_item01.cloneNode(true);
const recipe_slide_list_item03 = document.getElementById(
  "recipe_slide_list_item03"
);
recipe_slide_list.appendChild(recipe_slide_list_item01_copy);
const recipe_slide_list_item03_copy = recipe_slide_list_item03.cloneNode(true);
recipe_slide_list.insertBefore(
  recipe_slide_list_item03_copy,
  recipe_slide_list_item01
);
const prev_button = document.getElementById("recipe_prev_button");
const next_button = document.getElementById("recipe_next_button");
const recipe_index_container = document.getElementById(
  "recipe_index_container"
);
const recipe_index01 = document.getElementById("recipt_index01");
const recipe_index02 = document.getElementById("recipt_index02");
const recipe_index03 = document.getElementById("recipt_index03");
let recipeIndex = 1;

recipe_slide_list.style.transform = `translate3d(-${
  recipe_sec_width * 0.5
}px, 0px, 0px)`;

function go_prev() {
  recipeIndex--;
  recipe_slide_list.style.transition = "300ms";
  recipe_slide_list.style.transform = `translate3d(-${
    recipe_sec_width * 0.5 * recipeIndex
  }px, 0px, 0px)`;
  recipe_index01.style.fontWeight = 400;
  recipe_index02.style.fontWeight = 400;
  recipe_index03.style.fontWeight = 400;
  prev_button.disabled = "true";
  setTimeout(function () {
    prev_button.disabled = "";
  }, 301);

  if (recipeIndex === 0) {
    setTimeout(function () {
      recipe_slide_list.style.transition = "";
      recipe_slide_list.style.transform = `translate3d(-${
        recipe_sec_width * 1.5
      }px, 0px, 0px)`;
      prev_button.disabled = "";
    }, 301);
    recipe_index03.style.fontWeight = 900;
    recipeIndex = 3;
  } else {
    recipe_index_container.children[recipeIndex - 1].style.fontWeight = 900;
  }
}

function go_next() {
  recipeIndex++;
  recipe_slide_list.style.transition = "300ms";
  recipe_slide_list.style.transform = `translate3d(-${
    recipe_sec_width * 0.5 * recipeIndex
  }px, 0px, 0px)`;
  recipe_index01.style.fontWeight = 400;
  recipe_index02.style.fontWeight = 400;
  recipe_index03.style.fontWeight = 400;
  next_button.disabled = "true";
  setTimeout(function () {
    next_button.disabled = "";
  }, 301);

  if (recipeIndex === 4) {
    setTimeout(function () {
      recipe_slide_list.style.transition = "";
      recipe_slide_list.style.transform = `translate3d(-${
        recipe_sec_width * 0.5
      }px, 0px, 0px)`;
      next_button.disabled = "";
    }, 301);
    recipe_index01.style.fontWeight = 900;
    recipeIndex = 1;
  } else {
    recipe_index_container.children[recipeIndex - 1].style.fontWeight = 900;
  }
}

prev_button.addEventListener("click", go_prev);
next_button.addEventListener("click", go_next);
