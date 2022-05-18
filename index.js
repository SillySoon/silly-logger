// import dependencies
const moment = require('moment');
const chalk = require('chalk');
const util = require('node:util');

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
    process.stdout.write(chalk.gray(`${time} [${chalk.cyan('INFO')}]: `) + util.formatWithOptions({ colors: true }, text) + '\n');
  },
  // Success - to show something correctly worked
  success: function(text) {
    const time = moment().format(timeFormat);
    process.stdout.write(chalk.gray(`${time} [${chalk.green('SUCCESS')}]: `) + util.formatWithOptions({ colors: true }, text) + '\n');
  },
  // Error - If some Errors appear
  error: function(text) {
    const time = moment().format(timeFormat);
    process.stderr.write(chalk.gray(`${time} [${chalk.red('ERROR')}]: `) + chalk.red(util.formatWithOptions({ colors: true }, text)) + '\n');
  },
  // Warn - Simple warnings
  warn: function(text) {
    const time = moment().format(timeFormat);
    process.stderr.write(chalk.gray(`${time} [${chalk.yellow('WARN')}]: `) + util.formatWithOptions({ colors: true }, text) + '\n');
  },
  // Crash - If something Crashes
  crash: function(text) {
    const time = moment().format(timeFormat);
    process.stderr.write(chalk.gray(`${time} [${chalk.red('CRASH')}]: `) + util.formatWithOptions({ colors: true }, text) + '\n');
  },
  // Debug- For general Console output thats considerable "debugging"
  debug: function(text) {
      const time = moment().format(timeFormat);
      process.stderr.write(chalk.gray(`${time} [${chalk.yellow('DEBUG')}]: `) + util.formatWithOptions({ colors: true }, text) + '\n');
  },
  // Startup - to log some Starting functions
  startup: function(text) {
    const time = moment().format(timeFormat);
    process.stderr.write(chalk.gray(`${time} [${chalk.cyan('STARTUP')}]: `) + util.formatWithOptions({ colors: true }, text) + '\n');
  },
  // Deploy - For exaple command deploying
  deploy: function(text) {
    const time = moment().format(timeFormat);
    process.stderr.write(chalk.gray(`${time} [${chalk.cyan('DEPLOY')}]: `) + util.formatWithOptions({ colors: true }, text) + '\n');
  },
  // Custom - to create Custom Variants
  custom: function(prefix, color, textcolor, text) {
    const time = moment().format(timeFormat);

    if (prefix == "") {
      // If Prefix is not defined, cancel and log error
      logger.error("prefix not defined.");
      return;
    }

    if (textcolor.startsWith('#')) {
      // Checks if TextColor is a hex color
      text = `${chalk.hex(textcolor)(util.formatWithOptions({ colors: true }, text))}`;
    } else if (textcolor in colors) {
      // if not, check if input matches defined colors
      if (String(colors[textcolor]).startsWith('#')) {
        text = `${chalk.hex(colors[textcolor])(util.formatWithOptions({ colors: true }, text))}`;
      } else {
        const chalkColor = colors[textcolor];
        text = `${chalkColor(util.formatWithOptions({ colors: true }, text))}`;
      }
    }

    if (color.startsWith('#')) {
      // Checks if Color from list is a hex color
      process.stderr.write(chalk.gray(`${time} [${chalk.hex(color)(`${prefix}`)}]: `) + util.formatWithOptions({ colors: true }, text) + '\n');
    } else if (color in colors) {
      // if not, check if input matches defined colors
      if (String(colors[color]).startsWith('#')) {
        process.stderr.write(chalk.gray(`${time} [${chalk.hex(colors[color])(`${prefix}`)}]: `) + util.formatWithOptions({ colors: true }, text) + '\n');
      } else {
        const chalkColor = colors[color];
        process.stderr.write(chalk.gray(`${time} [${chalkColor(`${prefix}`)}]: `) + util.formatWithOptions({ colors: true }, text) + '\n');
      }
    } else {
      // If nothing matches, color is grey
      process.stderr.write(chalk.gray(`${time} [${prefix}]: `) + util.formatWithOptions({ colors: true }, text) + '\n');
    }
  },
};

module.exports = logger;