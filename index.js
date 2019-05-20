const textParser = require('./text-parser')
const { getTweets } = require('./tweet-scraper')
// console.log(textParser('Infelizmente a antiga briga dos generais e fardas e o tal do Mourão, respeitosamente acordemos!').join(' '))

const newLocal = getTweets('felipeneto').then((tweets) => {
  tweets.forEach(tweet => {
    // console.log(tweet)
    // textParser(tweet).join(' ')
    // console.log(
    textParser(tweet).join(' ')
  })
})