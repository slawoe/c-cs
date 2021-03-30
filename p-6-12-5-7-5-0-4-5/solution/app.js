import { data } from "./data.js";

// QUERY SELECTORS
const form = document.querySelector("form");
const categoryFieldset = document.querySelector("#category");
const distanceFieldset = document.querySelector("#distance");
const priceFieldset = document.querySelector("#price");
const veggieFieldset = document.querySelector("#veggie");
const result = document.querySelector(".result");
const all = document.querySelector("#all");
const burger = document.querySelector("#burger");
const pizzapasta = document.querySelector("#pizzapasta");
const asia = document.querySelector("#asia");
const homemade = document.querySelector("#homemade");
const other = document.querySelector("#other");
const alldist = document.querySelector("#alldist");
const near = document.querySelector("#near");
const nearest = document.querySelector("#nearest");
const allprices = document.querySelector("#allprices");
const cheap = document.querySelector("#cheap");
const eotm = document.querySelector("#eotm");
const alltypes = document.querySelector("#alltypes");
const vegeterian = document.querySelector("#vegeterian");
const vegan = document.querySelector("#vegan");
const resetButton = document.querySelector("#reset");
const randomizeButton = document.querySelector("#randomize");

// GLOBAL VARIABLES
let distanceStars = "";
let priceStars = "";
let veggieStars = "";

let category = "all";
let distance = 1;
let price = 1;
let veggie = 1;

//FUNCTIONS
function theStarsSwitch(element) {
  switch (element.distance) {
    case 1:
      distanceStars = "🚗 🚗 🚗";
      break;
    case 2:
      distanceStars = "🚗 🚗";
      break;
    case 3:
      distanceStars = "🚗";
      break;
  }
  switch (element.price) {
    case 1:
      priceStars = "💶  💶  💶 ";
      break;
    case 2:
      priceStars = "💶  💶 ";
      break;
    case 3:
      priceStars = "💶 ";
      break;
  }
  switch (element.veggie) {
    case 1:
      veggieStars = "🥦";
      break;
    case 2:
      veggieStars = "🥦 🥦";
      break;
    case 3:
      veggieStars = "🥦 🥦 🥦";
      break;
  }
}
function removeAttributes(element, ...attributes) {
  attributes.forEach((attribute) => element.removeAttribute(attribute));
}
function deleteAllChecked() {
  removeAttributes(all, "checked", "class");
  removeAttributes(burger, "checked", "class");
  removeAttributes(pizzapasta, "checked", "class");
  removeAttributes(asia, "checked", "class");
  removeAttributes(homemade, "checked", "class");
  removeAttributes(other, "checked", "class");
  removeAttributes(alldist, "checked", "class");
  removeAttributes(near, "checked", "class");
  removeAttributes(nearest, "checked", "class");
  removeAttributes(allprices, "checked", "class");
  removeAttributes(cheap, "checked", "class");
  removeAttributes(eotm, "checked", "class");
  removeAttributes(alltypes, "checked", "class");
  removeAttributes(vegeterian, "checked", "class");
  removeAttributes(vegan, "checked", "class");
}
function setChecked() {
  switch (category) {
    case "all":
      all.setAttribute("checked", "checked");
      all.setAttribute("class", "lightblue");
      break;
    case "burger":
      burger.setAttribute("checked", "checked");
      burger.setAttribute("class", "lightblue");
      break;
    case "pizzapasta":
      pizzapasta.setAttribute("checked", "checked");
      pizzapasta.setAttribute("class", "lightblue");
      break;
    case "asia":
      asia.setAttribute("checked", "checked");
      asia.setAttribute("class", "lightblue");
      break;
    case "homemade":
      homemade.setAttribute("checked", "checked");
      homemade.setAttribute("class", "lightblue");
      break;
    case "other":
      other.setAttribute("checked", "checked");
      other.setAttribute("class", "lightblue");
      break;
  }
  switch (distance) {
    case 1:
      alldist.setAttribute("checked", "checked");
      alldist.setAttribute("class", "lightblue");
      break;
    case 2:
      near.setAttribute("checked", "checked");
      near.setAttribute("class", "lightblue");
      break;
    case 3:
      nearest.setAttribute("checked", "checked");
      nearest.setAttribute("class", "lightblue");
      break;
  }
  switch (price) {
    case 1:
      allprices.setAttribute("checked", "checked");
      allprices.setAttribute("class", "lightblue");
      break;
    case 2:
      cheap.setAttribute("checked", "checked");
      cheap.setAttribute("class", "lightblue");
      break;
    case 3:
      eotm.setAttribute("checked", "checked");
      eotm.setAttribute("class", "lightblue");
      break;
  }
  switch (veggie) {
    case 1:
      alltypes.setAttribute("checked", "checked");
      alltypes.setAttribute("class", "lightblue");
      break;
    case 2:
      vegeterian.setAttribute("checked", "checked");
      vegeterian.setAttribute("class", "lightblue");
      break;
    case 3:
      vegan.setAttribute("checked", "checked");
      vegan.setAttribute("class", "lightblue");
      break;
  }
}
function loadAllData() {
  setChecked();
  data.forEach(function (element) {
    let listElement = document.createElement("li");
    theStarsSwitch(element);
    listElement.innerHTML = `${element.name} | ${distanceStars} | ${priceStars} | ${veggieStars}`;
    result.append(listElement);
  });
}
function resultsToShow() {
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
      listElement.innerHTML = `${element.name} | ${distanceStars} | ${priceStars} | ${veggieStars}`;
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
      listElement.innerHTML = `${element.name} | ${distanceStars} | ${priceStars} | ${veggieStars}`;
      result.append(listElement);
    });
  }
  if (result.innerHTML === "") {
    let noResults = document.createElement("p");
    noResults.innerHTML =
      "Passen Sie bitte ihre Suchfilter an, da Ihnen in der jetzigen Auswahl keine Ergebnisse vorliegen";
    result.append(noResults);
  }
}
function valueFinder(fieldset) {
  return fieldset.querySelector("input:checked").value;
}
function randomizeToggle() {
  deleteAllChecked();
  function getRandomNumber(min, max) {
    return Math.round(Math.random() * (max - min) + min);
  }
  function getRandomCategory(min, max) {
    let categoryNumber = Math.round(Math.random() * (max - min) + min);
    switch (categoryNumber) {
      case 1:
        return "all";
        break;
      case 2:
        return "burger";
        break;
      case 3:
        return "pizzapasta";
        break;
      case 4:
        return "asia";
        break;
      case 5:
        return "homemade";
        break;
      case 6:
        return "other";
        break;
    }
  }
  category = getRandomCategory(1, 6);
  distance = getRandomNumber(1, 3);
  price = getRandomNumber(1, 3);
  veggie = getRandomNumber(1, 3);
  setChecked();
  resultsToShow();
}

// EVENT LISTENERS
categoryFieldset.addEventListener("change", () => {
  category = valueFinder(categoryFieldset);
});
distanceFieldset.addEventListener("change", () => {
  distance = parseInt(valueFinder(distanceFieldset));
});
priceFieldset.addEventListener("change", () => {
  price = parseInt(valueFinder(priceFieldset));
});
veggieFieldset.addEventListener("change", () => {
  veggie = parseInt(valueFinder(veggieFieldset));
});
form.addEventListener("change", () => {
  deleteAllChecked();
  setChecked();
  resultsToShow();
});
resetButton.addEventListener("click", () => {
  location.reload();
});
randomizeButton.addEventListener("click", () => {
  randomizeToggle();
});

// START THE SCRIPT
loadAllData();
