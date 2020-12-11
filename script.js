function generateRandomNumber(num) {
    return Math.floor(Math.random() * num)
  }

const fortuneTeller = {
  newFriends: ['Scarlett Johansson', 'Gal Gadot', 'Keanu Reeves', 'Johnny Depp', 'The Weeknd', 'Rosalía', 'Dua Lipa',
               'Leo Messi', 'Cristiano Ronaldo','Kim Jong-un','Will Smith', 'your future wife', 'Rihanna', 'your future husband',],

  cities: ['New York', 'Madrid', 'London', 'Rio de Janeiro', ' Pionyang', 'Rome', 'Paris', 'Mexico', 'Buenos Aires', 'Tokyo', 'Moscow',
            "your grandmother's house", 'the supermarket', 'the Hospital'],

  newLanguage: ['JavaScript', 'PHP', 'Python', 'C++', 'SQL', 'Japanese', 'Spanish', 'Chinese', 'Italian', 'High Valyrian', 'Dothraki'],

  emojisAscii: ['Front-End developer ⊂(◉‿◉)つ', 'Full-Stack developer ᕦ(ò_óˇ)ᕤ', 'Back-End developer ¿ⓧ_ⓧﮌ']

}

let nextFuture = []

for(let item in fortuneTeller) {
  let optionIdx = generateRandomNumber(fortuneTeller[item].length)

  switch(item) {
    case 'newFriends':
      nextFuture.push(`You'll meet ${fortuneTeller[item][optionIdx]}.`)
      break
    case 'cities':
      nextFuture.push(`You'll travel to ${fortuneTeller[item][optionIdx]}.`)
      break
    case 'newLanguage':
      nextFuture.push(`You'll learn ${fortuneTeller[item][optionIdx]}.`)
      break
      case 'emojisAscii':
        nextFuture.push(`You'll work as a ${fortuneTeller[item][optionIdx]}.`)
        break
    default:
      nextFuture.push('Error!')
  }
}

function formatFuture(future) {

  const formatted = nextFuture.join('\n')
  console.log(formatted)
}

formatFuture(nextFuture);