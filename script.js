const MAX_RANDOM_WORDS = 3; // Set the maximum number of random words

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
const playerScoreElement = document.getElementById('player-score'); // Update to correct ID
const computerScoreElement = document.getElementById('computer-score'); // Update to correct ID
const scoreDifferenceElement = document.getElementById('score-difference');

function initializeGame() {
    clearMessage(); // Clear any previous messages
    computerWord = getRandomWord();
    const score = calculateWordScore(computerWord);
    computerScore += score;
    playedWords.add(computerWord);
    addToHistory(computerWord, score, false);
    lastPlayedWord = computerWord;
    updateDisplay(); // Ensure this is called to update the display

    // Ensure the score difference element is visible
    scoreDifferenceElement.style.display = 'flex'; // Show the score difference element
}

function getRandomWord() {
    return words[Math.floor(Math.random() * words.length)];
}

function calculateWordScore(word) {
    return word.split('').reduce((score, letter) => score + letterPoints[letter], 0);
}

function updateDisplay() {
    computerWordElement.textContent = computerWord;
    playerScoreElement.textContent = playerScore; // Update only the score value
    computerScoreElement.textContent = computerScore; // Update only the score value

    // Calculate the difference and determine if the computer is ahead
    const scoreDifference = computerScore - playerScore; // Calculate score difference
    if (scoreDifference > 0) {
        scoreDifferenceElement.textContent = `Computer is currently ahead by ${scoreDifference}`; // Display the ahead message
    } else if (scoreDifference < 0) {
        scoreDifferenceElement.textContent = `You are currently ahead by ${Math.abs(scoreDifference)}`; // Message for when the player is ahead
    } else {
        scoreDifferenceElement.textContent = 'Scores are TIED!'; // Message for when the scores are tied
    }

    // Highlight the score displays with light yellow briefly
    const highlightColor = 'lightyellow'; // Changed from 'palegoldenrod' to 'lightyellow'
    document.getElementById('computer-score-display').style.backgroundColor = highlightColor; // Change to light yellow
    document.getElementById('player-score-display').style.backgroundColor = highlightColor; // Change to light yellow

    // Reset background colors after a short delay
    setTimeout(() => {
        document.getElementById('computer-score-display').style.backgroundColor = ''; // Reset to default
        document.getElementById('player-score-display').style.backgroundColor = ''; // Reset to default
    }, 500); // Reset after 0.5 seconds

    // Reset color (if needed)
    scoreDifferenceElement.style.color = ''; // Reset to default color
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

    // Removed the check for success or error types
}

function clearMessage() {
    messageElement.textContent = '';
    messageElement.className = '';
}

