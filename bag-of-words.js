const db = require('./db.json')
const fs = require('fs')

// console.log(db)

module.exports.learn = (words, leaning) => {
    const leaner = leaning === 'left' ? -1 : 1
    words.forEach(word => {
        if (db[word]) db[word] += leaner
        else db[word] = leaner
    })
    console.log(db)
    fs.writeFileSync('./db.json', JSON.stringify(db))
}

module.exports.leaningChecker = (words) => {
    // console.log(db)
    let acc = 0
    words.forEach(word => {
        if (db[word]) {
            console.log(acc)
            acc += db[word]
        }
    }, 0)
    // console.log(acc)
    return acc
}