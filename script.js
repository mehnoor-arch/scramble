const wordText = document.querySelector(".word");
const hintText = document.querySelector(".hint span");
const inputField = document.querySelector("input");
const refreshBtn = document.querySelector(".refresh-word");
const checkBtn = document.querySelector(".check-word");

let correctWord;

const initGame = () => {
    let randomObj = words[Math.floor(Math.random() * words.length)];
    let wordArray = randomObj.word.split("");
    for (let i = wordArray.length - 1; i > 0; i--) {
        let j = Math.floor(Math.random() * (i + 1));
        [wordArray[i], wordArray[j]] = [wordArray[j], wordArray[i]];
    }
    wordText.innerText = wordArray.join("");
    hintText.innerText = randomObj.hint;
    correctWord = randomObj.word.toLowerCase();
    inputField.value = "";
    inputField.setAttribute("maxlength", correctWord.length);
    console.log(randomObj);  // Fixed the logging statement
}

initGame();

const checkWord = () => {
    let userWord = inputField.value.toLowerCase();
    if (!userWord) {
        alert("Please enter a word.");
    } else if (correctWord != userWord) {
        alert(`Oops! ${userWord} is not the correct word.`);
    } else {
        alert(`Congrats! ${userWord.toUpperCase()} is the correct word.`);
        initGame();
    }
    inputField.value = "";
};

refreshBtn.addEventListener("click", initGame);
checkBtn.addEventListener("click", checkWord);

initGame();