module.exports.kmeans = (db, k) => {
  const size = db.length
  const ks = chunk(db, size)
  
}

const chunk = (array, size) => {
  const results = []
  while (array.length) {
    results.push(array.splice(0, size))
  }
  return results;
}