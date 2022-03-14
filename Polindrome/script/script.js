const moreBtn = document.querySelector("#moreBtn");
const palindromeList = document.querySelector("#palindromeList");
const checkPalindromeBtn = document.querySelector("#checkPalindrome");
const palindromeInput = document.querySelector("#palindromeInput");
const result = document.querySelector("#result");
const oddEvenNumber = document.querySelector("#oddEvenNumber");
const oddBtn = document.querySelector("#oddBtn");
const evenBtn = document.querySelector("#evenBtn");
const oddEvenResult = document.querySelector("#oddEvenResult");

let isListHidden = true;
let isEven = true;

// -------------------------------- FUNCTIONS --------------------------------------
// ------------------ Palindrome Checker Functions -----------------
// the function erase the withe spaces of given string
function removeSpaces(string) {
  return string.split(" ").join("");
}

// the function return is the given string in Palindrome or not
function checkForPalindrome(string) {
  string = removeSpaces(string.toLowerCase());

  for (let index = 0; index < string.length / 2; index++) {
    if (string[index] !== string[string.length - 1 - index]) {
      return false;
    }
  }
  return true;
}

// This function display the result only for palindrome checker
function displayResult(value) {
  result.innerHTML = "";
  result.className = "";
  if (value) {
    result.innerHTML = `${palindromeInput.value} is a Palindrome`;
    result.classList.add("text-success");
  } else {
    result.innerHTML = `${palindromeInput.value} is not a Palindrome`;
    result.classList.add("text-danger");
  }
}
// ------------------ / Palindrome Checker Functions -----------------

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

// -------------------------- EVENT LISTENERS ---------------------
// ------------- Palindrome checker ----------------
moreBtn.addEventListener("click", () => {
  palindromeList.classList.toggle("d-none");
  if (isListHidden) {
    moreBtn.innerHTML = "Hide list";
    isListHidden = false;
  } else {
    moreBtn.innerHTML = "See more";
    isListHidden = true;
  }
});

checkPalindromeBtn.addEventListener("click", () => {
  const isPalindrome = checkForPalindrome(palindromeInput.value);
  displayResult(isPalindrome);
});
palindromeInput.addEventListener("keydown", (key) => {
  if (key.key === "Enter") {
    const isPalindrome = checkForPalindrome(palindromeInput.value);
    displayResult(isPalindrome);
  }
});
// ------------- / Palindrome checker ----------------

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
