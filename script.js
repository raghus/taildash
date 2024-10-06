const MAX_RANDOM_WORDS = 3; // Set the maximum number of random words

// Scrabble letter points
const letterPoints = {
    'A': 1, 'B': 3, 'C': 3, 'D': 2, 'E': 1, 'F': 4, 'G': 2, 'H': 4, 'I': 1, 'J': 8,
    'K': 5, 'L': 1, 'M': 3, 'N': 1, 'O': 1, 'P': 3, 'Q': 10, 'R': 1, 'S': 1, 'T': 1,
    'U': 1, 'V': 4, 'W': 4, 'X': 8, 'Y': 4, 'Z': 10
};

const skipWords = ['ANAL', 'ANUS', 'BOOB', 'COCK',' CLIT', 'CUNT', 'DICK', 'FAGS', 'FUCK', 'HOES', 'JIZZ', 'JEWS', 'PIMP', 'PUBE', 'RAPE', 'SLUT', 'SHIT']; 

let computerWord = '';
let isHistoryVisible = true;
let lastPlayedWord = '';

// Initialize word count
let wordCount = 0;

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

const userInputElement = document.getElementById('user-input');
const submitButton = document.getElementById('submit-btn');
const messageElement = document.getElementById('message');
const gameHistoryElement = document.getElementById('game-history');
const playerScoreElement = document.getElementById('player-score'); // Update to correct ID
const computerScoreElement = document.getElementById('computer-score'); // Update to correct ID
const scoreDifferenceElement = document.getElementById('score-difference');

function initializeGame() {
    clearMessage(); // Clear any previous messages
    document.getElementById('instruction').style.display = 'block'; // **Show the instruction div**
    computerWord = getRandomWord();
    //computerWord = 'HOME'; // 'NEVI' 'POEM'
    const score = calculateWordScore(computerWord);
    computerScore += score;
    playedWords.add(computerWord);
    addToHistory(computerWord, score, false);
    lastPlayedWord = computerWord;
    updateDisplay(); // Ensure this is called to update the display
    updateScrabbleTiles(computerWord);

    // Ensure the score difference element is visible
    scoreDifferenceElement.style.display = 'flex'; // Show the score difference element
    userInputElement.focus(); // Move focus to the user input field
}

function getRandomWord() {
    return words[Math.floor(Math.random() * words.length)];
}

function calculateWordScore(word) {
    return word.split('').reduce((score, letter) => score + letterPoints[letter], 0);
}

