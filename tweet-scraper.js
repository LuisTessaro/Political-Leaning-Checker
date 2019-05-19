const puppeteer = require('puppeteer')

const getTweets = async (twitterHandler) => {
  const browser = await puppeteer.launch()
  const page = await browser.newPage()

  await page.goto('https://twitter.com/' + twitterHandler)

  await page.waitForSelector('.TweetTextSize')

  const linkHtml = await page.evaluate(() => {
    const tweetList = Array.from(document.querySelectorAll('.TweetTextSize'))
    const tweets = tweetList.map(e => {
      return e.innerText
    })
    return tweets
  })

  browser.close()

  return linkHtml
}

module.exports.getTweets = getTweets

// getTweets('felipeneto').then(tweets => console.log(tweets))
// getTweets('pewdiepie').then(tweets => console.log(tweets))
