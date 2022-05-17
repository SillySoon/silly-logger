const moment = require('moment');
const chalk = require('chalk');
const timeFormat = "YYYY-MM-DD HH:mm:ss:SS";

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

const logger = {
  info: function(text) {
    const time = moment().format(timeFormat);
    process.stdout.write(chalk.gray(`${time} [${chalk.cyan('INFO')}]: `) + text + '\n');
  },
  success: function(text) {
    const time = moment().format(timeFormat);
    process.stdout.write(chalk.gray(`${time} [${chalk.green('SUCCESS')}]: `) + text + '\n');
  },
  error: function(text) {
    const time = moment().format(timeFormat);
    process.stderr.write(chalk.gray(`${time} [${chalk.red('ERROR')}]: `) + chalk.red(text) + '\n');
  },
  warn: function(text) {
    const time = moment().format(timeFormat);
    process.stderr.write(chalk.gray(`${time} [${chalk.yellow('WARN')}]: `) + text + '\n');
  },
  crash: function(text) {
    const time = moment().format(timeFormat);
    process.stderr.write(chalk.gray(`${time} [${chalk.red('CRASH')}]: `) + text + '\n');
  },
  debug: function(text) {
      const time = moment().format(timeFormat);
      process.stderr.write(chalk.gray(`${time} [${chalk.yellow('DEBUG')}]: `) + text + '\n');
  },
  startup: function(text) {
    const time = moment().format(timeFormat);
    process.stderr.write(chalk.gray(`${time} [${chalk.cyan('STARTUP')}]: `) + text + '\n');
  },
  deploy: function(text) {
    const time = moment().format(timeFormat);
    process.stderr.write(chalk.gray(`${time} [${chalk.cyan('DEPLOY')}]: `) + text + '\n');
  },
  custom: function(prefix, color, text) {
    const time = moment().format(timeFormat);
    if (color.startsWith('#')) {
      process.stderr.write(chalk.gray(`${time} [${chalk.hex(color)(`${prefix}`)}]: `) + text + '\n');
    } else if (color in colors) {
      if (String(colors[color]).startsWith('#')) {
        process.stderr.write(chalk.gray(`${time} [${chalk.hex(colors[color])(`${prefix}`)}]: `) + text + '\n');
      } else {
        const chalkColor = colors[color];
        process.stderr.write(chalk.gray(`${time} [${chalkColor(`${prefix}`)}]: `) + text + '\n');
      }
    } else {
      logger.error(`Color ${color} is not defined!`);
    }
  },
};

module.exports = logger;