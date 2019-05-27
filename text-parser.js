module.exports = (text) => {
  const words = text.split(' ').map(e => e.toLowerCase())
  // const parsed = splitWord.filter(e => e !== ' ')
  const filteredWords = words.map(word => {
    return filterWord(word)
  })
  const normalizedWords = normalizeWords(filteredWords)
  return removeIrrelevant(normalizedWords)

}

const filterWord = (wordy) => {
  const word = wordy.split('\n').join('')
  return word
    .split('')
    .filter(e => {
      if (e !== ',' && e !== "." && e !== "!" && e !== "?" && e !== ":" && e !== "'" && e !== '“' && e !== '"' && e !== '”' && e !== ';')
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
const irrelevantWords = 'e/se/nao/que/o/os/a/as/um/uns/uma/umas/a/ao/aos/a/as/de/do/dos/da/das/dum/duns/duma/dumas/em/no/nos/na/nas/num/nuns/numa/numas/por/per/pelo/pelos/pela/pelas/algum/alguma/alguns/algumas/nenhum/nenhuma/nenhuns/nenhumas/todo/toda/todos/todas/outro/outra/outros/outras/muito/muita/muitos/muitas/pouco/pouca/poucos/poucas/certo/certa/certos/certas/vários/várias/tanto/tanta/tantos/tantas/quanto/quanta/quantos/quantas/qualquer/quaisquer/tal/tais/um/uma/uns/umas'.split('/')

const removeIrrelevant = (words) => {
  return words.filter(word => {
    if (!irrelevantWords.includes(word) && isNaN(word))
      return true
  })
}