const moreBtn = document.querySelector("#moreBtn");
const palindromeList = document.querySelector("#palindromeList");
const checkPalindromeBtn = document.querySelector("#checkPalindrome");
const palindromeInput = document.querySelector("#palindromeInput");
const result = document.querySelector("#result");

let isListHidden = true;

const removeSpaces = function (string) {
  return string.split(" ").join("");
};

const checkForPalindrome = function (string) {
  string = removeSpaces(string.toLowerCase());

  for (let index = 0; index < string.length / 2; index++) {
    if (string[index] !== string[string.length - 1 - index]) {
      console.log("non e palindromo");
      return false;
    }
  }
  return true;
};

const displayResult = function (value) {
  result.innerHTML = "";
  result.className = "";
  if (value) {
    result.innerHTML = `${palindromeInput.value} is a Palindrome`;
    result.classList.add("text-success");
  } else {
    result.innerHTML = `${palindromeInput.value} is a Palindrome`;
    result.classList.add("text-danger");
  }
};

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
