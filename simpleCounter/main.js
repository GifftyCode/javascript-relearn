const addBtnElement = document.querySelector("#increament");
const subBtnElement = document.querySelector("#decreament");
const counterDisplay = document.querySelector("#counterDisplay");

let total = 0;
let limit = 20;

const displayCounter = () => {
  if (total > limit) {
    total = limit;
  }

  if (total < 0) {
    total = 0;
  }
  counterDisplay.textContent = total;

  document.body.style.backgroundColor = `rgb(${(total / limit) * 255}, 65, 0)`;
};

addBtnElement.addEventListener("click", () => {
  total += 1;
  displayCounter();
});

subBtnElement.addEventListener("click", () => {
  total -= 1;
  displayCounter();
});

displayCounter();
