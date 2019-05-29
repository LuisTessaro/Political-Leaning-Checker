const textParser = require('./text-parser')
const { getTweets } = require('./tweet-scraper')
const bagOfWords = require('./bag-of-words')

module.exports.runTweeter = async (handler, leaning) => {
  const tweets = await getTweets(handler)
  tweets.forEach(tweet => {
    bagOfWords.learn(textParser(tweet), leaning)
  })
}

module.exports.runRegularText = async (text, leaning) => {
  const parsedText = textParser(text)
  bagOfWords.learn(parsedText, leaning)
}