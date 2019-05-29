const db = require('./db.json')
const fs = require('fs')

module.exports.learn = (words, leaning) => {
    const leaner = leaning === 'left' ? -1 : 1
    words.forEach(word => {
        if (db[word]) db[word] += leaner
        else db[word] = leaner
    })
    fs.writeFileSync('./db.json', JSON.stringify(db))
}

module.exports.leaningChecker = (words) => {
    let acc = 0
    words.forEach(word => {
        if (db[word]) {
            console.log(acc)
            acc += db[word]
        }
    }, 0)
    return acc
}