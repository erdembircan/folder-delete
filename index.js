const fs = require('fs');
const path = require('path');
const logUtils = require('./logUtils');

/** @typedef _options
 *  @prop {boolean} [debugLog] - log messages to console
 */
const _options = {
  debugLog: false,
};

/**
 * parse user options and merge with default ones
 * @param {object} [userOptions] - user options object
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
 * @param {_options} [options] - options
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

/** @module folder-delte */
module.exports = removeDirSync;
