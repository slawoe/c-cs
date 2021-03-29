import { data } from "./data.js";

const resetButton = document.querySelector("#reset");
const randomizeButton = document.querySelector("#randomize");
const categoryFieldset = document.querySelector("#category");
const distanceFieldset = document.querySelector("#distance");
const priceFieldset = document.querySelector("#price");
const veggieFieldset = document.querySelector("#veggie");
const form = document.querySelector("form");
const result = document.querySelector(".result");

let distanceStars = "";
let priceStars = "";
let veggieStars = "";

let category = "all";
let distance = "alldist";
let price = "allprices";
let veggie = "alltypes";

data.forEach(function (element) {
  let listElement = document.createElement("li");
  switch (element.distance) {
    case "alldist":
      distanceStars = "*";
      break;
    case "near":
      distanceStars = "**";
      break;
    case "nearest":
      distanceStars = "***";
      break;
  }
  switch (element.price) {
    case "allprices":
      priceStars = "*";
      break;
    case "cheap":
      priceStars = "**";
      break;
    case "cheapest":
      priceStars = "***";
      break;
  }
  switch (element.veggie) {
    case "alltypes":
      veggieStars = "*";
      break;
    case "vegeterian":
      veggieStars = "**";
      break;
    case "vegan":
      veggieStars = "***";
      break;
  }
  listElement.innerHTML = `${element.name} | 🚗 ${distanceStars} | 💶 ${priceStars} | 🥦 ${veggieStars}`;
  result.append(listElement);
});

function finder(fieldset) {
  return fieldset.querySelector("input:checked").value;
}

categoryFieldset.addEventListener("change", () => {
  category = finder(categoryFieldset);
});
distanceFieldset.addEventListener("change", () => {
  distance = finder(distanceFieldset);
});
priceFieldset.addEventListener("change", () => {
  price = finder(priceFieldset);
});
veggieFieldset.addEventListener("change", () => {
  veggie = finder(veggieFieldset);
});

function reset() {
  category = "all";
  distance = "alldist";
  price = "allprices";
  veggie = "alltypes";
  form.reset();
}

resetButton.addEventListener("click", () => {
  reset();
});

form.addEventListener("change", () => {
  if (category != "all") {
    console.log(
      data.filter(
        (rest) =>
          rest.category === category &&
          rest.price === price &&
          rest.distance === distance &&
          rest.veggie === veggie
      )
    );
  }
});
