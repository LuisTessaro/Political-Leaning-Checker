const db = require('./db.json')
const fs = require('fs')

module.exports.learn = (words, leaning) => {
    const leaner = leaning === 'left' ? -1 : 1
    words.forEach(word => {
        if (db[word]) db[word] += db[word] > 5 || db[word] < -5 ? leaner * 0.25 : leaner
        else db[word] = leaner
    })
    // console.log(db)
    fs.writeFileSync('./db.json', JSON.stringify(db))
}

module.exports.leaningChecker = (words) => {
    let acc = 0
    words.forEach(word => {
        if (db[word]) {
            // console.log(acc)
            acc += db[word]
        }
    }, 0)
    return acc
}