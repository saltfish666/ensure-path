const path = require('path')
const fs = require('fs')
const assert = require('assert')

const {ensureFileSync} = require('../lib')

/* global describe:false, it:false after:false */
describe('ensureDirSync', () => {
  it('should make a file when give a not exist relative file path', () => {
    let file = path.normalize('./test/file/wor/ld.txt')
    ensureFileSync(file)
    assert(fs.existsSync(file) && fs.statSync(file).isFile())
  })
  it('should not raise error when give an exist relative path', () => {
    ensureFileSync('./LICENST')
    assert(true)
  })
  it('should make a dir when give not a exist absolute path', () => {
    let file = path.join(process.env.PWD, './test/file/bar.txt')
    ensureFileSync(file)
    assert(fs.existsSync(file) && fs.statSync(file).isFile())
  })
  it('should not raise error when give an exist absolute path', () => {
    ensureFileSync(path.join(process.env.PWD, './LICENSE'))
    assert(true)
  })
  it('should not change file when file already exists', () => {
    let LICENSE = path.normalize('./LICENSE')
    let data = fs.readFileSync(LICENSE)
    ensureFileSync(LICENSE)
    assert(data.equals(fs.readFileSync(LICENSE)))
  })
  after(() => {
    /* should del file */
  })
})
