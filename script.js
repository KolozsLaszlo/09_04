console.error('hiba')
console.log('hello')
const container = document.querySelector('#container')
const helloh1 = document.querySelector('#hello')
let cards = [] // Array to store 10 random numbers

// Generate 10 random numbers and store them in the 'cards' array
for (let i = 0; i < 10; i++) {
  cards.push(Math.floor(Math.random() * 6) + 1)
}

let currentIndex = 0 // Initialize index to show the first card

helloh1.addEventListener('click', () => {
  if (currentIndex < cards.length) {
    let card = document.createElement('div')
    card.classList.add('kartya')
    card.innerText = cards[currentIndex]
    container.append(card)
    currentIndex++
  }
})