function updateDisplay() {
    // Update Scrabble tiles
    updateScrabbleTiles(computerWord);
    
    playerScoreElement.textContent = playerScore; // Update only the score value
    computerScoreElement.textContent = computerScore; // Update only the score value

    // Calculate the difference and determine if the computer is ahead
    const scoreDifference = computerScore - playerScore; // Calculate score difference
    if (scoreDifference > 0) {
        scoreDifferenceElement.textContent = `The computer is currently ahead by ${scoreDifference}`; // Display the ahead message
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

function updateScrabbleTiles(word) {
    const tilesContainer = document.getElementById('computer-word-tiles');
    const currentTiles = tilesContainer.children;
    const newWord = word.split('');

    // If the number of tiles doesn't match the new word length, recreate all tiles
    if (currentTiles.length !== newWord.length) {
        tilesContainer.innerHTML = '';
        newWord.forEach((letter, index) => {
            const tile = createTile(letter);
            tilesContainer.appendChild(tile);
            setTimeout(() => tile.classList.add('flip'), index * 300); // Increased delay between tiles
        });
    } else {
        // Update existing tiles
        let delay = 0;
        for (let i = 0; i < newWord.length; i++) {
            const tile = currentTiles[i];
            const newLetter = newWord[i];
            if (tile.textContent !== newLetter) {
                setTimeout(() => {
                    tile.classList.add('flip');
                    setTimeout(() => {
                        tile.textContent = newLetter;
                        tile.setAttribute('data-points', letterPoints[newLetter]);
                        tile.classList.remove('flip');
                    }, 1200); // Double the flip animation duration
                }, delay);
                delay += 300; // Increment delay for next tile
            }
        }
    }
}

function createTile(letter) {
    const tile = document.createElement('div');
    tile.className = 'scrabble-tile';
    tile.textContent = letter;
    tile.setAttribute('data-points', letterPoints[letter]);
    return tile;
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
    wordCount++; // Increment the word count
    const historyItem = document.createElement('div');
    historyItem.className = 'history-item ' + (isPlayer ? 'player' : 'computer');
    
    // Format the word normally without subscripts
    const formattedWord = word;
    
    // Create the score breakdown (e.g., 1+4+1+4=10)
    const scoreBreakdown = word.split('')
        .map((letter, index) => {
            const point = letterPoints[letter];
            const isLast = index === word.length - 1;
            const operator = isLast ? '=' : '+';
            return `<span class="points">${point}</span><span class="operator">${operator}</span>`;
        })
        .join('') + `<span class="total-score">${score}</span>`;
    
    // Update history item to include the word count as a separate column
    historyItem.innerHTML = `
        <span class="history-number">${wordCount}.</span>
        <span class="history-player">${isPlayer ? 'You' : 'Computer'}</span>
        <span class="history-word">${formattedWord}</span>
        <span class="history-score">${scoreBreakdown}</span>
    `;
    gameHistoryElement.prepend(historyItem);
}

function computerTurn() {
    let validWords = words.filter(word => 
        !playedWords.has(word) && 
        differsByOneLetter(word, lastPlayedWord) &&
        !skipWords.includes(word)
    );

    if (validWords.length === 0) {
        showMessage('The computer cannot find a valid word. You win!', 'success');
        document.getElementById('instruction').style.display = 'none'; // Hide the instruction element
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

    // Choose the word with the highest score
    const bestWord = selectedWords.reduce((best, current) => {
        return calculateWordScore(current) > calculateWordScore(best) ? current : best;
    });

    // Update the computer's word
    computerWord = bestWord;
    const score = calculateWordScore(computerWord);
    computerScore += score;
    playedWords.add(computerWord);
    lastPlayedWord = computerWord;

    // Immediately update the display for scores
    updateScores();

    // Update the Scrabble tiles with flip effect
    updateScrabbleTiles(computerWord);

    // Wait for the animation to complete before adding to history and setting focus
    const animationDuration = 500 * computerWord.length + 100; // Total animation time
    setTimeout(() => {
        // Add to history after animation completes
        addToHistory(computerWord, score, false);
        
        // Set focus to user input
        userInputElement.focus();
    }, animationDuration);

    return true;
}

function updateScores() {
    playerScoreElement.textContent = playerScore;
    computerScoreElement.textContent = computerScore;

    // Calculate the difference and determine if the computer is ahead
    const scoreDifference = computerScore - playerScore;
    if (scoreDifference > 0) {
        scoreDifferenceElement.textContent = `The computer is currently ahead by ${scoreDifference}`;
    } else if (scoreDifference < 0) {
        scoreDifferenceElement.textContent = `You are currently ahead by ${Math.abs(scoreDifference)}`;
    } else {
        scoreDifferenceElement.textContent = 'Scores are TIED!';
    }

    // Highlight the score displays
    const highlightColor = 'lightyellow';
    document.getElementById('computer-score-display').style.backgroundColor = highlightColor;
    document.getElementById('player-score-display').style.backgroundColor = highlightColor;

    // Reset background colors after a delay
    setTimeout(() => {
        document.getElementById('computer-score-display').style.backgroundColor = '';
        document.getElementById('player-score-display').style.backgroundColor = '';
    }, 1500);
}

function updateDisplay() {
    // Update Scrabble tiles
    updateScrabbleTiles(computerWord);
    
    // Update scores
    updateScores();
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
        document.getElementById('instruction').style.display = 'none'; // Hide the Give up link
        return; // Exit the function to prevent further actions
    }
    
    // Check if the computer's score exceeds the player's score by 10 or more points
    if (computerScore - playerScore >= 10) {
        const scoreDifference = computerScore - playerScore;
        showMessage(`Game over! The computer wins as it is ahead by ${scoreDifference} points!`, 'error'); // Changed 'success' to 'error'
        disableGameControls();
        document.getElementById('give-up-link').style.display = 'none';
        document.getElementById('instruction').style.display = 'none'; // Hide the Give up link
        return;
    }
    
    // Check if the score difference exceeds 10 points
    if (Math.abs(scoreDifference) > 10) {
        showMessage('Game over! ' + (playerScore > computerScore ? 'You win!' : 'Computer wins!'), 'success');
        disableGameControls(); // Disable input and button
        document.getElementById('give-up-link').style.display = 'none'; // Hide the Give up link
        document.getElementById('instruction').style.display = 'none'; // Hide the Give up link
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
    document.getElementById('instruction').style.display = 'none'; // **Hide the instruction div**
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

    if (this.value.length === 4 && isValidWord(this.value)) { 
        const score = calculateWordScore(this.value);
        //console.log(`Score for ${this.value}: ${score}`);
        if (score + 10 <= (computerScore - playerScore)) { 
            submitButton.style.backgroundColor = 'red';
            setTimeout(() => {
                submitButton.style.backgroundColor = '#3498db';
            }, 1000);
        }

        if (playerScore + score >= computerScore + 5) { 
            submitButton.style.backgroundColor = 'green';
            setTimeout(() => {
                submitButton.style.backgroundColor = '#3498db';
            }, 1000);
        }
    }
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
    userInputElement.focus(); // Move focus to the user input field after closing the modal
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
    
    // Reset the word count
    wordCount = 0;
    
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