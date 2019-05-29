const run = require('./runTexts')
const leftTexts = require('./texts/left')
const rightTexts = require('./texts/right')

leftTexts.forEach(text => {
  run.runRegularText(text, 'left')
})

rightTexts.forEach(text => {
  run.runRegularText(text, 'right')
})