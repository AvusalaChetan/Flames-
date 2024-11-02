let submitBtn = document.querySelector("#btn");
let result = document.querySelector("#result");
let body = document.querySelector("#flamesForm");

function flames() {
  unatchMatchCalculation()
}
function unatchMatchCalculation() {
  let yourName = document.querySelector("#your-name").value.toLowerCase().trim();
  let crushName = document.querySelector("#crush-name").value.toLowerCase().trim();
  let matchingLetters = [];
  let unmatchingLetters = [];

  for (let i = 0; i < yourName.length; i++) {
    let matchFound = false;
    for (let j = 0; j < crushName.length; j++) {
      if (yourName[i] === crushName[j]) {
        matchingLetters.push(crushName[j]);
        crushName = crushName.slice(0, j) + crushName.slice(j + 1);
        matchFound = true;
        break;
      }
    }
    if (!matchFound) {
      unmatchingLetters.push(yourName[i]);
    }
  }
  // Add remaining unmatching letters from crushName
  for (let k = 0; k < crushName.length; k++) {
    if (crushName[k] !== '') {
      unmatchingLetters.push(crushName[k]);
    }
  }

  console.log(unmatchingLetters.length)
  relationship(unmatchingLetters)
  result.innerHTML = `<b>Matching Letters:</b> ${matchingLetters.join(', ')}<br><b>Unmatching Letters:</b> ${unmatchingLetters.join(', ')}`;
}

function relationship(notmatch) {
  let relation = document.querySelector(".result");
  let flamesArray = ["Friends",
    "Love",
    "Affection",
    "Marriage",
    "Enemy",
    "Siblings"];
  let count = notmatch.length;
  let resultIndex = (count - 1) % flamesArray.length;

  console.log(flamesArray[resultIndex]);
  relation.innerHTML = `<br>You and your crush will be ${flamesArray[resultIndex]}`;
}

submitBtn.addEventListener("click", () => {
  flames()
});
document.getElementById("switch").addEventListener("change", function() {
  console.log("clicked")
  document.body.classList.toggle("dark-theme")
});