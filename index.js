// import dependencies
const moment = require('moment');
const chalk = require('chalk');

// set timeFormat
// TODO: Customizeable?
const timeFormat = "YYYY-MM-DD HH:mm:ss:SS";

// Predefine Colors
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

// Logger Functions
const logger = {
  // Info - Some casual Information to log
  info: function(text) {
    const time = moment().format(timeFormat);
    process.stdout.write(chalk.gray(`${time} [${chalk.cyan('INFO')}]: `) + text + '\n');
  },
  // Success - to show something correctly worked
  success: function(text) {
    const time = moment().format(timeFormat);
    process.stdout.write(chalk.gray(`${time} [${chalk.green('SUCCESS')}]: `) + text + '\n');
  },
  // Error - If some Errors appear
  error: function(text) {
    const time = moment().format(timeFormat);
    process.stderr.write(chalk.gray(`${time} [${chalk.red('ERROR')}]: `) + chalk.red(text) + '\n');
  },
  // Warn - Simple warnings
  warn: function(text) {
    const time = moment().format(timeFormat);
    process.stderr.write(chalk.gray(`${time} [${chalk.yellow('WARN')}]: `) + text + '\n');
  },
  // Crash - If something Crashes
  crash: function(text) {
    const time = moment().format(timeFormat);
    process.stderr.write(chalk.gray(`${time} [${chalk.red('CRASH')}]: `) + text + '\n');
  },
  // Debug- For general Console output thats considerable "debugging"
  debug: function(text) {
      const time = moment().format(timeFormat);
      process.stderr.write(chalk.gray(`${time} [${chalk.yellow('DEBUG')}]: `) + text + '\n');
  },
  // Startup - to log some Starting functions
  startup: function(text) {
    const time = moment().format(timeFormat);
    process.stderr.write(chalk.gray(`${time} [${chalk.cyan('STARTUP')}]: `) + text + '\n');
  },
  // Deploy - For exaple command deploying
  deploy: function(text) {
    const time = moment().format(timeFormat);
    process.stderr.write(chalk.gray(`${time} [${chalk.cyan('DEPLOY')}]: `) + text + '\n');
  },
  // Custom - to create Custom Variants
  custom: function(prefix, color, textcolor, text) {
    const time = moment().format(timeFormat);

    if (prefix == "") { // If Prefix is not defined, cancel and log error
      logger.error("prefix not defined.");
      return;
    }

    if (textcolor.startsWith('#')) { // Checks if TextColor starts with #
      text = `${chalk.hex(textcolor)(text)}`
    } else if (textcolor in colors) { // if not, search in predefined colors
      if (String(colors[color]).startsWith('#')) {
        text = `${chalk.hex(colors[textcolor])(text)}`;
      } else {
        const chalkColor = colors[textcolor];
        text = `${chalkColor(text)}`;
      }
    }

    if (color.startsWith('#')) { // Checks if Color starts with #
      process.stderr.write(chalk.gray(`${time} [${chalk.hex(color)(`${prefix}`)}]: `) + text + '\n');
    } else if (color in colors) { // if not, search in predefined colors
      if (String(colors[color]).startsWith('#')) {
        process.stderr.write(chalk.gray(`${time} [${chalk.hex(colors[color])(`${prefix}`)}]: `) + text + '\n');
      } else {
        const chalkColor = colors[color];
        process.stderr.write(chalk.gray(`${time} [${chalkColor(`${prefix}`)}]: `) + text + '\n');
      }
    } else { // If nothing in colors write in Grey
      process.stderr.write(chalk.gray(`${time} [${prefix}]: `) + text + '\n');
    }
  },
};

module.exports = logger;