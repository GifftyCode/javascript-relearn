const newColorBtnElement = document.getElementById("new_color");
const colorCodeElement = document.getElementById("color_code");

const hexValues = [
  "0",
  "1",
  "2",
  "3",
  "4",
  "5",
  "6",
  "7",
  "8",
  "9",
  "A",
  "B",
  "C",
  "D",
  "E",
  "F",
];

const getRandomHexValues = () => {
  const randomHexValues = Math.floor(Math.random() * hexValues.length);
  const randomHexIndex = hexValues[randomHexValues];
  return randomHexIndex;
};

const getHexString = (stringLength) => {
  let hexString = "";
  for (let i = 0; i < stringLength; i++) {
    hexString += getRandomHexValues();
  }

  return hexString;
};

newColorBtnElement.addEventListener("click", () => {
  const randomHex = "#" + getHexString(6);

  document.body.style.setProperty("background-color", randomHex);
  colorCodeElement.textContent = randomHex;
});
