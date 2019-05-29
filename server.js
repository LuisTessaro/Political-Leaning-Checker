const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const textParser = require('./text-parser')
const { getTweets } = require('./tweet-scraper')
const bagOfWords = require('./bag-of-words')


app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))
app.use(express.static('public'))

app.post('/learn', (req, res) => {
    bagOfWords.learn(textParser(req.body.text), req.body.leaning)
    res.redirect('http://localhost:3000/')
})

app.post('/learnByTweets', async (req, res) => {
    const tweets = await getTweets(req.body.text)
    tweets.forEach(tweet => {
        bagOfWords.learn(textParser(tweet), req.body.leaning)
    })
    res.redirect('http://localhost:3000/twitter.html')
})

app.post('/checker', async (req, res) => {
    // console.log(textParser(req.body.text))
    res.send("seu score: " + await bagOfWords.leaningChecker(textParser(req.body.text)))
})

app.listen(3000, () => {
    console.log('Server running on port 3000!')
})