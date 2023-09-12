console.error('hiba')
console.log('hello')
const container = document.querySelector('#container')
const helloh1 = document.querySelector('#hello')

helloh1.addEventListener('click', () => {
  let card = document.createElement('div')
  card.classList.add('kartya')
  card.innerText = Math.floor(Math.random() * 6) + 1
  container.append(card)
})
