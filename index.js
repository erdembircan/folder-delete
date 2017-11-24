const fs = require('fs');
const logUtils = require('./logUtils');
const path = require('path');

const _options = {
  debugLog: false,
};

/**
 * parse user options and merge with default ones
 * @param {object} userOptions - user optiosn object
 */
function _parseOptions(userOptions) {
  if (typeof userOptions === 'object') {
    Object.keys(_options).forEach((key) => {
      if (userOptions[key]) {
        _options[key] = userOptions[key];
      }
    });
  }
}

/**
 * delete directory with its child folders and files at the given path
 * @param {string} dirPath - path to directory
 * @param {object} options - options
 */
function removeDirSync(dirPath, options) {
  _parseOptions(options);
  if (fs.existsSync(dirPath)) {
    fs.readdirSync(dirPath).forEach((dirName) => {
      const currPath = path.join(dirPath, dirName);

      if (fs.lstatSync(currPath).isDirectory()) {
        removeDirSync(currPath);
      } else {
        fs.unlinkSync(currPath);
      }
    });
    fs.rmdirSync(dirPath);
    if (_options.debugLog) logUtils.logInfo(`path cleared [${dirPath}]`);
  } else if (_options.debugLog) logUtils.logError(`invalid path [${dirPath}]`);
}

module.exports = removeDirSync;
exports._parseOptions = _parseOptions;
