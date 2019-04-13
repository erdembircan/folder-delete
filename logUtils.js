const ft = require('fancy-terminal');

const logUtils = {
  logError: (message) => {
    console.log(`${ft.redBg('Error:')} ${message.trim()}`);
  },
  logInfo: (message) => {
    console.log(`${ft.blueBg('Info:')} ${message.trim()}`);
  },
};

/** @module logUtils */
module.exports = logUtils;
