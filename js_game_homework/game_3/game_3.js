const squares = document.querySelectorAll(".cell");
const mole = document.querySelectorAll(".mole");
const score = document.querySelector(".score");

let result = 0;
let hitPosition;

function randomM() {
  squares.forEach(square => {
    square.classList.remove("mole");
  });

  let randomM = squares[Math.floor(Math.random() * 9)];
  randomM.classList.add("mole");
  hitPosition = randomM.id;
}

squares.forEach(square => {
  square.addEventListener("mousedown", () => {
    if (square.id == hitPosition) {
      result++;
      score.textContent = result;
      hitPosition = null;
      randomM();
    }
  });
});

randomM();
