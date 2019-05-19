module.exports = (text) => {
  const words = text.split(' ').map(e => e.toLowerCase())
  // const parsed = splitWord.filter(e => e !== ' ')
  const filteredWords = words.map(word => {
    return filterWord(word)
  })
  return removeIrrelevant(normalizeWords(filteredWords))
}

const filterWord = (word) => {
  return word.split('')
    .filter(e => {
      if (e !== ',' && e !== "." && e !== "!" && e !== "?")
        return e
    })
    .reduce((fullWord, letter) => {
      return fullWord + letter
    })
}

const normalizeWords = (words) => {
  return words.map(e => {
    return e.normalize('NFD').replace(/[\u0300-\u036f]/g, "")
  })
}

// import this? maybe
const irrelevantWords = ['a', 'e', 'o', 'do', 'da', 'que', 'dos', 'das']

const removeIrrelevant = (words) => {
  return words.filter(word => {
    if (!irrelevantWords.includes(word))
      return word
  })
}