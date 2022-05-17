const moment = require('moment')
const chalk = require('chalk')
const timeFormat = "YYYY-MM-DD HH:mm:ss:SS"

module.exports = logger = {
    info: function (text) {
      let time = moment().format(timeFormat)
      process.stdout.write(chalk.gray(`${time} [${chalk.cyan('INFO')}]: `) + text + '\n')
    },
    success: function (text) {
      let time = moment().format(timeFormat)
      process.stdout.write(chalk.gray(`${time} [${chalk.green('SUCCESS')}]: `) + text + '\n')
    },
    error: function (text) {
      let time = moment().format(timeFormat)
      process.stderr.write(chalk.gray(`${time} [${chalk.red('ERROR')}]: `) + chalk.red(text) + '\n')
    },
    warn: function (text) {
      let time = moment().format(timeFormat)
      process.stderr.write(chalk.gray(`${time} [${chalk.yellow('WARN')}]: `) + text + '\n')
    },
    crash: function (text) {
      let time = moment().format(timeFormat)
      process.stderr.write(chalk.gray(`${time} [${chalk.red('CRASH')}]: `) + text + '\n')
    },
    debug: function (text) {
        let time = moment().format(timeFormat)
        process.stderr.write(chalk.gray(`${time} [${chalk.yellow('DEBUG')}]: `) + text + '\n')
    },
    startup: function (text) {
      let time = moment().format(timeFormat)
      process.stderr.write(chalk.gray(`${time} [${chalk.cyan('STARTUP')}]: `) + text + '\n')
    },
    deploy: function (text) {
      let time = moment().format(timeFormat)
      process.stderr.write(chalk.gray(`${time} [${chalk.cyan('DEPLOY')}]: `) + text + '\n')
    },
    custom: function (prefix,color,text) {
      let time = moment().format(timeFormat)
      let chalkColor = `chalk.hex(${color})`;
      process.stderr.write(chalk.gray(`${time} [${chalkColor(`${prefix}`)}]: `) + text + '\n')
    }
}