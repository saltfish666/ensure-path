# Ensure-path

## What does this do?
If you use `fs.mkdir('./foo/bar',callback)`,it will throws error if `foo` does not exist or `bar`
already esists.

`ensure-path` make a simple and safe way to cerate a dir or file.

## How to use?

`npm i ensure-path --save`
```
const {ensureDirSync, ensureFileSync} = require('ensure-path')
 
 //ensure there have a dir
 ensureDirSync('./foo/bar')
 
 //ensure there hava a file
 ensureFileSync('./hello/world.txt')
```

## notice
you need use super user to create dir or file on root dir.
