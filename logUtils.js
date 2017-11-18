const chalk = require('chalk');

const logUtils = {
  logError: (message) => {
    console.log(`${chalk.bgRed.bold('Error:')} ${message.trim()}`);
  },
  logInfo: (message) => {
    console.log(`${chalk.bgBlue('Info:')} ${message.trim()}`);
  },
};

module.exports = logUtils;
