const path = require('path')
const fs = require('fs')
const assert = require('assert')

const {ensureDirSync} = require('../lib')

/* global describe:false, it:false after:false */
describe('ensureDirSync', () => {
  it('should make a dir when give not exist a relative path', () => {
    let dir = path.normalize('./test/he/llo/wor/ld')
    ensureDirSync(dir)
    assert(fs.existsSync(dir) && fs.statSync(dir).isDirectory())
  })
  it('should not raise error when give exist a relative path', () => {
    ensureDirSync('./test')
    assert(true)
  })
  it('should make a dir when give not exist a absolute path', () => {
    let dir = path.join(process.env.PWD, './test/foo/bar')
    ensureDirSync(dir)
    assert(fs.existsSync(dir) && fs.statSync(dir).isDirectory())
  })
  it('should not raise error when give exist a absolute path', () => {
    ensureDirSync(path.join(process.env.PWD, './test'))
    assert(true)
  })
  after(() => {
    /* should del dir */
  })
})
