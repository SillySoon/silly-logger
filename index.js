'use strict';

//  import dependencies (moment, chalk, util)
const moment = require('moment');
const chalk = require('chalk');
const util = require('util');


//  customizeable timeFormat (globally) => logger.timeFormat(string);
let timeFormat = "YYYY-MM-DD HH:mm:ss:SS";

//  predefine colors
const colors = {
  red: chalk.red,
  orange: "#E67E22",
  gold: "#F1C40F",
  yellow: chalk.yellow,
  green: chalk.green,
  dark_green: "#1F8B4C",
  teal: "#1ABC9C",
  cyan: chalk.cyan,
  light_blue: "#3498DB",
  blue: chalk.blue,
  dark_blue: "#206694",
  blurple: "#5865F2",
  purple: "#9B59B6",
  fuchsia: "#EB459E",
  magenta: chalk.magenta,
  dark_magenta: "#AD1457",
};

//  constructor for all logger functions
//  TODO: Support for Objects
//  TODO: More Line input
function loggerConstructer(prefixInput, prefixColor, textColor, textInput) {

  //  get current time
  const time = moment().format(timeFormat);

  //  if prefix is not defined, cancel and log error
  if (prefixInput == "") {
    logger.error("prefix not defined.");
    return;
  }

  //  checks if TextColor is a hex color
  if (textColor.startsWith('#'))
  {
    textInput = `${chalk.hex(textColor)(util.formatWithOptions({ colors: true }, textInput))}`;
  }

  //  if not, check if input matches defined colors
  else if (textColor in colors) {

    if (String(colors[textColor]).startsWith('#')) {
      textInput = `${chalk.hex(colors[textColor])(util.formatWithOptions({ colors: true }, textInput))}`;
    }

    else {
      const chalkColor = colors[textColor];
      textInput = `${chalkColor(util.formatWithOptions({ colors: true }, textInput))}`;
    }
  }

  //  checks if Color from list is a hex color NOTE: OUTPUT
  if (prefixColor.startsWith('#')) {
    process.stderr.write(chalk.gray(`${chalk.hex(prefixColor)(`┃`)} ${time} [${chalk.hex(prefixColor)(`${prefixInput}`)}]: `) + util.formatWithOptions({ colors: true }, textInput) + '\n');
  }

  //  if not, check if input matches defined colors
  else if (prefixColor in colors) {

    //  NOTE: OUTPUT
    if (String(colors[prefixColor]).startsWith('#')) {
      process.stderr.write(chalk.gray(`${chalk.hex(colors[prefixColor])(`┃`)} ${time} [${chalk.hex(colors[prefixColor])(`${prefixInput}`)}]: `) + util.formatWithOptions({ colors: true }, textInput) + '\n');
    }

    //  NOTE: OUTPUT
    else {
      const chalkColor = colors[prefixColor];
      process.stderr.write(chalk.gray(`${chalkColor(`┃`)} ${time} [${chalkColor(`${prefixInput}`)}]: `) + util.formatWithOptions({ colors: true }, textInput) + '\n');
    }
  }

  //  If nothing matches, color is grey NOTE: OUTPUT
  else {
    process.stderr.write(chalk.gray(`┃${time} [${prefixInput}]: `) + util.formatWithOptions({ colors: true }, textInput) + '\n');
  }
}

//  logger Functions
const logger = {

  //  timeFormat - changes the Time format
  timeFormat: function(string) {
    timeFormat = string;
  },

  //  Info - Some casual Information to log
  info: function(text) {
    loggerConstructer('INFO', 'cyan', 'grey', text);
  },

  //  Success - to show something correctly worked
  success: function(text) {
    loggerConstructer('SUCCESS', 'green', 'grey', text);
  },

  //  Error - If some Errors appear
  error: function(text) {
    loggerConstructer('ERROR', 'red', 'red', text);
  },

  //  Warn - Simple warnings
  warn: function(text) {
    loggerConstructer('WARN', 'yellow', 'grey', text);
  },

  //  Crash - If something Crashes
  crash: function(text) {
    loggerConstructer('CRASH', 'red', 'grey', text);
  },

  //  Debug- For general Console output thats considerable "debugging"
  debug: function(text) {
    loggerConstructer('DEBUG', 'yellow', 'grey', text);
  },

  //  Startup - to log some Starting functions
  startup: function(text) {
    loggerConstructer('STARTUP', 'cyan', 'grey', text);
  },

  //  Deploy - For exaple command deploying
  deploy: function(text) {
    loggerConstructer('DEPLOY', 'cyan', 'grey', text);
  },

  //  Custom - to create Custom Variants
  custom: function(prefixInput, prefixColor, textColor, textInput) {
    loggerConstructer(prefixInput, prefixColor, textColor, textInput);
  },
};

module.exports = logger;