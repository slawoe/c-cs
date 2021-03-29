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
let distance = 1;
let price = 1;
let veggie = 1;

function theStarsSwitch(element) {
  switch (element.distance) {
    case 1:
      distanceStars = "*";
      break;
    case 2:
      distanceStars = "**";
      break;
    case 3:
      distanceStars = "***";
      break;
  }
  switch (element.price) {
    case 1:
      priceStars = "*";
      break;
    case 2:
      priceStars = "**";
      break;
    case 3:
      priceStars = "***";
      break;
  }
  switch (element.veggie) {
    case 1:
      veggieStars = "*";
      break;
    case 2:
      veggieStars = "**";
      break;
    case 3:
      veggieStars = "***";
      break;
  }
}

function loadEmAll() {
  data.forEach(function (element) {
    let listElement = document.createElement("li");
    theStarsSwitch(element);
    listElement.innerHTML = `${element.name} | 🚗 ${distanceStars} | 💶 ${priceStars} | 🥦 ${veggieStars}`;
    result.append(listElement);
  });
}

loadEmAll();

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

resetButton.addEventListener("click", () => {
  location.reload();
});

form.addEventListener("change", () => {
  result.innerHTML = "";
  if (category === "all") {
    let resultRests = data.filter(
      (rest) =>
        rest.distance >= distance &&
        rest.price >= price &&
        rest.veggie >= veggie
    );
    resultRests.forEach(function (element) {
      let listElement = document.createElement("li");
      theStarsSwitch(element);
      listElement.innerHTML = `${element.name} | 🚗 ${distanceStars} | 💶 ${priceStars} | 🥦 ${veggieStars}`;
      result.append(listElement);
    });
  } else {
    let resultRests = data.filter(
      (rest) =>
        rest.category === category &&
        rest.distance >= distance &&
        rest.price >= price &&
        rest.veggie >= veggie
    );
    resultRests.forEach(function (element) {
      let listElement = document.createElement("li");
      theStarsSwitch(element);
      listElement.innerHTML = `${element.name} | 🚗 ${distanceStars} | 💶 ${priceStars} | 🥦 ${veggieStars}`;
      result.append(listElement);
    });
  }
  if (result.innerHTML === "") {
    let emptyText = document.createElement("p");
    emptyText.innerHTML =
      "Passen Sie bitte ihre Suchfilter an, da Ihnen in der jetzigen Auswahl keine Ergebnisse vorliegen";
    result.append(emptyText);
  }
});
