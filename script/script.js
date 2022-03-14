const moreBtn = document.querySelector("#moreBtn");
const palindromeList = document.querySelector("#palindromeList");
const checkPalindromeBtn = document.querySelector("#checkPalindrome");
const palindromeInput = document.querySelector("#palindromeInput");
const result = document.querySelector("#result");
const oddEvenNumber = document.querySelector("#oddEvenNumber");
const oddBtn = document.querySelector("#oddBtn");
const evenBtn = document.querySelector("#evenBtn");

let isListHidden = true;
let isEven = true;

const removeSpaces = function (string) {
  return string.split(" ").join("");
};

function checkForPalindrome(string) {
  string = removeSpaces(string.toLowerCase());

  for (let index = 0; index < string.length / 2; index++) {
    if (string[index] !== string[string.length - 1 - index]) {
      return false;
    }
  }
  return true;
}

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

function oddEvenGame(isEven, playerNum) {
  pcNum = Math.floor(Math.random() * 5 + 1);
  sum = pcNum + parseInt(playerNum);

  if (sum % 2 === 0 && isEven) {
    console.log("you win", sum, isEven);
  } else if (sum % 2 !== 0 && !isEven) {
    console.log("you win", sum, isEven);
  } else {
    console.log("you lose", sum, isEven);
  }
}

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

oddBtn.addEventListener("click", () => {
  isEven = false;
  oddEvenGame(isEven, oddEvenNumber.value);
});
