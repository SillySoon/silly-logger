> Makes your Console look pretty!

<a href="https://www.npmjs.com/package/silly-logger" target="_blank"> ![](https://img.shields.io/npm/v/silly-logger?label=Version&style=for-the-badge) ![](https://img.shields.io/npm/dt/silly-logger?style=for-the-badge)</a> <a href="https://github.com/SillySoon/silly-logger/blob/main/LICENSE" target="_blank"> ![](https://img.shields.io/npm/l/silly-logger?style=for-the-badge) </a>


---


Silly-logger is a small project of mine. It's useful to make your console look pretty with a great variety and customizability of logging.
<br>
I'm actively working on the pack so expect to update the package more often in the starting time, tho major features are already in it, some minor ones will be added frequently.

 
## Install

```consoles
$ npm install silly-logger
```

## Usage

```js
const logger = require('silly-logger');

// Logger Info
logger.info("Nice Information here");

// Logger Success
logger.success("I'm up and running!");

// Logger Error
logger.error("Oh no Some error happend here");

// Logger Error
logger.crash("Fabulous Crashes (hopefully not)");

// Logger Warn
logger.warn("Warning! Something didn't work...");

// Logger Debug
logger.debug("I like Llamas");

// Logger Startup
logger.startup("Program starting");

// Logger Deploy
logger.deploy("Deployed Command");
```
<img src="https://i.ibb.co/DRVq6L4/grafik.png" alt="Silly-Logger">

## Custom Logger Message (Hex Code)

```js
const logger = require('silly-logger');

// Custom Logger Messages
logger.custom("WONDERFUL", "#ffffff", "Some Message here");
logger.custom("LOL", "#F5A9F2", "That's so funny");
logger.custom("DARLING", "#618FB1", "A wunderful DC-Bot for everyone");

```
<img src="https://i.ibb.co/S679Jnb/grafik.png" alt="Silly-Logger">

## Custom Logger Message (Colors)
```js
const logger = require('silly-logger');

// Custom Logger Messages
logger.custom('red', 'red', 'red');
logger.custom('orange', 'orange', 'orange');
logger.custom('gold', 'gold', 'gold');
logger.custom('yellow', 'yellow', 'yellow');
logger.custom('green', 'green', 'green');
logger.custom('dark_green', 'dark_green', 'dark_green');
logger.custom('teal', 'teal', 'teal');
logger.custom('cyan', 'cyan', 'cyan');
logger.custom('light_blue', 'light_blue', 'light_blue');
logger.custom('blue', 'blue', 'blue');
logger.custom('dark_blue', 'dark_blue', 'dark_blue');
logger.custom('blurple', 'blurple', 'blurple');
logger.custom('purple', 'purple', 'purple');
logger.custom('fuchsia', 'fuchsia', 'fuchsia');
logger.custom('magenta', 'magenta', 'magenta');
logger.custom('dark_magenta', 'dark_magenta', 'dark_magenta');
```

<img src="https://i.ibb.co/q0BQNqx/grafik.png" alt="Silly-Logger">