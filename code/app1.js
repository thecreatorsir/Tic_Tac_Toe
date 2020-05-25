// ui variables
const one = document.querySelector(".one"),
  two = document.querySelector(".two"),
  three = document.querySelector(".three"),
  four = document.querySelector(".four"),
  five = document.querySelector(".five"),
  six = document.querySelector(".six"),
  seven = document.querySelector(".seven"),
  eight = document.querySelector(".eight"),
  nine = document.querySelector(".nine"),
  message = document.querySelector(".message");

//call event listeners
loadEventListner();

//add event listners

function loadEventListner() {
  //addd event listner to all the boxes at once...
  document.querySelectorAll(".box").forEach((item) => {
    item.addEventListener("keyup", (e) => {
      if (
        (one.value == "X" && two.value == "X" && three.value == "X") ||
        (one.value == "0" && two.value == "0" && three.value == "0")
      ) {
        showMessage("Game Over! YOU won", "green");
      } else if (
        (four.value == "X" && five.value == "X" && six.value == "X") ||
        (four.value == "0" && five.value == "0" && six.value == "0")
      ) {
        showMessage("Game Over! YOU won", "green");
      } else if (
        (seven.value == "X" && eight.value == "X" && nine.value == "X") ||
        (seven.value == "0" && eight.value == "0" && nine.value == "0")
      ) {
        showMessage("Game Over! YOU won", "green");
      } else if (
        (one.value == "X" && four.value == "X" && seven.value == "X") ||
        (one.value == "0" && four.value == "0" && seven.value == "0")
      ) {
        showMessage("Game Over! YOU won", "green");
      } else if (
        (two.value == "X" && five.value == "X" && eight.value == "X") ||
        (two.value == "0" && five.value == "0" && eight.value == "0")
      ) {
        showMessage("Game Over! YOU won", "green");
      } else if (
        (three.value == "X" && six.value == "X" && nine.value == "X") ||
        (three.value == "0" && six.value == "0" && nine.value == "0")
      ) {
        showMessage("Game Over! YOU won", "green");
      } else if (
        (one.value == "X" && five.value == "X" && nine.value == "X") ||
        (one.value == "0" && five.value == "0" && nine.value == "0")
      ) {
        showMessage("Game Over! YOU won", "green");
      } else if (
        (three.value == "X" && five.value == "X" && seven.value == "X") ||
        (three.value == "0" && five.value == "0" && seven.value == "0")
      ) {
        showMessage("Game Over! YOU won", "green");
      } else {
        draw();
      }
      e.preventDefault();
    });
  });
}

//SHOW MESSAGE
function showMessage(Message, color) {
  message.textContent = Message;
  message.style.color = color;
  disable();
}

//disable input

function disable() {
  document.querySelectorAll(".box").forEach((item) => {
    item.disabled = true;
  });
}

//draw case

function draw() {
  let count = 0;
  document.querySelectorAll(".box").forEach((item) => {
    if (item.value !== "") {
      count++;
    }
    if (count === 9) {
      showMessage("Game Over! Match Draw", "blue");
    }
  });
}
