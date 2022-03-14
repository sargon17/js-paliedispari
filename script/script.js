const moreBtn = document.querySelector("#moreBtn");
const palindromeList = document.querySelector("#palindromeList");
const checkPalindromeBtn = document.querySelector("#checkPalindrome");
const palindromeInput = document.querySelector("#palindromeInput");

let isListHidden = true;

const removeSpaces = function (string) {
  return string.split(" ").join("");
};

const checkForPalindrome = function (string) {
  string = removeSpaces(string.toLowerCase());
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
  checkForPalindrome(palindromeInput.value);
});
