const counter = document.querySelector("#counter");
const buttons = document.querySelectorAll(".btn");

let count = 0;

buttons.forEach((button) => {
  button.addEventListener("click", (e) => {
    const styles = e.currentTarget.classList;

    // Change counter value

    if (styles.contains("increase")) {
      count++;
    } else if (styles.contains("decrease")) {
      count--;
    } else {
      count = 0;
    }

    // Change color of counter

    if (count > 0) {
      counter.style.color = "green";
    } else if (count < 0) {
      counter.style.color = "red";
    } else {
      counter.style.color = "purple";
    }
    counter.textContent = count;
  });
});