const colors = ["#fcba03", "#03fcdf", "#0d4a43", "#0d1c4a", "#4a0d3d", "#4a0d0d"];

const btn = document.getElementById("btn");
const color = document.querySelector(".color");

btn.addEventListener("click", () => {
  const randomNumber = getRandomNumber();

  document.body.style.backgroundColor = colors[randomNumber];
  color.textContent = colors[randomNumber];
});

getRandomNumber = () => {
  return Math.floor(Math.random() * colors.length);
};