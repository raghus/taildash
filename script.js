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
    clearMessage(); // Clear any previous messages
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

    // Create a new element for the score difference message
    const scoreDifferenceMessage = document.createElement('div');
    
    // Calculate the difference and determine if the computer is ahead
    const ahead = computerScore - playerScore;
    if (ahead > 0) {
        scoreDifferenceMessage.textContent = `Computer is currently ahead by ${ahead}`; // Display the ahead message
    } else if (ahead < 0) {
        scoreDifferenceMessage.textContent = `Player is currently ahead by ${Math.abs(ahead)}`; // Message for when the player is ahead
    } else {
        scoreDifferenceMessage.textContent = 'Scores are TIED!'; // Message for when the scores are tied
    }

    // Append the score difference message to the score display
    scoreDifferenceElement.innerHTML = ''; // Clear previous content
    scoreDifferenceElement.appendChild(scoreDifferenceMessage); // Add the new message
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

function showMessage(text, type) {
    messageElement.innerHTML = text; // Use innerHTML to allow HTML content
    messageElement.className = type;

    // Check if the game is over and add the "Play again?" link
    if (type === 'success' || type === 'error') {
        messageElement.innerHTML += ' <a href="/" id="play-again-link">Play again?</a>'; // Add the link
    }
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
        showMessage('Computer cannot find a valid word. You win!', 'success');
        document.getElementById('give-up-link').style.display = 'none'; // Hide the Give up link
        return false;
    }
    
    computerWord = validWords[Math.floor(Math.random() * validWords.length)];
    const score = calculateWordScore(computerWord);
    computerScore += score;
    playedWords.add(computerWord);
    addToHistory(computerWord, score, false);
    lastPlayedWord = computerWord;
    updateDisplay();
    
    userInputElement.focus(); // Move focus back to input field to show keyboard
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
    
    // Calculate the score difference after the player's input
    const scoreDifference = playerScore - computerScore;

    // Check if the player's score exceeds the computer's score by 5 points
    if (scoreDifference > 5) {
        showMessage(`Game over! You win as you are ahead by ${scoreDifference} points!`, 'success');
        disableGameControls(); // Disable input and button
        document.getElementById('give-up-link').style.display = 'none'; // Hide the Give up link
        return;
    }
    
    // Check if the computer's score exceeds the player's score by 10 points
    if (computerScore - playerScore > 10) {
        showMessage('Game over! Computer wins as it is ahead by 10 points!', 'success');
        disableGameControls(); // Disable input and button
        document.getElementById('give-up-link').style.display = 'none'; // Hide the Give up link
        return;
    }
    
    // Check if the score difference exceeds 10 points
    if (Math.abs(scoreDifference) > 10) {
        showMessage('Game over! ' + (playerScore > computerScore ? 'You win!' : 'Computer wins!'), 'success');
        disableGameControls(); // Disable input and button
        document.getElementById('give-up-link').style.display = 'none'; // Hide the Give up link
        return;
    }
    
    // Now call computerTurn only after checking the score difference
    if (!computerTurn()) {
        disableGameControls(); // Disable input and button
    }
    
    userInputElement.value = '';
    userInputElement.focus(); // Move focus back to input field to show keyboard
}

// Function to disable input and submit button
function disableGameControls() {
    userInputElement.disabled = true; // Disable the input field
    submitButton.disabled = true; // Disable the submit button
}

// Function to handle the "Give up?" action
function handleGiveUp() {
    let validWords = words.filter(word => 
        !playedWords.has(word) && differsByOneLetter(word, lastPlayedWord
    ));

    if (validWords.length > 0) {
        const randomWord = validWords[Math.floor(Math.random() * validWords.length)];
        showMessage(`You lose. You could have guessed: ${randomWord}`, 'error');
    } else {
        showMessage('I couldn\'t find a valid word either. Let\'s call it a draw.', 'error');
    }
    
    disableGameControls(); // Disable input and button after giving up
    document.getElementById('give-up-link').style.display = 'none'; // Hide the Give up link
}

// Event listener for the "Give up?" link
document.getElementById('give-up-link').addEventListener('click', function(event) {
    event.preventDefault(); // Prevent the default link behavior
    handleGiveUp(); // Call the function to handle giving up
});

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

// Function to show the modal
function showModal() {
    const modal = document.getElementById('rules-modal');
    modal.style.display = 'block';
}

// Function to close the modal
function closeModal() {
    const modal = document.getElementById('rules-modal');
    modal.style.display = 'none';
}

// Event listeners for modal
document.getElementById('close-modal').addEventListener('click', closeModal);
document.getElementById('play-button').addEventListener('click', closeModal);

// Show the modal when the page loads
window.onload = showModal;

initializeGame();