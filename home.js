const button_twenty_likes = document.getElementById("button_twenty_likes");
const button_bbq_items = document.getElementById("button_bbq_items");
const button_fresh_morning = document.getElementById("button_fresh_morning");
const best_seller_item_slide_container = document.getElementById(
  "best_seller_item_slide_container"
);
const twenty_likes_item_slide_container = document.getElementById(
  "twenty_likes_item_slide_container"
);
const bbq_items_item_slide_container = document.getElementById(
  "bbq_items_item_slide_container"
);
const fresh_morning_item_slide_container = document.getElementById(
  "fresh_morning_item_slide_container"
);

const best_seller_item_slide_list = document.getElementById(
  "best_seller_item_slide_list"
);
const twenty_likes_item_slide_list = document.getElementById(
  "twenty_likes_item_slide_list"
);
const bbq_items_item_slide_list = document.getElementById(
  "bbq_items_item_slide_list"
);
const fresh_morning_item_slide_list = document.getElementById(
  "fresh_morning_item_slide_list"
);

const best_seller_item_slide_prev_button = document.getElementById(
  "best_seller_item_slide_prev_button"
);
const best_seller_item_slide_next_button = document.getElementById(
  "best_seller_item_slide_next_button"
);
const twenty_likes_item_slide_prev_button = document.getElementById(
  "twenty_likes_item_slide_prev_button"
);
const twenty_likes_item_slide_next_button = document.getElementById(
  "twenty_likes_item_slide_next_button"
);
const bbq_items_item_slide_prev_button = document.getElementById(
  "bbq_items_item_slide_prev_button"
);
const bbq_items_item_slide_next_button = document.getElementById(
  "bbq_items_item_slide_next_button"
);
const fresh_morning_item_slide_prev_button = document.getElementById(
  "fresh_morning_item_slide_prev_button"
);
const fresh_morning_item_slide_next_button = document.getElementById(
  "fresh_morning_item_slide_next_button"
);

function itemListControl(event) {
  twenty_likes_item_slide_list.scrollLeft = 0;
  bbq_items_item_slide_list.scrollLeft = 0;
  fresh_morning_item_slide_list.scrollLeft = 0;
  button_twenty_likes.classList.remove("button_twenty_likes_selected");
  button_bbq_items.classList.remove("button_bbq_items_selected");
  button_fresh_morning.classList.remove("button_fresh_morning_selected");
  twenty_likes_item_slide_container.classList.add("display_none");
  bbq_items_item_slide_container.classList.add("display_none");
  fresh_morning_item_slide_container.classList.add("display_none");

  if (event.target === button_twenty_likes) {
    this.classList.add("button_twenty_likes_selected");
    twenty_likes_item_slide_container.classList.remove("display_none");
    twenty_likes_item_slide_prev_button.classList.add("display_none");
    twenty_likes_item_slide_next_button.classList.remove("display_none");
  }

  if (event.target === button_bbq_items) {
    this.classList.add("button_bbq_items_selected");
    bbq_items_item_slide_container.classList.remove("display_none");
    bbq_items_item_slide_prev_button.classList.add("display_none");
    bbq_items_item_slide_next_button.classList.remove("display_none");
  }

  if (event.target === button_fresh_morning) {
    this.classList.add("button_fresh_morning_selected");
    fresh_morning_item_slide_container.classList.remove("display_none");
    fresh_morning_item_slide_prev_button.classList.add("display_none");
    fresh_morning_item_slide_next_button.classList.remove("display_none");
  }
}

function itemListControlPrevNext(event) {
  if (event.target === best_seller_item_slide_prev_button) {
    best_seller_item_slide_list.scroll({ left: 0, behavior: "smooth" });
    best_seller_item_slide_prev_button.classList.add("display_none");
    best_seller_item_slide_next_button.classList.remove("display_none");
  }

  if (event.target === best_seller_item_slide_next_button) {
    best_seller_item_slide_list.scroll({ left: 290, behavior: "smooth" });
    best_seller_item_slide_prev_button.classList.remove("display_none");
    best_seller_item_slide_next_button.classList.add("display_none");
  }

  if (event.target === twenty_likes_item_slide_prev_button) {
    twenty_likes_item_slide_list.scroll({ left: 0, behavior: "smooth" });
    twenty_likes_item_slide_prev_button.classList.add("display_none");
    twenty_likes_item_slide_next_button.classList.remove("display_none");
  }

  if (event.target === twenty_likes_item_slide_next_button) {
    twenty_likes_item_slide_list.scroll({ left: 290, behavior: "smooth" });
    twenty_likes_item_slide_prev_button.classList.remove("display_none");
    twenty_likes_item_slide_next_button.classList.add("display_none");
  }

  if (event.target === bbq_items_item_slide_prev_button) {
    bbq_items_item_slide_list.scroll({ left: 0, behavior: "smooth" });
    bbq_items_item_slide_prev_button.classList.add("display_none");
    bbq_items_item_slide_next_button.classList.remove("display_none");
  }

  if (event.target === bbq_items_item_slide_next_button) {
    bbq_items_item_slide_list.scroll({ left: 290, behavior: "smooth" });
    bbq_items_item_slide_prev_button.classList.remove("display_none");
    bbq_items_item_slide_next_button.classList.add("display_none");
  }

  if (event.target === fresh_morning_item_slide_prev_button) {
    fresh_morning_item_slide_list.scroll({ left: 0, behavior: "smooth" });
    fresh_morning_item_slide_prev_button.classList.add("display_none");
    fresh_morning_item_slide_next_button.classList.remove("display_none");
  }

  if (event.target === fresh_morning_item_slide_next_button) {
    fresh_morning_item_slide_list.scroll({ left: 290, behavior: "smooth" });
    fresh_morning_item_slide_prev_button.classList.remove("display_none");
    fresh_morning_item_slide_next_button.classList.add("display_none");
  }
}

button_twenty_likes.addEventListener("click", itemListControl);
button_bbq_items.addEventListener("click", itemListControl);
button_fresh_morning.addEventListener("click", itemListControl);

best_seller_item_slide_prev_button.addEventListener(
  "click",
  itemListControlPrevNext
);
best_seller_item_slide_next_button.addEventListener(
  "click",
  itemListControlPrevNext
);
twenty_likes_item_slide_prev_button.addEventListener(
  "click",
  itemListControlPrevNext
);
twenty_likes_item_slide_next_button.addEventListener(
  "click",
  itemListControlPrevNext
);
bbq_items_item_slide_prev_button.addEventListener(
  "click",
  itemListControlPrevNext
);
bbq_items_item_slide_next_button.addEventListener(
  "click",
  itemListControlPrevNext
);
fresh_morning_item_slide_prev_button.addEventListener(
  "click",
  itemListControlPrevNext
);
fresh_morning_item_slide_next_button.addEventListener(
  "click",
  itemListControlPrevNext
);
