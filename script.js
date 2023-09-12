console.error('hiba')
console.log('hello')
const container = document.querySelector('#container')
const helloh1 = document.querySelector('#hello')
const diceImages = [
  'dice-1.png', // Replace with actual image URLs
  'dice-2.png',
  'dice-3.png',
  'dice-4.png',
  'dice-5.png',
  'dice-6.png',
]

const initialDiceCount = 10
let diceCount = initialDiceCount

function displayDice() {
  let randomIndex = Math.floor(Math.random() * diceImages.length)
  let diceImage = document.createElement('img')
  diceImage.classList.add('kocka')
  diceImage.src = diceImages[randomIndex]
  container.appendChild(diceImage)
  diceCount++
}

// Display the initial 10 dice faces
for (let i = 0; i < initialDiceCount; i++) {
  displayDice()
}

helloh1.addEventListener('click', () => {
  displayDice()
})
