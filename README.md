> Makes your Console look pretty!

<a href="https://www.npmjs.com/package/silly-logger" target="_blank"> ![](https://img.shields.io/npm/v/silly-logger?label=Version&style=for-the-badge&color=2cabf4&labelColor=3eb5f9) ![](https://img.shields.io/npm/dt/silly-logger?style=for-the-badge&labelColor=27f164&color=10e851)</a> <a href="https://github.com/SillySoon/silly-logger/blob/main/LICENSE" target="_blank"> ![](https://img.shields.io/npm/l/silly-logger?style=for-the-badge&color=c759e5&labelColor=ca64e7) </a> <a href="https://github.com/SillySoon" target="_blank"> ![](https://img.shields.io/github/followers/sillysoon?labelColor=d2d1d1&color=2f2f2f&logo=github&logoColor=2f2f2f&style=for-the-badge)</a>

---
Silly-logger is a small project of mine. It's useful to make your console look pretty with a great variety and customizability of logging functions.
<br>
I'm actively working on the pack so expect to update the package more often in the starting time, tho major features are already in it, some minor ones will be added frequently.

## Table of Contents

- [Install](#install)
- [Highlights](#highlights)
- **Usage**
  - [Simple Presets](#usage---logging-simple-stuff)
  - [Custom - Hex Code](#custom-logger-message-hex-code)
  - [Custom - Colors](#custom-logger-message-colors)
- **Customization**
  - [timeFormat](#timeformat)
- **[Log to files](#log-to-files)**
- [Version explenation](#version-explenation)
 

## Install

```consoles
$ npm install silly-logger
```

## Highlights

- Customizeable
- Simple to use
- Actively Maintained


## Usage - Logging Simple Stuff

```js
const logger = require('silly-logger');

// Logger presets
logger.info("Nice Information here");
logger.success("I'm up and running!");
logger.error("Oh no Some error happend here");
logger.crash("Fabulous Crashes (hopefully not)");
logger.warn("Warning! Something didn't work...");
logger.debug("I like Llamas");
logger.startup("Program starting");
logger.deploy("Deployed Command");
```
<img src="https://i.ibb.co/ykT32WZ/Presets.png" alt="Silly-Logger">

## Custom Logger Message (Hex Code)

```js
const logger = require('silly-logger');

// logger.custom('PREFIX', 'COLOR', 'TEXTCOLOR', "TEXT")

// Custom Logger Messages with hex code
logger.custom('WONDERFUL', '#ffffff', '#F5A9F2',"Some Message here");
logger.custom('LOL', '#F5A9F2', '#618FB1',"That's so funny");
logger.custom('DARLING', '#618FB1', '#ffffff',"A wunderful DC-Bot for everyone");

```
<img src="https://i.ibb.co/dWv2NpL/Custom.png" alt="Silly-Logger">

## Custom Logger Message (Colors)
```js
const logger = require('silly-logger');

// logger.custom('PREFIX', 'COLOR', 'TEXTCOLOR', "TEXT")

// Custom Logger Messages with color
logger.custom('red', 'red', 'red', "red");
logger.custom('orange', 'orange', 'orange',"orange");
logger.custom('gold', 'gold', 'gold', "gold");
logger.custom('yellow', 'yellow', 'yellow', "yellow");
logger.custom('green', 'green', 'green', "green");
logger.custom('dark_green', 'dark_green', 'dark_green', "dark_green");
logger.custom('teal', 'teal', 'teal', "teal");
logger.custom('cyan', 'cyan', 'cyan', "cyan");
logger.custom('light_blue', 'light_blue', 'light_blue', "light_blue");
logger.custom('blue', 'blue', 'blue', "blue");
logger.custom('dark_blue', 'dark_blue', 'dark_blue', "dark_blue");
logger.custom('blurple', 'blurple', 'blurple', "blurple");
logger.custom('purple', 'purple', 'purple', "purple");
logger.custom('fuchsia', 'fuchsia', 'fuchsia', "fuchsia");
logger.custom('magenta', 'magenta', 'magenta', "magenta");
logger.custom('dark_magenta', 'dark_magenta', 'dark_magenta', "dark_magenta");
```

<img src="https://i.ibb.co/JsZHY4h/Colors.png" alt="Silly-Logger">

## timeFormat

```js
const logger = require('silly-logger');

// logger.timeFormat('STRING');

//  Change the Format of the Date globally (https://momentjs.com/)
logger.timeFormat('DD-MM-YYYY');
logger.info('Testing DD-MM-YYYY');

logger.timeFormat('h-mm-ss a');
logger.info('Testing h-mm-ss a');

logger.timeFormat("MMM Do YY - h:mm:ss a");
logger.info('Testing MMM Do YY - h:mm:ss a');
```

<img src="https://i.ibb.co/ZJ7Jvbb/time-Format.png" alt="Silly-Logger">

## Log to files
Create a folder for your logs. Enable the function and set the path, <span style="color: red;">BEFORE</span> you use the logger!
```js
const logger = require('silly-logger');

// logger.enableLogFiles(true/false);
logger.enableLogFiles(true);

// logger.logFolderPath('PATH');
logger.logFolderPath('./logs');
```

## Version Explenation

**Example Version: v1.2.3**
- **1 = Project Stage**
Currently, no Plans for this Number.

- **2 = Major Update**
Major updates are Updates where the code majorly changes, so you as a consumer have to check the functionality of your program while using this package.

- **3 = Minor Update**
Minor updates just updates little stuff, so there are no necessary but nice to have. Here will be no changes for functions or else.