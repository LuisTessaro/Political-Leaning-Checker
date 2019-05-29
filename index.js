const textParser = require('./text-parser')
const { getTweets } = require('./tweet-scraper')
const bagOfWords = require('./bag-of-words')

const runTweeter = async (handler, leaning) => {
  const tweets = await getTweets(handler)
  tweets.forEach(tweet => {
    bagOfWords.processWords(textParser(tweet), leaning)
  })
}

const runRegularText = async (text, leaning) => {
  const parsedText = ['text', 'parsed', 'placehodler']
  bagOfWords.processWords(parsedText, leaning)
}

// runRegularText('textArray', 'left')
// runTweeter('felipeneto', 'left')

console.log(bagOfWords.processLeaning(textParser('flopou')))




// const irrelevantWords = ['shallow', 'a', 'e', 'o', 'do', 'da', 'que', 'dos', 'das', 'no', 'na', 'vai']
