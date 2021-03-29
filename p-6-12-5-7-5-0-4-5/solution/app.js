import { data } from "./data.js";

const resetButton = document.querySelector("#reset");
const randomizeButton = document.querySelector("#randomize");
const categoryFieldset = document.querySelector("#category");
const distanceFieldset = document.querySelector("#distance");
const priceFieldset = document.querySelector("#price");
const veggieFieldset = document.querySelector("#veggie");
const form = document.querySelector("form");

console.log(data);

let category = "all";
let distance = "alldist";
let price = "allprices";
let veggie = "alltypes";

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

form.addEventListener("change", () => {
  console.log(`Das ist deine Variable: ${category}`);
  console.log(`Das ist deine Variable: ${distance}`);
  console.log(`Das ist deine Variable: ${price}`);
  console.log(`Das ist deine Variable: ${veggie}`);
});
