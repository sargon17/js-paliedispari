const oddEvenNumber = document.querySelector("#oddEvenNumber");
const oddBtn = document.querySelector("#oddBtn");
const evenBtn = document.querySelector("#evenBtn");
const oddEvenResult = document.querySelector("#oddEvenResult");

let isEven = true;

// -------------------------------- FUNCTIONS --------------------------------------
// -------------- Odd Even Game Functions ----------------
// this function is a odd even game, it check the chose of user, generate a number and then display the result of the game
function oddEvenGame(isEven, playerNum) {
  pcNum = Math.floor(Math.random() * 5 + 1);
  sum = pcNum + parseInt(playerNum);
  oddEvenResult.className = "";

  if (sum % 2 === 0 && isEven) {
    oddEvenResult.innerHTML = `You have won, the sum is ${
      sum % 2 === 0 ? "even" : "odd"
    } because the computer chose ${pcNum} and you ${playerNum}`;
    oddEvenResult.classList.add("text-success");
  } else if (sum % 2 !== 0 && !isEven) {
    oddEvenResult.innerHTML = `You have won, the sum is ${
      sum % 2 === 0 ? "even" : "odd"
    } because the computer chose ${pcNum} and you ${playerNum}`;
    oddEvenResult.classList.add("text-success");
  } else {
    oddEvenResult.innerHTML = `Damn, you have lost, the sum is ${
      sum % 2 === 0 ? "even" : "odd"
    } because the computer chose ${pcNum} and you ${playerNum}`;
    oddEvenResult.classList.add("text-danger");
  }
}
// -------------- / Odd Even Game Functions ----------------
// -------------------------------- / FUNCTIONS --------------------------------------

// ------------------------- EVENT LISTENERS ---------------------
// ------------- Odd Even Game ----------------
oddBtn.addEventListener("click", () => {
  isEven = false;
  oddEvenGame(isEven, oddEvenNumber.value);
});
evenBtn.addEventListener("click", () => {
  isEven = true;
  oddEvenGame(isEven, oddEvenNumber.value);
});
// ------------- / Odd Even Game ----------------
// -------------------------- / EVENT LISTENERS ---------------------
