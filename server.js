const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const textParser = require('./text-parser')
const { getTweets } = require('./tweet-scraper')
const bagOfWords = require('./bag-of-words')


app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))
app.use(express.static('public'));

app.get('/', (req, res) => {
    res.send('Hello World!')
})


app.post('/learn', (req, res) => {
    runRegularText(textParser(req.body.bananinhananica), req.body.nhe)
    res.redirect('http://localhost:3000/')
})

app.post('/learnByTweets', (req, res) => {
    runRegularText(textParser(req.body.bananinhananica), req.body.nhe)
    res.redirect('http://localhost:3000/')
})

app.post('/checker', (req, res) => {
    res.send("seu score: "+bagOfWords.leaningChecker(textParser(req.body.bananinhananica)))
})

app.listen(3000, () => {
    console.log('Server running on port 3000!')
})

const runRegularText = async (text, leaning) => {
    bagOfWords.learn(text, leaning)
}