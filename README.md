> Makes your Console look pretty!

![](https://img.shields.io/npm/v/silly-logger?label=Version&style=for-the-badge) ![](https://img.shields.io/npm/dt/silly-logger?style=for-the-badge) ![](https://img.shields.io/npm/l/silly-logger?style=for-the-badge)


---


Silly-logger is a small project of mine. It's useful to make your console look pretty with a great variety and customizability of logging.

 
## Install

```consoles
$ npm install silly-logger
```

## Usage

```js
const logger = require('silly-logger');

// logger Info
logger.info("Nice Information here")

// logger Success
logger.success("I'm up and running!")

// Logger Error
logger.error("Oh no Some error happend here")

// Logger Error
logger.crash("Fabulous Crashes (hopefully not)")

// Logger Warn
logger.warn("Warning! Something didn't work...")

// Logger Debug
logger.debug("I like Llamas")

// Logger Startup
logger.startup("Program starting")

// Logger Deploy
logger.deploy("Deployed Command")
```
<img src="https://i.ibb.co/DRVq6L4/grafik.png" alt="Silly-Logger">

## Custom Logger Message (Hex Code)

```js
const logger = require('silly-logger');

// Custom logger Messages
logger.custom("WONDERFUL", "#ffffff", "Some Message here")
logger.custom("LOL", "#F5A9F2", "That's so funny")
logger.custom("DARLING", "#618FB1", "A wunderful DC-Bot for everyone")

```
<img src="https://i.ibb.co/S679Jnb/grafik.png" alt="Silly-Logger">
