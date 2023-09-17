console.error('hiba');
console.log('hello');
const container = document.querySelector('#container');
const helloh1 = document.querySelector('#hello');

const diceCharacters = ['⚀', '⚁', '⚂', '⚃', '⚄', '⚅'];

const initialDiceCount = 10;

function displayRandomDice() {
  container.innerHTML = ''; // Clear previous dice faces
  const randomDiceSet = getRandomDiceSet(initialDiceCount);
  randomDiceSet.forEach(diceNumber => {
    let diceCharacter = document.createElement('div');
    diceCharacter.classList.add('dice-face'); // Add the 'dice-face' class
    diceCharacter.textContent = diceCharacters[diceNumber];
    container.appendChild(diceCharacter);
  });
  container.style.display = 'flex'; // Display the dice faces in a single line
}

function getRandomDiceSet(count) {
  const randomDiceSet = [];
  for (let i = 0; i < count; i++) {
    const randomIndex = Math.floor(Math.random() * diceCharacters.length);
    randomDiceSet.push(randomIndex);
  }
  return randomDiceSet;
}

// Display 10 random dice faces initially
displayRandomDice();

helloh1.addEventListener('click', () => {
  // Generate and display 10 new random dice faces
  displayRandomDice();
});
