const deleteFolder = require('../index');
const fs = require('fs');
const path = require('path');

const path1 = path.resolve(__dirname, 'testFolder');
const path2 = path.resolve(__dirname, 'testFolder', 'innerTestFolder');

describe('delete-folder', () => {
  it('should export module correctly', () => {
    expect(typeof deleteFolder).toBe('function');
  });
  it('should delete folder with child components inside', () => {
    if (!fs.existsSync(path1)) fs.mkdirSync(path.resolve(__dirname, 'testFolder'));
    if (!fs.existsSync(path2)) {
      fs.mkdirSync(path.resolve(__dirname, 'testFolder', 'innerTestFolder'));
    }
    fs.closeSync(fs.openSync(path.resolve(__dirname, 'testFolder', 'test01.dat'), 'w'));
    fs.closeSync(fs.openSync(path.resolve(__dirname, 'testFolder', 'innerTestFolder', 'test02.dat'), 'w'));

    expect(fs.existsSync(path1)).toBeTruthy();
    deleteFolder(path1);
    expect(fs.existsSync(path1)).toBeFalsy();
  });
});
