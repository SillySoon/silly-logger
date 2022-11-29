//  import dependencies
const moment = require('moment');
const chalk = require('chalk');
const util = require('node:util');


//  set timeFormat TODO: Customizeable?
const timeFormat = "YYYY-MM-DD HH:mm:ss:SS";

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

//  constructor for all logger functions TODO: Support for Objects TODO: More Line input
function loggerConstructer(prefixInput, prefixColor, textColor, textInput) {
  //  get current time
  const time = moment().format(timeFormat);

  if (prefixInput == "") {
    //  if prefix is not defined, cancel and log error
    logger.error("prefix not defined.");
    return;
  }

  if (textColor.startsWith('#')) {
    //  checks if TextColor is a hex color
    textInput = `${chalk.hex(textColor)(util.formatWithOptions({ colors: true }, textInput))}`;
  } else if (textColor in colors) {
    //  if not, check if input matches defined colors
    if (String(colors[textColor]).startsWith('#')) {
      textInput = `${chalk.hex(colors[textColor])(util.formatWithOptions({ colors: true }, textInput))}`;
    } else {
      const chalkColor = colors[textColor];
      textInput = `${chalkColor(util.formatWithOptions({ colors: true }, textInput))}`;
    }
  }

  if (prefixColor.startsWith('#')) {
    //  checks if Color from list is a hex color NOTE: OUTPUT
    process.stderr.write(chalk.gray(`${time} [${chalk.hex(prefixColor)(`${prefixInput}`)}]: `) + util.formatWithOptions({ colors: true }, textInput) + '\n');
  } else if (prefixColor in colors) {
    //  if not, check if input matches defined colors
    if (String(colors[prefixColor]).startsWith('#')) {
      //  NOTE: OUTPUT
      process.stderr.write(chalk.gray(`${time} [${chalk.hex(colors[prefixColor])(`${prefixInput}`)}]: `) + util.formatWithOptions({ colors: true }, textInput) + '\n');
    } else {
      //  NOTE: OUTPUT
      const chalkColor = colors[prefixColor];
      process.stderr.write(chalk.gray(`${time} [${chalkColor(`${prefixInput}`)}]: `) + util.formatWithOptions({ colors: true }, textInput) + '\n');
    }
  } else {
    //  If nothing matches, color is grey NOTE: OUTPUT
    process.stderr.write(chalk.gray(`${time} [${prefixInput}]: `) + util.formatWithOptions({ colors: true }, textInput) + '\n');
  }
}

//  logger Functions
const logger = {
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