const button_twenty_likes = document.getElementById("button_twenty_likes");
const button_bbq_items = document.getElementById("button_bbq_items");
const button_fresh_morning = document.getElementById("button_fresh_morning");
const twenty_likes_item_list = document.getElementById(
  "twenty_likes_item_list"
);
const bbq_items_item_list = document.getElementById("bbq_items_item_list");
const fresh_morning_item_list = document.getElementById(
  "fresh_morning_item_list"
);

function itemListControl(event) {
  button_twenty_likes.classList.remove("button_twenty_likes_selected");
  button_bbq_items.classList.remove("button_bbq_items_selected");
  button_fresh_morning.classList.remove("button_fresh_morning_selected");
  twenty_likes_item_list.classList.add("display_none");
  bbq_items_item_list.classList.add("display_none");
  fresh_morning_item_list.classList.add("display_none");

  if (event.target === button_twenty_likes) {
    this.classList.add("button_twenty_likes_selected");
    twenty_likes_item_list.classList.remove("display_none");
  }

  if (event.target === button_bbq_items) {
    this.classList.add("button_bbq_items_selected");
    bbq_items_item_list.classList.remove("display_none");
  }

  if (event.target === button_fresh_morning) {
    this.classList.add("button_fresh_morning_selected");
    fresh_morning_item_list.classList.remove("display_none");
  }
}

button_twenty_likes.addEventListener("click", itemListControl);
button_bbq_items.addEventListener("click", itemListControl);
button_fresh_morning.addEventListener("click", itemListControl);
