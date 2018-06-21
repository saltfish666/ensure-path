const path = require('path')
const fs = require('fs')

function ensureDirSync (dirPath) {
  let dirArr = dirPath.split('/')
  let recentDir = dirArr[0] ? process.env.PWD : '/'
  for (let i = 0; i < dirArr.length; i++) {
    recentDir = path.join(recentDir, dirArr[i])
    if (!fs.existsSync(recentDir)) {
      fs.mkdirSync(recentDir)
    }
  }
}

module.exports = ensureDirSync
