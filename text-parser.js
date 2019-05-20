module.exports = (text) => {
  const words = text.split(' ').map(e => e.toLowerCase())
  // const parsed = splitWord.filter(e => e !== ' ')
  const filteredWords = words.map(word => {
    return filterWord(word)
  })
  console.log(normalizeWords(filteredWords))
  return normalizeWords(filteredWords)
}

const filterWord = (word) => {
  return word.split('')
    .filter(e => {
      if (e !== ',' && e !== "." && e !== "!" && e !== "?" && e !== ":" && e !== "'" && e !== '“' && e !== '"')
        return e
    })
    .reduce((fullWord, letter) => {
      return fullWord + letter
    }, '')
}

const normalizeWords = (words) => {
  return words.map(e => {
    return e.normalize('NFD').replace(/[\u0300-\u036f]/g, "")
  })
}

// import this? maybe
const irrelevantWords = ['shallow', 'a', 'e', 'o', 'do', 'da', 'que', 'dos', 'das', 'no', 'na', 'vai']

const removeIrrelevant = (words) => {
  return words.filter(word => {
    // if (!irrelevantWords.includes(word))
    //   console.log(word)
    if (word == 'vai')
      return 'PICA NO SEU CU VIADO'
  })
}