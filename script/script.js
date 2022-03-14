const moreBtn = document.querySelector("#moreBtn");
const palindromeList = document.querySelector("#palindromeList");
const checkPalindrome = document.querySelector("#checkPalindrome");
const palindromeInput = document.querySelector("#palindromeInput");

let isListHidden = true;

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
