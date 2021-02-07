const fizzBuzzList = document.querySelector("#fizzBuzzList");
for (let i = 1; i <= 100; i++) {
  const listElement = document.createElement("li");
  function addListItem(innerText, className) {
    listElement.innerText = innerText;
    if (
      innerText === "FizzBuzz" ||
      innerText === "Fizz" ||
      innerText === "Buzz"
    ) {
      listElement.classList.add(className);
    }
    fizzBuzzList.append(listElement);
  }
  if (i % 3 === 0 && i % 5 === 0) {
    addListItem("FizzBuzz", "fizzBuzzList__item-pulse");
  } else if (i % 3 === 0) {
    addListItem("Fizz", "fizzBuzzList__item-appear");
  } else if (i % 5 === 0) {
    addListItem("Buzz", "fizzBuzzList__item-buzz");
  } else {
    addListItem(i);
  }
}
