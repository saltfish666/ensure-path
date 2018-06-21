const path = require('path')
const fs = require('fs')

const ensureDirSync = require('./ensureDirSync')

function ensureFileSync (filePath) {
  ensureDirSync(path.dirname(filePath))
  if (!fs.existsSync(path.normalize(filePath) || fs.statSync(path.normalize(filePath)).isDirectory())) {
    fs.writeFileSync(path.normalize(filePath), '')
  }
}

ensureFileSync('./fgsd/fsd/fsdf/s')

module.exports = ensureFileSync