function addToHistory(word, score, isPlayer) {
    const historyItem = document.createElement('div');
    historyItem.className = 'history-item ' + (isPlayer ? 'player' : 'computer'); // Add class based on player or computer
    historyItem.innerHTML = `
        <span>${isPlayer ? 'You' : 'Computer'}</span>
        <span>${word}</span>
        <span>${score}</span>
    `;
    gameHistoryElement.prepend(historyItem);

    // Highlight the last played word
    setTimeout(() => {
        historyItem.style.backgroundColor = 'lightyellow'; // Highlight color
        setTimeout(() => {
            historyItem.style.backgroundColor = ''; // Reset to default
        }, 500); // Reset after 0.5 seconds
    }, 0); // Execute immediately after adding to history
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

    // Select up to MAX_RANDOM_WORDS from the valid words
    const selectedWords = [];
    for (let i = 0; i < Math.min(MAX_RANDOM_WORDS, validWords.length); i++) {
        const randomIndex = Math.floor(Math.random() * validWords.length);
        selectedWords.push(validWords[randomIndex]);
        validWords.splice(randomIndex, 1); // Remove the selected word to avoid duplicates
    }

    // Concatenate the selected words and their scores into a single string
    const wordScoreStrings = selectedWords.map(word => {
        const score = calculateWordScore(word);
        return `${word} (${score})`; // Format each word with its score
    });
    const concatenatedString = wordScoreStrings.join(', '); // Join the strings with a comma

    // Choose the word with the highest score
    const bestWord = selectedWords.reduce((best, current) => {
        return calculateWordScore(current) > calculateWordScore(best) ? current : best;
    });

    // Fade out the current word
    computerWordElement.classList.add('fade-out');

    // Wait for the fade-out, then update the word and fade it in
    setTimeout(() => {
        computerWord = bestWord; // Set the computer's word to the best word
        const score = calculateWordScore(computerWord);
        computerScore += score;
        playedWords.add(computerWord);
        addToHistory(computerWord, score, false);
        lastPlayedWord = computerWord;

        // Update the word and trigger reflow
        computerWordElement.textContent = computerWord;
        computerWordElement.offsetHeight; // Force reflow

        // Fade in the new word
        computerWordElement.classList.remove('fade-out');
        computerWordElement.classList.add('fade-in');

        // Update the rest of the display
        updateDisplay();

        // Highlight the score displays
        const highlightColor = 'lightyellow'; // Changed from 'GreenYellow' to 'lightyellow'
        document.getElementById('computer-score-display').style.backgroundColor = highlightColor;
        document.getElementById('player-score-display').style.backgroundColor = highlightColor;

        // Reset background colors after a delay
        setTimeout(() => {
            document.getElementById('computer-score-display').style.backgroundColor = '';
            document.getElementById('player-score-display').style.backgroundColor = '';
            computerWordElement.classList.remove('fade-in'); // Remove the fade-in class
        }, 1500); // Changed from 2000 to 1500

        userInputElement.focus();
    }, 500); // Changed from 1000 to 500 to match the new CSS transition duration

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

    // Check if the player's score exceeds the computer's score by 5 or more points
    if (scoreDifference >= 5) {
        showMessage(`Game over! You win as you are ahead by ${scoreDifference} points!`, 'success');
        disableGameControls(); // Disable input and button
        document.getElementById('give-up-link').style.display = 'none'; // Hide the Give up link
        return; // Exit the function to prevent further actions
    }
    
    // Check if the computer's score exceeds the player's score by 10 or more points
    if (computerScore - playerScore >= 10) {
        const scoreDifference = computerScore - playerScore;
        showMessage(`Game over! Computer wins as it is ahead by ${scoreDifference} points!`, 'success');
        disableGameControls();
        document.getElementById('give-up-link').style.display = 'none';
        return;
    }
    
    // Check if the score difference exceeds 10 points
    if (Math.abs(scoreDifference) > 10) {
        showMessage('Game over! ' + (playerScore > computerScore ? 'You win!' : 'Computer wins!'), 'success');
        disableGameControls(); // Disable input and button
        document.getElementById('give-up-link').style.display = 'none'; // Hide the Give up link
        return; // Exit the function to prevent further actions
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
    userInputElement.style.display = 'none'; // Hide the input field
    submitButton.style.display = 'none'; // Hide the submit button
    scoreDifferenceElement.style.display = 'none'; // Hide the score difference element
    document.getElementById('play-again-button').style.display = 'inline-block'; // Show the play again button

    // Show the give up link immediately
    document.getElementById('give-up-link').style.display = 'block'; // Show the Give up link
}

// Function to handle the "Give up?" action
function handleGiveUp() {
    let validWords = words.filter(word => 
        !playedWords.has(word) && differsByOneLetter(word, lastPlayedWord)
    );

    if (validWords.length > 0) {
        // Select up to 5 random valid words
        const selectedWords = [];
        for (let i = 0; i < Math.min(5, validWords.length); i++) {
            const randomIndex = Math.floor(Math.random() * validWords.length);
            selectedWords.push(validWords[randomIndex]);
            validWords.splice(randomIndex, 1); // Remove the selected word to avoid duplicates
        }

        // Create the message with selected words
        const guessedWordsMessage = selectedWords.join(' or ');
        showMessage(`You lose. You could have guessed: ${guessedWordsMessage}`, 'error');
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

// Add this at the end of your script.js file
document.getElementById('play-again-button').addEventListener('click', function() {
    // Reset scores and game state
    playerScore = 0;
    computerScore = 0;
    playedWords.clear(); // Clear the set of played words
    lastPlayedWord = '';
    computerWord = '';
    
    // Clear the message and history
    clearMessage();
    gameHistoryElement.innerHTML = ''; // Clear the game history

    // Unhide and enable the input field and submit button
    userInputElement.style.display = 'block'; // Show the input field
    userInputElement.disabled = false; // Enable the input field
    userInputElement.value = ''; // Clear the input field
    submitButton.style.display = 'block'; // Show the submit button
    submitButton.disabled = false; // Enable the submit button

    // Hide the play again button
    document.getElementById('play-again-button').style.display = 'none'; // Hide the play again button

    // Show the give up link
    document.getElementById('give-up-link').style.display = 'block'; // Show the Give up link

    // Reinitialize the game
    initializeGame();
});