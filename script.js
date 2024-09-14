// Scrabble letter points
const letterPoints = {
    'A': 1, 'B': 3, 'C': 3, 'D': 2, 'E': 1, 'F': 4, 'G': 2, 'H': 4, 'I': 1, 'J': 8,
    'K': 5, 'L': 1, 'M': 3, 'N': 1, 'O': 1, 'P': 3, 'Q': 10, 'R': 1, 'S': 1, 'T': 1,
    'U': 1, 'V': 4, 'W': 4, 'X': 8, 'Y': 4, 'Z': 10
};

let computerWord = '';
let isHistoryVisible = true;
let lastPlayedWord = '';

function differsByOneLetter(word1, word2) {
    if (word1.length !== word2.length) return false;
    let differences = 0;
    for (let i = 0; i < word1.length; i++) {
        if (word1[i] !== word2[i]) differences++;
        if (differences > 1) return false;
    }
    return differences === 1;
}
let playerScore = 0;
let computerScore = 0;
let playedWords = new Set();
let gameHistory = [{word: computerWord, score: calculateWordScore(computerWord), player: 'Computer'}];

const computerWordElement = document.getElementById('computer-word');
const userInputElement = document.getElementById('user-input');
const submitButton = document.getElementById('submit-btn');
const messageElement = document.getElementById('message');
const gameHistoryElement = document.getElementById('game-history');
const playerScoreElement = document.getElementById('player-score');
const computerScoreElement = document.getElementById('computer-score');
const scoreDifferenceElement = document.getElementById('score-difference');

function initializeGame() {
    computerWord = getRandomWord();
    const score = calculateWordScore(computerWord);
    computerScore += score;
    playedWords.add(computerWord);
    addToHistory(computerWord, score, false);
    lastPlayedWord = computerWord;
    updateDisplay();
}

function getRandomWord() {
    return words[Math.floor(Math.random() * words.length)];
}

function calculateWordScore(word) {
    return word.split('').reduce((score, letter) => score + letterPoints[letter], 0);
}

function updateDisplay() {
    computerWordElement.textContent = computerWord;
    playerScoreElement.textContent = playerScore;
    computerScoreElement.textContent = computerScore;
    scoreDifferenceElement.textContent = Math.abs(playerScore - computerScore);
}

function isValidWord(word) {
    if (!words.includes(word)) {
        showMessage("That word doesn't exist in our dictionary.", 'error');
        return false;
    }
    if (playedWords.has(word)) {
        showMessage("That word has already been played.", 'error');
        return false;
    }
    if (!differsByOneLetter(word, lastPlayedWord)) {
        showMessage("Your word must differ by exactly one letter from the last word.", 'error');
        return false;
    }
    return true;
}

function differsByOneLetter(word1, word2) {
    if (word1.length !== word2.length) return false;
    let differences = 0;
    for (let i = 0; i < word1.length; i++) {
        if (word1[i] !== word2[i]) differences++;
        if (differences > 1) return false;
    }
    return differences === 1;
}

function showMessage(text, type) {
    messageElement.textContent = text;
    messageElement.className = type;
}

function clearMessage() {
    messageElement.textContent = '';
    messageElement.className = '';
}

function addToHistory(word, score, isPlayer) {
    const historyItem = document.createElement('div');
    historyItem.className = 'history-item ' + (isPlayer ? 'player' : 'computer'); // Add class based on player or computer
    historyItem.innerHTML = `
        <span>${isPlayer ? 'Player' : 'Computer'}</span>
        <span>${word}</span>
        <span>${score}</span>
    `;
    gameHistoryElement.prepend(historyItem);
}

function computerTurn() {
    let validWords = words.filter(word => 
        !playedWords.has(word) && differsByOneLetter(word, lastPlayedWord)
    );
    
    if (validWords.length === 0) {
        showMessage('Computer cannot find a valid word. Game over!', 'success');
        return false;
    }
    
    computerWord = validWords[Math.floor(Math.random() * validWords.length)];
    const score = calculateWordScore(computerWord);
    computerScore += score;
    playedWords.add(computerWord);
    addToHistory(computerWord, score, false);
    lastPlayedWord = computerWord;
    updateDisplay();
    return true;
}

function handleUserInput() {
    const userWord = userInputElement.value.toUpperCase();
    if (!isValidWord(userWord)) {
        return;
    }
    
    clearMessage(); // Clear any previous error messages
    
    const score = calculateWordScore(userWord);
    playerScore += score;
    playedWords.add(userWord);
    addToHistory(userWord, score, true);
    lastPlayedWord = userWord;
    updateDisplay();
    
    if (Math.abs(playerScore - computerScore) > 10) {
        showMessage('Game over! ' + (playerScore > computerScore ? 'You win!' : 'Computer wins!'), 'success');
        submitButton.disabled = true;
        return;
    }
    
    if (!computerTurn()) {
        submitButton.disabled = true;
    }
    
    userInputElement.value = '';
}

submitButton.addEventListener('click', handleUserInput);
userInputElement.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') {
        handleUserInput();
    }
});

userInputElement.addEventListener('input', function() {
    this.value = this.value.toUpperCase();
    clearMessage(); // Clear error message when user starts typing
});

initializeGame();