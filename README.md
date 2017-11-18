# folder-delete [![Build Status](https://travis-ci.org/erdembircan/folder-delete.svg?branch=master)](https://travis-ci.org/erdembircan/folder-delete)

---

A small library to delete folders with all child folders and files.

---

## Installation
`npm install folder-delete`

---

## Usage
```
const deleteFolder = require('delete-folder)

deleteFolder('folderToDelete', {debugLog: false});
```

---

## API
### deleteFolder(path, [options])
delete folder in path with all of its child folders and files.

### options
Type: `object`

`[debugLog]`: log progress to console. (default false)

---

## License
Copyright © 2017, Erdem Bircan. Released under the MIT License.
